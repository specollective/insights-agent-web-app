import {
  fetchCurrentUser,
  fetchMagicLink,
  fetchConfirmMagicLink,
  fetchAccessCode,
} from 'services/authentication'

beforeEach(() => {
  fetch.resetMocks();
});

describe('fetchCurrentUser', () => {
  it('calls fetch with correct parameters', async () => {
    fetch.mockResponseOnce(JSON.stringify({ token: 'token' }))

    const result = await fetchCurrentUser({})

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://localhost:8000/api/current_user',
      {
        "cache": "no-cache",
        "credentials": "include",
        "headers": {
          "Content-Type": "application/json"
        },
        "method": "GET",
        "mode": "cors"
      }
    )
  })
})

describe('fetchMagicLink', () => {
  it('calls fetch with correct parameters', async () => {
    fetch.mockResponseOnce(JSON.stringify({ token: 'token' }))

    const userData = { name: 'Example Name', phoneNumber: '+18888888' }
    const result = await fetchMagicLink(userData)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://localhost:8000/api/send_magic_link',
      {
        "cache": "no-cache",
        "headers": {
          "Content-Type": "application/json"
        },
        "method": "POST",
        "mode": "cors",
        "body": "{\"full_name\":\"Example Name\",\"phone_number\":\"+18888888\"}",
      }
    );
  })
})

describe('fetchConfirmMagicLink', () => {
  it('calls fetch with correct parameters', async () => {
    fetch.mockResponseOnce(JSON.stringify({ token: 'token' }))

    const userData = { otp: 'OTP', token: 'TOKEN' }
    const result = await fetchConfirmMagicLink(userData.otp, userData.token)

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://localhost:8000/api/confirm_magic_link',
      {
        "cache": "no-cache",
        "credentials": "include",
        "headers": {
          "Content-Type": "application/json"
        },
        "method": "POST",
        "mode": "cors",
        "body": "{\"otp\":\"OTP\",\"token\":\"TOKEN\"}",
      }
    );
  })
})

describe('fetchAccessCode', () => {
  it('calls fetch with correct parameters', async () => {
    fetch.mockResponseOnce(JSON.stringify({ token: 'token' }))

    const userData = { otp: 'OTP', token: 'TOKEN' }
    const result = await fetchAccessCode({ phoneNumber: '+1888888888' })

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://localhost:8000/api/send_access_code',
      {
        "cache": "no-cache",
        "headers": {
          "Content-Type": "application/json"
        },
        "method": "POST",
        "mode": "cors",
        "body": "{\"phone_number\":\"+1888888888\"}",
      }
    );
  })
})
