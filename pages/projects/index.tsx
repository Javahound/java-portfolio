import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'
import ProjectContainer from '../../components/ProjectContainer'
import ProjectWrapper from '../../components/ProjectWrapper'
import CardTitle from '../../components/Title'
import CardTitleNoGradient from '../../components/TitleNoGradient'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      
      <div className="w-full h-screen text-center">
        <div className='max-w-[1500px] w-full h-full mx-auto p-2 grid justify-center'>
          <div className="mt-40 lg:mt-40">
            <h1 className='font-bold tracking-wider text-center text-transparent text-4xl mb-8 bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Projects Page WIP</h1>
            <div className='flex flex-row flex-wrap justify-center items-center'>
              <ProjectWrapper>
                  <ProjectContainer refLink="/projects/dc-timestamps" imgSrc="/timestampGen.png" imgAlt="">
                      <CardTitleNoGradient>Discord Timestamp Gen</CardTitleNoGradient>
                      <p>Tired of miscommunication about events in Discord Chats? Try it with one simple Solution: <b>Dynamic Timestamps</b></p>
                  </ProjectContainer>
              </ProjectWrapper>
              <ProjectWrapper>
                  <ProjectContainer refLink="/projects/BeeFyne-Bot" imgSrc="/avatarPicFullB.png" imgAlt="">
                      <CardTitleNoGradient>🐝Fyne - Discord Bot</CardTitleNoGradient>
                      <p>This bot is still in <b>Active development</b>. It will do your general organizing and reaction role stuff for now.</p>
                  </ProjectContainer>
              </ProjectWrapper> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
