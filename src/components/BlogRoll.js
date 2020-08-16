import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import styled from 'styled-components'

const BlogContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  margin: 80px 0 80px 0px;
`

const BlogPost = styled.div`

  display: flex;
  flex-direction: column;
  width: 216px;
  margin-right: 30px;
  margin-bottom: 30px;

  .blog-post-image {
    width: 216px;
    position: relative !important;
  }

`

const BlogPostImage = styled.div`
  background-color: black;
  height: 216px;
  overflow: hidden;
  .featured-thumbnail {
    overflow: hidden;
    height: 216px;
  }
  position: relative;
`

const BlogPostContent = styled.div`
  text-align: left;
  background-color: #354463;
  padding: 0 30px 30px 30px;
  color: white;
  flex: 1 1 0px;
  position: relative;

  h4 {
    font-size: 22px;
    line-height: 28px;
    flex-basis: 100%;
    padding-top: 20px;
  }

  a {
    color: white !important;
    font-size: 14px;
  }
`

const BlogTag = styled.div`
  background-color: white;
  padding: 10px 30px;
  margin: 0 auto;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%,-41%);
  z-index: 1;
  color: black;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;

`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <BlogContainer>
        {posts &&
          posts.map(({ node: post }) => (
            <BlogPost className="is-parent column is-6" key={post.id}>
                <BlogPostImage>
                  {post.frontmatter.coverImage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.coverImage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                        extraClass={'blog-post-image is-featured'}
                      />
                    </div>
                  ) : null}

                  </BlogPostImage>
                  <BlogPostContent className="post-meta">
                      <BlogTag>NEWS</BlogTag>
                    <h4>{post.frontmatter.title}</h4>
                    <Link className="button" to={post.fields.slug}>
                    Keep Reading
                  </Link>
                  </BlogPostContent>
            </BlogPost>
          ))}
      </BlogContainer>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                tags
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                coverImage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
