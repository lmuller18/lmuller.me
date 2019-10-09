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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
