import React from "react"
import Image from "next/image"
import { FaGithub, FaGrinWink, FaMailBulk, FaTelegram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from "next/link"
import TwitchStatus from "./Twitch-Status"
import ProjectContainer from "./ProjectContainer"
import Heading from "./Heading"
import CardTitle from "./Title"
import ProjectWrapper from "./ProjectWrapper"
import CardTitleNoGradient from "./TitleNoGradient"

const Main = () => {
    var date1 = new Date("2000-8-14")
    var dateNow = new Date()

    var timeDif = dateNow.getTime() - date1.getTime()
    var difDays = Math.floor(timeDif / (1000 * 60 * 60 * 24))
    var age = Math.floor(difDays / 365)

    return (
        <>
            <div className="w-full h-screen text-center">
                <div className='max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center'>
                    <div className="mt-40 md:mt-0 lg:mt-40">
                        <p className="uppercase text-sm tracking-widest text-white">Let&apos;s do something great today.</p>
                        <h1 className="mt-2">Hi, I&apos;m <span className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] gradient-move">Javahound</span><br />
                                             A Full Stack Web Dev</h1>
                        <div className="block w-full md:flex items-center">
                            <div className="mt-8 mb-4 px-4 xs:px-8 max-w-[960px] md:w-[75%] md:mx-auto lg:w-[60%]">
                                <Image src="/avatarPicFullB.png" alt="A picture of my VRC Avatar" width='650' height='365' className="rounded-3xl" />

                            </div>
                            
                        </div>
                        <div>
                            <h3>This is still heavily WIP. More content and polishing will be done later 😅</h3>
                        </div>
                        <div>
                            <p className="mt-4 max-w-[75%] m-auto">I&apos;m a Web Dev, Software Engineer and (VR) Content Creator, at the moment focusing on building web experiences as well as making VR-Videos on Tiktok.<br />  </p>
                        </div>
                        <br />
                        <TwitchStatus />
                        <div className='pt-20'>
                            <p className='font-bold tracking-wider text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Let&apos;s Connect</p>
                            <p className="mt-2">Via my socials down below. Or maybe just take a look regardless. <br /> It&apos;d be much apprechiated. 😜</p>
                            <div className='flex items-center justify-between mt-6 mx-auto w-[75%] sm:w-[55%] md:w-[50%] lg:w-[40%] xl:w-[35%] sm:px-12 '>
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
                        <div>
                            <p id="about" className='font-bold tracking-wider text-center text-transparent text-4xl mt-20 bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Who I am</p>
                            <div className="md:px-4 max-w-[960px] sm:w-full md:w-[50%] lg:w-[40%] mx-auto">
                                <p className="text-center lg:px-2 mt-4">Me? I&apos;m a gay doggo on the interwebs :3 <br />
                                I guess I&apos;m a Part time Femboy<br />
                                Demi / Gay | {age} | <span className="font-bold">They</span> / <span className="font-bold">Them</span> | Single <br />
                                Java, Web, C#, TypeScript Dev</p>
                            </div>
                            <p className='font-bold tracking-wider text-center text-transparent text-4xl mt-20 bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>What I do</p>
                            <p className="mt-4">At the moment I&apos;m working for a small company, developing / expanding a custom software solution for Customer Relation Management (CRM), as well as a suite of tools for energy service providers.
                            <br />
                            <br />
                            Besides that I&apos;m also creating small tools and websites for myself. I plan on doing bigger projects in the future that are actually useful. Looking past the software / web development sector I also create videos on <Link href="https://www.tiktok.com/@javahound" passHref><a target="_blank" className="text-blue-300">my Tiktok</a></Link> profile. There also are plans to &quot;revive&quot; my YouTube channel as well.</p>
                        </div>
                        <div className="mt-20 flex flex-row flex-wrap justify-center items-center">
                            <div className="projectWrapper w-full mb-4">
                                <Heading>My Latest Projects</Heading>
                            </div>
                            <ProjectWrapper>
                                <ProjectContainer refLink="/projects" imgSrc="/timestampGen.png" imgAlt="">
                                        <CardTitleNoGradient>Discord Timestamp Gen</CardTitleNoGradient>
                                        <p>Tired of miscommunication about events in Discord Chats? Try it with one simple Solution: <b>Dynamic Timestamps</b></p>
                                </ProjectContainer>
                                <ProjectContainer refLink="/projects/BeeFyne-Bot" imgSrc="/avatarPicFullB.png" imgAlt="">
                                    <CardTitleNoGradient>🐝Fyne - Discord Bot</CardTitleNoGradient>
                                    <p>This bot is still in <b>Active development</b>. It will do your general organizing and reaction role stuff for now.</p>
                                </ProjectContainer>
                                <ProjectContainer refLink="/projects" imgSrc="/avatarPicFullB.png" imgAlt="">
                                        <CardTitleNoGradient>Project XYZ</CardTitleNoGradient>
                                </ProjectContainer>
                                <ProjectContainer refLink="/projects" imgSrc="/avatarPicFull.png" imgAlt="">
                                    <CardTitle>All Projects</CardTitle>
                                </ProjectContainer>
                            </ProjectWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
