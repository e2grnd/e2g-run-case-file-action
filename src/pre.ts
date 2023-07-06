import {spawn} from 'child_process'

spawn('npm', ['install', 'rxjs'])

// cmd.stdout.on('data', data => {
//   console.log(`stdout: ${data}`)
// })

// cmd.stderr.on('data', data => {
//   console.log(`stderr: ${data}`)
// })

// cmd.on('error', error => {
//   console.log(`error: ${error.message}`)
// })

// cmd.on('close', code => {
//   console.log(`child process exited with code ${code}`)
// })
