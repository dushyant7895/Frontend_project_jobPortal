import React,{useState} from 'react'
import skills from '../data/skills';

const QueryWidget = ({query, setQuery, handleFetchJob}) => { 
  const handleSkillChange =(skill)=>{
    if(skill==="placeholder"){
      return;
    }
    if(!query.skills.includes(skill)){
        setQuery({...query,skills:[...query.skills, skill]});
    }
  }
  const handleClearFilter =()=>{
    setQuery({
      title:"",
      skills:[]
    });
  }  

  return (
    <div>
        <input type="text"
        placeholder='Search Jobs' 
        value={query.title} 
        onChange={(e)=>setQuery({...query, title:e.target.value})} 
        />

        <select
          onChange={(e)=>handleSkillChange(e.target.value)}
        >
          <option value="placeholder">Select Skill</option>
            {skills.map((skill, index)=>(
                <option key={index} value={skill}>{skill}</option>
            ))}
        </select>
        <button onClick={handleFetchJob}>
          Apply Filtesr
        </button>
        <button onClick={handleClearFilter}>
          Clear
        </button>
    </div>
  )
}

export default QueryWidget