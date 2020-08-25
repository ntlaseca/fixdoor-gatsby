import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import CardScroller from "../components/card-scroller"
import OptionCard from "../components/option-card"

const Repairs = () => (
  <Layout>
    <SEO title="New Door" />
    <Main pageTitle="What kind of door do you like?">
      <CardScroller>
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Standard Door"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Carriage Style Door"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Modern Door"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Wood Look-Alike Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Wood Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Glass Doors"
        />
        <OptionCard
          link="#"
          alt="alt text"
          cardTitle="Coupon Doors"
        />
      </CardScroller>
    </Main> 
  </Layout>
)

export default Repairs
