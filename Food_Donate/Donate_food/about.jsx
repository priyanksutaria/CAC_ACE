import React from 'react';
import './App.css'; // Import your CSS file

function About() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span className="logo-image">
              <img id="medic-donation-icon" src="images/iconn.png" alt="RePlate" className="img-fluid" />
            </span>
            RePlate
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
              <li className="nav-item active"><a href="about.html" className="nav-link">About</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
              <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-wrap" style={{ backgroundImage: "url('images/FOOD DONATION.avif')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
            <div className="col-md-7 ftco-animate text-center" data-scrollax="properties: { translateY: '70%' }">
              <p className="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span className="mr-2"><a className="text-dark" href="index.html">Home</a></span> <span className="text-dark">About</span></p>
              <h1 className="mb-3 bread text-dark" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex ftco-animate">
              <div className="img img-about align-self-stretch" style={{ backgroundImage: "url(images/event-5.jpg)", width: "100%" }}></div>
            </div>
            <div className="col-md-6 pl-md-5 ftco-animate">
              <h2 className="mb-4">Welcome to RePlate</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla, doloribus modi fugiat ipsa incidunt ratione minima. Quisquam aliquam excepturi nisi repudiandae cupiditate cum reprehenderit doloremque fugiat, similique, adipisci tenetur?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias quaerat suscipit accusantium eveniet expedita excepturi voluptates eius labore tenetur sint blanditiis praesentium, ipsa quod necessitatibus voluptas aliquid beatae dignissimos..</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add the rest of your JSX code here */}

    </div>
  );
}

export default About;
