import { useEffect, useState } from "react"
import { getEnvironmentData } from "worker_threads"

export default function TwitchStatus() { 

    const [isLive, setIsLive] = useState(false)

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
        }, 60000)
         interval

        return () => {
            // this now gets called when the component unmounts
          };

    }, [])

    

    return (
        <>
            <div className="twitch-status">
                {isLive ? (
                    
                    <div className="live">
                        <p className='font-bold tracking-normal text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7] mb-4'>I&apos;m Live on Twitch</p>
                        <iframe
                            src="https://player.twitch.tv/?channel=justjavahound&parent=localhost"
                            allowFullScreen
                            className="w-[90%] mx-auto aspect-video">
                        </iframe>
                    </div>
                ) : (
                    <div>
                        [CHANNEL NOT LIVE: Twitch Status "isLive" is false...] <br />
                        [NOT LOADING] (remove from production build)
                    </div>
                )}
            </div>
        </>
    )
}