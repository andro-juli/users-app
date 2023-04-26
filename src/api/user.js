import axios from "axios";

const BASEURL = 'https://jsonplaceholder.typicode.com/'
const instance = axios.create({
  baseURL: BASEURL,
});


export const getUsers = () => {
 return instance.get('users')
}
export const getUserImages = () => {
 return instance.get('photos')
}