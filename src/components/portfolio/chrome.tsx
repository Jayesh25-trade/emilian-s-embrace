import { Link } from '@tanstack/react-router';
import { ArrowUp, Instagram, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.asset.json';
export function Header({light=false}:{light?:boolean}) {
 return <header className={`portfolio-header ${light?'light':''}`}><Link to="/" hash="hero-section" aria-label="Emilian home"><img src={logo.url} alt="Emilian" /></Link><div className="nav-rule"/><nav><Link to="/" hash="selected-work-section">Work</Link><Link to="/resume">Resume</Link></nav></header>;
}
export function Footer(){return <footer className="portfolio-footer"><div/><a href="https://www.linkedin.com/in/emilianmisera/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={21}/></a><a href="https://www.instagram.com/emilian.mi/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={21}/></a></footer>}
export function CursorLabel({name='Emilian',className=''}:{name?:string;className?:string}){return <span className={`cursor-label ${className}`}><svg viewBox="0 0 20 25" aria-hidden="true"><path d="M1 1L18 12L9 14L5 23Z"/></svg><span>{name}</span></span>}
export function FloatingControls(){
 const [visible,setVisible]=useState(false);const cursor=useRef<HTMLDivElement>(null);
 useEffect(()=>{const scroll=()=>setVisible(window.scrollY>300);const move=(e:MouseEvent)=>{cursor.current?.style.setProperty('transform',`translate3d(${e.clientX}px,${e.clientY}px,0)`);cursor.current?.classList.add('visible')};window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('mousemove',move);return()=>{window.removeEventListener('scroll',scroll);window.removeEventListener('mousemove',move)}},[]);
 return <><a className="award-badge" href="https://www.awwwards.com/sites/emilian-creative-developer" target="_blank" rel="noreferrer" aria-label="Awwwards nomination"><b>W.</b><span>Nominee</span></a><div className="live-cursor" ref={cursor}><CursorLabel name="You" className="you"/></div>{visible&&<Button variant="ghost" size="icon" className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp/></Button>}</>;
}
