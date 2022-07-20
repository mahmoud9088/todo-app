import React, { useState } from 'react'
import {
  addTodo,
  removeTodo,
  clearAll,
  completeTodo,
  filterTodo,
} from '../actions/TodoActions'
import { useDispatch, useSelector } from 'react-redux'
import './Todos.css'

const Todos = () => {
  let [task, setTask] = useState('')
  let [counter, setCounter] = useState(0)
  let [activeFilter, setActiveFilter] = useState([1, 0, 0])
  const dispatch = useDispatch()
  const { todos, filter } = useSelector((state) => state)
  console.log(useSelector((state) => state))
  const tasks = () => {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.isCompleted === true)
    } else if (filter === 'active') {
      return todos.filter((todo) => todo.isCompleted === false)
    } else {
      return todos
    }
  }
  console.log(tasks())
  return (
    <section className="todos">
      <h1 className="todo-title">TODO APP</h1>
      <article className="todos-container">
        <div className="todos-form">
          <input
            className="todo-input"
            type="text"
            value={task}
            placeholder="what do you wanna do?..."
            onChange={(e) => setTask(e.target.value)}></input>
          <button
            className="add-btn"
            onClick={() => {
              if (task) {
                dispatch(addTodo(Math.random(), task, false))
                setCounter(counter + 1)
                setTask('')
              }
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="rgba(175, 47, 47, 0.2)"
              className="add-btn-svg"
              viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>

        <div className="todos-list">
          {tasks().map((item) => {
            return (
              <div
                className="todo-item"
                key={item.id}
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p
                  className={item.isCompleted === true ? 'completed' : ''}
                  onClick={(e) => {
                    e.target.classList.toggle('completed')
                    dispatch(completeTodo(item.id))
                    console.log(item.id)
                  }}>
                  {item.text}
                </p>
                <p
                  className="remove-todo"
                  onClick={() => dispatch(removeTodo(item.id))}>
                  x
                </p>
              </div>
            )
          })}
        </div>
        <div className="filter-btns">
          <button
            className={`${activeFilter[0] ? 'active-filter' : ''}`}
            onClick={() => {
              dispatch(filterTodo('all'))
              setActiveFilter([1, 0, 0])
            }}>
            all
          </button>
          <button
            className={`${activeFilter[1] ? 'active-filter' : ''}`}
            onClick={() => {
              dispatch(filterTodo('completed'))
              setActiveFilter([0, 1, 0])
            }}>
            completed
          </button>
          <button
            className={`${activeFilter[2] ? 'active-filter' : ''}`}
            onClick={() => {
              dispatch(filterTodo('active'))
              setActiveFilter([0, 0, 1])
            }}>
            active
          </button>
        </div>
        <button className="clear-btn" onClick={() => dispatch(clearAll())}>
          clear all
        </button>
      </article>
    </section>
  )
}

export default Todos
