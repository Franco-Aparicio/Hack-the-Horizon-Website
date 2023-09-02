import {useEffect, useState} from 'react';
import {FOOTER, SOCIALS, TOP_SECTION} from '../../Module/General';
import {Btn} from '../Landing';
import cross from './assets/cross.svg';
import DevPost from './assets/icons8-dev-post.svg';
import Dis from './assets/icons8-discord.svg';
import Insta from './assets/icons8-instagram.svg';
import Linked from './assets/icons8-linkedin-2.svg';
import Mail from './assets/icons8-mail.svg';
import Twitter from './assets/icons8-twitter.svg';
import PrivacyPolicy from './assets/Privacy policy.pdf';
import TermsOfUse from './assets/Terms of use.pdf';
//------------------------------------------------------------------
import './style.scss';

const GithubTemplate = ({hideTemplate}) => {
  return (
    <div className="template">
      <div className="template-left">
        <p>
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>Join us</a>! We
          will be hosting workshops, tech talks, panel discussions, and career
          sessions!
        </p>
      </div>
      <img onClick={hideTemplate} src={cross} alt={'template'} />
    </div>
  );
};

const Footer = () => {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="instagram" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="discord" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="linkedin" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="email" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="twitter (X)" />
            </a>
          </div>
          {/*<div className="social-icon">*/}
          {/*  <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>*/}
          {/*    <img src={DevPost} alt="devpost"/>*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
        <div className="Register_a">
          <a
            target="_blank"
            rel="noreferrer"
            href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}
          >
            <Btn type="Register" overlay="Hacker registration" />
          </a>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a
              target="_blank"
              rel="noreferrer"
              href={FOOTER.VOLUNTEERING_FORM.src}
            >
              <Btn type="Volunteer" class="Volunteer" overlay="Help us out" />
            </a>
          )}
        </div>
        <div className="footer_info">
          <p>
            Contact us at{' '}
            <a href={SOCIALS.email}>
              <em>{SOCIALS.mail}</em>
            </a>{' '}
          </p>

          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Privacy Policy</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={TermsOfUse}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Terms of Use</p>
            </a>
          )}
          <p>
            Hack The Horizon is run by{' '}
            <a
              rel="noreferrer"
              href="https://sop.utoronto.ca/group/utmhacks/"
              target="_blank"
            >
              UTMHacks
            </a>
            !
          </p>
          <br />
        </div>
        {template && viewTemplate && (
          <GithubTemplate hideTemplate={() => setViewTemplate(false)} />
        )}
      </div>
    </div>
  );
};

export default Footer;
