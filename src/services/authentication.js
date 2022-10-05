import { API_URL } from 'constants/urls'
import { DEFAULT_FETCH_OPTIONS } from 'constants/fetch'

export async function fetchCurrentUser(userData) {
  const headers = {  ...DEFAULT_FETCH_OPTIONS.headers }

  // NOTE: We don't need this because we have httponly cookies
  // const accessToken = getAccessToken(userData)
  // if (accessToken) {
  //   headers['Authorization'] = `Bearer ${accessToken}`
  //   sessionStorage.setItem('access_token', accessToken)
  // }

  const response = await fetch(`${API_URL}/current_user`, {
    ...DEFAULT_FETCH_OPTIONS,
    headers,
    credentials: 'include',
    method: 'GET',
  });

  if (response.ok) {
    const json = await response.json()
    return { ...json, isAuthenticated: true }
  } else {
    throw Error('something went wrong')
  }
}

export async function fetchMagicLink({ name, phoneNumber }) {
  const response = await fetch(`${API_URL}/send_magic_link`, {
    ...DEFAULT_FETCH_OPTIONS,
    method: 'POST',
    body: JSON.stringify({ full_name: name, phone_number: phoneNumber }),
  })

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw Error('something went wrong')
  }
}

export async function fetchConfirmMagicLink(otp, token) {
  const response = await fetch(`${API_URL}/confirm_magic_link`, {
    ...DEFAULT_FETCH_OPTIONS,
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ otp, token }),
  })

  if (response.ok) {
    const json = await response.json();

    return { ...json, isAuthenticated: true }
  } else {
    throw Error('something went wrong')
  }
}

export async function fetchAccessCode({ phoneNumber }) {
  const response = await fetch(`${API_URL}/send_access_code`, {
    ...DEFAULT_FETCH_OPTIONS,
    method: 'POST',
    body: JSON.stringify({ phone_number: phoneNumber }),
  })

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    throw Error('something went wrong')
  }
}

export async function fetchLogout() {
  return fetch(`${API_URL}/logout`, {
    ...DEFAULT_FETCH_OPTIONS,
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
  })
}

const authenticationService = {
  isAuthenticated: false,
  token: null,
}

export default authenticationService;
