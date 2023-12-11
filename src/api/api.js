import axios from 'axios';
const localBaseURL = 'http://localhost:5000';
const prodBaseURL = 'https://smartshopabackend.onrender.com';
const api = axios.create({
  baseURL: `${prodBaseURL}/api`,
});
export default api;
