import smartBill from '@/assets/maheshwari-smart-bill.jpg.asset.json';
import parthFuel from '@/assets/parth-fuel-corporation.jpg.asset.json';
import gasAgency from '@/assets/gas-agency-hub.jpg.asset.json';
import resumeZen from '@/assets/resumezen-ai.jpg.asset.json';
import stemos from '@/assets/stemos.jpg.asset.json';
import atelier from '@/assets/atelier-22.jpg.asset.json';
import foodzz from '@/assets/jimmyy-foodzz.jpg.asset.json';
import formomatic from '@/assets/formomatic-pdf-pro.jpg.asset.json';
import dowry from '@/assets/dowry181.jpg.asset.json';

export type PortfolioProject = {
 slug:string; name:string; description:string; category:string; tags:string[];
 image:string; url:string; stack:string[]; overview:string;
};

export const projects:PortfolioProject[] = [
 {slug:'maheshwari-smart-bill',name:'Maheshwari Smart Bill',description:'Complete billing and inventory platform for modern retail with real-time invoicing and GST-ready exports.',category:'Billing SaaS',tags:['React','GST API','Tailwind'],image:smartBill.url,url:'https://maheshwari-smart-bill.vercel.app/',stack:['React','GST API','Tailwind CSS'],overview:'A complete billing and inventory platform built for modern Indian retail. It brings real-time invoicing, inventory workflows, and GST-ready exports into one fast, approachable workspace.'},
 {slug:'parth-fuel-corporation',name:'Parth Fuel Corporation',description:'Digital platform for a modern fuel and infrastructure company.',category:'Energy & Infrastructure',tags:['Next.js','Tailwind','CMS'],image:parthFuel.url,url:'https://parthfuelcorporation.in/',stack:['Next.js','Tailwind CSS','CMS'],overview:'A polished digital presence for Parth Fuel Corporation, designed to clearly communicate its energy and infrastructure services while remaining quick and easy to navigate.'},
 {slug:'gas-agency-hub',name:'Gas Agency Hub',description:'Management system built for modern LPG distribution operations.',category:'LPG Distribution SaaS',tags:['React','Node.js','Realtime DB'],image:gasAgency.url,url:'https://gas-agency-hub-2-mtyvmbvmx.vercel.app/landing',stack:['React','Node.js','Realtime Database'],overview:'An operational management system for gas agencies that brings distribution workflows, customer information, and live business activity into a unified platform.'},
 {slug:'resumezen-ai',name:'ResumeZen AI',description:'Career compass and AI-powered resume builder.',category:'AI SaaS',tags:['React','ElevenLabs','Grok AI'],image:resumeZen.url,url:'https://career-compass-ai-five-eosin.vercel.app/',stack:['React','ElevenLabs','Grok AI'],overview:'An AI-powered career companion that helps people create strong resumes and move through the job-search process with greater clarity and confidence.'},
 {slug:'stemos',name:'STEMOS',description:'Next-generation learning platform for STEM education.',category:'AI EdTech',tags:['React','Groq AI','Supabase'],image:stemos.url,url:'https://stemos-future-learn.vercel.app/',stack:['React','Groq AI','Supabase'],overview:'A next-generation learning platform that combines interactive STEM education with AI-supported experiences in a focused, modern interface.'},
 {slug:'atelier-22',name:'ATELIER 22',description:'A high-end digital fashion canvas.',category:'Luxury E-Commerce',tags:['React 19','TanStack'],image:atelier.url,url:'https://style-canvas-2s641spov-jayesh25-trades-projects.vercel.app/',stack:['React 19','TanStack'],overview:'A luxury e-commerce experience where editorial art direction meets a precise, high-performance shopping interface for a distinctive fashion brand.'},
 {slug:'jimmyy-foodzz',name:'Jimmyy Foodzz',description:'Fast and inviting food delivery web application.',category:'Food Delivery',tags:['React','Node.js'],image:foodzz.url,url:'https://jimmyy-fooddzz.vercel.app/',stack:['React','Node.js'],overview:'A fast food ordering experience built to make discovering products and moving toward an order feel immediate, visual, and frictionless.'},
 {slug:'formomatic-pdf-pro',name:'Formomatic PDF Pro',description:'PDF and document generation tool for streamlined business workflows.',category:'Document SaaS',tags:['React','Stripe'],image:formomatic.url,url:'https://formomatic-pdf-pro.vercel.app/',stack:['React','Stripe'],overview:'A focused document SaaS product that streamlines PDF generation and recurring business paperwork through a clear, efficient workflow.'},
 {slug:'dowry181',name:'Dowry181',description:'A provocative social impact platform built to start a conversation.',category:'Social Platform',tags:['React','Auth'],image:dowry.url,url:'https://dowry181.vercel.app/',stack:['React','Authentication'],overview:'A social impact platform that uses an intentionally provocative digital experience to confront dowry culture and encourage meaningful conversation.'},
];

export function getProject(slug:string){return projects.find(project=>project.slug===slug);}
