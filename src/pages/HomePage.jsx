import React, { useEffect, useState } from 'react'
import { fetchJob, fetchJobByQuery } from '../api/Job';
import Header from '../components/Header';
const HomePage = () => {

  const [jobs,setJobs]= useState([]);
  const altImage="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"

  useEffect(()=>{
  //const token= localStorage.getItem("token");
 // console.log("Token is->",token);
 handleFetchJob();
  },[]);

  const handleFetchJob =async()=>{
   const query={
    minSalary:0,
    maxSalary:999999999
   }
    const response = await fetchJobByQuery(query);
    if(response.status === 200)
      {
        setJobs(response.data.jobs);
      }
  }
  useEffect(()=>{
    console.log(jobs);
  },[jobs]);

  return (
    <div>
    <Header />
    <h1>This is a Home Page</h1>
    {jobs.map((job, index) => (
      <div key={index}>
        <div>{job.companyName}</div>
        <h4>{job.monthlySalary}</h4>
        <h4>{job.jobType}</h4>
        <img src={job.logoUrl} width={"100px"} height={"100px"} alt={altImage} />
      </div>
    ))}
  </div>
  )
}

export default HomePage