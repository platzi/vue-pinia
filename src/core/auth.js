import useProfileStore from '@/stores/profile.js'

const login = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: 'nerd diana'
      })
    }, 2500)
  })
}

export const main = async () => {
  const profileStore = useProfileStore()
  const user = await login()
  console.log(user)
  profileStore.username = user.username
  profileStore.status = 'active'
}
