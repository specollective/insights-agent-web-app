import { API_URL } from 'constants/urls'
import { DEFAULT_FETCH_OPTIONS } from 'constants/fetch'

const authenticationService = {
  isAuthenticated: false,
  token: null,
  async currentUser(userData, callback) {
    const response = await fetch(`${API_URL}/current_user`, {
      ...DEFAULT_FETCH_OPTIONS,
      headers: {
        ...DEFAULT_FETCH_OPTIONS.headers,
        'Authorization': `Bearer ${userData.access_token}`,
      },
      credentials: 'include',
      method: 'GET',
    });

    if (response.ok) {
      const json = await response.json()
      callback({ ...json, isAuthenticated: response.ok })
      return { ...json, isAuthenticated: response.ok }
    } else {
      throw Error('something went wrong')
    }
  },
  async register({ name, phoneNumber }) {
    const response = await fetch(`${API_URL}/send_access_code`, {
      ...DEFAULT_FETCH_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ full_name: name, phone_number: phoneNumber }),
    });

    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      throw Error('something went wrong')
    }
  },
  async authenticate(otp, token, callback) {
    const response = await fetch(`${API_URL}/check_access_code`, {
      ...DEFAULT_FETCH_OPTIONS,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ otp, token }),
    });
    const json = await response.json();
    callback({ ...json, isAuthenticated: response.ok })
  },
  async resendAccessCode(formData, callback) {
    const response = await fetch(`${API_URL}/resend_access_code`, {
      ...DEFAULT_FETCH_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ phone_number: formData.phoneNumber }),
    });
    const json = await response.json();
    callback({ ...json })
  },
  async logout(callback) {
    await fetch(`${API_URL}/logout`, {
      ...DEFAULT_FETCH_OPTIONS,
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    });
    callback()
  },
  signout(callback) {
    authenticationService.isAuthenticated = false;
  },
};

export default authenticationService;
