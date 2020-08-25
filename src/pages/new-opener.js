import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import CardScroller from "../components/card-scroller"
import OptionCard from "../components/option-card"

const Repairs = () => (
  <Layout>
    <SEO title="New Opener" />
    <Main pageTitle="What kind of opener do you want?">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Some People Call This an Opener, We Call It a Remote"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Liftmaster 8160 1/2 HP Chain Drive"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Liftmaster 8360 3/4 HP Chain Drive"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Liftmaster 8587 3/4 HP Industurial Duty Wood Door Opener"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Liftmaster 8550WLB 3/4 HP Belt Drive Opener"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="8500W Side Mount Garage Door Opener"
        />
      </CardScroller>
    </Main>
  </Layout>
)

export default Repairs
