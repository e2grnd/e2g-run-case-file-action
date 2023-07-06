import fs from 'fs'
import path from 'path'
import * as swc from '@swc/core'

/**
 * Transforms an es6 js file to commonjs in-place.
 * WARNING: DESTRUCTIVE! This will overwrite the file.
 * @param filePath path to the file to transform
 * @returns the same filePath
 */
export async function clobberTransformToCommonJS(filePath: string): Promise<string> {
  await writeRxjsStubs(filePath)
  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const nextFileContents = await swc
    .transform(fileContents, {
      filename: path.basename(filePath),
      module: {
        type: 'commonjs'
      }
    })
    // eslint-disable-next-line github/no-then
    .then(output => {
      return output.code
    })
  await fs.promises.writeFile(filePath, nextFileContents, 'utf-8')
  return filePath
}

async function writeRxjsStubs(filePath: string): Promise<void> {
  const cwd = path.dirname(filePath)
  const ajaxDir = path.join(cwd, 'node_modules', 'rxjs', 'ajax')
  await fs.promises.mkdir(ajaxDir, {recursive: true})
  await fs.promises.writeFile(path.join(ajaxDir, 'index.js'), 'module.exports = { ajax: () => {}}', 'utf-8')
}
