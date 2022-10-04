import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from "next/router"

const server_add = () => {
    window.open("https://discord.com/api/oauth2/authorize?client_id=1021463003918512190&permissions=8&scope=bot")
}

const go_dashboard = () => {
    Router.push('http://localhost:3001')
}

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>BeeFyne - Javahound</title>
      </Head>
      
        <div className="w-full h-screen text-center">
                <div className='max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center'>
                    <div className="mt-40 md:mt-0 lg:mt-40">
                        <h1 className='py-4'>How to join</h1>
                        <p className='py-4'>This bot is still in <b>Active development</b>. It will do your general organizing and reaction role stuff for now.</p>
                        {/* <button className='py-2 px-4 my-2' onClick={server_add}>Add to Server</button><br /> */}
                        <button className='py-2 px-4 my-2' onClick={go_dashboard}>Go to Dashboard</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Projects