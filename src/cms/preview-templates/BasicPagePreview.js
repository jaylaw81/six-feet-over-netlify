import React from 'react'
import PropTypes from 'prop-types'
import { BasicPageTemplate } from '../../templates/basic-page'

const BasicPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <BasicPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      hero={data.hero}
      section={data.section}
    />
  )
}

BasicPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BasicPagePreview
