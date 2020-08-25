import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Main from "../../components/main"
import CardScroller from "../../components/card-scroller"
import OptionCard from "../../components/option-card"

const Repairs = () => (
  <Layout>
    <SEO title="Commercial Doors" />
    <Main pageTitle="Need a big garage door? We have you covered!">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Sectional Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Sheet Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Rolling Steel"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Four-Fold Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="High Speed Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Hanger Doors"
        />
      </CardScroller>
    </Main>
  </Layout>
)

export default Repairs
