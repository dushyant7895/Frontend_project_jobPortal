import axios from 'axios';

const BACKEND_URL= "http://localhost:4000"; // Adjusted URL for clarity



const Login = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/user/login`, {
            email,
            password,
          });
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const Register = async (name, email, mobile, password) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/user/register`, { name, email, mobile, password });
        console.log(response.data);
        return response;
    } catch (error) {
        return error.response.data;
    }
};

export { Login, Register };