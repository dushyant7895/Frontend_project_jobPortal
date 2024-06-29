import axios from 'axios';

const BACKEND_URL= "http://localhost:4000"; // Adjusted URL for clarity

const fetchJob =async()=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/job`);
        return response;
    } catch (error) {
        return error.response.data;
    }
}
const fetchJobByQuery = async(query)=>{
    const {title, skills}=query;
    try {
        const response  = await axios.get(`${BACKEND_URL}/job`,{
            params:{
               title,
               skills
            }
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export {fetchJob,fetchJobByQuery};