exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    if (node.frontmatter.relpath && node.frontmatter.logo) {
      const logopath = node.frontmatter.relpath + node.frontmatter.logo

      createNodeField({
        node,
        name: 'logolink',
        value: logopath,
      })
    }
  }
}
