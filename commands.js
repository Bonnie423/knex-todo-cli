import * as db from './db.js'

export async function list() {
  try {
    const todos = await db.getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

export async function deleteTask(id) {
  try {
    await db.deleteTaskById(id)
    const todos = await db.getTodos()
    console.log(`task: ${id} has been deleted`)
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

export async function addTasks(task) {
  try {
    const newtasks = { task }
    await db.addTask(newtasks)
    const todos = await db.getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

export async function update(id, task) {
  try {
    const updateTask = { task }
    await db.update(id, updateTask)
    const todos = await db.getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

export async function search(task) {
  try {
    const todos = await db.search(task)
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

export async function complete(id){
  try{
    await db.checkComplete(id)
    const todos = await db.getTodos()
    printTodos(todos)
  }catch (err) {
    logError(err)
  } finally {
    db.close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
