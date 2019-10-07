import axios from 'axios';
import constants from '../constants.json';

let userInfo = {
  username: null,
  password: null
}

let myAuth = {
    authenticate: (username, password) => {      
      return new Promise((resolve, reject) => {
        axios.get(constants.baseAddress + '/users/:id', 
          {
              auth: {
              username: username,
              password: password
            }
          })
          .then(result => {
            userInfo = {
              username: username,
              password: password
            }
            resolve();
          })
          .catch(error => 
            {
              console.log(error);
              reject();
            }
          )
      });
    },
    getAxiosAuth: () => {
      return {
        auth: userInfo
      }
    } 
}

export default myAuth;