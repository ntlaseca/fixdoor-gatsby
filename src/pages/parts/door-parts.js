import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Main from "../../components/main"
import CardScroller from "../../components/card-scroller"
import OptionCard from "../../components/option-card"

const Repairs = () => (
  <Layout>
    <SEO title="Door Parts" />
    <Main pageTitle="What type of garage door parts do you need?">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Springs"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Hinges"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Cables"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Bottom Fixtures"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Top Fixtures"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="End Bearing Plates"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Center Bearing Plates"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Locks"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Weather Seal"
        />
      </CardScroller>
    </Main>
  </Layout>
)

export default Repairs
