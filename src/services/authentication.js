const BASE_URL = 'http://localhost:8000'

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const DEFAULT_OPTIONS = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
}

const authenticationService = {
  isAuthenticated: false,
  token: null,
  async currentUser(callback) {
    const response = await fetch(`${BASE_URL}/api/current_user`, {
      ...DEFAULT_OPTIONS,
      credentials: 'include',
      method: 'GET',
    });

    if (response.ok) {
      const json = await response.json()
      callback({ ...json, isAuthenticated: response.ok })
      return { ...json, isAuthenticated: response.ok }
    } else {
      throw 'something went wrong'
    }
  },
  async register({ name, phoneNumber }) {
    const response = await fetch(`${BASE_URL}/api/send_access_code`, {
      ...DEFAULT_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ name, phone_number: phoneNumber }),
    });

    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      throw 'something went wrong'
    }
  },
  async authenticate(otp, token, callback) {
    const response = await fetch(`${BASE_URL}/api/check_access_code`, {
      ...DEFAULT_OPTIONS,
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({ otp, token }),
    });
    const json = await response.json();
    callback({ ...json, isAuthenticated: response.ok })
  },
  async resendAccessCode(formData, callback) {
    const response = await fetch(`${BASE_URL}/api/resend_access_code`, {
      ...DEFAULT_OPTIONS,
      method: 'POST',
      body: JSON.stringify({ phone_number: formData.phoneNumber }),
    });
    const json = await response.json();
    callback({ ...json })
  },
  async logout(callback) {
    const response = await fetch(`${BASE_URL}/api/logout`, {
      ...DEFAULT_OPTIONS,
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
