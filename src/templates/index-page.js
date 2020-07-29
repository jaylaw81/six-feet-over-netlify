import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import remark from 'remark'
import remarkHTML from 'remark-html'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import styled from 'styled-components'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()

const HeroContainer = styled.div`
  min-height: 672px;
  display: flex;
  justify-content: flex-start;
  background-color: ${props => props.theme.basicBlue};
  background-image: url('/img/hero-homepage.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`

const Hero = styled.div`
  margin: 125px auto 0 auto;
  display: flex;
  position: relative;
`

const HeroBox = styled.div`
  width: 544px;
  background-color: #ffffff;
  height: 416px;
  margin-right: 137px;
`

const HeroTagLine = styled.div`
  font-family: ${props => props.theme.fontAccent};
  font-size: 72px;
  width: 401px;
  color: #fff;
`

const HeroHeading = styled.h1`
  font-family: ${props => props.theme.fontHeading};
  margin: 90px 53px 13px 64px;
  line-height: 69px;
  font-size: 56px;
  color: #3c4557;
`
const HeroSubHeading = styled.p`
  margin: 0 53px 0 64px;
`

const HeroTitle = styled.div`
  padding: 10px 20px;
  background-color: #354463;
  font-family: ${props => props.theme.fontBase};
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: -20px;
  left: 64px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
`

const Action = styled.div`
  position: relative;
  ul {
    display: flex;
    justify-content: space-around;
    margin: 30px 0 0 0;
    li {
      list-style: none;
      width: 225px;
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
  top: -51px;
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
`

const Content = styled.div`
  width: 1024px;
  margin: 0 auto;
`

const ImpactArea = styled.div`
  ul {
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    li {
      list-style: none;
      color: white;
      align-items: center;
      justify-content: center;
      align-content: center;
      text-align: center;

      h3 {
        font-size: 72px;
        font-family: ${props => props.theme.fontAccent};
        font-weight: 100;
        margin-bottom: 20px;
      }

      p {
        font-size: 28px;
        font-family: ${props => props.theme.fontHeading};
        font-weight: 100;
        line-height: 36px;
      }
    }
  }
`

const Paragraph = styled.p`
  &.light {
    color: white;
    a {
      color: white;
    }
  }
`

const Headline = styled.h3`
  font-family: ${props => props.theme.fontHeading};
  color: white;
  font-size: 44px;
  line-height: 56px;

  &.center {
    margin: 50px auto 0 auto;
    width: max-content;
  }
`

export const IndexPageTemplate = ({
  image,
  title,
  featured,
  heading,
  subheading,
  mainpitch,
  action,
  impact,
  description,
  intro,
}) => (
  <div>
    <HeroContainer
      className="full-width-image margin-top-0"
    >
      <Hero>
        <HeroTitle>The Issue</HeroTitle>
        <HeroBox>
          <HeroHeading>
            {mainpitch.title}
          </HeroHeading>
          <HeroSubHeading>
            {mainpitch.description}
            <Link to={mainpitch.url}>{mainpitch.cta}</Link>
          </HeroSubHeading>
        </HeroBox>
        <HeroTagLine>
          #Help PREVENT SUICIDE
        </HeroTagLine>
      </Hero>
    </HeroContainer>

    <SectionDark>
      <Content>
        <Heading className={`rel light`}>
          {action.title}
        </Heading>
        <Headline>
          {action.description}
        </Headline>
        <Paragraph className="light" dangerouslySetInnerHTML={{__html: toHTML(action.paragraph)}} />
      </Content>
    </SectionDark>

    <Action>
      <Heading>Take Action</Heading>
      <ul>
        {intro.blurbs.map((item, key) => {
          return(
            <li key={key}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          )
        })
        }
      </ul>
    </Action>

    <SectionDark>
      <Content>
        <Heading className={`rel light center`}>
          {impact.title}
        </Heading>
        <Headline className={`center`}>
          {impact.description}
        </Headline>
        <ImpactArea>
          <ul>
          {impact.stats.map((item, key) => (
            <li key={key}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
          </ul>
        </ImpactArea>
      </Content>
    </SectionDark>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  action: PropTypes.object,
  impact: PropTypes.shape({
    stats: PropTypes.array,
  }),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        featured={frontmatter.featured}
        mainpitch={frontmatter.mainpitch}
        action={frontmatter.action}
        impact={frontmatter.impact}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        mainpitch {
          title
          description
          cta
          url
        }
        action {
          title
          description
          paragraph
        }
        impact {
          title
          description
          stats {
            title
            description
          }
        }
        description
        intro {
          blurbs {
            title
            description
          }
          heading
          description
        }
      }
    }
  }
`
