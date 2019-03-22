import React from "react";
// -4 new file
// -3. import AddKidsToyAnimalForm and go back there
import AddKidsToyAnimalForm from "../components/AddKidsToyAnimalForm";

import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  // 15. state property
  state = {
    // 16. keep as it is going to be, an empty object?
    // Should I keep state in aap.js?
    toyAnimals: {}
  };
  // 16.
  addToyAnimal = toyAnimal => {
    // 17. console
    // 18. look at app

    // 23. use react set state api

    // start here:
    // I. Take a copy of the existing state, never reach into state and modde directley is a mutation, perf updATING OUT OF ORDER
    const toyAnimals = { ...this.state.toyAnimals };

    // 24. OBJECT?
    // 25. timestamp, since 13xx backticks

    // II. Add our new toyAnimal to that toyAnimals variable
    toyAnimals[`toyAnimal${Date.now()}`] = toyAnimal;

    // 26. is equal to that toyanimal photo taht got  passed in (from?)
    // 27. how do we put that new updated state into state?

    // III. Set the new fishes object to state. WTHeck?
    this.setState({ toyAnimals });
    // 28. we call a method that is built in ...
    // 29. you pass it the the piece of state that you wish to update
    // 30. I want to update the list of toyAnimal photos
    // 31. and you want to update it to?
    // 32. go to blog-post.js ->

    console.log("adding a toy animal");
  };
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <div>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0
              }}
            >
              <li>{<Link to="/" rel="prev" />}</li>
              <li>
                {
                  <Link to="/2/2/" rel="next">
                    2 →
                  </Link>
                }
              </li>
            </ul>

            <div
              style={{
                maxWidth: `900px`,
                padding: `0px`,
                marginBottom: `0.33rem`
              }}
            >
              <Image />
            </div>
            {/*// -2.
            // 19.*/}
            <AddKidsToyAnimalForm addToyAnimal={this.addToyAnimal} />
            {/*// 10. look at addfish*/}
            <SEO
              title="All posts"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />

            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div>
                  <div>
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4)
                        }}
                      >
                        <Link
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Layout>
      </>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

// on the top, put in a fast svg fluid image of book cover
