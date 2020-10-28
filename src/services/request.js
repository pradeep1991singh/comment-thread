import axios from 'axios';

const baseURL = 'http://localhost:9000/api'

const request = () => axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default request
