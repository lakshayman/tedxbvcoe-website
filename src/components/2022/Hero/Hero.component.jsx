import Fade from 'react-reveal/Fade';

import themeVideoClip from '../../../assets/2022/hero/theme-video-clip.mp4';
import videoPosterDesktop from '../../../assets/2022/hero/hero-section-video-poster.jpg';

import './Hero.styles.scss';

const Hero = () => {
  return (
    <section id='home' className='section section-hero'>
      <Fade>
        <div className='logo-container'>
          <video
            className='logo-desktop'
            src={themeVideoClip}
            poster={videoPosterDesktop}
            autoPlay
            loop
            muted
            playsInline
          />

          <video
            className='logo-mobile'
            src={themeVideoClip}
            poster={videoPosterDesktop}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className='content'>
          <center className='contentSubContainer'>
            <h1 className='heading'><strong style={{color: '#FC3150'}}>TED</strong>xBVCOE 2022</h1>
            <h2 className='subHeading'>To Be Announced <span className="dot dot1">.</span> <span className="dot dot2">.</span> <span className="dot dot3">.</span></h2>
          </center>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
