import React from "react";
import './styles/About_me.css';


const About_me = () => {


    return (
        <>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-6 about-me  d-flex text-center ">

                                    <h1 data-aos='fade-up'>About me</h1>

                                    <iframe data-aos='fade-right about-ani ' src="https://lottie.host/embed/3e46d4c2-1f4d-4521-a0f6-1513070587d6/iZGZldLg8j.lottie" style={{ height: '100%' }} ></iframe>

                                </div>
                                <div className="col-md-6">

                                    <div className="card shadow-lg about-card1" data-aos='fade-left' style={{ background: 'black', color: 'white', fontVariant: 'small-caps', wordSpacing: '1px' }}>
                                        <div className="card-body m-auto">
                                            <p className="mt-2">Hi , I'm Omkar Seshadri, a passionate full-stack developer with a strong foundation in web technologies.
                                                <br />
                                                <b>Graduation :</b> Bachelor Of Enginnering in Electronics and Telecommunication , Dr.D.Y.Patil School of Engineering and Technologies , 2024.
                                                <br />
                                                <b>Percentage :</b> 72 %
                                                <br />


                                            </p>


                                        </div>
                                    </div>

                                    <div className="card shadow-lg mt-5 about-card2" data-aos='fade-left' style={{ background: 'black', color: 'white', fontVariant: 'small-caps', textAlign: 'left', wordSpacing: '1px' }}>
                                        <div className="card-body">
                                            <p>What made me to choose ?
                                                <br />
                                                <b>Creative :</b>that helps me to push on my intelligence level boost my logical thinking , making it more interesting.
                                                <br /><br />
                                                <b>Learning :</b>a track that keeps on moving life-long process keep on striving for things that shape you in better way in what you do.    
                                                <br /><br />
                                                <b>Social Impact :</b>as a developer making application that are used in day-day life creates impact on everyone's life ,creates
                                                environment to interact with each other.
                                            </p>

                                        </div>
                                    </div>

                                    <br /><br />



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About_me;