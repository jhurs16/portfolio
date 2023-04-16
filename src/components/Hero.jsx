import { motion } from "framer-motion"
import MyImage from '../lib/my-image.png'

const imgVariants = {
	hidden: {
		x: -200
	},
	visible:{
		x: 0
	}
}

// const trans = {
// 	hidden: {
// 		y: 10, opacity: 0
// 	},
// 	visible: {
// 		y: 0, opacity: 1
// 	}
// }

const Hero = ({homeref, clickAbout, abb}) => {
	const clickHere = () => clickAbout(abb)
  return (
    <section className="container-fluid main-container container-home p-0 ">
    <div className="color-block d-none d-lg-block"></div>
    <div className="row home-details-container align-items-center home-container" ref={homeref}>


			<div className="col-lg-4 bg d-none d-lg-block ">
				<motion.img src={MyImage} className="img-fluid rounded" style={{maxWidth: '350px'}} alt={MyImage}
					variants={imgVariants}
					initial="hidden"
					animate="visible"
					transition={{ ease: "easeOut", duration: 0.5 }}
				/>
			</div>
			<div className="col-lg-8 col-12 home-details">
				<div>
					<img src="img/banner2.png" className="img-fluid main-img-mobile d-block d-sm-none" alt=""/>
				<h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                <h1 className="text-uppercase poppins-font">I'm <span className="typed" data-typed-items="JHURS, DEV OPS, I T SUPPORT">JURIST THOR</span> </h1>
                <motion.p className="open-sans-font"
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ ease: "easeOut", duration: 1.3 }}
				>I am a Web Developer who loved building web applications and fixing bugs. I have 1 year of experienced as a Software Developer who worked on backend and frontend task in an ERP system called FLECTRA ERP/CRM. I have also experienced, as a Software Engineer that worked on ERP system called ERPNext. </motion.p>
                <motion.button className="btn btn-primary mt-5" onClick={clickHere}
					initial={{x: '50vw'}}
					animate={{x: 0}}
					whileHover={{scale: 1.1}}
					transition={{ ease: "easeOut", duration: 1 }}
					
				>more about me 
                	<span><i className="icofont-ui-user"></i></span>
                </motion.button>
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