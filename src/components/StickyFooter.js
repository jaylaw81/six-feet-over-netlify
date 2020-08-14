import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import classNames from "classnames"

const StickyContainer = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #354463;
  width: 100%;
  height: 100px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  color: #fff;
  font-family: ${props => props.theme.fontBase};
  z-index: 30;
  box-shadow: 0 -5px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  bottom: -180px;

  &.scrolled {
    bottom: 0;
    opacity: 1;
  }

  p {
    text-align: center;
    width: 70%;
  }

  a {
    color: white;
  }

  h2 {
    margin: 0;
    font-family: ${props => props.theme.fontAccent};
  }
`


const StickyFooter = () => {

  const [scrolled, setScrolled] = useState()

  const classes = classNames("header", {
    scrolled: scrolled,
  })

  useEffect(_ => {
    const handleScroll = _ => {
      if (window.pageYOffset > 800) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return _ => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <StickyContainer className={`${classes}`}>
      <h2>ARE YOU IN CRISIS?</h2>
      <p>If you or someone you know is in crisis, you have options. Please text "SIS" to 741741 to speak with a trained counselor; call 1-800-273-TALK (8255) for the <a href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer">National Suicide Prevention Lifeline</a>; call 911; or visit your nearest Emergency Room. </p>
    </StickyContainer>
  )
}


export default StickyFooter
