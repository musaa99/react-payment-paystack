const config = require("./config.json");

const url = config.apiService;
const privatekey = config.privatekey;


export const authHeader = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${privatekey}`,
};

export const acceptPayment = async(amount, email) => {
    var raw = JSON.stringify({
      amount: parseInt(amount),
      email: email,
    });
    var requestOptions = {
      method: "POST",
      headers: authHeader,
      body: raw,
    };

    return fetch(`${url}transaction/initialize`, requestOptions).then(
      (response) =>
        response.json().then((body) => body
        )
    );
  }
export const verifyPayment = async(reference) => {
    var requestOptions = {
      method: "GET",
      headers: authHeader
    };

    return fetch(`${url}/transaction/verify/${reference}`, requestOptions).then(
      (response) =>
        response.json().then((body) =>
        {
          console.log('bbb', body)
        }
        )
    );
  }
export const getTransactions = async() => {

    var requestOptions = {
      method: "GET",
      headers: authHeader
    };

    return fetch(`${url}transaction`, requestOptions).then(
      (response) =>
        response.json().then((body) => body
        )
    );
  }