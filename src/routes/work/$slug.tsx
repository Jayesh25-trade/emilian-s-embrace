import { createFileRoute,notFound } from '@tanstack/react-router';
import { ProjectDetail } from '@/components/portfolio/project-detail';
import { projects } from '@/lib/portfolio';
export const Route=createFileRoute('/work/$slug')({
 loader:({params})=>{const project=projects.find(p=>p.slug===params.slug);if(!project)throw notFound();return project;},
 head:({loaderData})=>({meta:[{title:`${loaderData?.name??'Project'} | Jayesh Mal`},{name:'description',content:loaderData?.description??'Selected project by Jayesh Mal.'},{property:'og:title',content:`${loaderData?.name??'Project'} | Jayesh Mal`},{property:'og:description',content:loaderData?.description??'Selected project by Jayesh Mal.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:()=>{const {slug}=Route.useParams();return <ProjectDetail key={slug} slug={slug}/>;}
});
