
import Tictactoe from '../lib/bootcamp/tictactoe.png'
import Boxoffice from '../lib/bootcamp/box-office.png'
import TimeM from '../lib/personal/time-management.png'
import AnimeApi from '../lib/personal/anime-api.png'
import SocialChefClone from '../lib/personal/reactclone.png'
import IconReact from '../lib/react.png'
import HtmlIcon from '../lib/html5.png'
import JSlogo from '../lib/jslogo.png'
import Stcomp from '../lib/styled.png'
import RouterReact from '../lib/react-router-dom.png'
import Gitlogo from '../lib/github.png'
import Surge from '../lib/surge.png'
import Tanstcklogo from '../lib/tanstack.png'
import Vitelogo from '../lib/vitelogo.png'
import Chakralogo from '../lib/chakraui.png'
import Css3 from '../lib/css3.png'
import Pylogo from '../lib/pylogo.png'
import Djangologo from '../lib/djangologo.png'
import Djangorestlogo from '../lib/djangorest.png'
import Swagger from '../lib/swagger.png'
import Portf from '../lib/portf.png'
import Shofy from '../lib/personal/shofy-clone.png'
import ReduxLogo from '../lib/Redux.png'
import Bts from '../lib/boots.png'
import Flec from '../lib/flectra.png'
import Ubuntu from '../lib/ubuntu.png'
import BitB from '../lib/bitbucket.png'
import Gitlab from '../lib/gitlab.png'
import ErpnextLogo from '../lib/erpnext-logo.png'
import FlectraSs from '../lib/flectra-ss.png'
import ErpSs from '../lib/erpnext-ss.png'
import PmdocsDnd from '../lib/pmdocs-dnd.jpg'
import RtkQuery from '../lib/rtk-query.png'
import ExpressJS from '../lib/expressjs.png'
import NodeJS from '../lib/nodejs.png'
import TailwindCSS from '../lib/tailwind-css.png'
import MongoDb from '../lib/mongo-db.png'
const ToolsComponent = ({icon}) => {
    return (
        <div className="p-2">
        <img src={icon} alt={icon} style={{maxWidth: '40px'}} />

        </div>
    )
}
const Portfolio = ({portref}) => {
  return (
    <div className='container'>
    <div className="row portfolio py-5 mb-4 " ref={portref}>
        
        <div className="text-center" >
            <div className='mx-auto'>
            <img src={Portf} alt={Portf} style={{maxWidth:"60px"}}/>
            <h4 className='my-2 fw-bold'>My Portfolio</h4>
            <div className="line-educ my-3"></div>
          </div>
          </div>
	
            {/* <!-- Portfolio Grid Starts -->  bg-light*/}
            <div className="container shadow" style={{outline: "#e9e9e9 solid 1px"}}>
            <div className="col-12 text-center">
       
                <h3 className="alert text-uppercase mb-0 py-3 text-left text-sm-center custom-title fw-bold">
                    MY EXPERIENCED IN INDUSTRY
                </h3>
                {/* <div className="line-educ2"></div> */}
            </div>
                
			  <div className="row img-gal mb-4  d-flex align-item-center justify-content-center ">
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '25rem'}}>
                <img src={FlectraSs} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body border-top">
                    <h5 className="card-title">FLECTRA ERP/CRM</h5>
                    <div className="card-text" >
                        Worked as a Software Developer for (1) one year, my daily activities and duties are:
                        <ul className="list-group" style={{fontSize: '14px'}}>
                        
                        <li className="list-group-item"><span className='text-bold'>1.</span> Works on HRMS project.</li>
                        <li className="list-group-item"><span className='text-bold'>2.</span> Attend Scrum Meetings and Sprint planning.</li>
                        
                        <li className="list-group-item">3. Works on Agile Development and collaborations with the team.</li>
                        <li className="list-group-item">4. Check the agile boards for tasks, peer review, and rejected and finished tickets.</li>
                        <li className="list-group-item">5. Debug higher to lower-level bugs.</li>
                        <li className="list-group-item">6. Customizing modules and working on improvements.</li>
                        <li className="list-group-item">7. Push finished tasks in Git Repo, create pull requests, and merge.</li>
                        <li className="list-group-item">8. Used Ubuntu Linux for the project environment, coded in Python, and Flectra, and did testing before pushing the code and changes.</li>
                        </ul>
                    </div>
                    <p className='mt-2'>Technology used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={Flec}/>
                   <ToolsComponent icon={Pylogo}/>
                   <ToolsComponent icon={Ubuntu}/>
                   <ToolsComponent icon={BitB}/>
                   <ToolsComponent icon={Gitlab}/>
                   
                    </div>
                    {/* <a href="https://jhurs16.github.io/socialchef-clone-homepage/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a> */}
                </div>
            </div>
            <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '25rem'}}>
                <img src={ErpSs} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body border-top">
                    <h5 className="card-title">ERPNext ERP</h5>
                    <div className="card-text" >
                        Worked as a Software Engineer for (9) nine months, my daily activities and duties are:
                        <ul className="list-group" style={{fontSize: '14px'}}>
                        <li className="list-group-item"><span className='text-bold'>1.</span> Attend Scrum Meetings and Sprint planning.</li>
                        <li className="list-group-item">2. Check the JIRA for tasks and other tickets.</li>
                        <li className="list-group-item">3. Debug higher to lower level bugs.</li>
                        <li className="list-group-item">4. Customizing modules, working on improvements and automation.</li>
                        <li className="list-group-item">5. Code in Python, JavaScript and used GUI of ERPNext to add features and customization.</li>
                        <li className="list-group-item">6. Deploy the Code in Production.</li>
                        </ul>
                    </div>
                    <p className='mt-2'>Technology used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={ErpnextLogo}/>
                   <ToolsComponent icon={Pylogo}/>
                   <ToolsComponent icon={Ubuntu}/>
                   <ToolsComponent icon={JSlogo}/>
                   
                   
                    </div>
                    {/* <a href="https://jhurs16.github.io/socialchef-clone-homepage/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a> */}
                </div>
            </div>
			
			   
				  
				    
			  </div>	
              
		</div>
        <div className="container shadow mt-5" style={{outline: "#e9e9e9 solid 1px"}}>
            <div className="col-12 text-center "  >
       
                <h3 className="alert text-uppercase py-3 text-left text-sm-center custom-title fw-bold">
                    MY PERSONAL MERN STACK PROJECT
                </h3>
                {/* <div className="line-educ2"></div> */}
            </div>
			  <div className="row img-gal mb-0 d-flex align-item-center justify-content-center">
              <div className="card p-0 mx-2 my-3 shadow-lg rounded" style={{width: '30rem'}}>
                <img src={PmdocsDnd} className="card-img-top img-fluid" alt={PmdocsDnd}/>
                
            </div>
            <div className="card p-0 my-3 shadow-lg rounded" style={{width: '30rem'}}>
                 
                <div className="card-body ">
                    <h5 className="card-title fw-bold">Project Management Documentation Drag and Drop</h5>
                    <p className="card-text">PMDoc's DnD is a documentation platform that can be used to manage and document your project's. It is a valuable tool for both programmers and non-technical individuals. This web application is highly customizable and can be easily shared with your team.!
                    
                    </p>
                    <p className="card-text">I believe this is a unique project I built to showcase my skills. This project built in MERN Stack.
                    
                    </p>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                    {/* RtkQuery ExpressJS NodeJS TailwindCSS */}
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={JSlogo}/>
                   <ToolsComponent icon={RtkQuery}/>
                   <ToolsComponent icon={RouterReact}/>
                   <ToolsComponent icon={Gitlogo}/>
                   <ToolsComponent icon={TailwindCSS}/>
                   <ToolsComponent icon={ExpressJS}/>
                   <ToolsComponent icon={NodeJS}/>
                   <ToolsComponent icon={Css3}/>
                   <ToolsComponent icon={MongoDb}/>
                    </div>
                    {/* https://juristthor.pythonanywhere.com/api/schema/docs/ */}

                    <a href="https://pmdocsdnd.onrender.com/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a>
                </div>
            </div>
			
           
				    
			  </div>	
		</div>
        {/* bg-light */}
            <div className="container shadow mt-5" style={{outline: "#e9e9e9 solid 1px"}}>
            <div className="col-12 text-center "  >
       
                <h3 className="alert text-uppercase py-3 text-left text-sm-center custom-title fw-bold">
                    REACTJS COURSE @SKILLSHARE PROJECTS
                </h3>
                {/* <div className="line-educ2"></div> */}
            </div>
			  <div className="row img-gal mb-4  d-flex align-item-center justify-content-center ">
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '25rem'}}>
                <img src={Tictactoe} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">TicTacToe</h5>
                    <p className="card-text">Simple Tic Tac Toe game created in React.</p>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={JSlogo}/>
                   <ToolsComponent icon={Stcomp}/>
                   <ToolsComponent icon={RouterReact}/>
                   <ToolsComponent icon={Surge}/>
                   <ToolsComponent icon={Vitelogo}/>
                   
                    </div>
                    <a href="http://jhurs-tictactoe-vite-react.surge.sh/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a>
                </div>
            </div>
            <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '25rem'}}>
                <img src={Boxoffice} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Box Office</h5>
                    <p className="card-text">Simple Box Office React Application with TVAmaze API.</p>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={JSlogo}/>
                   <ToolsComponent icon={Stcomp}/>
                   <ToolsComponent icon={RouterReact}/>
                   <ToolsComponent icon={Gitlogo}/>
                   <ToolsComponent icon={Tanstcklogo}/>
                   
                    </div>
                    <a href="https://jhurs16.github.io/box-office-app/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a>
                </div>
            </div>
			
			   
				  
				    
			  </div>	
		</div>
   
        {/* bg-light */}
        <div className="container shadow mt-5" style={{outline: "#e9e9e9 solid 1px"}}>
            <div className="col-12 text-center "  >
       
                <h3 className="alert text-uppercase py-3 text-left text-sm-center custom-title fw-bold">
                    MY SIMPLE PERSONAL PROJECTS
                </h3>
                {/* <div className="line-educ2"></div> */}
            </div>
			  <div className="row img-gal mb-3 d-flex align-item-center justify-content-center">
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '25rem'}}>
                <img src={TimeM} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Simple Time Management App</h5>
                    <p className="card-text">Simple Time Management React Application. This app contains CRUD functionality and able to start the task.</p>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={JSlogo}/>
                   <ToolsComponent icon={Stcomp}/>
                   <ToolsComponent icon={Gitlogo}/>
                   <ToolsComponent icon={Chakralogo}/>
                   <ToolsComponent icon={Css3}/>
                    </div>
                    <a href="https://jhurs16.github.io/simple-time-management-app/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a>
                </div>
            </div>
            <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '25rem'}}>
                <img src={AnimeApi} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Anime List Api with Gogoanime API</h5>
                    <p className="card-text">A list of Anime build in REACTJS, used Gogoanime API and fetch them using tanstack react query with search functionality. Also with darkmode at the top right
                    
                    </p>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={JSlogo}/>
                   <ToolsComponent icon={Stcomp}/>
                   <ToolsComponent icon={RouterReact}/>
                   <ToolsComponent icon={Gitlogo}/>
                   <ToolsComponent icon={Tanstcklogo}/>
                   <ToolsComponent icon={Chakralogo}/>
                   <ToolsComponent icon={Css3}/>
                    </div>
                    {/* https://juristthor.pythonanywhere.com/api/schema/docs/ */}

                    <a href="https://jhurs16.github.io/anime-lists-with-gogoanimeapi/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a>
                </div>
            </div>
			
           
				    
			  </div>	
		</div>
       
 
        
   
</div>
</div>
  )
}

export default Portfolio