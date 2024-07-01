import ProjectItem from "./ProjectItem";
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../public/assets/projects/facebook.png';
import whatsapp from '../public/assets/projects/whats_app.png';
import instagram from '../public/assets/projects/insta_gram.png';
import twitter from '../public/assets/projects/twitte_r.png';

const Projects=()=>{
    return(
        <div id='projects' className='w-full'>
            <div className='max-w-[1248px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                    title='facebook clone'
                    backgroundImg={facebook}
                    projectUrl='/facebook'
                    />
                    <ProjectItem
                    title='whatsapp clone'
                    backgroundImg={whatsapp}
                    projectUrl='/whatsapp'
                    />
                    <ProjectItem
                    title='insta clone'
                    backgroundImg={instagram}
                    projectUrl='/instagram'
                    />
                    <ProjectItem
                    title='twitter clone'
                    backgroundImg={twitter}
                    projectUrl='/twitter'
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects;