

const Footer = ({contref}) => {
  return (
    <footer className="row contact-us mt-3 " ref={contref}>
<section className="main-content mb-4">
    <div className="container">
        <div className="row">
            {/* <!-- Left Side Starts --> */}
            <div className="text-left text-sm-center ">
                <h1 className="text-uppercase my-3">Contact <span>Me</span></h1>
                
            </div>
            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Let's Talk</h3>
                <p className="open-sans-font mb-3">Thank you for checking my portfolio, you can contact me below.</p>
            <div className="col-12 col-lg-4">
                <p className="open-sans-font custom-span-contact position-relative ">
                    <i className="icofont-envelope position-absolute"></i>
                    <p className="mail">
                    	<span className="d-block ">mail me</span>magsayojuristthor16@gmail.com
                    </p>
                </p>
                <p className="open-sans-font custom-span-contact position-relative">
                    <i className="icofont-ui-call position-absolute"></i>
                    <p className="phone">
                    	<span className="d-block">call me</span>+639304004150
                    </p>
                </p>
            </div>
            <div className="col-12 col-lg-4">
                <p className="open-sans-font custom-span-contact position-relative ">
                 
                    <i class="icofont-linkedin position-absolute pt-2"></i>
                    <div className="mail">
                    	<span className="d-block ">profile link</span>
                        <a href="https://www.linkedin.com/in/jurist-thor-magsayo-b7116522a" target="_blank" rel="noreferrer" className="link-info">my profile</a>
                    </div>
                    
                </p>
                {/* <p className="open-sans-font custom-span-contact position-relative">
                    <i className="icofont-ui-call position-absolute"></i>
                    <p className="phone">
                    	<span className="d-block">call me</span>+639304004150
                    </p>
                </p> */}
            </div>
            {/* <!-- Left Side Ends --> */}
            {/* <!-- Contact Form Starts --> */}
            {/* <div className="col-12 col-lg-6">
                
            </div> */}
            {/* <!-- Contact Form Ends --> */}
        </div>
    </div>

</section>
</footer>
  )
}

export default Footer