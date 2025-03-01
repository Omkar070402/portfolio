import React, { useEffect } from "react";
import './styles/Home.css';
import About_me from "./About_me";
import Projects from "./Projects";
import Contact from "./Contact";
import AOS from "aos";


const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in ms)
          offset: 120,    // Offset from the element (in px)
          once: true,     // Whether animation should happen only once
        });
      }, []);

    return (
        <>

            <div className="container-fluid" >

                <div className="row mt-5">
                    <div className="col-md-12">

                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-md-6  hero-sec">

                                    <h1 data-aos='fade-down'>Hi, I'm Omkar Seshadri</h1>
                                    <h5 className="my-4 " data-aos='fade-down' >A Passionate Full-Stack Developer</h5>
                                    <p className="my-4" data-aos='fade-left'> I specialize in creating scalable, user-friendly web applications. From crafting dynamic front-end designs to building efficient back-end systems, I bring ideas to life through code.</p>

                                </div>
                                <div className="col-md-6  text-center">

                                    {/* <img src="./assets/avataaars.png"className="img-fluid w-50" alt="" /> */}
                                    <iframe data-aos='fade-right' src="https://lottie.host/embed/964d7eb4-149f-4556-aa19-811c877bf38f/2GMEQWukVz.lottie" style={{ height: '45vh' }}></iframe>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8 m-auto">
                                        <section className="text-center">

                                            <h2 data-aos='fade-up'>Skills . . .</h2>
                                            <div className="skill-container d-flex justify-content-around mt-4 fw-bold" data-aos='fade-right'>
                                                <div className="skill-1">
                                                    <h3><i className="fa-brands fa-html5 "></i></h3>
                                                    <p>HTML5</p>
                                                </div> 
                                                <div className="skill-1">
                                                    <h3><i class="fa-brands fa-css3-alt"></i></h3>
                                                    <p>CSS</p>
                                                </div>
                                                <div className="skill-1">
                                                    <h3> <i class="fa-brands fa-bootstrap"></i></h3>
                                                    <p>Bootstrap</p>
                                                </div>
                                                <div className="skill-1">
                                                    <h3><i class="fa-brands fa-js"></i></h3>
                                                    <p>Javascript</p>
                                                </div>
                                                <div className="skill-1">
                                                    <h3><i class="fa-brands fa-react"></i></h3>
                                                    <p>Reactjs</p> 
                                                </div>
                                                <div className="skill-1">
                                                    <h3><i class="fa-brands fa-node"></i></h3>
                                                    <p>Node js</p> 
                                                </div>
                                                <div className="skill-1">
                                                    <h3><i class="fa-brands fa-node-js"></i></h3>
                                                    <p>Express js</p> 
                                                </div>
                                                <div className="skill-1">
                                                    <h3><i class="fa-solid fa-leaf"></i></h3>
                                                    <p>MongoDB</p> 
                                                </div>
                                            </div>

                                        </section>
                                    </div>
                                </div>
                                <br /><br /><br />
                                <About_me/>
                                <br /><br /><br />
                                <Projects/>
                                <br /><br /><br />
                                <Contact/>
                                
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Home;