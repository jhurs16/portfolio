
// import { motion } from "framer-motion"
const Header = ({data, data2, ab, ab1, ms, ms1, exp, exp1, por, por1, cont, cont1}) => {
const clicKME = () =>  data(data2)
const clicKMEabout = () =>  ab(ab1)
const clicKMEskills = () =>  ms(ms1)
const clicKMEexp = () =>  exp(exp1)
const clicKMEPort = () =>  por(por1)
const clicKMECont = () =>  cont(cont1)
  return (
    
    <header className="header " id="navbar-collapse-toggle navbar"
    
    >
   {/* <!-- Fixed Navigation Starts --> */}
    <ul className="icon-menu d-none d-sm-block revealator-slideup revealator-once revealator-delay1 navbar" id="navbar">
        <li className="icon-box home" onClick={clicKME} >
            <i className="icofont-home ms-3"></i>
           
                <h2>Home</h2>
     
        </li>
        <li className="icon-box about" onClick={clicKMEabout} >
            <i className="icofont-ui-user ms-3"></i>
          
                <h2>About</h2>
            
        </li>
        <li className="icon-box exp" onClick={clicKMEskills}>
            <i className="icofont-hand-power ms-3"></i>
            
                <h2>Skills</h2>
       
        </li>
        <li className="icon-box exp" onClick={clicKMEexp}>
            <i className="icofont-badge ms-3"></i>
            
                <h2>Experience</h2>
          
        </li>
        <li className="icon-box portfolio" onClick={clicKMEPort}>
            <i className="icofont-briefcase-1 ms-3"></i>
          
                <h2>Portfolio</h2>
    
        </li>
        <li className="icon-box contact" onClick={clicKMECont}>
            <i className="icofont-envelope ms-3"></i>
            
                <h2>Contact</h2>
            
        </li>
        
    </ul>
    {/* <!-- Fixed Navigation Ends -->
    <!-- Mobile Menu Starts --> */}
      <nav role="navigation" className="d-block d-sm-none">
       <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="list-unstyled" id="menu">
                {/* <li className="active" ><i className="icofont-home"></i><span>Home</span></li>
                <li onClick={clicKMEPort}><a href="#"><i className="icofont-ui-user"></i><span>About</span></a></li>
                <li><a href="#exp"><i className="icofont-badge"></i><span>Exp</span></a></li>
                <li><a href="#portfolio"><i className="icofont-briefcase-1"></i><span>Portfolio</span></a></li>
                <li><a href="#contact"><i className="icofont-envelope"></i><span>Contact</span></a></li> */}
                
                <li className="active" onClick={clicKME}><i className="icofont-home"></i><span>Home</span></li>
                <li onClick={clicKMEabout}><i className="icofont-ui-user"></i><span>About</span></li>
                <li onClick={clicKMEskills}><i className="icofont-badge"></i><span>Skills</span></li>
                <li onClick={clicKMEexp}><i className="icofont-badge"></i><span>Experience</span></li>
                <li onClick={clicKMEPort}><i className="icofont-briefcase-1"></i><span>Portfolio</span></li>
                <li onClick={clicKMECont}><i className="icofont-envelope"></i><span>Contact</span></li>
            </ul>
        </div>
    </nav>
  {/* <!--  Mobile Menu Ends --> */}
</header>
  )
}

export default Header