import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Code2, MousePointer2, PenLine, PanelsTopLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CursorLabel, FloatingControls, Footer, Header } from './chrome';
import { ProjectCard } from './project-card';
import { projects } from '@/lib/portfolio';
const snippets=["useEffect(() => {\n const el = document.querySelector('.container')\n}, [])","import { useState } from 'react'",'"use client";',"const [open, setOpen] = useState(false)",'<button>Explore</button>','onClick={handleOpen}','transition: all 0.3s ease;','interface Props {\n children: ReactNode\n}', 'export default function App()',"type Theme = 'dark' | 'light'","const theme = 'dark'",'<h1>Headline</h1>','ref={containerRef}','ScrollTrigger.create({...})'];
export function PortfolioHome(){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lenis=reduced?null:new Lenis({autoRaf:true,anchors:true,duration:1.15});lenis?.on('scroll',ScrollTrigger.update);
  const ctx=gsap.context(()=>{
   if(reduced)return;
   gsap.from('.hero-letter',{opacity:0,y:35,stagger:0.025,duration:.75,ease:'power3.out',delay:.15});
   gsap.from('.hero-creative',{opacity:0,y:30,duration:1,delay:.7});
   gsap.to('.hero-copy',{y:-100,opacity:0,scrollTrigger:{trigger:'.hero-section',start:'35% top',end:'bottom top',scrub:true}});
   gsap.utils.toArray<HTMLElement>('.story-stage').forEach(stage=>{
    gsap.from(stage.querySelectorAll('.reveal'),{opacity:0,y:80,stagger:.15,scrollTrigger:{trigger:stage,start:'top 75%',end:'top 15%',scrub:1}});
   });
   gsap.from('.logo-study',{scale:.7,rotation:-20,opacity:0,stagger:.07,scrollTrigger:{trigger:'.graphic-story',start:'top 75%',end:'top 10%',scrub:1}});
   gsap.from('.wire-column',{scaleY:0,stagger:.08,transformOrigin:'top',scrollTrigger:{trigger:'.ux-story',start:'top bottom',end:'top top',scrub:1}});
   gsap.from('.code-snippet',{opacity:0,x:(i)=>i<7?-100:100,stagger:.04,scrollTrigger:{trigger:'.code-story',start:'top 75%',end:'top 10%',scrub:1}});
   gsap.from('.contact-letter',{opacity:.15,y:30,stagger:.035,scrollTrigger:{trigger:'.contact-section',start:'top 50%',end:'top top',scrub:1}});
   ScrollTrigger.create({trigger:'.light-sections',start:'top 60px',onEnter:()=>document.querySelector('.portfolio-header')?.classList.add('light'),onLeaveBack:()=>document.querySelector('.portfolio-header')?.classList.remove('light')});
  },root);
  return()=>{ctx.revert();lenis?.destroy()};
 },[]);
 return <div ref={root} className="portfolio-home"><Header/><FloatingControls/>
  <main><section className="hero-section" id="hero-section"><h1 className="hero-copy"><span className="hero-line">{'meet Jayesh Mal,'.split('').map((c,i)=><span className="hero-letter" key={i}>{c===' '?'\u00a0':c}</span>)}</span><span className="hero-line"><em className="hero-creative">digital</em> <span>{'architect'.split('').map((c,i)=><span className="hero-letter" key={i}>{c}</span>)}</span></span></h1><Button variant="ghost" className="look-button" onClick={()=>document.getElementById('graphic-design')?.scrollIntoView({behavior:'smooth'})}><span>HAVE A LOOK</span><i className="mouse-outline"><i/></i></Button></section>
  <section className="graphic-story story-stage" id="graphic-design"><div className="story-sticky"><div className="logo-studies">{Array.from({length:8},(_,i)=><div className={`logo-study study-${i}`} key={i}>{i===4?<span className="studio-monogram">JM</span>:<svg viewBox="0 0 120 120" aria-hidden="true"><path d={['M60 10L108 38V82L60 110L12 82V38ZM12 38L60 68L108 38M60 68V110','M22 25L100 15M55 20L40 105M35 64L90 52','M25 88C10 35 98 8 98 50C98 80 34 61 31 88C32 114 96 94 99 80','M95 30C20 -5 4 65 30 90C60 121 100 80 91 53C76 18 30 40 42 69C53 89 81 63 68 53'][i%4]}/><path className="scribble" d="M13 30L75 7L26 65L90 25L26 85L102 44L50 96L111 65L64 112"/></svg>}</div>)}</div><div className="graphic-note reveal"><small>Jimmzzz Developers <span>Est. 2021</span></small><p>I turn complex ideas into<br/>seamless, high-impact<br/>digital experiences.</p></div><CursorLabel className="graphic-cursor"/></div></section>
  <section className="ux-story story-stage"><div className="story-sticky"><div className="wire-columns">{Array.from({length:8},(_,i)=><i className="wire-column" key={i}/>)}</div><div className="wire-box"/><div className="wire-input"/><div className="wire-toggle"/><div className="wire-options">◉ ○<br/>☑ □</div><h2 className="reveal selection-outline">Performance, motion<br/>and thoughtful UX.</h2><CursorLabel className="ux-cursor"/></div></section>
  <section className="building-story story-stage"><div className="story-sticky"><h2 className="reveal">I engineer<br/>what I imagine</h2><div className="design-dock reveal"><PenLine/><PanelsTopLeft/><span><Code2/></span></div></div></section>
  <section className="code-story story-stage"><div className="story-sticky code-grid"><div className="snippets">{snippets.map((s,i)=><pre className={`code-snippet snippet-${i}`} key={s}>{s}</pre>)}</div><h2 className="reveal">and build it to scale.</h2></div></section>
  <div className="light-sections"><section className="contact-section"><h2>{"Let's ".split('').map((c,i)=><span className="contact-letter" key={i}>{c}</span>)}<em>create</em><br/>{'something together.'.split('').map((c,i)=><span className="contact-letter" key={i}>{c}</span>)}</h2><Button asChild variant="outline" className="contact-button"><a href="mailto:jimmy.developers007@gmail.com">Contact</a></Button></section>
  <section className="work-section" id="selected-work-section"><CursorLabel className="work-emilian"/><CursorLabel name="Client" className="work-milena"/><CursorLabel name="Design" className="work-joschi"/><CursorLabel name="Code" className="work-lilia"/><h2>Selected Work</h2><div className="project-grid">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div></section><Footer/></div></main></div>
}
