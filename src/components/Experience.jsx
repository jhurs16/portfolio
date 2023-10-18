import Educ from '../lib/rules.png'
const Experience = ({expref}) => {
  return (
    <div className="row py-5" ref={expref}>
        
  <div className="text-center">
            <div className='mx-auto'>
            <img src={Educ} alt={Educ} style={{maxWidth:"60px"}}/>
            <h4 className='my-2 fw-bold'>Education, Awards, Experience and Training</h4>
            <div className="line-educ my-3"></div>
          </div>
          </div>
           
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
                        <li>
                            <div className="icon">
                                <i className="icofont-briefcase-1"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2021 - 2022</span>
                            <h5 className="poppins-font text-uppercase">Software Developer <span className="place open-sans-font">IFORMATLOGIC SOLUTIONS</span></h5>
                            <p className="open-sans-font">Worked as a Python Developer in an ERP system called FLECTRA CMS. My tasks is to debug from higher to lower level bugs that are detected by QA and reportedly by the users. Also worked on enhancing and improving the UI and logic of the websites. </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icofont-briefcase-1"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2022 - 2023</span>
                            <h5 className="poppins-font text-uppercase">Junior Software Engineer<span className="place open-sans-font">INFOSHIFT INC.</span></h5>
                            <p className="open-sans-font">
                                Worked on Python Django (Django RestFramework API) and ERPNext CMS for human resource management system. Worked on customization of frontend and backend tasks.  
                            </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icofont-badge"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">AWARD</span>
                            <h5 className="poppins-font text-uppercase">BEST In Capstone</h5>
                            <p className="open-sans-font text-muted">Polytechnic College of Botolan</p>
                            <p className="open-sans-font">
                                My Award in College for having the best Web Development Project for Academic Year 2020-2021.
                            </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icofont-badge"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">AWARD</span>
                            <h5 className="poppins-font text-uppercase">ALCU Region 3 Student Research Conference</h5>
                            <p className="open-sans-font text-muted">Polytechnic College of Botolan</p>
                            <p className="open-sans-font">
                                Participate in 2nd ALCU with the Theme : "Empowering Local College's Through Student Research"
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
                        <li>
                            <div className="icon">
                                <i className="icofont-graduate"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2017 - 2021</span>
                            <h5 className="poppins-font text-uppercase">BS Information Technology</h5>
                            <p className="open-sans-font text-muted">Polytechnic College of Botolan</p>
                            <p className="open-sans-font">
                                Studied Bachelor of Science in Information Technology. Created two websites as a requirement of the course as a fullstack Web Developer.
                            </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icofont-graduate"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2022</span>
                            <h5 className="poppins-font text-uppercase">Python Django 2021 - Complete Course by
Dennis Ivy.</h5>
                            <p className="open-sans-font text-muted">Udemy Course Resource</p>
                            <p className="open-sans-font">
                                Trained and Learned Django for two months.
                            </p>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icofont-graduate"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2023</span>
                            <h5 className="poppins-font text-uppercase">The Complete React Bootcamp 2023 (Updated)</h5>
                            <p className="open-sans-font text-muted">SkillShare - Arash Ahadzadeh, UI/UX Designer | University Lecturer </p>
                            <p className="open-sans-font">
                                
                                Enrolled,Trained and Learned React for almost two months.
                                Here is the link of my certificate:
                            </p>
                            <a href="https://skl.sh/3ZCXsK1" target="_blank" rel="noreferrer">SkillShare Certificate</a>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icofont-graduate"></i>
                            </div>
                            <span className="time open-sans-font text-uppercase">2023</span>
                            <h5 className="poppins-font text-uppercase">Node.js, Express, MongoDB & More: The Complete Bootcamp 2023</h5>
                            <p className="open-sans-font text-muted">Jonas Schmedtmann </p>
                            <p className="open-sans-font">
                                
                            Trained and Learned this course for three months and build a MERN Stack project.
                            </p>
                             
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Experience