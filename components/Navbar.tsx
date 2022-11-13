import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaTelegram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from '../styles/Navbar.module.css'


function Navbar() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <nav className={styles.nav} style={ nav ? {backdropFilter: `none`} : {backdropFilter: `blur(7px)`} }>
                <div className={styles.flex}>
                    <Link href='/'>
                        <Image src={'/logo.png'} alt={''} width={50} height={50} className={styles.navLogo} style={{}}/>
                    </Link>
                    <Link href='/'>
                        <div className={styles.navTitle}>
                            <h2 className='gradientText'>Javahound</h2>
                        </div>
                    </Link>
                    <div className={styles.links}>
                        <ul>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                            </Link>
                            <Link href='/blog'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Blog</li>
                            </Link>
                            <Link href='/projects'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div onClick={toggleNav} className={styles.openMenu}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={nav ? styles.linksOpenedBG : styles.linksClosedBG}>
                    <div className={nav ? styles.linksOpened : styles.linksClosed}>
                        <div>
                            <div className={styles.linkMenuHeader}>
                                <Image src="/logo.png" alt="/" width='75' height='75' className={styles.linkMenuImg}></Image>
                                <h2><span className={"gradientText textNormal"}>Javahound</span></h2>
                                <div onClick={toggleNav} className={styles.menuCloseBtn}>
                                    <AiOutlineClose size={25} />
                                </div>
                            </div>
                            <div className={styles.menuSlogan}>
                                <p className='w-[100%] py-4 text-center'>Let&apos;s do something great today.</p>
                            </div>
                        </div>
                        <div className={styles.mobileLinkListWrapper}>
                            <ul className={styles.mobileLinkList}>
                                <Link legacyBehavior href='/'>
                                    <li onClick={toggleNav} className={styles.mobileLink}>Home</li>
                                </Link>
                                <Link legacyBehavior href='/#about'>
                                    <li onClick={toggleNav} className={styles.mobileLink}>About</li>
                                </Link>
                                <Link legacyBehavior href='/blog'>
                                    <li onClick={toggleNav} className={styles.mobileLink}>Blog</li>
                                </Link>
                                <Link legacyBehavior href='/projects'>
                                    <li onClick={toggleNav} className={styles.mobileLink}>Projects</li>
                                </Link>
                                <Link legacyBehavior href='/'>
                                    <li onClick={toggleNav} className={styles.mobileLink}>Contact</li>
                                </Link>
                            </ul>
                            <div className={styles.mobileLinkUl}>
                                <p  className='gradientText'>Let&apos;s Connect</p>
                                <div className={styles.socialContainer}>
                                    <div className={styles.socialIcon}>
                                        <Link legacyBehavior href="https://github.com/javahound" passHref><a target="_blank"><FaGithub /></a></Link>
                                    </div>
                                    <div className={styles.socialIcon}>
                                        <Link legacyBehavior href="https://t.me/javahound" passHref><a target="_blank"><FaTelegram /></a></Link>
                                    </div>
                                    <div className={styles.socialIcon}>
                                        <Link legacyBehavior href="https://www.youtube.com/@javahound" passHref><a target="_blank"><FaYoutube /></a></Link>
                                    </div>
                                    <div className={styles.socialIcon}>
                                        <Link legacyBehavior href="https://twitter.com/justjavahound" passHref><a target="_blank"><FaTwitter /></a></Link>
                                    </div>
                                    <div className={styles.socialIcon}>
                                        <Link legacyBehavior href="https://www.tiktok.com/@javahound" passHref><a target="_blank"><FaTiktok /></a></Link>
                                    </div>
                                    <div className={styles.socialIcon}>
                                        <Link legacyBehavior href="https://www.twitch.tv/JustJavahound" passHref><a target="_blank"><FaTwitch /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar