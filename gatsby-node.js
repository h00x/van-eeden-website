exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter.image.relpath && node.frontmatter.image.image) {
      const imagepath =
        node.frontmatter.image.relpath + node.frontmatter.image.image

      createNodeField({
        node,
        name: 'imagelink',
        value: imagepath,
      })
    }
  }
}
