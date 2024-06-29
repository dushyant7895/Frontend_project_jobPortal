import React, { useEffect, useState } from 'react'
import { fetchJob, fetchJobByQuery } from '../api/Job';
import Header from '../components/Header';
import QueryWidget from '../components/QueryWidget';
import JobCard from './JobCard';

const HomePage = () => {

  const [jobs,setJobs]= useState([]);
  const [query, setQuery]= useState({
    title:"",
    skills:[]
  });
 
  useEffect(()=>{
  //const token= localStorage.getItem("token");
 // console.log("Token is->",token);
 handleFetchJob();
  },[]);

  useEffect(()=>{
    console.log(query);
  },[query]);

  const handleFetchJob =async()=>{
   
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
    <QueryWidget query={query} setQuery={setQuery} handleFetchJob={handleFetchJob}/>
    <h1>This is a Home Page</h1>
    {jobs.map((job, index) => (
      <JobCard job={job} key={index} />
    ))}
  </div>
  )
}

export default HomePage