const path = require("path")

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor

const getNeighbors = (items, currentItemIndex) => {
  const prevItemIndex = mod(currentItemIndex - 1, items.length)
  const nextItemIndex = mod(currentItemIndex + 1, items.length)

  return [items[prevItemIndex], items[nextItemIndex]]
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const workTemplate = path.resolve(`src/templates/work.js`)

  return graphql(`
    query {
      allWork {
        nodes {
          id
          slug
        }
      }
    }
  `).then((result) => {
    if (result.errors) throw result.errors

    const works = result.data.allWork.nodes

    works.forEach((work, index) => {
      const [previousWork, nextWork] = getNeighbors(works, index)

      createPage({
        path: work.slug,
        component: workTemplate,
        context: {
          id: work.id,
          previousWork,
          nextWork
        }
      })
    })
  })
}
