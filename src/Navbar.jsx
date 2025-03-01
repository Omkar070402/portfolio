import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './styles/Navbar.css';

const Navbar = () => {

   const[time,setTime]=useState(new Date().toLocaleTimeString())

   useEffect(()=>{
    const timer = setInterval(()=>{

        setTime(new Date().toLocaleTimeString())

    },1000)

    return ()=>clearInterval(time)
   },[]);


    return (
        <>
            <div className="container-fluid p-0">

                <div className="row navbar-bg" >
                    <div className="col-md-12 ">

                        <div className="mt-4 m-auto" style={{  width: "89vw", border: '1px solid black', borderRadius: '10px', background: 'black' }}>
                            <nav className="navbar navbar-expand-lg  fw-bold">
                                <div className="container-fluid p-0">
                                    
                                    <NavLink className="navbar-brand ms-5 text-light" to={'/'}>Portfolio</NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    
                                            <div className="text-center clock text-light">
                                                <h5 className="m-auto ms-5">{time}</h5>
                                            </div>
                                     

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
                                            <li className="nav-item ms-5 ">
                                                <NavLink className="nav-link text-light" aria-current="page" to={'/'}>Home</NavLink>
                                            </li>
                                            <li className="nav-item ms-5">
                                                <NavLink className="nav-link text-light" to={'/about_me'}>About me</NavLink>
                                            </li>
                                            <li className="nav-item ms-5">
                                                <NavLink className="nav-link text-light" to={'/projects'}>Projects</NavLink>
                                            </li>
                                            <li className="nav-item  ms-5">
                                                <NavLink className="nav-link text-light " to={'/contact'}>
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>

                                        <button className="btn btn-outline-light bg-light me-3 px-4 fw-bold resume-btn"><a href="./Omkar_Seshadri_CV (1).pdf" target="_blank" style={{textDecoration:'none'}}>Resume</a></button>
                                    </div>
                                </div>
                            </nav>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;