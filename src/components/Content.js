import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.div`


  .content {
    margin: 0 auto;
    width: 1200px;

    @media only screen and (max-width: ${props => props.theme.tablet}) {
      width: 768px;
    }

    h1 {
      font-family: ${props => props.theme.fontHeading};
      line-height: 56px;
      text-align: center;
    }
  }

  &.dark {
    background-color: #3c4557;
    padding: 86px 0;
    position: relative;
    color: white;

    &.impact {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        background-image: url('/img/impact-bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        z-Index: 1;
        opacity: 0.1;
      }

    }

  }
`

export const HTMLContent = ({ content, className, dark }) => (
  <Section className={`${dark}`}>
  <div className={`${className}`} dangerouslySetInnerHTML={{ __html: content }} />
  </Section>
)

const Content = ({ content, className, dark }) => (
  <Section className={`${dark}`}>
    <div className={className}>{content}</div>
  </Section>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
