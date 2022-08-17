import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaMailBulk, FaTelegram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = React.useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-[100px] shadow-xl bg-[#36353d] z-[100]'>
            <div className='flex justify-between lg:justify-center items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'><Image src="/logo.png" alt="/" width='75' height='75' className='rounded-full cursor-pointer' /></Link><h2 className='cursor-pointer'><Link href='/'><span className="font-bold text-center -ml-8 md:ml-6  text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]">Javahound</span></Link></h2>
                
                <div>
                    <ul className='hidden md:flex mt-2 pr-4'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={toggleNav} className='md:hidden hover:cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-0' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[85%] sm:w-[65%] md:w-[45%] h-screen bg-[#383742] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/logo.png" alt="/" width='75' height='75' className='rounded-full'></Image>
                            <h2><span className="invisible xs:visible font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]">Javahound</span></h2>
                            <div onClick={toggleNav} className='rounded-full shadow-lg shadow-white-900 p-3 cursor-pointer bg-white/10'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-white-400 my-4'>
                            <p className='w-[100%] py-4 text-center'>Let&apos;s do something great today.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='flex flex-col justify-between uppercase'>
                        <Link href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/projects'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={toggleNav} className='py-4 text-sm'>Contact</li>
                        </Link>
                        </ul>
                        <div className='pt-40'>
                            <p  className='font-bold tracking-widest text-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Let&apos;s Connect</p>
                            <div className='flex items-center justify-between mt-8 w-[100%] sm:w-[100%] md:w-[60%] lg:w-[25%] sm:pl-12 sm:pr-12'>
                            <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                    <Link href="https://github.com/javahound" passHref><a target="_blank"><FaGithub /></a></Link>
                                </div>
                                <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                    <Link href="https://t.me/javahound" passHref><a target="_blank"><FaTelegram /></a></Link>
                                </div>
                                <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                    <Link href="https://www.youtube.com/channel/UCSVnpu3ySkQsOQPb50qrQyg" passHref><a target="_blank"><FaYoutube /></a></Link>
                                </div>
                                <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                    <Link href="https://twitter.com/justjavahound" passHref><a target="_blank"><FaTwitter /></a></Link>
                                </div>
                                <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                    <Link href="https://www.tiktok.com/@javahound" passHref><a target="_blank"><FaTiktok /></a></Link>
                                </div>
                                <div className='rounded-full bg-white/10 p-3 cursor-pointer hover:scale-110 ease-in duration-150'>
                                    <Link href="https://www.twitch.tv/JustJavahound" passHref><a target="_blank"><FaTwitch /></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar