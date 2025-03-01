import React from "react";
import './styles/Contact.css';

const Contact = () => {


    return (
        <>

            <div className="container-fluid">
                <div className="row" style={{height:'100vh'}}>
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row mt-5">
                                <div className="col-md-6 d-flex contact-title text-center m-auto ">
                                    <h1 className="mt-5 " data-aos='fade-up'>Contact Me</h1>
                                    <iframe data-aos='fade-right animation' src="https://lottie.host/embed/dc973d93-beae-4542-95cb-53f07d3995ef/HQVtGDq8Qq.lottie"></iframe>
                                </div>

                                <hr />
                                <div className="col-md-6 m-auto" style={{display:'flex',flexDirection:'column',fontVariant:'small-caps',justifyContent:'center'}}>

                                           <div className="card shadow-lg text-light mt-4 " data-aos='fade-left' style={{background:'black'}}>
                                            <div className="card-body">
                                            <div className="d-flex gap-4 ">
                                             <h5 className="mt-2">Email me</h5>   
                                            <a href="mailto:omkarseshadri007@gmail.com?subject=Inquiry from Portfolio&body=Hi Omkar,"> <div className="email text-center"><h3 className="mt-2"><i className="fa fa-envelope" style={{color:'#3058CA'}}></i></h3></div> </a>
                                            </div>
                                            <div className="d-flex gap-4 mt-2">
                                             <h5 className="mt-2">Connect to LinkedIn</h5>   
                                            <a href="https://linkedin.com/in/omkar-seshadri" target="_blank" > <div className="email text-center"><h3 className="mt-2"><i class="fa-brands fa-linkedin"></i></h3></div> </a>
                                            </div>
                                            <div className="d-flex gap-4 mt-2">
                                             <h5 className="mt-2">Check out Resume</h5>   
                                            <a href="./Omkar_Seshadri_CV (3).pdf" target="_blank" > <div className="email text-center"><h3 className="mt-2"><i class="fa fa-file"></i></h3></div> </a>
                                            </div>
                                            </div>
                                           </div>

                                       

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact;