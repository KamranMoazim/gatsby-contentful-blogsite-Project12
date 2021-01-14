import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


// allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
//   edges {
//     node {
//       title
//       id
//       slug
//       publishedDate(formatString: "Do MMMM, YYYY")
//       featuredImage {
//         fluid(maxWidth: 750) {
//           ...GatsbyContentfulFluid
//         }
//       }
//       excerpt {
//         childMarkdownRemark {
//           excerpt(pruneLength: 150)
//         }
//       }
//     }
//   }
// }


const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
            edges {
              node {
                slug
                title
                body {
                  body
                }
                publishedDate
                details {
                  raw
                }
                img {
                    fluid {
                      aspectRatio
                      src
                    }
                  }
              }
            }
          }
      }
    `
  )

  console.log(data)

  return (
    <Layout>
      <SEO title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              <div className="meta">
                <span>Posted on {edge.node.body.body}</span>
              </div>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog