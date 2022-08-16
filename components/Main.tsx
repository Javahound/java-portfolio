import React from "react"
import Image from "next/image"

const Main = () => {
    var date1 = new Date("2000-8-14")
    var dateNow = new Date()

    var timeDif = dateNow.getTime() - date1.getTime()
    var difDays = Math.floor(timeDif / (1000 * 60 * 60 * 24))
    var age = Math.floor(difDays / 365)

    return (
        <>
            <div className="w-full h-screen text-center">
                <div className='max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                    <div>
                        <p className="uppercase text-sm tracking-widest text-white">Let&apos;s do something great today.</p>
                        <h1 className="mt-2">Hi, I&apos;m <span className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] gradient-move">Javahound</span><br />
                                             A Full Stack Web Dev</h1>
                        <div className="mt-8 mb-6 px-12 max-w-[960px]">
                        <Image src="/avatarPicFull.png" alt="A picture of my VRC Avatar" width='960' height='540' />
                        </div>
                        <p className="mt-4 max-w-[75%] m-auto">Hi. I&apos;m a {age} old Web Dev and (VR) Content Creator <br /> 
                                                               </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main