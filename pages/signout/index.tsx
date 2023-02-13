import axios from 'axios'
import React from 'react'
import axiosAll from '../components/other/axiosAll'

function Index  () {

  axios.post('http://localhost:3006/authentication/log-out', {
   id: 3,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  return (
    <div>Signout thanh cong</div>
  )
}

export default Index