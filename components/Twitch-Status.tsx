import { useEffect, useState } from "react"
import { getEnvironmentData } from "worker_threads"

export default function TwitchStatus() { 

    var [isLive, setIsLive] = useState(false)
    var streamerName = ""
    streamerName = "justjavahound"
    

    useEffect(() => {
        const getData = async () => {
            const data = await fetch('/api/checkStreamOnline')
            const json = await data.json()
            setIsLive(json.isLive)
            console.log(json)
            return json
        }

        getData()
        var interval = setInterval(() => {
            getData()
        }, 120000)
         interval

         

        return () => {
            
          };

    }, [])

    var playerLink = `https://player.twitch.tv/?channel=${streamerName}&parent=localhost:3000`

    return (
        <>
            <div className="twitch-status">
                {isLive ? (
                    
                    <div className="live">
                        <p className='font-bold mt-20 tracking-normal text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] mb-4'>I&apos;m Live on Twitch</p>
                        <iframe
                            src={playerLink}
                            allowFullScreen
                            className="w-[90%] mx-auto aspect-video">
                        </iframe>
                    </div>
                ) : (
                    <div className="text-red-500 mt-20">
                        [CHANNEL NOT LIVE: Twitch Status &quot;isLive&quot; is false...]<br />
                        [NOT LOADING VIDEO PLAYER]<br />
                        (remove from production build)
                    </div> 
                    
                )}
            </div>
        </>
    )
}