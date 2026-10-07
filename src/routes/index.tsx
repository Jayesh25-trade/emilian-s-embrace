import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from '@/components/portfolio/home';

export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:'Jayesh Mal | Digital Architect & Full-Stack Developer'},{name:'description',content:'Jayesh Mal builds ultra-fast, visually stunning web applications and scalable digital products at Jimmzzz Developers.'},{property:'og:title',content:'Jayesh Mal | Digital Architect & Full-Stack Developer'},{property:'og:description',content:'Jayesh Mal builds ultra-fast, visually stunning web applications and scalable digital products at Jimmzzz Developers.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
  component: PortfolioHome,
});
