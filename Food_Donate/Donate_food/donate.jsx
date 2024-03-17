import React from 'react';

const DonatePage = () => {
  return (
    <html lang="en">
      <head>
        <title>one-zero</title>
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
            <a className="navbar-brand" href="index.html">FOOD DONATION</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu"></span> Menu
            </button>
          </div>
        </nav>
        {/* END nav */}

        <div className="hero-wrap" style={{backgroundImage: "url('images/image_5.jpg')"}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a href="index.html">Home</a></span> <span>Donate</span></p>
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Donations</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row">
              {/* Your donation cards here */}
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <button className="custom-btn btn-1"><a href="signin.html" className="nav-link">Donate Now</a></button>
        <br />
        <br />
        <br />
        <br />
        <footer className="ftco-footer ftco-section img">
          <div className="overlay"></div>
          <div className="container">
            <div className="row mb-5">
              {/* Your footer content here */}
            </div>
          </div>
        </footer>

        {/* loader */}
        <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div>

        <script src="js/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
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

export default DonatePage;
