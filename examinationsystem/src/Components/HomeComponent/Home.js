

 import "./Home.css"
 import pic0 from "../../Images/1.png"
 import pic1 from "../../Images/studentlogo.jpg";
 import pic2 from "../../Images/facultylogo.png";
 import pic3 from "../../Images/adminlogo.png";

 import {NavLink} from "react-router-dom";


    
    function Home(){
        return(
            <>
              

              <div id="d1">
                  <img src={pic0} alt="" />
                  <span>Centurion Online Examination System</span>
              </div>


              <div id="d2">
            
                  <div className ="d3">
                     <NavLink exact  to="/StudentLogin">
                        <img src={pic1} alt="" />
                     </NavLink>
                  </div>

                  <div  className ="d32">
                    <NavLink  to="/FacultyLogin">
                       <img src={pic2} alt="" />
                     </NavLink> 
                  </div>
                  <div  className ="d3">
                    <NavLink  to="/AdminLogin">
                       <img src={pic3} alt="" />
                     </NavLink> 
                  </div>
                
              </div>


             

            </>
        );
    }

     

    export default Home;