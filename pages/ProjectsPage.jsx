import { useSearchParams } from "react-router-dom"

function ProjectsPage() {
  const [searchParams] = useSearchParams()
  const projectTitle = searchParams.get("projectTitle")

  return (
    <div className="h-screen flex items-center justify-center text-6xl">
      {
        projectTitle === "E-commerce" ?
          <div>
            This is the ecommerce
          </div> :

          <div>
            You need  a project
          </div>
      }
    </div>
  )
}

export default ProjectsPage