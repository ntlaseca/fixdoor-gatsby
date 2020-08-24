import React from "react"
import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"

import OptionCard from "../components/option-card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main pageTitle="What can we help you with today?">
      <OptionCard
        link="#"
        alt="alt text"
        cardTitle="card title"
      />
      <OptionCard
        link="#"
        alt="alt text"
        cardTitle="card title"
      />
      <OptionCard
        link="#"
        alt="alt text"
        cardTitle="card title"
      />
      <OptionCard
        link="#"
        alt="alt text"
        cardTitle="card title"
      />
      <OptionCard
        link="#"
        alt="alt text"
        cardTitle="card title"
      />
    </Main>
  </Layout>
)

export default IndexPage
