import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <AboutPageTemplate
      section={data.section}
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      hero={data.hero}
      visionSection={data.visionSection}
      goals={data.goals}
      members={data.members}
      founders={data.founders}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
