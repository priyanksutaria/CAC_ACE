import React from 'react';
import './donation_form.css'; // Import CSS file for donation form styles

const DonateForm = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Donate for charity</title>
        <style>
          {`
            .button-5 {
              align-items: center;
              background-clip: padding-box;
              background-color: #fa6400;
              border: 1px solid transparent;
              border-radius: .25rem;
              box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
              box-sizing: border-box;
              color: #fff;
              cursor: pointer;
              display: inline-flex;
              font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
              font-size: 16px;
              font-weight: 600;
              justify-content: center;
              line-height: 1.25;
              margin: 0;
              min-height: 3rem;
              padding: 10px;
              position: relative;
              text-decoration: none;
              transition: all 250ms;
              user-select: none;
              -webkit-user-select: none;
              touch-action: manipulation;
              vertical-align: baseline;
              width: auto;
            }

            .button-5:hover,
            .button-5:focus {
              background-color: #fb8332;
              box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            }

            .button-5:hover {
              transform: translateY(-1px);
            }

            .button-5:active {
              background-color: #c85000;
              box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
              transform: translateY(0);
            }
          `}
        </style>
      </head>
      <body>
        <div className="doncon">
          <div className="donbox">
            <div style={{ fontSize: '24px' }} className="title">
              DONOR FORM
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }} className="inner">
              <div style={{}} className="fields">
                <input type="text" id="firstName" placeholder="First Name" />
                <input style={{ marginTop: '19px' }} type="text" id="lastName" placeholder="Last Name" />
                <input style={{ marginTop: '19px' }} type="number" id="phone" placeholder="Mobile" />
                <input style={{ marginTop: '19px' }} type="text" id="email" placeholder="Email" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10%' }} className="donate">
                <div style={{ marginTop: '15%', textAlign: 'center' }} className="button-5">
                  Rs.200
                </div>
                <div style={{ marginTop: '12px', textAlign: 'center' }} className="button-5">
                  Rs.500
                </div>
                <div style={{ marginTop: '12px', textAlign: 'center' }} className="button-5">
                  Rs.1000
                </div>
                <div style={{ marginTop: '12px', textAlign: 'center' }} className="button-5">
                  Rs. <input type="text" className="set-amount" placeholder="" />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="btn-6">
              <div style={{ marginTop: '24px', width: '95%', textAlign: 'center' }} className="button-5">
                Donate Food
              </div>
            </div>
            <div style={{ fontSize: '40px' }} className="footer">
              DONATE NOW!
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default DonateForm;
