import { UserIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const Main=()=>{
    return(
        <div id='home' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Ahmed raza</span></h1>
                    <h1 className='py-2 text-gray-700'>A Full-Stact Web Developer (MERN)</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm full-stack web developer specializing in building (and occasionally designing) 
                        exceptional firebase experiences. Currently, I'm focused on building chatting 
                        or video calling applications while learning react-native technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Image src='/../public/assets/linkedIn.png' alt='in' height='20' width='20' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <Image src='/../public/assets/git-hub.png' alt='in' height='20' width='20' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <EnvelopeIcon className='h-5 w-5' />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <UserIcon className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;