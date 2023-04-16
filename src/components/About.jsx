import Aboutme from '../lib/aboutme.png'
const About = ({aboutref}) => {
  return (
    <div className="container">
        <div className="row" ref={aboutref}>

        
        <div className="col-12">
        <div className="d-flex align-items-center p-3 text-white rounded shadow-sm theme-color-border" >
            <img className="me-3" src={Aboutme} alt={Aboutme} style={{maxWidth:"40px"}}/>

            <div className="lh-1">
            <h3 className="mb-0 text-dark lh-1">About Me</h3>
            {/* <small>Since 2011</small> */}
            </div>
        </div>
        <section className="py-5 text-center container bg-light">
    <div className="row py-2">
      <div className="col-lg-10 col-md-10 mx-auto ">
        
        <p className="text-justify lead text-body-secondary fw-normal">
        I love learning new things and technology. I am a fast learner, self-motivated, hard working person and open minded developer. I love different challenges and solving different level of bugs and problems. I have been involved in production, testing, agile development and JIRA. I trained myself in BootCamp at SkillShare for almost 2 months to learn REACT JS, styled components, Chakra UI, Vite and TanStack Query. I also learned Django and Django RestFramework by following the tutorials in udemy resources and created different projects. I think one of my key strengths is my curiosity and my ability to adapt and learn new things quickly. I am very excited about the industry and I am looking for a company where can I continue improving my skills and growing.
        </p>
      </div>
    </div>
  </section>
        </div>
  </div>
</div>
  )
}

export default About