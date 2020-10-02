import axios from 'axios';
import constants from '../constants.json';

let userInfo = {
  username: null,
  password: null
}

let myAuth = {
    authenticateLocal: (username, password) => {
      return new Promise((resolve, reject) => {
        if(username == "test" && password == "test") {
          resolve();
        }
        else {
          reject();
        }
      });
    },
    authenticate: (username, password) => {
      return new Promise((resolve, reject) => {
        axios.post(constants.baseAddress + '/login', {},
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