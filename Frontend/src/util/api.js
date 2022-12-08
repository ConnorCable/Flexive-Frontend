export const URI = "https://flexive.herokuapp.com"


export async function  getInvestments(jwt){

    const resp = await fetch(`/api/investments`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "GET",
    })
    const data = await resp.json()

    return data
}


export const addInvestment = (jwt) => {

    fetch(`/api/investments`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "POST",

    })
      .then((response) => {
        if (response.status === 200) console.log(response);
      })
      .then((data) => {
        console.log(data);
      });
}

export const updateInvestment = (jwt, company) => {
    fetch(`/api/investments`, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        method: "PUT",
        body: JSON.stringify({
           ...company
        }),
      })
        .then((response) => {
          if (response.status === 200) return response.json();
        })
        .then((data) => {
          console.log(data)
        });

}


export const changeFunds = (jwt, funds, user, operation) => {
  console.log(funds, user)

  
  fetch(`/api/users/account/${user}`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "content-type": "application/json-patch+json",
    },
    method: "PATCH",
    body: JSON.stringify({
      "wallet" : funds.toString(),
      "operation": operation.toString()
    }),
  })
    .then((response) => {
      if (response.status === 200) return response.json();
    })
    .then((data) => {
      console.log(data)
    });

}



export const changeFundstoInvestment = (jwt , funds, id, operation) => {
  fetch(`/api/investments`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "content-type": "application/json-patch+json",
    },
    method: "PATCH",
    body: JSON.stringify({
      "investment" : funds.toString(),
      "id" : id.toString(),
      "operation" : operation.toString()
    }),
  })
    .then((response) => {
      if (response.status === 200) return response.json();
    })
    .then((data) => {
      console.log(data)
    });
}

export async function  getWallet(jwt, id){

  const resp = await fetch(`/api/users/getWallet/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    method: "GET",
  })
  const data = await resp.json()

  return data
}

export const deleteInvestment = (jwt, id) => {
  console.log(id)
  fetch(`/api/investments`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "content-type": "application/json",
    },
    method: "DELETE",
    body: JSON.stringify({
      "id" : id.toString(),
    }),
  })
    .then((response) => {
      if (response.status === 200) return response.json();
    })
    .then((data) => {
      console.log(data)
    });
}

export const signUp = (user) => {
 // console.log(user)
  fetch(`/api/users/register`, {
    headers: {
      "content-type": "application/json",
      "cors": "Access-Control-Allow-Origin"
    },
    method: "POST",
    body: JSON.stringify({
      ...user
   }),
  })
    .then((response) => {
      if (response.status === 200) return response
    })
    .then((data) => {
      console.log(data)
    });
}
