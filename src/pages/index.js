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
            <a href="#about" className="btn btn-primary">
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
            <h2 className="text-white mb-4">About RGA</h2>
            <p className="text-white-50">
             Roger Gracie is a ten time Jiu-Jitsu world champion. He is the grandson of the founder of the art, Carlos Gracie. Son of Mauricio Gomes and Reila Gracie. The Gracie family has been the driving force in the growth of Jiu-Jitsu and the revolution in the martial arts around the world. The Headquarters of RGA is based in London, where Roger and his father Mauricio teach world class Jiu-Jitsu. 
            </p>
            <p className="text-white-50">
             RGA Darlington opened the doors in March 2022 by <b>David Mooore</b> and <b>Jakub Niski.</b> Their partnership brings a variety and wealth of Jiu-Jitsu experience. Jakub who has trained since 2015 in RGA London Headquarters with Roger and Mauricio themselves, is a multiple IBJJF and UAEJJF medallist. David who began training in 2012 is a British Open and NAGA Champion. 

            </p>
          </div>
        </div>
       {/* <img src={ipad} className="img-fluid" alt="" /> */}
      </div>
    </section>

    <TimetableSection />

    <section id="classes" className="classes-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-0 mb-lg-0">
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

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={noGi} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">NO-GI/Submission Grappling</h4>
                  <p className="mb-0 text-white-50">
                   NO GI/Submission Grappling is the ground-fighting martial art focused on joint locks, chokes, and positions. It is the science of using leverage, human body mechanics, balance, and technique to create favorable situations against a live opponent. It is the practical approach to the MMA ground game.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={wrestling} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Wrestling</h4>
                  <p className="mb-0 text-white-50">
                  Wrestling is a hand-to-hand combat system and a set of combat sports involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={kids} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Kids</h4>
                  <p className="mb-0 text-white-50">
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
