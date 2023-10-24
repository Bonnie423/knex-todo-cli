#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
     await commands.deleteTask(userInputs[3])
     break
  case 'add':
   
     await commands.addTasks(userInputs[3])
     break
  case 'update':
     await commands.update(userInputs[3], userInputs[4])
     break
  case 'search':
     await commands.search(userInputs[3])
     break
  case 'complete':
    await commands.complete(userInputs[3])
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
