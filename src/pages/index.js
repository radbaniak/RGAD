import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

// import ipad from '../assets/images/ipad.png';
import TimetableSection from '../components/sections/timetable';
import bjjImage from '../assets/images/bjj_rga.jpeg';
import noGi from '../assets/images/no_gi_rga.jpeg';
import wrestling from '../assets/images/wrestling.jpeg'
import kids from '../assets/images/kids.jpeg'
import gym from '../assets/images/gym.jpeg'
import UpdatesSection from '../components/sections/updates';

 
const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary mx-auto">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About Roger Gracie Academy Darlington</h2>
           {/* Add the gym image here */}
           <div className="mb-4">
              <img src={gym} className="img-fluid" alt="Gym" />
            </div>
            <p className="text-white-50">
            Roger Gracie Academy Darlington opened its doors in March 2022. Head Coach <b>Jakub Niski</b> has trained since 2015 in RGA HQ, London directly under Roger Gracie and Mauricio Gomes. He brings a wealth of knowledge and experience have trained and competed at the highest level. Jakub is a multiple IBJJF and UAEJJF medalist. 
            </p>
            <p className="text-white-50">
            Roger Gracie is one of the greatest jiu-jitsu competitors to have ever stepped on a mat. A 10x Black Belt World Champion and a multiple MMA champion, Roger is one the most decorated fighters of the modern era, and a member of the International Brazilian Jiu-Jitsu Federation Hall of Fame. Roger is the son of Reila Gracie and Mauricio Gomes (one of a handful of men who received their black belts from Jiu-Jitsu legend Rolls Gracie), and the grandson of Carlos Gracie.

At RGA Darlington we believe implicitly in the core values set out by Roger and Mauricio:

<div id="spacer"><h5>Discipline</h5></div>
<h5>Consistency</h5>
<h5>Accountability</h5>
<h5>Alignment</h5>
<h5>Authenticity</h5>
            </p>
          </div>
        </div>
       {/* <img src={ipad} className="img-fluid" alt="" /> */}
      </div>
    </section>
    {/* <UpdatesSection /> */}
    <TimetableSection />
    

    <section id="classes" className="classes-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-4">
          <div className="col-xl-6 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={bjjImage} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Jiu Jitsu</h4>
              <p className="text-black-50 mb-0">
               Gracie Jiu Jitsu is one of the most effective, reality-based fighting systems in the world. Created by the Gracie Family, the basic premise of Jiu-Jitsu is that 90% of fights end up on the ground. As such, Jiu-Jitsu is focused primarily on effective ground fighting. The goal is to put an opponent into situations on the ground where joint locks and/or chokes can be applied to force him/her to submit.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-4">
          <div className="col-lg-6">
            <img className="img-fluid" src={noGi} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-black">No-Gi Submission Grappling</h4>
                  <p className="mb-0 text-black-50">
                   No-Gi Submission Grappling is the ground-fighting martial art focused on joint locks, chokes, and positions. It is the science of using leverage, human body mechanics, balance, and technique to create favorable situations against a live opponent. It is the practical approach to the MMA ground game.
                  </p>
                  {/* <hr className="d-none d-lg-block mb-0 ml-0" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-4">
          <div className="col-lg-6 ml-0">
            <img className="img-fluid" src={wrestling} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white mr-3">Wrestling</h4>
                  <p className="mb-0 text-white-50 mr-3">
                  Wrestling is a hand-to-hand combat system and a set of combat sports involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-4">
          <div className="col-lg-6 mr-0">
            <img className="img-fluid" src={kids} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white ml-3">Kids</h4>
                  <p className="mb-0 text-white-50 ml-3 mr-3">
                   History has shown that martial arts can be an excellent teacher for children to learn life skills such as discipline, mental strength, focus, hard work, integrity, confidence, teamwork, and more. Ultimately, martial arts are about continuous self-improvement physically, mentally, emotionally, and spiritually. Of course, the goal is also to bully-proof your child against bullies. The scars of bullying can last a lifetime and can destroy self-esteem and confidence.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Subscribe />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
