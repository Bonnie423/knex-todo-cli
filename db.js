import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function deleteTaskById(id) {
  return db('todos').where('id', id).del()
}

export function addTask(todos) {
  const { task } = todos
  const newTask = { task }
  return db('todos').insert(newTask)
}
export function update(id, todos) {
  const { task } = todos
  const updatedTask = { task }
  return db('todos').where('id', id).update(updatedTask)
}

export function close() {
  db.destroy()
}

export function search(tasks) {
  return db('todos').select('*').where('task', 'like', `${tasks}%`)
}

export async function checkComplete(id) {
  const todos = await getTodos()

  const task = await todos.find((todo) => todo.id === Number(id))

  return db('todos')
    .where('id', id)
    .update({ task: `${task.task}(completed)`, completed: true })
}
