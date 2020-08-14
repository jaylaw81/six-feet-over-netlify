import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Bio from '../components/Bio'

import styled from 'styled-components'
import remark from 'remark'
import remarkHTML from 'remark-html'


const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()


export const BasicPageTemplate = (props) => {
  const { title, content, contentComponent, hero, vision, goals, founders, members } = props

  const PageContent = contentComponent || Content

  return (
    <div>
      <PageHeader hero={hero} />
      <PageContent className="content" content={content} dark="dark" />
    </div>
  )
}

BasicPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BasicPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BasicPageTemplate
        contentComponent={HTMLContent}
        hero={post.frontmatter.hero}
        content={post.html}

      />
    </Layout>
  )
}

BasicPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BasicPage

export const BasictPageQuery = graphql`
  query BasicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero {
          heading
          intro
          image {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
