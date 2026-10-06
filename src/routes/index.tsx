import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from '@/components/portfolio/home';

export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:'Emilian | Creative Developer'},{name:'description',content:'Portfolio of a creative developer — design meets code.'},{property:'og:title',content:'Emilian | Creative Developer'},{property:'og:description',content:'Portfolio of a creative developer — design meets code.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
  component: PortfolioHome,
});
