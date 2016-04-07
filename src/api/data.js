import axios from 'axios';

export function getUsers(id) {
  if (id) {
    return axios.get('http://localhost:3000/users/?id=' + id);
  } else {
    return axios.get('http://localhost:3000/users');
  }
}

export function getWidgets() {
  return axios.get('http://localhost:3000/widgets');
}

export default {
  getUsers,
  getWidgets
}