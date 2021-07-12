import axios from 'axios'

const AUTH_SERVICE = '/auth2/v1';
const ACCOUNT_SERVICE = '/account/v1';

export function login (body) {
  let formData = new FormData();
  formData.append('username', body.username);
  formData.append('password', body.password);
  formData.append('grant_type', body.grant_type);
  formData.append('client_secret', body.client_secret);
  formData.append('client_id', body.client_id);
  return axios.post('`${AUTH_SERVICE}/oauth/token`',formData).then(res = res.data)
}