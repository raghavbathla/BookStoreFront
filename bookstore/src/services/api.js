import axios from 'axios';


class UserService {
    baseUrl= "http://localhost:8084/book";

getAllBooks() {
  return axios.get(`${this.baseUrl}/get`);
}

getAllCart() {
    return axios.get(`${this.baseUrl}/allcartvalues`)
}

addtocart(data){
    return axios.post(`${this.baseUrl}/addInCart`,data)
}

remove(id){
    return axios.get(`${this.baseUrl}/remove/${id}`)
}
}
export default new UserService();