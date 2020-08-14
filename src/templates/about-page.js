import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'
import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()

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

  &.base-font {
    display: flex;
    justify-content: center;
    margin: 50px 0 50px 0;
    .heading {
      top: -69px;
    }
    p {
      font-family: ${props => props.theme.fontBase};
      font-size: 20px;
      line-height: 28px;
      margin: 0 0 20px 0;
    }
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

const SectionDark = styled.div`
  background-color: #3c4557;
  padding: 86px 0;
  position: relative;

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
`
const ContentContainer = styled.div`
  width: 1024px;
  margin: 0 auto;

  .goals {
    margin: 30px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;

    li {
      list-style: none;
      margin-right: 15px;
      color: white;
      h3 {
        color: white;
        margin-bottom: 5px;
      }
      p {
        color: white;
        margin-top: 0;
        line-height: 26px;
      }
    }
  }
`

export const AboutPageTemplate = ({ title, content, contentComponent, hero, vision, goals, founders }) => {
  const PageContent = contentComponent || Content
  const foundersContent = toHTML(founders)

  console.log(goals.title)

  return (
    <div>
      <PageHeader hero={hero} />
      <PageContent className="content" content={content} dark="dark" />
      <Vision>
        <Heading>Vision</Heading>
        <p>{vision}</p>
      </Vision>
      <SectionDark>
        <ContentContainer>
          <Heading className={`rel light`}>
            {goals.title &&
              <>
                {goals.title}
              </>
            }
          </Heading>

          <ul className="goals">
            {goals.items.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </ContentContainer>
      </SectionDark>
      <Vision className="base-font">
        <Heading className="heading">Founders Story</Heading>
        <div dangerouslySetInnerHTML={{__html: foundersContent }} />
      </Vision>
    </div>
  )
}

AboutPageTemplate.propTypes = {
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
        goals={post.frontmatter.goals}
        founders={post.frontmatter.founders}
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
        goals {
          title
          items {
            title
            description
          }
        }
        founders
      }
    }
  }
`
