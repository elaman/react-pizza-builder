import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizza-builder-d22df.firebaseio.com/'
});

export default instance;