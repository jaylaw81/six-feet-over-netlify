import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const FooterContainer = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-around;
`

const Section = styled.div`

  h4 {
    font-family: ${props => props.theme.fontBase};
    font-size: 18px;
    margin: 0 0 15px 0;
    line-height: 18px;
    text-transform: uppercase;
    color: #354463;
    letter-spacing: 2px;
    position: relative;
    width: 160px;

    &:after {
      content: '';
      height: 1px;
      width: 100%;
      background-color: #354463;
      position: absolute;
      bottom: 0;
      left: 0;
    }

  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;

      a {
        font-size: 18px;
        font-family: ${props => props.theme.fontBase};
        font-weight: 100;
        text-decoration: none;
        color: #354463;
      }
    }
  }



  &.tagline {
    font-family: ${props => props.theme.fontAccent};
    font-size: 44px;
    line-height: 46px;
    text-align: right;
  }

`


const Footer = class extends React.Component {
  render() {
    return (
      <FooterContainer className="footer has-background-black has-text-white-ter">
        <Section>
          <img src={logo} alt="Six Feet Over" style={{width: 252}} />
        </Section>
        <Section>
          <h4>Contact Us</h4>
        </Section>
        <Section>
          <h4>Links</h4>
          <ul>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          {/* <li>
            <Link className="navbar-item" to="/get-involved">
              Get Involved
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/help">
              Help Center
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Latest News
            </Link>
          </li> */}
          <li>
            <a className="navbar-item donate" href="https://secure.givelively.org/donate/six-feet-over
" target="_blank" rel="noopener noreferrer">
									Donate
								</a>
          </li>
          </ul>
        </Section>
        <Section>
          <h4>Follow Us</h4>
        </Section>
        <Section className={`tagline`}>
          #HELP <br />
          PREVENT<br />
          SUICIDE<br />
        </Section>
      </FooterContainer>
    )
  }
}

export default Footer
