import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({imgSrc, imgAlt, title, link, children}) => {
    const linkFull = `./projects/${link}`
    return (
      <>
        <Link href={linkFull}>
          <div className="bg-white/10 rounded-3xl py-8 hover:scale-105 hover:cursor-pointer ease-in duration-200">
            <div className="block w-full md:flex items-center">
              <div className="-mt-4 mb-4 px-4 xs:px-8 max-w-[960px] md:w-[50%] lg:w-[60%]">
                <Image src={imgSrc} alt={imgAlt} width='960' height='540' className="rounded-3xl" />
                <h1 className="my-4">{title}</h1>
                <p>{children}</p>
              </div> 
            </div>
          </div>
        </Link>
      </>
    )
  }
  
  export default Card