import { useEffect, useState } from "react"
import { getEnvironmentData } from "worker_threads"
import styles from '../styles/TwitchPlayer.module.css'

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

    var playerLink = `https://player.twitch.tv/?channel=${streamerName}&parent=localhost`

    return (
        <>
            <div className="twitch-status">
                {isLive ? (
                    
                    <div className="live blurBehindText" style={{ padding: `1rem 2rem 2rem 2rem` }}>
                        <p className='gradientText'><b>
                        I&apos;m Live on Twitch</b></p>
                        <iframe
                            src={playerLink}
                            allowFullScreen
                            className={styles.videoAspect}>
                        </iframe>
                    </div>
                ) : (<div></div>)}
            </div>
        </>
    )
}