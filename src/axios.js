import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizza-builder-kg.firebaseio.com/'
});

export default instance;