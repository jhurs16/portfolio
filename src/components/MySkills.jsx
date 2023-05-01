import IconReact from '../lib/react.png'
import HtmlIcon from '../lib/html5_logo.png'
import Css3 from '../lib/css3.png'
import Postgres from '../lib/postgresql.png'
import Boots from '../lib/boots.png'
import Stcomp from '../lib/styled.png'
import JSlogo from '../lib/jslogo.png'
import Flogo from '../lib/flectra2.png'
import Gtlogo from '../lib/gitlogo.png'
// import Tanstcklogo from '../lib/tanstack.png'
// import Chakralogo from '../lib/chakraui.png'
import Pylogo from '../lib/pylogo.png'
import Djangologo from '../lib/djangologo.png'
import Djangorestlogo from '../lib/djangorest.png'
import FigmaLogo from '../lib/figmalogo.png'
import ErpnextLogo from '../lib/erpnext-logo.png'
// import RouterReact from '../lib/react-router-dom.png'
import Gitlogo from '../lib/github.png'
import ReduxLogo from '../lib/Redux.png'
// import Surge from '../lib/surge.png'
// import Vitelogo from '../lib/vitelogo.png'
// import Swagger from '../lib/swagger.png'
// import Skills from '../lib/skills.png'
import Skilss from '../lib/skillss.png'
const iconslist = [
    {icon: IconReact, name: "React"},
    {icon: ReduxLogo, name: "Redux"},
    {icon: HtmlIcon, name: "HTML5"},
    {icon: Css3, name: "CSS3"},
    {icon: Postgres, name: "PostGreSQL"},
    {icon: Boots, name: "BootStrap"},
    {icon: Stcomp, name: "Styled Components"},
    {icon: JSlogo, name: "JavaScript"},
    {icon: Pylogo, name: "Python"},
    {icon: Flogo, name: "Flectra"},
    {icon: Gtlogo, name: "Git"},
    {icon: Djangologo, name: "Python Django"},
    {icon: Djangorestlogo, name: "Django RestFramework"},
    {icon: FigmaLogo, name: "Figma"},
    {icon: ErpnextLogo, name: "ERPNext"},
    {icon: Gitlogo, name: "GitHub"}
]
const MySkills = ({myskillsref}) => {
  return (
    <div className="row py-5 exp " ref={myskillsref} >
            
        {/* <div className="col-12 d-flex align-items-center about-row"></div>
        <div className='container text-center py-5 con-about'></div> */}
        <div className="text-center">
            <div className='mx-auto'>
            <img src={Skilss} alt={Skilss} style={{maxWidth:"60px"}}/>
            <h4 className='my-2 fw-bold'>My Skills</h4>
            <div className="line-about my-3"></div>
          </div>
          </div>
            {
                iconslist.map((val)=>(
                    <div key={val.icon} className="d-flex justify-content-center align-items-center flex-column col-6 col-md-3 mb-3 mb-sm-5 shadow-sm ">
                    <img src={val.icon} alt={val.icon} style={{maxWidth: '85px'}} />
                    <p className='pt-2 fw-bold'>{val.name}</p>
                    {/* <div class="loader"></div> */}
                    </div>
                ))
            }
          
            
        </div>
  )
}

export default MySkills