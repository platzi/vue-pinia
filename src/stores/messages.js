import { defineStore } from 'pinia'

export default defineStore('messages', {
  state: () => ({
    messages: [
      { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString() },
      { id: 2, author: 2, message: 'Holaaa!!!', timestamp: new Date().toLocaleTimeString() },
      { id: 3, author: 3, message: 'Hola a todo el mundo 😊', timestamp: new Date().toLocaleTimeString() },
      { id: 4, author: 3, message: '¿Cómo están?', timestamp: new Date().toLocaleTimeString() },
      { id: 5, author: 1, message: 'Todo muy bien :D', timestamp: new Date().toLocaleTimeString() },
      { id: 6, author: 2, message: 'Si, todo bien.', timestamp: new Date().toLocaleTimeString() },
      { id: 7, author: 1, message: 'Oigan, les escribo para contarles algo... 😌', timestamp: new Date().toLocaleTimeString() },
      { id: 8, author: 3, message: 'A vers 👀', timestamp: new Date().toLocaleTimeString() },
      { id: 9, author: 2, message: 'Ahhhh!!', timestamp: new Date().toLocaleTimeString() },
      { id: 10, author: 2, message: '¡Cuenta ese chismesito yaaaa!', timestamp: new Date().toLocaleTimeString() },
      { id: 11, author: 1, message: 'Pues, ¡acabamos de lanzar los nuevos cursos de Vue.js!', timestamp: new Date().toLocaleTimeString() },
    ]
  })
})