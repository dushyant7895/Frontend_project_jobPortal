import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobCard = ({job}) => {
    const navigate = useNavigate();
    const altImage="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
    const {companyName,
        title,
        description,
        logoUrl,
        jobPosition,
        salary,
        location,
        duration,
        locationType,
        information,
        jobType,
        skills,
        _id
    } = job;
    console.log(job);
  return (
    <div>
        {title}
        <br />
        <img src={logoUrl} alt={altImage} style={{width:"90px", height:"90px"}} srcset="" />
        <br />
        {salary}
        {location}
        {locationType}
        {jobType}
        {skills.map((skill,index)=>{
            return(
                <div key={index}>{skill}</div>
            );
        })}
        <button onClick={()=>navigate(`/job/${_id}`)}>
            View Details
        </button>
        <hr />
  </div>
  )
}

export default JobCard