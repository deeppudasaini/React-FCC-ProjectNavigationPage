import React,{useState} from 'react'
import Project from './Project'
import ProjectData from './ProjectData';
export default function Categories(props) {
    const [projects, setProjects] = useState(ProjectData)
    return (
        <div className="btn-container">
               
            
                
<ul>
    <li><button type="button"
            className="filter-btn" onClick={()=>setProjects(ProjectData)}>All</button></li>
    <li><button type="button"
            className="filter-btn" onClick={()=>setProjects(ProjectData.filter((project)=>project.category==="Web"))}>Web</button></li>
    <li><button type="button"
            className="filter-btn" onClick={()=>setProjects(ProjectData.filter((project)=>project.category==="AI/ML"))}>AI/ML</button></li>
    <li><button type="button"
            className="filter-btn" onClick={()=>setProjects(ProjectData.filter((project)=>project.category==="Java"))}>Java</button></li>
</ul>
                    
                    <Project allProjects={projects}/>
            </div>
            
        
    )
}
