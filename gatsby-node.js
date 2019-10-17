/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allContentfulProject {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allContentfulProject.edges.forEach(({ node }) => {
//       const slug = node.name.toLowerCase().replace(/ /g, "-")
//       createPage({
//         path: slug,
//         component: path.resolve(`./src/templates/project.js`),
//         context: {
//           name: node.name,
//         },
//       })
//     })
//   })
// }
