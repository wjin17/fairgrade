import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Section1 from "../components/landing/section1"
import Section2 from "../components/landing/section2"
import Section3 from "../components/landing/section3"
import Section4 from "../components/landing/section4"
import Section5 from "../components/landing/section5"

import "../styles/home.css"

const seoDescription =
  "Harness the power of collective intelligence to distribute fair and accurate grades in a way that teaches students to successfully evaluate feedback"

const IndexPage = () => (
  <Layout>
    <Seo title="Fairgrade" description={seoDescription} />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Layout>
)

export default IndexPage
