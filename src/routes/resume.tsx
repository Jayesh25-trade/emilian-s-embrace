import { createFileRoute } from '@tanstack/react-router';
import { Resume } from '@/components/portfolio/resume';
export const Route=createFileRoute('/resume')({head:()=>({meta:[{title:'Resume | Emilian Misera'},{name:'description',content:'Experience, education, and skills of creative developer Emilian Misera.'},{property:'og:title',content:'Resume | Emilian Misera'},{property:'og:description',content:'Experience, education, and skills of creative developer Emilian Misera.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Resume});
