import * as core from '@actions/core'
import {exec} from 'child_process'

exec('npm install -g rxjs', (err, stdout) => {
  if (err) {
    core.setFailed(err.message)
  }
  core.info(stdout)
})
