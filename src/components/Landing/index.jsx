import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico} style={{lineHeight: '0', position: 'relative', top: '7px'}}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2 title={TOP_SECTION.TITLE.FIRST} className="dynamic-colour">{TOP_SECTION.TITLE.FIRST}</h2>
      <h2 title={TOP_SECTION.TITLE.SECOND} className="glitch">{TOP_SECTION.TITLE.SECOND}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p>{TOP_SECTION.SHORT_DESCRIPTION}</p>
      {/*<div className="join_dis">*/}
      {/*  <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>*/}
      {/*    <Btn*/}
      {/*      ico="fab fa-2x fa-discord"*/}
      {/*      class="join_disco"*/}
      {/*      type="Join our Discord"*/}
      {/*      overlay="Click to join"*/}
      {/*    />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <div className="buttom-group">
        {/*<a href={TOP_SECTION.JUDGES_FORM_LINK}>*/}
        {/*  {' '}*/}
        {/*  <Btn class="sponsor_btn" type="Judge" overlay="Apply to be a judge" />*/}
        {/*</a>*/}

        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          {' '}
          <Btn
            class="register"
            type="Register"
            overlay="Hacker registration"
          />
        </a>
          <div className="join_dis">
              <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
                  <Btn
                      ico="fab fa-2x fa-discord"
                      class="join_disco"
                      type="Join our Discord"
                      overlay="Click to join"
                  />
              </a>
          </div>
      </div>
    </div>
  );
};

export {Btn, Myinfo};
