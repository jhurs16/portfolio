import { useRef } from 'react'
import About from "./About"
import Experience from "./Experience"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import MySkills from "./MySkills"
import Portfolio from "./Portfolio"

const Home = () => {
  const homeref = useRef(null)
  const aboutref = useRef(null)
  const myskillsref = useRef(null)
  const expref = useRef(null)
  const portref = useRef(null)
  const contref = useRef(null)
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
    }
    
  return (
    <div className="container" > 
		{/* <button id="button"><i className="icofont-rounded-up"></i></button> */}
		 {/* header */}
         <Header 
         data={scrollToSection} 
         data2={homeref} 
         ab={scrollToSection} 
         ab1={aboutref}
         ms={scrollToSection} 
         ms1={myskillsref}
         exp={scrollToSection} 
         exp1={expref}
         por={scrollToSection} 
         por1={portref}
         cont={scrollToSection} 
         cont1={contref}
         />
        {/* <!-- Main Content Starts --> */}
        <Hero homeref={homeref} clickAbout={scrollToSection} abb={aboutref}/>

{/* <!-- for about section --> */}
<div className="row about" id="about">
	
{/* <!-- Page Title Starts --> */}
<About aboutref={aboutref} />
{/* <!-- Page Title Ends --> */}
{/* <!-- Main Content Starts --> */}
    <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="container">
    
            <hr className="separator" />
            {/* <!-- Skills Starts --> */}
            
            <MySkills myskillsref={myskillsref}/>
            {/* <!-- Skills Ends --> */}
            <hr className="separator mt-1" />
            {/* <!-- Experience & Education Starts --> */}
            <Experience expref={expref}/>
            {/* <!-- Experience & Education Ends --> */}
        </div>
        
    </section>
</div>

{/* <!-- Portfolio --> */}
<Portfolio portref={portref}/>
<Footer contref={contref}/>
</div>
  )
}

export default Home