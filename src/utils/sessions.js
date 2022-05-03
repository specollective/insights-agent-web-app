// NOTE: This was only used for testing purposes.
// Access tokens are set using httponly cookies and are not accessible
// in JavaScript.
export function getAccessToken (userData) {
  if (userData?.access_token) {
    return userData.access_token
  }

  // TODO: Get httponly cookies working so we don't need to use
  // session storaged.
  return sessionStorage.getItem('access_token')
}
