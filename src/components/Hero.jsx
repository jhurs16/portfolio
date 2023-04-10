
import MyImage from '../lib/my-image.png'
const Hero = ({homeref, clickAbout, abb}) => {
	const clickHere = () => clickAbout(abb)
  return (
    <section className="container-fluid main-container container-home p-0 ">
    <div className="color-block d-none d-lg-block"></div>
    <div className="row home-details-container align-items-center home-container" ref={homeref}>


			<div className="col-lg-4 bg d-none d-lg-block ">
				<img src={MyImage} className="img-fluid" style={{maxWidth: '350px'}} alt={MyImage}/>
			</div>
			<div className="col-lg-8 col-12 home-details">
				<div>
					<img src="img/banner2.png" className="img-fluid main-img-mobile d-block d-sm-none" alt=""/>
				<h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                <h1 className="text-uppercase poppins-font">I'm <span className="typed" data-typed-items="JHURS, DEV OPS, I T SUPPORT">JURIST THOR</span> </h1>
                <p className="open-sans-font">I am a Web Developer who loved building web applications and fixing bugs. I have 2 years of experienced as a Software Developer who worked on backend and frontend task in an ERP system called FLECTRA ERP/CRM. I also worked on ERP system called ERPNext. I trained myself in BootCamp at SkillShare for almost 2 months to learn REACT, styled components, Chakra UI, Vite and TanStack Query. I also learned Django and Django RestFramework by following the tutorials in udemy resources and create projects.</p>
                <button className="btn btn-primary" onClick={clickHere}>more about me 
                	<span><i className="icofont-ui-user"></i></span>
                </button>
                {/* <a href="goog" className="btn btn-success">Download my CV
                	<span><i className="icofont-download"></i></span>
                </a> */}
				</div>
			</div>
		</div>

	
</section>
  )
}

export default Hero