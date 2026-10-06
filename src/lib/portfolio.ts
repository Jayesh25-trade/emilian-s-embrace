import job from '@/assets/Job.asset.json';
import flower from '@/assets/Blume.asset.json';
import track from '@/assets/TrackBud.asset.json';
import docs from '@/assets/EmiDocs.asset.json';
import content from './reference-content.json';
export const projects = [
 {slug:'jobtracker',name:'JobTracker',description:'Job Search Dashboard',tags:['Web Design','Development'],image:job.url},
 {slug:'blumenbuehne',name:'Blumenbühne',description:'Website Relaunch for a Local Flower Shop',tags:['Web Design','Development'],image:flower.url},
 {slug:'trackbud',name:'TrackBud',description:'Finance Tracker App',tags:['App Design','Development'],image:track.url},
 {slug:'emidocs',name:'EmiDocs',description:'Notion Clone',tags:['Development'],image:docs.url},
];
export function getContent(slug:string) { return content[slug as keyof typeof content]; }
