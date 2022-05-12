import { defineStore } from 'pinia'

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'diana.nerd',
    avatar: '/avatars/avatar.jpg',
    status: 'active'
  })
})