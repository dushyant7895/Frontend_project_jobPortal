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
const fetchJobByQuery = async(
    title,
    minSalary=0, 
    maxSalary=9999999,
    jobType, location,skills)=>{
    try {
        const response  = await axios.get(`${BACKEND_URL}/job`,{
            params:{
                minSalary,
                maxSalary,
            }
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
}

export {fetchJob,fetchJobByQuery};