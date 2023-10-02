import { motion } from "framer-motion"
import MyImage from '../lib/my-image.png'
import Mp from '../lib/mp.png'
const imgVariants = {
	hidden: {
		x: -200
	},
	visible:{
		x: 0
	}
}



const Hero = ({homeref, clickAbout, abb}) => {
	const clickHere = () => clickAbout(abb)
  return (
    <section className="container-fluid main-container container-home p-0 ">
    <div className="color-block d-none d-lg-block"></div>
    <div className="row home-details-container align-items-center home-container" ref={homeref}>


			<div className="col-lg-4 bg d-none d-lg-flex img-cons">
				<img src={Mp} className="img-fluid rounded" style={{maxWidth: '350px'}} alt={MyImage}
					variants={imgVariants}
					initial="hidden"
					animate="visible"
					transition={{ ease: "easeOut", duration: 0.5 }}
				/>
			</div>
			<div className="col-lg-8 col-12 home-details">
				<div>
					<img src="img/banner2.png" className="img-fluid main-img-mobile d-block d-sm-none" alt=""/>
				<h6 className="text-hero text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                <h1 className="text-uppercase poppins-font text-hero">I'm <span className="typed" data-typed-items="JHURS, DEV OPS, I T SUPPORT" style={{color: "#0092d9"}}>JURIST THOR</span> </h1>
                <p className="open-sans-font fw-bolder "
					style={{color: "#272727"}}
				>I have 1 year and 9 months of experience in the industry. During my first year, I worked as a Software Developer, and in the following 9 months, I gained experience as a Software Engineer. Afterward, I dedicated 5 months to upskilling in MERN Stack technology, and used this to create a unique portfolio to showcase my skills. </p>
                <button className="btn btn-primary mt-5" onClick={clickHere}
				
					
				>more about me 
                	<span><i className="ms-1 icofont-user-suited"></i></span>
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