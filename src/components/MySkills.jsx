import IconReact from '../lib/react.png'
import HtmlIcon from '../lib/html5.png'
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
// import Surge from '../lib/surge.png'
// import Vitelogo from '../lib/vitelogo.png'
// import Swagger from '../lib/swagger.png'
import Skills from '../lib/skills.png'
const iconslist = [
    {icon: IconReact, name: "React"},
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
    <div className="row exp " ref={myskillsref} >
            
            <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm theme-color-border">
                <img className="me-3" src={Skills} alt={Skills} style={{maxWidth:"40px"}}/>

                <div className="lh-1">
                <h3 className="mb-0 text-dark lh-1">My Skills</h3>
                {/* <small>Since 2011</small> */}
                </div>
            </div>
            
            {
                iconslist.map((val)=>(
                    <div key={val.icon} className="d-flex justify-content-center align-items-center flex-column col-6 col-md-3 mb-3 mb-sm-5 ">
                    <img src={val.icon} alt={val.icon} style={{maxWidth: '90px'}} />
                    <p className='pt-2'>{val.name}</p>
                    </div>
                ))
            }
          
            
        </div>
  )
}

export default MySkills