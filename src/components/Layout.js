import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../../static/scss/main.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { ThemeProvider } from "styled-components"
import StickyFooter from './StickyFooter';

const theme = require("sass-extract-loader?{\"plugins\": [\"sass-extract-js\"]}!../../static/scss/_variables.scss")

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/SFO-Favicon-Black.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/SFO-Favicon-Black.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/SFO-Favicon-Black.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/SFO-Favicon-Black.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/sixftover-share.png`}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138973260-1" />

          <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-96904622-1');
            `}
          </script>


      </Helmet>
			<ThemeProvider theme={theme}>
				<Navbar />
				<div>{children}</div>
        <StickyFooter />
				<Footer />

			</ThemeProvider>
    </>
  )
}

export default TemplateWrapper
