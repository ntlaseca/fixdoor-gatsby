import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import CardScroller from "../components/card-scroller"
import OptionCard from "../components/option-card"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <Main pageTitle="Who We Are">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Owner"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Sales Director"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Dispatch Director"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Accounting"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Technician Executives"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Commercial Techs"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Residential Techs"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Installers"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Warehouse"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Wood Door Shop"
        />
      </CardScroller>
    </Main>
  </Layout>
)

export default AboutUs
