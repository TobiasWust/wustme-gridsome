module.exports = {
  siteName: 'Wust.me',
  siteDescription: 'Ein Blog von Tobias Wust über Reisen, Gleitschirmfliegen und Programmierung',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_URL, // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
