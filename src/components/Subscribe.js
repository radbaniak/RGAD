import React from 'react';


export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h2>Sign Up</h2>
            <form action="https://pay.gocardless.com/AL0005H72P8388" target="_blank" className="form-inline d-flex">
              <button id="membership" type="submit" className="btn btn-primary mx-auto">
                Adult Membership
              </button>  
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <form action="https://pay.gocardless.com/AL0004DSMESD4D" target="_blank" className="form-inline d-flex">
              <button id="membership" type="submit" className="btn btn-primary mx-auto">
                Teen Membership
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <form action="https://pay.gocardless.com/AL0004DSMESD4D" target="_blank" className="form-inline d-flex">
              <button id="membership" type="submit" className="btn btn-primary mx-auto">
                Kids Membership
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  );
}
