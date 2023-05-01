import Aboutme from '../lib/aboutme.png'
import Mp from '../lib/mp.png'
import Meow from '../lib/squaress.png'
const About = ({aboutref}) => {
  return (
   
        <section className="row " ref={aboutref}>

      <div className="col-12 d-flex align-items-center about-row">
        <div className='container text-center py-5 con-about'>
          <div className='mx-auto'>
            <img src={Mp} alt={Mp} style={{maxWidth:"60px"}}/>
            <h4 className='my-2 fw-bold'>About Me</h4>
            <div className="line-about my-2"></div>
          </div>
        <p className='text-start text-about lh-lg '>
        I love learning new things and technology. I am a fast learner, self-motivated, hard working person and open minded developer. I love different challenges and solving different level of bugs and problems. I have been involved in production, testing, agile development and JIRA. I trained myself in BootCamp at SkillShare for almost 2 months to learn REACT JS, styled components, Chakra UI, Vite and TanStack Query. I also learned Django and Django RestFramework by following the tutorials in udemy resources and created different projects. I think one of my key strengths is my curiosity and my ability to adapt and learn new things quickly. I am very excited about the industry and I am looking for a company where can I continue improving my skills and growing. In my college days I created two online websites such as pre-registration sytem and tourism website with chatbot for my thesis, the tourism website I created was awarded as Best Capstone Project in my academic year. The tech stack I used to build these projects are PHP, HTML, CSS3, BootStrap, jQuery, JavaScript and MySQL. 
        </p>
        
        </div>
        
        {/* <p className="text-justify lead text-body-secondary fw-normal-lg fw-normal-sm">
        I love learning new things and technology. I am a fast learner, self-motivated, hard working person and open minded developer. I love different challenges and solving different level of bugs and problems. I have been involved in production, testing, agile development and JIRA. I trained myself in BootCamp at SkillShare for almost 2 months to learn REACT JS, styled components, Chakra UI, Vite and TanStack Query. I also learned Django and Django RestFramework by following the tutorials in udemy resources and created different projects. I think one of my key strengths is my curiosity and my ability to adapt and learn new things quickly. I am very excited about the industry and I am looking for a company where can I continue improving my skills and growing.
        </p> */}
        
      
    
  </div>
        
  </section>

  )
}

export default About