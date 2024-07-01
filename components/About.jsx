
const About=()=>{
    return(
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>I have spent the last 2 years in this field as a learner and and i am 
                        creating some projects. I have always had a knack for technology and 
                        working with computers. In 2021 I started working with HTML & CSS to 
                        make some minor edits on a small business website. What i thought was 
                        just a few small edits turned into a love for programming.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Fascinated with how intericate programming can be I was quickly drawn 
                        to learn more. I started learning javascript and was more enthused with 
                        making websites interactive. I am now spending my time building projects 
                        with React js, Node js, Firebase, and learning new technologies.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>check out some of my latest projects.</p>
                </div>
                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt='about me' />
                </div>
            </div>
        </div>
    )
}
export default About;