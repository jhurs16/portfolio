
// import { motion } from "framer-motion"
import {useState } from 'react'
const Header = ({data, data2, ab, ab1, ms, ms1, exp, exp1, por, por1, cont, cont1}) => {

    const [prev, setPrev ] = useState('.icon-box.home')
const rmv = (data) => document.querySelector(data).classList.remove('active')
const addData = (data) => document.querySelector(data).classList.add('active')
const checkActive = (data) => document.querySelector(data).classList.contains('active')
const cC = (data) => {

    if(
        (data === '.icon-box.home' && checkActive(data)) ||
        (data === '.icon-box.about' && checkActive(data)) ||
        (data === '.icon-box.skills' && checkActive(data)) || 
        (data === '.icon-box.exp' && checkActive(data)) ||
        (data === '.icon-box.portfolio' && checkActive(data)) ||
        (data === '.icon-box.contact' && checkActive(data)) 
        ){
  
        return
    }
    if(
        (data !== '.icon-box.home' && checkActive(prev)) ||
        (data !== '.icon-box.about' && checkActive(prev)) ||
        (data !== '.icon-box.skills' && checkActive(prev)) ||
        (data !== '.icon-box.exp' && checkActive(prev)) || 
        (data !== '.icon-box.portfolio' && checkActive(prev)) ||
        (data !== '.icon-box.contact' && checkActive(prev))
        ){
        rmv(prev)
      
    }
    if(
        (data === '.icon-box.home' && !checkActive(data)) ||
        (data === '.icon-box.about' && !checkActive(data)) ||
        (data === '.icon-box.skills' && !checkActive(data))||
        (data === '.icon-box.exp' && !checkActive(data)) ||
        (data === '.icon-box.portfolio' && !checkActive(data))||
        (data === '.icon-box.contact' && !checkActive(data))
        ){
        
        addData(data)
    }
    setPrev(data)
 
      
}
const clicKME = () =>  { 
    data(data2);
    cC('.icon-box.home')
}
const clicKMEabout = () => { 
    ab(ab1);
    cC('.icon-box.about')

}

const clicKMEskills = () =>  {
    ms(ms1)
    cC('.icon-box.skills')
}
const clicKMEexp = () =>  {
    exp(exp1)
    cC('.icon-box.exp')
}
const clicKMEPort = () =>  {
    por(por1)
    cC('.icon-box.portfolio')
}
const clicKMECont = () =>  {
    cont(cont1)
    cC('.icon-box.contact')
}
  return (
    
    <header className="header " id="navbar-collapse-toggle navbar"
    
    >
   {/* <!-- Fixed Navigation Starts --> */}
    <ul className="icon-menu d-none d-sm-block revealator-slideup revealator-once revealator-delay1 navbar" id="navbar">
        <li className="icon-box home active" onClick={clicKME} >
            <i className="icofont-home ms-3"></i>
           
                <h2>Home</h2>
     
        </li>
        <li className="icon-box about"  onClick={clicKMEabout} >
            <i className="icofont-ui-user ms-3"></i>
          
                <h2>About</h2>
            
        </li>
        <li className="icon-box skills" onClick={clicKMEskills}>
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