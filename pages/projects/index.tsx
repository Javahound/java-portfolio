import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../../components/Card'
import ProjectContainer from '../../components/ProjectContainer'
import ProjectWrapper from '../../components/ProjectWrapper'
import CardTitle from '../../components/Title'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      
      <div className="w-full h-screen text-center">
        <div className='max-w-[1200px] w-full h-full mx-auto p-2 flex justify-center'>
          <div className="mt-40 md:mt-0 lg:mt-40">
            <h1 className='font-bold tracking-wider text-center text-transparent text-4xl mb-8 bg-clip-text bg-gradient-to-r from-[#576ad2] to-[#b075e7]'>Projects Page WIP</h1>
            <ProjectWrapper>
                <ProjectContainer refLink="/projects" imgSrc="/timestampGen.png" imgAlt="">
                    <CardTitle>Discord Timestamp Generator</CardTitle>
                    <p>fhsdjgjdivh hfdjkshv iojesufjh esikfsd gsduijf yhrfiosfh sdio </p>
                </ProjectContainer>
            </ProjectWrapper>

          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
