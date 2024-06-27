import React,{useState} from 'react'
import skills from '../data/skills';

const QueryWidget = () => {   
  const [title,setTitle] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  return (
    <div>
        <input type="text"
        placeholder='Search Jobs' 
        value={title} 
        onChange={(e)=>setTitle(e.target.value)} 
        />

        <select>
            {skills.map((skill, index)=>(
                <option key={index} value={skill}>{skill}</option>
            ))}
        </select>
    </div>
  )
}

export default QueryWidget