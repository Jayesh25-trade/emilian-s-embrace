import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHome } from '@/components/portfolio/home';

export const Route = createFileRoute("/")({
  head:()=>({meta:[{title:'Jimmy Developers | Web Development & Digital Studio'},{name:'description',content:'Jimmy Developers crafts high-performance websites, SaaS platforms, and scalable software systems.'},{property:'og:title',content:'Jimmy Developers | Web Development & Digital Studio'},{property:'og:description',content:'Jimmy Developers crafts high-performance websites, SaaS platforms, and scalable software systems.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
  component: PortfolioHome,
});
