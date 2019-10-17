require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    name: "Liam Muller",
    description: `I want to write good code. Sometimes I don't.`,
    attributes: [
      {
        key: "Work: ",
        value: "Software Engineer @ Endurance International Group",
      },
      {
        key: "Location: ",
        value: "Boston, MA",
      },
      {
        key: "Education: ",
        value: "BS of Computer Science @ Rochester Institute of Technology",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_KEY,
        downloadLocal: true,
      },
    },
  ],
}
