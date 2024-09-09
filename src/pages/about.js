import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ location }) => {

  return (
    <Layout location={location}>
      <h1>about</h1>
      <p>
        I thought about calling this page "FAQ" but one has yet to ask me a
        single of these questions...
      </p>
      <br />
      <p>
        <b>What is this?</b>
        <br />
        This is a simple website with a collection of distributions and a few
        words about them.
        <br />I recently started learning about data analysis and web
        development. This is my way of practicing both.
      </p>
      <p>
        <b>What is a distribution anyway?</b>
        <br />A distribution is a function that gives the frequency of
        occurrence of a particular value for a variable. In other words, it
        tells you how often a variable will take a certain value (or fall into
        an interval of value). It is not a visualization in itself but it is
        often represented by a graph, like a histogram or a density plot. We’re
        quite used to describe variables with averages such as means, sometimes
        medians. These are convenient but often fail to describe a dataset
        accurately. Distributions don’t tell everything either, but they convey a lot more information than a single number.
      </p>
      <p>
        <b>How do you make this?</b>
        <br />I typically have an idea of something that I would like to see a
        distribution of and look for the data on{" "}
        <a href="https://www.kaggle.com/datasets">Kaggle</a>,{" "}
        <a href="https://datasetsearch.research.google.com/">
          Google Dataset Search
        </a>{" "}
        or using any search engine. I then read the data into a notebook (Google
        Colab, Kaggle, sometimes Jupyter) using{" "}
        <a href="https://pandas.pydata.org/">pandas</a> and plot some histplot
        or kdeplot with <a href="https://seaborn.pydata.org/">seaborn</a>. Et
        voilà ! The website is built using{" "}
        <a href="https://www.djangoproject.com/">Django</a>, a Python-based web
        development framework. It seemed like a natural choice for me as I had
        already started learning some Python to do the data-related tasks
        mentioned above.
      </p>
      <p>
        <b>I have an idea of a distribution, can I share it with you?</b>
        <br />
        Please do! You can <a href="https://x.com/gaeldemondragon">find me on 𝕏</a> or email me at{" "}
        <a href="mailto:demondragong@gmail.com">demondragon.g@gmail.com</a>.
      </p>
      <p>
        <b>There are some shocking errors on this website.</b>
        <br />
        Help me improve (and prevent me from spreading misinformation) by
        telling me what’s wrong. I will remove it or make it less shocking.
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
export const Head = () => <Seo title="About Distribution of things" />
