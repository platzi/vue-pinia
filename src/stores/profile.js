import { defineStore } from 'pinia'

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: '',
    avatar: '/avatars/avatar.jpg',
    status: null
  })
})