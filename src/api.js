const baseUrl = "http://localhost:3001"

export async function fetchUsers() {
  const response = await fetch(baseUrl + "/users")
  const data = await response.json();
  return data;
}

export async function login(email, senha) {
  const response = await fetch(baseUrl + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  })
  const data = await response.json();

  return data;
}

export async function register(nome, email, senha) {
  const response = await fetch(baseUrl + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, email, senha })
  })

  return response;
}

export async function deleteUser(id) {
  const response = await fetch(baseUrl + "/users/" + id, {
    method: "DELETE"
  })

  return response;
}