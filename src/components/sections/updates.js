import React from 'react';
import photo1 from '../../assets/images/portrait1.jpg';


const UpdatesSection = () => {
  return (
    <section id="updates" className="updates-section bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Meet the team</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img className="card-img-top rounded-circle img-fluid mx-auto" src={photo1} alt="Photo 1" style={{maxWidth: '60%'}} />
              <div className="card-body">
                <p className="card-text">Caption for Photo 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img className="card-img-top rounded-circle img-fluid mx-auto" src={photo1} alt="Photo 2" style={{maxWidth: '60%'}} />
              <div className="card-body">
                <p className="card-text">Caption for Photo 2</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img className="card-img-top rounded-circle img-fluid mx-auto" src={photo1} alt="Photo 3" style={{maxWidth: '60%'}} />
              <div className="card-body">
                <p className="card-text">Caption for Photo 3</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4">
            <div className="card text-center">
              <img className="card-img-top rounded-circle img-fluid mx-auto" src={photo1} alt="Photo 4" style={{maxWidth: '60%'}} />
              <div className="card-body">
                <p className="card-text">Caption for Photo 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;
