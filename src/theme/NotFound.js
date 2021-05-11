import React from "react"
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'

function NotFound() {
  const isMobile = useMediaQuery( {query:'(max-width: 1100px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 1100px)'} )

  return (
    <Layout>
      {isDesktop && 
        <Box className="mainContainer">         
            <Box className="containerSec">
              <Box className="sectionHero">
                <Box className="titleBox">
                  <h1 className="centerText">Oops! We couldn't find this page.</h1>
                  <h1 className="centerText">Please, go back to the <a style={{color:'#1dc961'}} href="/">homepage</a> and try again.</h1>
                </Box>
                <p className="centerText">If you have any questions about LACChain EOSIO, please visit <a href="/docs/testnet/eosio">our documentation</a>!</p>
              </Box>
            </Box>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="containerSec">
            <Box className="sectionHeroMobile">
              <Box className="section">
                <Box className="titleBox">
                    <h1 style={{paddingLeft: '25px', paddingRight:'25px', fontSize:'30px'}} className="centerText">Oops! We couldn't find this page.</h1>
                    <h2 style={{paddingLeft: '25px', paddingRight:'25px', fontSize:'20px'}} className="centerText">Please, go back to the <a style={{color:'#1dc961'}} href="/">homepage</a> and try again.</h2>
                  </Box>
                  <p style={{paddingLeft: '25px', paddingRight:'25px',fontSize:'14px'}} className="centerText">If you have any questions about LACChain EOSIO, please visit <a href="/docs/testnet/eosio">our documentation</a>!</p>
                </Box>
              </Box>
            </Box>
        </Box>
      }
    </Layout>
  )
}

export default NotFound;