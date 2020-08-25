import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Main from "../../components/main"
import CardScroller from "../../components/card-scroller"
import OptionCard from "../../components/option-card"

const Repairs = () => (
  <Layout>
    <SEO title="Opener Parts" />
    <Main pageTitle="What type of garage door opener do you have?">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Liftmaster"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Chaimberlan"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Raynor"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Sears"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Genie"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Linear"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Guardian"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Marantec"
        />
      </CardScroller>
    </Main>
  </Layout>
)

export default Repairs
