import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import useThemeContext from '@theme/hooks/useThemeContext';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/homepage.css';

const lightTheme = makeStyles({

});

const DarkTheme = makeStyles({

});

const HeroSection  = () => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;

  if(!isDarkTheme){
    classes = lightTheme();
  }else{
    classes = DarkTheme();
  }
  return(  
    <div className="pt-0 pl-4 pr-4 content-header">
        <img className="img-fluid" src="images/latamlink_logo-header.svg" alt="LatamLink's logo header" />
        <div className="container-fluid text-center">
            <button id="more" className="text-secondary size-button-more-font btn bg-transparent" onClick={Scroll}>
                <i className="fas fa-angle-down color-0bb155"></i>
            </button>
        </div>
    </div>
  );
}

const MainSection  = () => {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  let classes=null;

  if(!isDarkTheme){
    classes = lightTheme();
  }else{
    classes = DarkTheme();
  }
  return(  
    <main className="content">
        <section id="about" className="mt-5 pr-2 pl-2 mb-5 information-grid">
            <div className="information-card">
                <div className="text-top mr-4">
                    <img src="images/latamlink_Floor_Light_1853.svg" alt="Learn about blockchain icon" />
                </div>
                <div>
                    <h1 className="h4">Learn About EOSIO</h1>
                    <p class="information-card-text text-justify">
                        LatamLink offers tools for projects in Latin America to explore the benefits of <a target="_blank" className="color-0bb155" href="https://eos.io/">EOSIO</a> <b>blockchain technology</b>.
                    </p>
                </div>
            </div>
            <div className="information-card">
                <div className="text-top mr-4">
                    <img src="images/latamlink_finger_108.svg" alt="Put yours dapps to test icon" />
                </div>
                <div>
                    <h1 className="h4">Put your dApps to the test</h1>
                    <p className="information-card-text text-justify">
                        LatamLink includes a local environment to build and test 
                        <b> decentralized applications</b> (dApps).
                    </p>
                </div>
            </div>
            <div className="information-card">
                <div className="text-top mr-4">
                    <img src="images/latamlink_cog_104.svg" alt="Test your infraestructure logo" />
                </div>
                <div>
                    <h1 className="h4">Test your infrastructure</h1>
                    <p className="information-card-text text-justify">
                        LatamLink enables developers and organizations a solid platform to test blockchain <b>infrastructure</b>.
                    </p>
                </div>
            </div>
        </section>
        <br />
        <hr />
        <div className="mt-5 mb-5 pb-3 information-grid-footer">
            <div className="information d-flex flex-column">
                <div className="text-justify">
                    <h2 className="text-left mb-4 font-weight-bold">
                        <span className="underline">
                            What is LatamLink
                        </span>
                    </h2>
                    <span>
                        LatamLink is a voluntary regional alliance led by Latin American technology companies. We develop an EOSIO-based testnet for the
                        <a className="color-5bb517" href="https://www.lacchain.net/" target="_blank"> LACChain </a>
                        network to highlight the benefits of this technology. LatamLink deploys a public permissioned version of EOSIO technology for Latin American developers and organizations to test their decentralized applications and infrastructure.
                    </span>
                    <h2 className="h3 panddin-titule-information">
                        What is LACChain ?
                    </h2>
                    <span>
                       LACChain is an initiative by IDB Lab (part of the <a className="color-5bb517" href="https://www.iadb.org/en" target="_blank">Inter-American Development Bank</a>) to accompany and accelerate the development of the blockchain ecosystem in Latin America. It aims to establish national consortiums in the region, to develop and promote standards for interoperability of networks, and to develop and maintain interoperable blockchain infrastructures.
                    </span>
                    <h2 className="h3 panddin-titule-information">
                        What is EOSIO ?
                    </h2>
                    <span>
                        EOSIO is a next-generation blockchain technology launched in 2018 by <a className="color-5bb517" href="https://block.one/" target="_blank">block.one</a>, a leading company that provides high-performance blockchain solutions. EOSIO enables greater flexibility, scalability, and cost-efficiency, allowing up to 4,000 transactions per second in its network.
                    </span>
                    <h3 className="h4 panddin-titule-information">
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
                    </ul>
                </div>
            </div>
            <div className="information-img">
                <img className="img-fluid" src="images/map-content-home.png" alt="LAC-Chain map" />
            </div>
        </div>
        <section id="get-start" className="get-started-structure pt-5 pl-3 pr-3 pb-5">
            <div className="mt-5 mb-5 get-started-header">
                <h2 className="h1 text-center font-weight-bold">
                    <span className="underline">Why Choose LatamLink?</span>
                </h2>
            </div>
            <div className="get-started-steps">
                <div className="get-started-step">
                    <img className="get-started-icon" src="images/latamlink_Rocket_1885.svg" alt="Test and deploy" />
                    <p className="ml-4 text-justify">
                        <strong className="h4">1. It allows you to explore EOSIO </strong>
                        <br />
                        <br />
                        <span>
                            EOSIO is an open-source blockchain technology that enables greater flexibility, scalability, and cost-efficiency, which is ideal for enterprise and social impact solutions. <a href="https://eos.io/" target="_">Read more about EOSIO here</a>.
                        </span>
                    </p>
                </div>
                <div className="get-started-step">
                    <img className="get-started-icon" src="images/latamlink_sun_1004125.svg" alt="Get resources icon" />
                    <p className="ml-4 text-justify">
                        <strong className="h4">2. We are part of the LACChain initiative</strong>
                        <br />
                        <br />
                        <span>
                            LACChain is an initiative of IDB Lab to foster the blockchain ecosystem in Latin America. It builds alliances with leading companies in the blockchain field and integrates major blockchain technologies into its LACChain network. For more information about LACChain, <a href="https://medium.com/@lacchain.official/what-is-the-lacchain-global-alliance-and-what-does-it-consist-of-861cb76257b1">visit this link</a>.
                        </span>
                    </p>
                </div>
                <div className="get-started-step">
                    <img className="get-started-icon" src="images/latamlink_memo_123.svg" alt="Create account icon" />
                    <p className="ml-4 text-justify">
                        <strong className="h4">3. It offers an integral solution </strong>
                        <br />
                        <br />
                        <span>
                            LatamLink deploys a public permissioned version of EOSIO technology for Latin America. We include some features such as a local development and testing environment, a monitor service, and adaptability to API endpoints, wallets, and other tools. Check the full list below. 

                        </span>
                    </p>
                </div>
            </div>
            <img className="img-fluid get-started-img" src="images/mobile-previews-fake.png" alt="Mobile preview" />
        </section>
        <section className="banner">
            <h2 className="h4 font-weight-light text-center">
                " LatamLink is a voluntary regional alliance to highlight the benefits
                of the EOSIO blockchain. "
            </h2>
            <img className="img-fluid" src="images/latamlink_logo-footer.svg" alt="LatamLink banner image" />
        </section>
        <section id="herramientas" className="d-flex pt-5 pb-5 flex-column justify-content-sm-center">
            <div className="tools-header text-center mb-4">
                <h2 className="h1">
                    <span className="underline">Tools</span>
                </h2>
                <br />
                <p>
                    These are some tools and resources LatamLink offers to help you leverage your decentralized app or blockchain infrastructure.
                </p>
            </div>
            <br />
            <div className="tools">
                <div className="left-to-right-slider">
                    <div className="p-3 shadow-sm rounded text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/search.svg" alt="Block Explorer icon" />
                        <h2>Block Explorer</h2>
                        <p className="font-weight-light text-justify">
                            <span>We provide a </span>
                            <a target="_blank" href="http://explorer.testnet.latamlink.io">Block Explorer</a>
                            <span>
                                that allows you to search information about transactions and Smart
                                Contracts
                            </span>
                        </p>
                    </div>
                    <div className="p-3 text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/docse-01.svg" alt="Documentation icon" />
                        <h2>Documentation</h2>
                        <p className="font-weight-light text-justify">
                            <span>A curated <a href="https://latamlink.io/docs/eosio"> list of resources </a> to learn from experts in the blockchain industry.
                            </span>
                            <a href="https://latamlink.io/docs/eosio">here</a>
                        </p>
                    </div>
                    <div className="p-3 shadow-sm rounded text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_1.svg" alt="APIS icon" />
                        <h2>APIs</h2>
                        <p className="font-weight-light text-justify">
                            A variety of <a href="/docs/api" target="_blank">API endpoints</a> to integrate through LatamLink.
                        </p>
                    </div>
                    <div className="p-3 text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_Monitor_1014.svg" alt="Monitor icon" />
                        <h2>Network Monitor</h2>
                        <p className="font-weight-light text-justify">
                            LatamLink has a <a href="https://monitor.latamlink.io/" target="_blank">monitor service</a> that will allow you trace the
                            network activity
                        </p>
                    </div>
                    <div className="p-3 text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_wallet_1003987.svg" alt="Wallets icon" />
                        <h2>
                           EOSIO Wallets
                        </h2>
                        <p className="font-weight-light text-justify">
                            Adaptability to several EOSIO wallets that can be configured in the testnet.
                        </p>
                    </div>
                </div>
                <div className="right-to-left-slider">
                    <div className="p-3 shadow-sm rounded text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_Laptop_187.svg" alt="Cleos icon" />
                        <h2>Cleos</h2>
                        <p className="font-weight-light text-justify">
                            Implementation of the command-line tool known as <a target="_blank" href="https://developers.eos.io/manuals/eos/latest/cleos/index">cleos</a>
                            <span>
                                developed by
                            </span>
                            <a target="_blank" href="https://block.one/">block.one</a>
                        </p>
                    </div>
                    <div className="p-3 text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_Wrench_1004034.svg" alt="Dev env icon" />
                        <h2>
                            Development Environment
                        </h2>
                        <p className="font-weight-light text-justify">
                            <a target="_blank" href="https://www.eosstudio.io/">EOS Studio</a>
                            <span>
                                has a local environment for developing decentralized applications
                                (dApps) based on EOSIO.
                            </span>
                        </p>
                    </div>
                    <div className="p-3 shadow-sm rounded text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_Camera_1.svg" alt="Snapshots icon" />
                        <h2>Snapshots</h2>
                        <p className="font-weight-light text-justify">
                            Snapshots alow you to spin-up nodes in record time. With a valid snapshot file you can create a valid chain state.
                        </p>
                    </div>
                    <div className="p-3 text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/latamlink_balloon-1.svg" alt="Telegram Group icon" />
                        <h2>
                            Telegram Group
                        </h2>
                        <p className="font-weight-light text-justify">
                            A <a target="_blank" href="https://t.me/latamlink">Telegram group</a> to coordinate and share relevant information related to the EOSIO ecosystem and LatamLink.
                        </p>
                    </div>
                    <div className="p-3 shadow-sm rounded text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/dfuse-01.svg" alt="dfuse icon" />
                        <h2>dfuse integration</h2>
                        <p className="font-weight-light text-justify">
                            <span>A </span>
                            <a target="_blank" href="http://dfuse.testnet.latamlink.io/graphiql/">dfuse endpoint</a>
                            <span>
                                able to use high-performance GraphQL queries to the testnet.
                            </span>
                        </p>
                    </div>
                    <div className="p-3 text-center">
                        <img className="mt-5 mb-4 img-fluid" src="images/Github-VerGreen-SVG-Hermes-22-04-20.svg" alt="Github icon" />
                        <h2>GitHub</h2>
                        <p className="font-weight-light text-justify">
                            <span>A </span>
                            <a target="_blank" href="https://github.com/LatamLink">GitHub profile</a>
                            <span>
                                to foster a community of developers.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
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

const HomePage = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
        <link rel="canonical" href="https://latamlink.io/"/>
        <Layout
            permalink="/"
            title={siteConfig.title}
            description={siteConfig.tagline}>
            <HeroSection></HeroSection>
            <MainSection></MainSection>
        </Layout>
    </div>
    
  );
};


export default HomePage;