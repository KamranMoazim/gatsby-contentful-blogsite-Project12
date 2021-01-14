import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      body {
        body
      }
      details {
        raw
      }
      img {
        fluid {
          src
        }
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>
        <p>
        {props.data.contentfulBlogPost.body.body}
        </p>
        <p>
        {props.data.contentfulBlogPost.details.raw}
        <img src={props.data.contentfulBlogPost.img.fluid.src} style={{height:"500px", width:"500px", display:"flex"}} />
        </p>

        {/* {props.data.contentfulBlogPost.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost.featuredImage.fluid}
            alt={props.data.contentfulBlogPost.title}
          />
        )} */}
      </div>
      <Link to="/blog/">Visit the Blog Page</Link>
    </Layout>
  )
}

export default BlogPost
