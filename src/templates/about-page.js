import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'

const Vision = styled.div`
  display: flex;
  position: relative;

  p {
    font-family: ${props => props.theme.fontHeading};
    width: 800px;
    margin: 80px auto;
    font-size: 40px;
    text-align: center;
    line-height: 48px;
  }
`

const Heading = styled.div`
  padding: 10px 20px;
  position: absolute;
  background-color: #3c4557;
  font-family: ${props => props.theme.fontBase};
  font-size: 14px;
  color: #fff;
  left: 45%;
  top: -22px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;

  &.rel {
    position: relative;
    top: inherit;
    left: inherit;
    display: inline-block;


    &.light {
      background-color: white;
      color: #3c4557;
    }
  }

  &.center {
    display: flex;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
  }
`


export const AboutPageTemplate = ({ title, content, contentComponent, hero, vision }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <PageHeader hero={hero} />
      <PageContent className="content" content={content} dark="dark" />
      <Vision>
        <Heading>Vision</Heading>
        <p>{vision}</p>
      </Vision>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        hero={post.frontmatter.hero}
        vision={post.frontmatter.vision}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        vision
        hero {
          heading
          intro
          image {
            publicURL
          }
        }

      }
    }
  }
`
