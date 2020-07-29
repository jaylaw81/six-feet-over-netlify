import CMS from 'netlify-cms-app'
import React from 'react'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { StyleSheetManager } from 'styled-components'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

//Component used to Enable netlify CMS to apply the styles added through styled-components
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: ''
    }
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        { this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            { this.props.children }
          </StyleSheetManager>
        )}
      </div>
    )
  }
}

CMS.registerPreviewTemplate('index', props => (
	<CSSInjector>
		<IndexPagePreview {...props} />
	</CSSInjector>
))
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
