
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
import Portf from '../lib/portfolioo.png'
import Shofy from '../lib/personal/shofy-clone.png'
import ReduxLogo from '../lib/Redux.png'
import Bts from '../lib/boots.png'
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
    <div className="row portfolio mb-4 " ref={portref}>
        <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm theme-color-border" >
    <img className="me-3" src={Portf} alt={Portf} style={{maxWidth:"40px"}}/>

    <div className="lh-1">
      <h3 className="mb-0 text-dark lh-1">My Portfolio</h3>
      {/* <small>Since 2011</small> */}
    </div>
  </div>
	
            {/* <!-- Portfolio Grid Starts --> */}
         
            <div className="container bg-light">
            <div className="col-12">
       
       <h3 className="alert text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">REACT BOOTCAMP PROJECTS</h3>
   </div>
			  <div className="row img-gal mb-4  d-flex align-item-center justify-content-center ">
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '20rem'}}>
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
            <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '20rem'}}>
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
        <hr className="separator mt-2" />
        <div className="container bg-light mt-5">
            <h3 className="text-uppercase mt-5  pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">MY PERSONAL PROJECTS</h3>
			  <div className="row img-gal mb-3 d-flex align-item-center justify-content-center">
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '20rem'}}>
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
            <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '20rem'}}>
                <img src={AnimeApi} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Anime List Api with Gogoanime API</h5>
                    <p className="card-text">List of Anime using Gogoanime API and fetch them using tanstack react query with search functionality.
                    
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
        <div className="container bg-light">
            <div className="col-12">
       
       <h3 className="alert text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
        MY PERSONAL FULLSTACK PROJECTS
       </h3>
   </div>
   
			  <div className="row img-gal mb-4  d-flex align-item-center justify-content-center ">
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '20rem'}}>
                <img src={SocialChefClone} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Social Chef Home Page Clone</h5>
                    <div className="card-text">Simple SocialChef clone in React and use my personal Django Restframework API for other images and data.
                    If you want to view my simple REST API Documentation with Swagger click this link:
                    <a href="https://juristthor.pythonanywhere.com/api/schema/docs/ " target='_blank' rel='noreferrer' > REST API</a>
                    </div>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={JSlogo}/>
                   <ToolsComponent icon={RouterReact}/>
                   <ToolsComponent icon={Gitlogo}/>
                   <ToolsComponent icon={Tanstcklogo}/>
                   <ToolsComponent icon={Css3}/>
                   <ToolsComponent icon={Pylogo}/>
                   <ToolsComponent icon={Djangologo}/>
                   <ToolsComponent icon={Djangorestlogo}/>
                   <ToolsComponent icon={Swagger}/>
                    </div>
                    <a href="https://jhurs16.github.io/socialchef-clone-homepage/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">View Live</a>
                </div>
            </div>
              <div className="card p-0 mx-4 my-3 shadow-lg rounded" style={{width: '20rem'}}>
                <img src={Shofy} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Ecommerce: Shofy Clone (Full functional) </h5>
                    <p className="card-text">Ecommerce Shofy is an HTML and CSS template in themeforest. I clone it using the frontend and backend technology as a fullstack. I convert it in full functional website with payment PAYPAL.I build my own API using Python Django Restframework to use in this project.It is still in progress and I will deploy it sooner.</p>
                    <p>Tools used: </p>
                    <div className="d-flex flex-wrap">
                   <ToolsComponent icon={IconReact}/>
                   <ToolsComponent icon={ReduxLogo}/>
                   <ToolsComponent icon={Bts}/>
                   <ToolsComponent icon={HtmlIcon}/>
                   <ToolsComponent icon={Css3}/>
                    <ToolsComponent icon={Gitlogo}/>
                   <ToolsComponent icon={JSlogo}/>
                
                   <ToolsComponent icon={RouterReact}/>
                  
                   <ToolsComponent icon={Pylogo}/>
                   <ToolsComponent icon={Djangologo}/>
                   <ToolsComponent icon={Djangorestlogo}/>
                   <ToolsComponent icon={Swagger}/>
                   
                    </div>
                    {/* <a href="http://jhurs-tictactoe-vite-react.surge.sh/" target='_blank' rel='noreferrer' className="btn btn-primary btn-sm mt-2">In Progress</a> */}
                    <button className="btn btn-primary btn-sm mt-2" disabled>In Progress</button>
                </div>
            </div>
         
			
			   
				  
				    
			  </div>	
              
		</div>
   
</div>
</div>
  )
}

export default Portfolio