import React, { useEffect, useRef, useState } from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './styles.module.css';
import SocialLinks from './components/_SocialLinks';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{
            minHeight: bannerHeight,
            display: isLoading ? 'none' : 'block',
          }}
        >
          <p>Hey there, my name is</p>
          <h1 className="colorSuccess">Stephanie Marchante</h1>
          <p>
            I am a <span className="colorWarning">Software Engineer</span> and{' '}
            <span className="colorDanger">Developer Educator</span> who's
            excited about making developers lives easier, with great docs!
          </p>
          <SocialLinks />
          <p>
            A bit more about me <Link to={useBaseUrl('#main')}>below</Link>...
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="underlineColorSuccess">
            Engineering | Documentation | Mentorship
          </h2>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl('img/profilepic.jpg')}
            />
          </div>
          <div class={styles.aboutText}>
            <h2>Get to know Steph </h2>
            <p>
              I am a Full Stack Software Engineer and Developer Educator. I'm
              also a professional bass guitarist after 5pm PST.
            </p>
            <p>
              I'm super passionate about{' '}
              <Link to={useBaseUrl('projects/')}>
                writing seamless and effective developer documentation
              </Link>
              , and am always noodling on how best to distill complex technical
              concepts to wide audiences.
            </p>
            <p>
              My Engineering career started at Amazon on the{' '}
              <a href="https://developer.amazon.com/en-US/alexa/devices/connected-devices">
                Alexa Gadgets team{' '}
              </a>
              where I programmed low-level (C++) code for Alexa hardware
              devices.
            </p>
            <p>
              Concurrently, I took two years to Mentor and teach Python courses
              to dozens of BIPOC, non-traditional Engineering students of{' '}
              <a href="https://adadevelopersacademy.org/">
                Ada Developer's Academy
              </a>
              . It was intensely fulfilling work and informed my decision to
              transition into Developer Education.
            </p>
            <p>
              Thanks for visiting my Portfolio! Take a look around to see what
              I've worked on and what I'm up to!
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl('blog/')}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl('docs/')}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
