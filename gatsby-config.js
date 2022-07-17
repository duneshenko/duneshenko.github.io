module.exports = {
  siteMetadata: {
    title: `Roman Duneshenko`,
    siteUrl: `https://duneshenko.com`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "none"
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node }) => node.name
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "assets",
        "path": "./src/assets/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "data",
        "path": "./data/"
      }
    }
  ]
};
