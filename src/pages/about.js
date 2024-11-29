import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ location }) => {

  return (
    <Layout location={location}>
      <h1>About</h1>
      <p>Hi 👋</p>
      <p>
        <StaticImage
        layout="constrained"
        formats={["auto", "webp", "avif"]}
        src="../images/nat_gael.jpeg"
        width={360}
        height={200}
        quality={95}
        alt="underwater picture of Gael and Natascha"
        />
      </p>
      <p>Gaël and Natascha here.</p>
      <p>We thought about calling this page "FAQ" but no one has asked us these questions...</p>
      <p>
        <b>What is this all about?</b>
        <br />
        Social data is fascinating but hard to understand without visuals. Distribution of Things offers visual aids to help you interpret the world around you. The focus is on the visuals – we let distributions tell the story.
      </p>
      <p>
        <b>What is a distribution?</b>
        <br />
        A distribution shows the frequency of specific values within a dataset. It’s often visualized as a histogram or density plot. Unlike simple averages, distributions offer richer insights into data.
      </p>
      <p>
        <b>What’s your process?</b>
        <br />
        We use open-source data from platforms like{" "}
        <a href="https://www.kaggle.com/datasets">Kaggle</a> and{" "}
        <a href="https://datasetsearch.research.google.com/">Google Dataset Search</a>. Our analysis is done using R or Python, and visualizations are created with Python (matplotlib, seaborn) or R (ggplot2).
      </p>
      <p>
        <b>I have an idea for a distribution, can I share it?</b>
        <br />
        Please do! You can reach us on Bluesky: <a href="https://bsky.app/profile/gaeldemondragon.com">Gaël</a> and <a href="https://bsky.app/profile/natascha-minnitt.bsky.social">Natascha</a>.
      </p>
      <p>
        <b>Say NO to misinformation!</b>
        <br />
        If you notice errors in our content or visuals, let us know. We're always learning and improving.
      </p>
    </Layout>
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Distribution of Things" />

