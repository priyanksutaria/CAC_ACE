import React from 'react';

const VolunteerSignInPage = () => {
  return (
    <html lang="en">
      <head>
        <title>Volunteer Sign In</title>
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

        
        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">RePlate</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
              {/* <li className="nav-item"><a href="causes.html" className="nav-link">Causes</a></li> */}
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
              <li className="nav-item active"><a href="signin.html" className="nav-link">Sign In</a> </li>
            </ul>
          </div>
        </div>
      </nav>
        {/* END nav */}
        
        <div className="hero-wrap" style={{backgroundImage: "url('images/image_3.jpg')", backgroundSize: "cover"}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
                  <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                      <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Sign In to Volunteer</h1>
                      <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="index.html">Home</a> <span className="mr-2">/</span> <span>Sign In</span></p>
                  </div>
              </div>
          </div>
      </div>
      
      <section className="ftco-section contact-section ftco-degree-bg">
          <div className="container">
              <div className="row justify-content-center mb-5">
                  <div className="col-md-6 text-center">
                      <h2 className="h4 mb-4">Sign In</h2>
                      <form action="#">
                          <div className="form-group">
                              <input type="text" className="form-control" placeholder="Enter your Email id/Phone number" />
                          </div>
                          <div className="form-group">
                              <input type="password" className="form-control" placeholder="Enter Password" />
                          </div>
                          <div className="form-group">
                              <input type="submit" value="Log In" className="btn btn-primary py-3 px-5" />
                          </div>
                          <p className="mb-0"><a href="forgetpass.html">Having Trouble signing in? Forgot Password</a></p>
                      </form>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                      <h2 className="h4 mb-4">Sign Up</h2>
                      <p>If you haven't registered already, sign up now to become a volunteer.</p>
                      <a href="volunteer.html" className="btn btn-primary py-3 px-5">Sign Up Now</a>
                  </div>
              </div>
          </div>
      </section>
      
        <footer className="ftco-footer ftco-section img">
          <div className="overlay"></div>
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">About Us</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-md-2">
                 <div className="ftco-footer-widget mb-4 ml-md-4">
                  <h2 className="ftco-heading-2">Site Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="index.html" className="py-2 d-block">Home</a></li>
                    <li><a href="about.html" className="py-2 d-block">About</a></li>
                    <li><a href="contact.html" className="py-2 d-block">Contact</a></li>
                    <li><a href="donate.html" className="py-2 d-block">Donate</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Have a Questions?</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker"></span><span className="text">DJSCE VILE PARLE INDIA</span></li>
                      <li><a href="#"><span className="icon icon-phone"></span><span className="text">+91 123456789</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope"></span><span className="text">replate@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved </p>
              </div>
            </div>
          </div>
        </footer>
      
    

      {/* loader */}
      <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


      <script src="js/jquery.min.js"></script>
      <script src="js/jquery-migrate-3.0.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      {/* <script src="js/jquery.easing.1.3.js"></script> */}
      <script src="js/jquery.waypoints.min.js"></script>
      <script src="js/jquery.stellar.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.magnific-popup.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/jquery.animateNumber.min.js"></script>
      {/* <script src="js/bootstrap-datepicker.js"></script> */}
      {/* <script src="js/jquery.timepicker.min.js"></script> */}
      <script src="js/scrollax.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
      <script src="js/google-map.js"></script>
      <script src="js/main.js"></script>
        
      </body>
    </html>
  );
};

export default VolunteerSignInPage;
