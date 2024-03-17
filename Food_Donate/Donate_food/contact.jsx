import React from 'react';

const ContactPage = () => {
  return (
    <html lang="en">
      <head>
        <title>zero-one</title>
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
      
            <a className="navbar-brand" href="index.html">
              <span className="logo-image">
                <img id="medic-donation-icon" src="images/iconn.png" className="img-fluid" alt="logo" />
              </span>FOOD Donation
            </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
    
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
              {/* <li className="nav-item"><a href="causes.html" className="nav-link">Causes</a></li> */}
              <li className="nav-item active"><a href="contact.html" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
    
            </ul>
          </div>
        </div>
      </nav>
        {/* END nav */}
        
        <div className="hero-wrap" style={{backgroundImage: "url('images/img5.jpg')"}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Contact Us</h1>
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
              </div>
            </div>
          </div>
        </div>
    
        
        <section className="ftco-section contact-section ftco-degree-bg">
          <div className="container">
            <div className="row d-flex mb-5 contact-info">
              <div className="col-md-12 mb-4">
                <h2 className="h4">Contact Information</h2>
              </div>
              <div className="w-100"></div>
              <div className="col-md-3">
                <p><span>Address:</span> DJSCE ,Vile Parle,India</p>
              </div>
              <div className="col-md-3">
                <p><span>Phone:</span> <a href="tel:+91123456789">+91 123456789</a></p>
              </div>
              <div className="col-md-3">
                <p><span>Email:</span> <a href="mailto:replate@yoursite.com">replate@yoursite.com</a></p>
              </div>
              <div className="col-md-3">
                <p><span>Website</span> <a href="#">replate.com</a></p>
              </div>
            </div>
            <div className="row block-9">
              <div className="col-md-6 pr-md-5">
                <h4 className="mb-4">FEEDBACK</h4>
                <form action="#">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="range" className="form-control" name="vol" placeholder="Rate Us" min="0" max="5" />
                    <label htmlFor="form-control">Rating (between 0 and 5):</label>
                  </div>
                  <div className="form-group">
                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Share Your Experience"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Done!" className="btn btn-primary py-3 px-5" />
                  </div>
                </form>
              </div>
              <div className="col-md-6" id="map"></div>
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
                      <li><span className="icon icon-map-marker"></span><span className="text">DJSCE, Vile Parle, India</span></li>
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
        <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" /></svg></div>
      
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
        <script src="js/bootstrap-datepicker.js"></script>
        <script src="js/jquery.timepicker.min.js"></script>
        <script src="js/scrollax.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
        <script src="js/google-map.js"></script>
        <script src="js/main.js"></script>
    
      </body>
    </html>
  );
};

export default ContactPage;
