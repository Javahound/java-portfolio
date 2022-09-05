import React from "react"
import Image from "next/image"
import Link from "next/link"
import Notiflix from "notiflix"
import Router from "next/router"

const req = () => {
    Router.push('/download/mods/mods-required.zip')
  }
  const opt = () => {
    Router.push('/download/mods/mods-optional.zip')
  }
  const patch_req = () => {
    Router.push('/download/mods/mods_patch.zip')
  }
  const patch_arch = () => {
    Router.push('/download/mods/architectury-4.7.78-forge.jar')
  }
  const copy_ip = () => {
    navigator.clipboard.writeText("playmc.land-of-floof.tk:53600")
    Notiflix.Notify.success('Copied to clipboard. Paste it in the server IP field (Ctrl +V)');
  }

const MC_Server = () => {
    return (
        <>
            <div className="w-full h-screen text-center">
                <div className='max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center'>
                    <div className="mt-40 md:mt-0 lg:mt-40">
                        <div className="bg-white/10 rounded-3xl py-8">
                            <div className="block w-full md:flex items-center">
                                <div className="mt-8 mb-4 px-4 xs:px-8 max-w-[960px] md:w-[50%] lg:w-[60%]">
                                    <Image src="/banner.png" alt="A picture of my VRC Avatar" width='960' height='540' className="rounded-3xl" />
                                    <h1>How to join</h1>
                                    <p>You can join my server via this IP. Just click the button below to copy the IP to clipboard</p>
                                    <button onClick={copy_ip}>Copy to clipboard</button>
                                </div> 
                            </div>
                            <div>
                                <p className="mt-4 max-w-[75%] m-auto">I&apos;m a Web Dev, Software Engineer and (VR) Content Creator, at the moment focusing on building web experiences as well as making VR-Videos on Tiktok.<br />  </p>
                            </div>
                        </div>
                        <br />
                        <div className='pt-20 bg-white/10 rounded-3xl py-8'>
                            <p className='font-bold tracking-wider text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Let&apos;s Connect</p>
                            <p className="mt-2">Via my socials down below. Or maybe just take a look regardless. <br /> It&apos;d be much apprechiated. 😜</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MC_Server