import axios from 'axios';

const User_Rest_Api_Url="http://locolhost:8080/api/user";

class UserService{
    getUser(){
      return  axios.get(User_Rest_Api_Url)
    }
}
export default new UserService();