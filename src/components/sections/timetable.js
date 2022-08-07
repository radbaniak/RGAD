import React, {useState} from 'react';
import timetableImage from '../../assets/images/RGA-summer.png';

const TimetableSection = () => {
  return (
    <section id="timetable" className="timetable-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-lg-12">
              <img className="img-fluid mb-3 mb-lg-0" src={timetableImage} alt="RGA-timetable-image" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default TimetableSection;