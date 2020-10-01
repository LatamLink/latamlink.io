import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from '@theme/Layout';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Particles from 'react-particles-js';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homepage.css';

const lightTheme = makeStyles({
    heroHead:{
      backgroundColor:"transparent"
    },
    card:{
      backgroundColor: '#FFFFFF'
    },
    imgcard:{
      display:'block',
      width:50,
      margin: 'auto',
      marginTop: 30,
      marginBottom: 30 
    },
    overline:{
      fontFamily: "Roboto",
      fontSize: 12.7,
    },
    title: {
      fontSize: 21.1,
      fontWeight: "bold",
    },
    body: {
      fontSize: 13.8,
      height:55
    },
    media: {
      objectFit: "cover",
      objectPosition:"bottom",
    }
  });

const ParticleSection = () => {
  return(
    <Particles
      height={"90vh"}
      style={{backgroundColor:"#f7f7f7"}}
      params={{ 
        particles: { 
          number: {
            value: 100,
            max: -1,
            density: {
                enable: true,
                area: 1500
            }
          },
          color: {
            value: "#bdbdbd",
          },
          links: {
            color: "#bdbdbd",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 10,
          },
          move: {
            direction: "top",
            enable: true,
            outMode: "out",
            random: false,
            speed: 1,
            straight: false,
          },    
        }, 
      }} 
    />
  );
}

function Scroll(){
    $("html,body").animate(
      {
        scrollTop: 550,
      },
      "slow"
    );
}

const HeroSection = () => {
  return (
    <div>
        <ParticleSection />
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: 'transparent'
          }}
         className="pt-0 pl-4 pr-4 content-header"
         >
          <img className="img-fluid" src="images/latamlink_logo-header.svg" alt="" />
          <div className="container-fluid text-center">
              <button onClick={Scroll} id="more" style={{fontSize: '5em'}} className="text-secondary btn bg-transparent">
                  <i className="fas fa-angle-down" style={{color:"#0bb155"}}></i>
              </button>
          </div>
        </div>
    </div>
  );
}

const AboutCards = (props) => {
    return (
        <div className="information-card">
            <div className="text-top mr-4">
                <img src={props.img} width="110" alt="" />
            </div>
            <div>
                <h4>{props.title}</h4>
                <p className="information-card-text text-justify"> {props.body}</p>
            </div>
        </div>
    );
}

const AboutSection = () => {
    return (
        <section id="acerca" className="mt-5 pr-2 pl-2 mb-5 information-grid">
            <AboutCards 
                img="images/latamlink_Floor_Light_1853.svg"
                title="Learn About EOSIO"
                body=" LatamLink offers tools for projects in Latin America to explore the benefits of the EOSIO blockchain technology."
            ></AboutCards>
            <AboutCards 
                img="images/latamlink_finger_108.svg"
                title="Put your dApps to the test"
                body="LatamLink includes a local environment to build and test decentralized applications (dApps)."
            ></AboutCards>
            <AboutCards 
                img="images/latamlink_cog_104.svg"
                title="Test your infrastructure"
                body="LatamLink enables developers and organizations a solid platform to test blockchain infrastructure."
            ></AboutCards>
        </section>
    );
}

const InformationSection = () => {
    return (
      <div className="mt-5 mb-5 pb-3 information-grid-footer">
        <div className="information d-flex flex-column">
          <div className="text-justify">
            <h2 className="text-left mb-4 font-weight-bold">
              <span className="underline">
                What is LatamLink ?
              </span>
            </h2>
            <br />
            <span>
                LatamLink is a voluntary regional alliance led by Latin American technology companies. 
                We develop an EOSIO-based testnet for the
                <a style={{color: "#5bb517"}} href="https://www.lacchain.net/" target="_blank"> LACChain </a>
                network to highlight the benefits of this technology. 
                LatamLink deploys a public permissioned version of EOSIO technology for Latin American developers and organizations
                 to test their decentralized applications and infrastructure.
            </span>
            <h2 className="h3" style={{padding: "20px 0 0 0"}} >
                What is LACChain?
            </h2>
            <span>
                LACChain is an initiative by IDB Lab (part of the 
                <a style={{color: "#5bb517"}} href="https://www.iadb.org/en" target="_blank"> Inter-American Development Bank</a>) 
                to accompany and accelerate the development of the blockchain ecosystem in Latin America. 
                It aims to establish national consortiums in the region, to develop and promote standards for interoperability of 
                networks, and to develop and maintain interoperable blockchain infrastructures.
            </span>
            <h2 className="h3"  style={{padding: "20px 0 0 0"}}>
                What is EOSIO?
            </h2>
            <span>
                EOSIO is a next-generation blockchain technology launched in 2018 by 
                <a style={{color: "#5bb517"}} href="https://block.one/" target="_blank"> block.one</a>, 
                a leading company that provides high-performance blockchain solutions. EOSIO enables 
                greater flexibility, scalability, and cost-efficiency, allowing up to 4,000 transactions per second in its network.
            </span>
            <h3 className="h4"  style={{padding: "20px 0 0 0"}}>
                LatamLink is led by:
            </h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a target="_blank" href="https://www.eosargentina.io/">EOS Argentina</a>
              </li>
              <li className="list-group-item">
                <a target="_blank" href="https://eoscostarica.io/">EOS Costa Rica</a>
                <br />
              </li>
              <li className="list-group-item">
                <a target="_blank" href="https://eosvenezuela.io/">EOS Venezuela</a>
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
        <div className="information-img">
          <img className="img-fluid" src="images/map-content-home.png" alt="" />
        </div>
      </div>
    );
}

const GetStartedSteps = (props) => {
    return (
        <div className="get-started-step">
            <img className="get-started-icon" height="30" width="30" src={props.img} alt="Explorar EOSIO" />
            <p className="ml-4 text-justify">
                <strong className="h4">{props.title}</strong>
                <br />
                <br />
                <span>{props.body}
                    <a href={props.href} target="_blank">{props.info}</a>.
                </span>
            </p>
        </div>
    );
}

const WhyChoose = () => {
    return (
      <section id="iniciar" className="get-started-structure pt-5 pl-3 pr-3 pb-5">
        <div className="mt-5 mb-5 get-started-header">
          <h2 className="h1 text-center font-weight-bold">
            <span className="underline">Why Choose LatamLink?</span>
          </h2>
        </div>
        <div className="get-started-steps">
          <GetStartedSteps
              title="1. It allows you to explore EOSIO"
              img="images/latamlink_Rocket_1885.svg"
              body="EOSIO is an open-source blockchain technology that enables greater flexibility, scalability, and cost-efficiency, 
              which is ideal for enterprise and social impact solutions."
              href="https://eos.io/"
              info=" Read more about EOSIO here"
          ></GetStartedSteps>
          <GetStartedSteps
              title="2. We are part of the LACChain initiative"
              img="images/latamlink_sun_1004125.svg"
              body="LACChain is an initiative of IDB Lab to foster the blockchain ecosystem in Latin America. It builds alliances with 
              leading companies in the blockchain field and integrates major blockchain technologies into its LACChain network. 
              For more information about LACChain,"
              href="https://medium.com/@lacchain.official/what-is-the-lacchain-global-alliance-and-what-does-it-consist-of-861cb76257b1"
              info=" visit this link"
          ></GetStartedSteps>
          <GetStartedSteps
              title="3. It offers an integral solution"
              img="images/latamlink_Rocket_1885.svg"
              body="LatamLink deploys a public permissioned version of EOSIO technology for Latin America. 
              We include some features such as a local development and testing environment, a monitor service, 
              and adaptability to API endpoints, wallets, and other tools. Check the full list below. ."
              href=""
              info=""
          ></GetStartedSteps>
        </div>
        <img className="img-fluid get-started-img" src="images/mobile-previews-fake.png" alt="" />
    </section>
    );
}

const BannerSection = () => {
    return (
        <section className="banner">
            <h4 className="font-weight-light text-center">
            "LatamLink is a voluntary regional alliance to highlight the benefits
            of the EOSIO blockchain."
            </h4>
            <img className="img-fluid" src="images/latamlink_logo-footer.svg" alt="" />
      </section>
    );
}

const CustomCard = (props) => {
  let classes = lightTheme();

  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea onClick={() => window.open(props.href, "_self")}>
        <div className="card-img-container"> 
          <img src={props.img} className={classes.imgcard}/>
        </div>
        <CardContent>
          <Typography className={classes.title}  gutterBottom variant="h5" component="h2">{props.title}</Typography>
          <Typography className={classes.body} variant="body2" component="p">{props.body}</Typography>
        </CardContent>
      </CardActionArea>
  </Card>
  );
}

const ToolsSection = () => {
  return (
    <section id="herramientas" className="d-flex pb-5 pt-5 flex-column justify-content-sm-center">
      <div className="tools-header text-center mb-4">
        <h2 className="h1">
          <span className="underline">Tools</span>
        </h2>
        <br />
        <p className="text-justify text-center">
            These are some tools and resources LatamLink offers to help you leverage your 
            decentralized app or blockchain infrastructure.
        </p>
      </div>
      <div class="container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="/docs/eosio"
              img="images/docse-01.svg"
              title="Documentation"
              body="A curated list of resources to learn from experts in the blockchain industry."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://dashboard.latamlink.io"
              img="images/latamlink_Monitor_1014.svg"
              title="Network Monitor"
              body="A network monitor service that allows for tracebility of network activity."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://developers.eos.io/manuals/eos/latest/cleos/index"
              img="images/latamlink_Laptop_187.svg"
              title="Cleos"
              body="Implementation of the command-line tool known as cleos developed by block.one"
            />
          </Grid>    
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://github.com/eoscostarica/eosio-network-bootstrap"
              img="images/latamlink_Wrench_1004034.svg"
              title="Development Environment"
              body="Has a local environment for developing decentralized applications
              (dApps) based on EOSIO."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://t.me/latamlink"
              img="images/latamlink_balloon-1.svg"
              title="Telegram Group"
              body="to coordinate and share relevant information related to the EOSIO ecosystem and LatamLink."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CustomCard 
              href="https://github.com/latamlink"
              img="images/Github-VerGreen-SVG-Hermes-22-04-20.svg"
              title="GitHub"
              body="GitHub profile to foster a community of developers."
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

const HomePage = () => {  
    return (
        <div>
          <link rel="canonical" href="https://latamlink.io/" />
          <Layout>
            <HeroSection/>
            <AboutSection/>
            <br />
            <hr />
            <InformationSection/>
            <WhyChoose/>
            <BannerSection/>
            <ToolsSection/>
          </Layout>
        </div>
    );
  };
  
  export default HomePage;
