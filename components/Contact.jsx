import { UserIcon, EnvelopeIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import axios from 'axios';

const Contact=()=>{
    const [enteredName, setEnteredName]=useState('');
    const [enteredNumber, setEnteredNumber]=useState('');
    const [enteredEmail, setEnteredEmail]=useState('');
    const [enteredSubject, setEnteredSubject]=useState('');
    const [enteredMessage, setEnteredMessage]=useState('');
    const submitHandler=(event)=>{
        event.preventDefault();
        const data={
            name: enteredName,
            number: enteredNumber,
            email: enteredEmail,
            subject: enteredSubject,
            message: enteredMessage
        }
        axios.post('http://localhost:9000/', data)
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
        setEnteredEmail('');
        setEnteredMessage('');
        setEnteredName('');
        setEnteredNumber('');
        setEnteredSubject('');
    }
    const nameHandler=(event)=>{
        setEnteredName(event.target.value);
    }
    const numberHandler=(event)=>{
        setEnteredNumber(event.target.value);
    }
    const emailHandler=(event)=>{
        setEnteredEmail(event.target.value);
    }
    const subjectHandler=(event)=>{
        setEnteredSubject(event.target.value);
    }
    const messageHandler=(event)=>{
        setEnteredMessage(event.target.value);
    }
    return(
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Contact
                </p>
                <h2 className='py-4'>get in touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/*left side. */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://wallup.net/wp-content/uploads/2018/03/17/540089-programmers-AutoHotkey-code-programming-laptop-ThinkPad.jpg" alt='/' />
                                <div>
                                    <h2 className='py-2'>Name here</h2>
                                    <p>Full-Stack Developer</p>
                                    <p className='py-4'>I am available for freelance or full-time position. Contact me and let's talk.</p>
                                </div>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
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
                    {/*right side... */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form onSubmit={submitHandler}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={nameHandler} value={enteredName} type='text' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={numberHandler} value={enteredNumber} type='text' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={emailHandler} value={enteredEmail} type='email' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={subjectHandler} value={enteredSubject} type='text' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' onChange={messageHandler} value={enteredMessage}></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <ArrowUpTrayIcon className='h-5 w-5' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Contact;