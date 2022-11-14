import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import getTimeSinceDate from '../utils/DateHandler'
import TwitchStatus from '../components/TwitchStatus'
import Image from 'next/image'

function Home() {
    const [windowHeight, setWindowHeight] = useState(1080)
    const [picRight, setPicRight] = useState(windowHeight * 0.65)
    const [scrollY, setScrollY] = useState(-1)
    const [backgroundBlur, setBackgroundBlur] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const [transitionTime, setTransitionTime] = useState(0)
    const imgWidth: number = Math.round(windowHeight * 1.77777778)

    const handleScroll = () => {
        setTransitionTime(500)
        setScrollY(window.scrollY)
    }

    const handleResize = async () => {
        setWindowHeight(window.innerHeight)
        let right = windowHeight * 0.7
        setPicRight(right)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    })

    useEffect(() => {
        let backgroundBlurVar = (scrollY - 100) / 17
        let opacityVar = 120 - backgroundBlurVar * 2.5
        setOpacity(opacityVar)
        if (backgroundBlurVar < 30 && opacityVar < 50) {
            opacityVar = 50
            setOpacity(opacityVar)
        } else if (backgroundBlurVar > 30) {
            opacityVar = 0
            setOpacity(opacityVar)
        }
        if (scrollY > 250) {
            backgroundBlurVar >= 10 * 4
                ? setBackgroundBlur(10)
                : setBackgroundBlur(backgroundBlurVar / 4)
        } else {
            setBackgroundBlur(0)
        }
    }, [scrollY])

    useEffect(() => {
        setWindowHeight(window.innerHeight)
        setPicRight(windowHeight * 0.7)
    }, [windowHeight])

    useEffect(() => {
        if (scrollY == -1) {
            window.scrollTo({
                top: 250,
                left: 0,
                behavior: 'smooth',
            })
        }
    })

    const timeSinceBirth = getTimeSinceDate('2000-08-14', 'y', false)

    return (
        <div className={styles.container}>
            <Head>
                <title>Javahound - Dev, creator, fluffy</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="Javahound"
                    content="javahound.site"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <header className="heightFull">
                    <Image
                        className="background"
                        style={{
                            filter: `blur(${backgroundBlur}px)`,
                            opacity: `${opacity}%`,
                            right: `-${picRight}px`,
                            top: `0px`,
                            transition: `${transitionTime}ms ease-in-out`,
                        }}
                        src={'/avtrPicFull.png'}
                        quality={90}
                        alt={''}
                        height={`${windowHeight}`}
                        width={`${imgWidth}`}
                    />
                </header>
                
                <div
                    style={{ margin: `-260px 0 2rem 0` }}
                    className="blurBehindText"
                >
                    <h2 style={{ margin: `26px 0 5px 0` }}>Javahound</h2>
                    <h3 className="spacingWide">
                        Full Stack Dev, creator,
                        Furry, VR Enthusiast
                    </h3>
                    <br />
                    <p>
                        <b>About Me:</b>
                    </p>
                    <p>
                        I am a gay doggo on the interwebs :3 <br />
                        Also a part time Femboy <br />
                        Demi / Gay | {timeSinceBirth} | <b>They</b> /{' '}
                        <b>Them</b> | Taken <br />
                        Java, Web, C#, Typescript Dev
                    </p>
                    <br />
                    <p>
                        <b>What I do:</b>
                    </p>
                    <p>
                        Working a job in Software. Creating tools for small to
                        large businesses. <br />
                        In my freetime I create small tools and Websites / Web-Apps. <br />
                        Besides that I  create some TikTok videos when I
                        feel like it. 
                    </p>
                    <br />
                </div>
                <div style={{ width: `100%`}}>
                    <TwitchStatus />
                </div>
            </main>
        </div>
    )
}

Home.defaultProps = {
    keywords:
        'javahound, furry, vr, vrfurry, vr furry, content creation, web development, programming',
    description: 'Full Stack Dev, creator, Furry',
}

export default Home
