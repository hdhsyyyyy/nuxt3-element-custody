interface IAuth {
  token: string
}

export const Auth = () => {
  const auth = useState<IAuth>('auth', () => {
    return {
      token: '',
    }
  })
  const login = async (username: string, password: string) => {
    return await useBaseFetch('/user/getUser', {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
  }
  return {
    auth,
    login,
  }
}
