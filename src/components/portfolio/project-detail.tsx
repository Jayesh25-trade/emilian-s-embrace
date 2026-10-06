import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header,Footer,FloatingControls } from './chrome';
import { ProjectCard } from './project-card';
import { getContent, projects } from '@/lib/portfolio';
export function ProjectDetail({slug}:{slug:string}){
 const [zoom,setZoom]=useState<string|null>(null);const project=projects.find(p=>p.slug===slug);const page=getContent(slug);
 if(!project||!page||!('localImages' in page))return null;
 const blocks=page.text.split('\n\n');const roleStart=blocks.indexOf('Role');const stackStart=blocks.indexOf('Stack');
 const intro=blocks[3];const roles=blocks[roleStart+1];const stack=blocks[stackStart+1]?.split('\n');
 const body=page.text.split('OVERVIEW\n\n')[1]?.split('\n\nSCREENS')[0]??'';
 const sections=body.split(/\n\n(GOAL|GMAIL SYNC)\n\n/);const sectionRows=[{title:'OVERVIEW',body:sections[0]}];
 for(let i=1;i<sections.length;i+=2)sectionRows.push({title:sections[i],body:sections[i+1]});
 const images=page.localImages;const icon=images.find(img=>img.alt.includes('icon'));const hero=images.find(img=>img.alt===project.name);const screens=images.filter(img=>img.alt.includes('screen'));
 return <div className="detail-page light-sections"><Header light/><FloatingControls/><main className="detail-main">{icon&&<img className="detail-icon" src={icon.url} alt={icon.alt}/>}<div className="detail-intro"><div><span className="eyebrow">PROJECT {String(projects.indexOf(project)+1).padStart(2,'0')}</span><h1>{project.name}</h1><p>{intro}</p></div><div className="detail-role"><small>Role</small><p>{roles}</p></div><div className="detail-stack"><small>Stack</small>{stack?.map(s=><p key={s}>{s}</p>)}</div></div>{hero&&<img className="detail-hero" src={hero.url} alt={hero.alt}/>}<div className="detail-copy">{sectionRows.map(section=><section key={section.title}><h2>{section.title}</h2>{section.body?.split('\n\n').map(p=><p key={p}>{p}</p>)}</section>)}</div><section className="screens-section"><h2>SCREENS</h2><div className={`screens-grid ${slug==='trackbud'?'phone-screens':''}`}>{screens.map(img=><Button variant="ghost" className="screen-button" key={img.url} onClick={()=>setZoom(img.url)} aria-label={`Enlarge ${img.alt}`}><img src={img.url} alt={img.alt} loading="lazy"/></Button>)}</div></section><section className="more-work"><h2>MORE WORK</h2><div className="project-grid">{projects.filter(p=>p.slug!==slug).slice(0,2).map((p,i)=><ProjectCard project={p} index={i} key={p.slug}/>)}</div></section></main><Footer/>{zoom&&<div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Project screenshot" onClick={()=>setZoom(null)}><Button variant="ghost" size="icon" aria-label="Close screenshot" onClick={()=>setZoom(null)}><X/></Button><img src={zoom} alt={`${project.name} screenshot`} onClick={e=>e.stopPropagation()}/></div>}</div>
}
