export default defineNuxtRouteMiddleware(() => {
  const auth = useState('auth')
  if (!auth.value) {
    return navigateTo('/login')
  }
})
