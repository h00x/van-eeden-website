import React from 'react'
import CMS from 'netlify-cms'
import Helmet from 'react-helmet'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)

function Backend() {
  return (
    <Helmet>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </Helmet>
  )
}

export default Backend
