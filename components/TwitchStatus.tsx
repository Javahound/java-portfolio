import { useEffect, useState } from "react"
import { getEnvironmentData } from "worker_threads"
import styles from '../styles/TwitchPlayer.module.css'

export default function TwitchStatus() { 

    let [isLive, setIsLive] = useState(false)
    let streamerName = ""
    streamerName = "justjavahound"
    
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('/api/checkStreamOnline')
            const json = await data.json()
            setIsLive(json.isLive)
            return json
        }

        getData()
        let interval = setInterval(() => {
            getData()
        }, 6000000)         

        return () => {
            
          };

    }, [])

    let playerLink = `https://player.twitch.tv/?channel=${streamerName}&parent=localhost`

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