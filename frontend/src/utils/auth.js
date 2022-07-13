export const baseUrl = 'https://auth.nomoreparties.co';

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  }
  else {
    return res.json()
        .then(data => {
          throw new Error(data.error || data.message);
        });
  }
}

export function register(password, email) {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({password, email})
  })
      .then(res => checkResponse(res))
}

export function authorize(password, email) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {"Content-Type": "application/json" },
    body: JSON.stringify({password, email})
  })
      .then(res => checkResponse(res))
}

export function getContent(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
      .then(res => checkResponse(res))
}