import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Routes,Route,Outlet,Navigate,useParams,useLocation,Link} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Routes>
          <Route path="/" element ={<Home />}>
               <Route path="" element={<Dashboard />} />
               <Route path="skills" element={<Skills />}>
                 </Route >
               <Route path="help" element={<Help />} />
               <Route path="aboutMe" element={< AboutMe />} />
          </Route>
    </Routes>
  </Router>
 ,
  document.getElementById('root')
);

function Home(){
  return (
    <div className="main">
      <div className="navbar">
        <div>
          <Link to="/"><button>Home</button></Link>
          <Link to="/skills"><button>skills</button></Link>
          <Link to="/help"><button>Help</button></Link>
          <Link to="/aboutMe"><button>Contact Me</button></Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
function Dashboard(){
  return (
    <div >
      <h1> This is homepage </h1>
    </div>
  )
}
function AboutMe(){
  return (
    <div>
      <h1> Hello my name Arshdeep Singh. I am 21 years old.</h1>
    </div>
  )
}

function Skills(){
  const {name}=useParams();
  return (
    <div>
      <h3> My skillset is  : react mongodb, express, nodejs , javscript , c++ ,data strcuture and algorithms </h3>
      {name?<h3>Yes i know {name} </h3> :""}
    </div>
  )
}


function Help(){
  return (
    <div>
      <h1>How can i help you?</h1>
    </div>
  )
}

