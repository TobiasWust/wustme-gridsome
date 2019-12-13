module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allWordPressPage {
        edges {
          node {
            id
            title
            slug
            content
          }
        }
      }
    }`)

    data.allWordPressPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}/`,
        component: './src/templates/WordPressPage.vue',
        context: {
          pageId: node.id
        }
      })
    })
  })
}
