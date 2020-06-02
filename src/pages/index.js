import React from "react"

import Layout from '../layout/index'
import TopNavbar from "../components/TopNavbar/TopNavbar"
import Slider from '../components/Slider'

export default function Home() {
  return (
    <Layout>
      <TopNavbar/>
      <Slider/>
    </Layout>
  )
}
