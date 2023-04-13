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
        
        <p className="lead text-body-secondary text-wrap">
            To become a Web Developer and learn it from scratch I risk and take my second course BS Info Tech for 4 years. My first course was not an IT related which is BS in Industrial Technology it is on designing a house or buildings, that time I dont know what my passion is, but I realized it when I was on my third year but I cant shift to Info Tech so I continue and finished my first course. After that, I worked for almost 2 years in Supermarkets to prepare and earn money for my equipment (mediums) and expenses in my school because I decided to pursue my passion in BS in Info Tech and become a programmer. After 4 years I worked as a Software Developer / Web Developer / Junior Software Engineer and learn new things on the technology today.
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