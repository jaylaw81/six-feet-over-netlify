import React from 'react'
import PropTypes from 'prop-types'
import { BlogPageTemplate } from '../../templates/blog-page'

const BlogPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <BlogPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      hero={data.hero}
      section={data.section}
    />
  )
}

BlogPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPagePreview
