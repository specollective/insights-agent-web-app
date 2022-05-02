export function getAccessToken (userData) {
  if (userData?.access_token) {
    return userData.access_token
  }

  // TODO: Get httponly cookies working so we don't need to use
  // session storaged.
  return sessionStorage.getItem('access_token')
}
