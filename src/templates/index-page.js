import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import plant from "../img/cannabisbackground.jpg"


import {TestimonialSection} from 'gatsby-theme-testimonials';


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading, 
  mainpitch,
  description,
  intro,
}) => (



  <div>

<section>
<div className="columns">
<div className="column homepagebackground">



</div>





</div>
</section>



<div className="column is-12">
  <div className="container">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                  </div>
                </div>

                <div className="hero is-big is-primary is-bold has-text-centered">
    <div className="hero-body">
    <div class="container">

<section>    
<div className="columns ">
<div className="column">


<div className="KnowledgeContaine">

<p className="title">Knowledge base</p>
<h2 className="subtitle">Learn everything about health and medicinal cannabis</h2>
<Link class="button is-link">Start learning</Link>


</div>
</div>

<div className="column ">
  <div className="CompareContainer">
<h1 className="title">Compare CBD products</h1>
<h2 className="subtitle">We help you compare and find the best CBD products on the market</h2>
<Link class="button is-link">Start comparing</Link>


</div>

</div>

<div className="column">
<div className="ReviewsContainer">
<h1 className="title">Brand reviews</h1>
<h2 className="subtitle">Stories from real users to help you choose which product is right for you</h2>
<Link class="button is-link">Start reading</Link>


</div>
</div>

</div>


</section> 
</div>
</div>
</div>

    
    <TestimonialSection/>

  </div>



)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
      
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
