import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/portfolio';
export function ProjectCard({project,index}:{project:typeof projects[number];index:number}){
 return <div className="project-wrap"><span className="project-number">Project {String(index+1).padStart(2,'0')}</span><Link to="/work/$slug" params={{slug:project.slug}} className="project-card"><img src={project.image} alt={`${project.name} – ${project.description}`} loading="lazy"/><h3>{project.name}</h3><p>{project.description}</p><div className="project-bottom"><div>{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><ArrowUpRight size={16}/></div><i className="handle tl"/><i className="handle tr"/><i className="handle bl"/><i className="handle br"/></Link></div>
}
