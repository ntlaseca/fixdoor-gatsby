import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Main from "../../components/main"
import CardScroller from "../../components/card-scroller"
import OptionCard from "../../components/option-card"

const Repairs = () => (
  <Layout>
    <SEO title="Commercial Openers" />
    <Main pageTitle="Need a commercial opener? We have you covered!">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Jackshaft"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Trolley"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Specialty"
        />
      </CardScroller>
    </Main>
  </Layout>
)

export default Repairs
