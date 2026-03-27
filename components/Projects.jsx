import { useNavigate } from "react-router-dom"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

function Projects() {
  const projects = ['E-commerce']
  const navigate = useNavigate()

  return (
    <Carousel className="w-100 mt-15">
      <CarouselPrevious className={'cursor-pointer bg-transparent p-5 me-5'} />

      <CarouselContent>
        {projects.map((projectTitle, index) => {
          return (
            <CarouselItem key={index}>
              <div className="p-2 flex flex-col">
                <label className="mx-auto">Mock {projectTitle} Site</label>
                <Card className={"bg-transparent border"}>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
                <button onClick={() => navigate(`/projects?projectTitle=${projectTitle}`)} className="border w-50 mx-auto p-2.5 mt-4 rounded cursor-pointer">View Project</button>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      <CarouselNext className={'cursor-pointer bg-transparent p-5 ms-5'} />
    </Carousel>
  )
}

export default Projects