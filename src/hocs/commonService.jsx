import axios from 'axios';

export const postData = (url, body) => {
  return axios
    .post(url, body)
    .then((res) => {
      console.log('1', res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putData = (url, body) => {
  return axios
    .put(url, body)
    .then((res) => {
      console.log('2', res);
    })
    .catch((err) => {
      console.log(err);
    });
};
