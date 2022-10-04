const ProjectWrapper = ({ children }) => {
    return (
      <>
        <div className="flex flex-row flex-wrap items-center justify-center  min-w-[20%]">
            {children}
        </div>
      </>
    )
  }
  
  export default ProjectWrapper