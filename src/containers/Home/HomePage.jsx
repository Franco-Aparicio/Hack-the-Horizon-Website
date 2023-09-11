import {UseMedia} from 'hooks/useMedia';
import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Logo, LogoSectionAbout} from '../../components/About';
import {Accordion} from '../../components/Accordian';
import Birds from '../../components/Animation';
import Footer from '../../components/Footer/index.jsx';
import {Myinfo} from '../../components/Landing';
import {FirstPrize, PrizeHeading} from '../../components/Prizes';
import Media from '../../components/Socials/index.jsx';
import {
  Sponsor,
  SponsorsHead,
  SponsorUS
} from '../../components/Sponsors/sponsors.jsx';
import {JoinTeam, Member} from '../../components/Team';
import {
  FOOTER,
  frequentlyAskedQuestions,
  JudgesInfo,
  Prizeinfo,
  sponsorLogos,
  TeamInfo
} from '../../Module/General';
import './about.css';
import bgPattern from './assets/background-pattern.png';
import Countdown from 'components/Countdown';

const SponsorGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={6}>
          {' '}
          <Sponsor srcx={s.src} altx={s.alt} />{' '}
        </Col>
      ))}
    </Row>
  );
};

// Prize group
const PrizeGroup = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <FirstPrize
            iconClass={s.iconClass}
            type={s.type}
            content={s.content}
          />
        </Col>
      ))}
    </Row>
  );
};

// Prize group ending
const TeamMembers = (props, index) => {
  return (
    <Row key={index} className="members">
      {props.map((s, i) => (
        <Col key={i} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index} className="sf">
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

export default function HomePage() {
  const [media, setMedia] = useState();
  UseMedia('min-width', 1000, setMedia);

  return (
    <div className="Whole_div" style={{backgroundImage: `url(${bgPattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            {/*<Col className="info-div" sm={12} lg={7} md={7}>*/}
            <Myinfo />
            {/*</Col>*/}
            {/*<Col className="d-image" sm={12} lg={5} md={5}>*/}
            {/*  /!*<MyCalender />*!/*/}
            {/*</Col>*/}
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        {/*<Row className="prizesection" id="prizes">*/}
        {/*  <PrizeHeading type="Prizes!"/>*/}
        {/*  {Prizeinfo.map(PrizeGroup)}*/}
        {/*</Row>*/}
        {/* ********Prizes ending here ***** */}

        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          {/*<SponsorsHead />*/}
          <SponsorUS />
          {/*{sponsorLogos.map(SponsorGroup)}*/}
        </Row>
        {/* ********Sponsors ending here ***** */}

        {media && <Birds top="120vh" left="0vh" type="" />}

        {/* ********Team here ***** */}
        {/*<h1 id="team">Our Team</h1>*/}
        {/*{FOOTER.VOLUNTEERING_FORM.required && (*/}
        {/*  <JoinTeam*/}
        {/*    placeholder="Volunteer"*/}
        {/*    formLink={FOOTER.VOLUNTEERING_FORM.src}*/}
        {/*    content="Help us out"*/}
        {/*  />*/}
        {/*)}*/}
        {/*{TeamInfo.map(TeamMembers)}*/}
        {/* ********Team ending here ***** */}

        {/* ********Judges here ***** */}

        {/*<h1 id="team">Judges</h1>*/}
        {/*{FOOTER.JUDGES_FORM_LINK.required && (*/}
        {/*  <JoinTeam*/}
        {/*    placeholder="Join as a Judge"*/}
        {/*    formLink={FOOTER.JUDGES_FORM_LINK.src}*/}
        {/*    content="Apply to judge projects"*/}
        {/*  />*/}
        {/*)}*/}
        {/*{JudgesInfo.map(TeamMembers)}*/}
        {/* ********Team ending here ***** */}
        {/*<Countdown />*/}
      </Container>
      <Footer />
    </div>
  );
}
