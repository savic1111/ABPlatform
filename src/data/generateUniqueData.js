const axios = require('axios')

let res = axios.get('https://countriesnow.space/api/v0.1/countries/states',{ headers: {
    'Content-Type': 'application/json'
}})
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log( res.data);
  })
  .catch(error => {
    console.error(error)
  })