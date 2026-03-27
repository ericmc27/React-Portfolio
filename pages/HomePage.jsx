import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import Projects from "../components/Projects"
import TypewriterEffect from '../components/TypewriterEffect'
import ericEmoji from '/eric-emoji.png'

function HomePage() {
  const navigate = useNavigate()
  const [currentOption, setCurrentOption] = useState('home')
  const ulItems = [{ id: 'home', label: 'Home' }, { id: 'hire-me', label: '¿Why Hire Me?' }, { id: 'projects', label: 'Projects' }]
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 })

  const handleOnClick = (optionName) => {
    setCurrentOption(optionName)
  }

  useEffect(() => {
    if (inView1 && currentOption !== 'home') { //check for re-render
      window.history.pushState({}, '', '#home')
      setCurrentOption('home')
    } else if (inView2 && currentOption !== 'hire-me') {
      window.history.pushState({}, '', '#hire-me')
      setCurrentOption('hire-me')
    } else if (inView3 && currentOption !== 'projects') {
      window.history.pushState({}, '', '#projects')
      setCurrentOption('projects')
    }
  }, [inView1, inView2, inView3])


  return (
    <div>
      <ul className='flex items-center justify-center gap-14 border border-white/30 w-100 rounded-full h-20 fixed top-2 left-1/2 -translate-x-1/2 z-50'>
        {ulItems.map((liItem) => {
          return <li key={liItem.id}
            onClick={() => handleOnClick(liItem.id)}
            className={`${currentOption === liItem.id && 'text-[#D9FF3F]'} cursor-pointer`}>
            <a href={`#${liItem.id}`}>{liItem.label}</a>
          </li>
        })}
      </ul>

      <section ref={ref1} id='home' className={`min-h-screen flex items-center justify-center w-full ${!inView1 ? 'opacity-0' : 'fadeIn'}`}>
        <div>
          <img className={'h-40 w-40'} src={ericEmoji} />
        </div>

        <div>
          <TypewriterEffect />
        </div>
      </section>

      <section ref={ref2} id='hire-me' className={`min-h-screen flex flex-col items-center justify-center w-full ${!inView2 ? 'opacity-0' : 'fadeIn'}`}>
        <p className='text-xl max-w-149 mt-5 text-justify'>
          Driven by curiosity, ownership, and a genuine love of solving problems, I bring persistence, adaptability, and a team-first mindset to every challenge I take on.
        </p>

        <button onClick={() => (navigate('/about-me'))} className='mx-auto mt-10 p-5 w-fit border rounded hover:cursor-pointer'>Want to know more?</button>
      </section>

      <section ref={ref3} id='projects' className={`min-h-screen flex items-center justify-center w-full ${!inView3 ? 'opacity-0' : 'fadeIn'}`}>
        <Projects />
      </section>

      <footer className='fixed bottom-0 left-0 right-0 text-center pb-2.5'>&copy;Made by Eric Castillo. All rights reserved</footer>
    </div>
  )
}

export default HomePage



