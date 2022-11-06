import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>

            <div className="w-full h-screen text-center">
                <div className="max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center">
                    <div className="mt-40 md:mt-0 lg:mt-40">
                        <h1 className="font-bold tracking-wider text-center text-transparent text-4xl mb-8 bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]">
                            Projects Page WIP
                        </h1>
                        <Card
                            imgSrc="/avatarPic.png"
                            imgAlt="a"
                            title="Project"
                            link="project"
                        >
                            <p>
                                Project Text. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Morbi vel malesuada
                                felis. Ut venenatis quis odio tempus
                                condimentum. Praesent at sapien lacus. Nullam
                                dictum magna auctor arcu facilisis dapibus.
                                Class aptent taciti sociosqu ad litora torquent
                                per conubia nostra, per inceptos himenaeos.
                                Donec vehicula tellus vitae consectetur
                                vestibulum. Proin venenatis.{' '}
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
