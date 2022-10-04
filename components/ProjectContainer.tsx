import Link from "next/link"
import Image from "next/image"



const ProjectContainer = ({ children, refLink, imgSrc, imgAlt }) => {
    var img = Image(imgSrc);
    return (
      <>
        <Link href={refLink} className="">
            <div className="hover:cursor-pointer hover:scale-105 ease-in duration-200 rounded-3xl mx-4 my-4 px-4 py-4 max-w-[450px] bg-white/10">
            <Image src={imgSrc} alt={imgAlt} width='960' height='540' className="rounded-3xl" />
                {children}
            </div>
        </Link>
      </>
    )
  }
  
  export default ProjectContainer