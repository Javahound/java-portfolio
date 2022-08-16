import Head from 'next/head'
import Script from 'next/script'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/fav.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  keywords: 'javahound, furry, vr, vrfurry, vr furry, content creation, web development, programming',
  description: "Hi, I'm Javahound A Full Stack Web Dev, Furry and (VR) Content Creator",
}

export default Meta