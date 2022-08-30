const ProjectWrapper = ({ children }) => {
    return (
      <>
        <div className="flex flex-row flex-wrap items-center justify-center">
            {children}
        </div>
      </>
    )
  }
  
  export default ProjectWrapper