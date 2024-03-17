import React from 'react';

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        <title>RePlate</title>
        <link rel="icon" type="image/x-icon" href="/images/iconn.png" alt="Avatar" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,400i,600,700" rel="stylesheet" />
        
        <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="css/animate.css" />
        
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        
        <link rel="stylesheet" href="css/aos.css" />
        
        <link rel="stylesheet" href="css/ionicons.min.css" />
        
        <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="css/jquery.timepicker.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        {/* Scroll to top button */}
        <button id="btnScrollToTop">
          <i className="material-icons">arrow_upward</i>
        </button>
        
        <nav className=" mb-4 navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <span className="logo-image">
                <img id="medic-donation-icon" src="images/iconn.png" className="img-fluid" alt="RePlate Logo" />
              </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>
            
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                {/* <li className="nav-item"><a href="causes.html" className="nav-link">Causes</a></li> */}
                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                <li className="nav-item"><a href="signin.html" className="nav-link">Sign In</a></li>
                <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        
        <div className="hero-wrap" style={{backgroundImage: "url('images/img8.jpg')", backgroundSize: "contain"}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                <h1 className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 3 }">The essence of food donation lies in selflessness and the desire to uplift others.</h1>
                {/* 6174 */}
              </div>
            </div>
          </div>
        </div>
        
        <section className="ftco-counter ftco-intro" id="section-counter">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 color-1 align-items-stretch">
                  <div className="text">
                    <span>Donated Over</span>
                    <strong className="number" data-number="1432805">0</strong>
                    <span>200+ Food Items in India</span>
                  </div>
                </div>
              </div>
              <form className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 color-2 align-items-stretch">
                  <div className="text">
                    <h3 className="mb-4"> Be A Donor</h3>
                    <p>Become a donor by jus donating the extra food you have. Kindly fill the details of food here.</p>
                    <p><a href="donate.html" className="btn btn-white px-3 py-2 mt-2">Donate Now</a></p>
                  </div>
                </div>
                <div className="block-18 color-3 align-items-stretch">
                  <div className="text">
                    <h3 className="mb-4">Be a Volunteer</h3>
                    <p>Become a volunteer by registering yourself here.</p>
                    <p><a href="donate.html" className="btn btn-white px-3 py-2 mt-2">Be A Volunteer</a></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                  <div className="icon d-flex mb-3"><span className="flaticon-donation-1"></span></div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Who are Donars?</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                  <div className="icon d-flex mb-3"><span className="flaticon-charity"></span></div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Who Are Volunteers?</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 d-flex services p-3 py-4 d-block">
                  <div className="icon d-flex mb-3"><span className="flaticon-donation"></span></div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Sponsorship</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section ftco-animate text-center">
                <h2 className="mb-4">Latest Donations</h2>
                <p>Dude, let's give some food.</p>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12 text-center">
                <section id="slider" className="pt-5">
                  <div className="container">
                    <div className="row justify-content-center pb-3">
                      
                    </div>
                    <div className="slider">
                      <div className="owl-carousel ">
                        <div className="slider-card">
                          <div className="d-flex justify-content-center align-items-center mb-4">
                            <img src="images/p9.jpg" alt="" />
                          </div>
                          <div className="info ml-4 ">
                            <h3><a href="teacher-single.html" className="text-dark"><b> Manasvi Goel</b></a></h3>
                            <span className="position text-dark">Donated Just now</span>
                            <div className="text text-dark">
                              <p>Donated <span className="text-dark">$300</span> for <a href="#" className="text-dark">Children Needs Food</a></p>
                            </div>
                          </div>
                        </div>
                        <div className="slider-card">
                          <div className="d-flex justify-content-center align-items-center mb-4">
                            <img src="images/p2.jpg" alt="" />
                          </div>
                          <div className="info ml-4 ">
                            <h3><a href="teacher-single.html" className="text-dark"><b>Priyank Sutaria </b></a></h3>
                            <span className="position text-dark">Donated Just now</span>
                            <div className="text text-dark">
                              <p>Donated <span className="text-dark">$300</span> for <a href="#" className="text-dark">Children Needs Food</a></p>
                            </div>
                          </div>
                        </div>
                        {/* Add more slider cards */}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        
        {/* Add more sections and content */}
        
        <footer className="ftco-footer ftco-section img">
          {/* Footer content */}
        </footer>
        
        {/* Loader */}
        <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" />
            <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" stroke="#F96D00" />
          </svg>
        </div>
        
        {/* Scripts */}
        <script src="js/jquery.min.js"></script>
        {/* Include other scripts */}
        
        <script>
          // Add your custom script here
        </script>
        
      </body>
    </html>
  );
};

export default HomePage;
