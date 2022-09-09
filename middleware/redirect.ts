export default defineNuxtRouteMiddleware((to, from) => {
  // setting the redirect code to '301 Moved Permanently' default to Wallet page
  return navigateTo('/wallet', { redirectCode: 301 })
})
