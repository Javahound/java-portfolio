import Image from 'next/Image'
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
            <nav className={styles.nav}>
                <div className={styles.flex}>
                    <Image src={'/logo.png'} alt={''} width={50} height={50} className={styles.navLogo}/>
                    <h2 className='gradientText'>Javahound</h2>
                    <div onClick={toggleNav} className={styles.openMenu}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
                <div className={nav ? styles.linksOpenedBG : styles.linksClosedBG}>
                    <div className={nav ? styles.linksOpened : styles.linksClosed}>
                        <div>
                            <div className={styles.linkMenuHeader}>
                                <Image src="/logo.png" alt="/" width='75' height='75' className={styles.linkMenuImg}></Image>
                                <h2><span className="invisible xs:visible font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]">Javahound</span></h2>
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
                                <Link legacyBehavior href='/'>
                                    <li onClick={toggleNav} className={styles.mobileLink}>Skills</li>
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