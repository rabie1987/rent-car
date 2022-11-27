import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="slider">
        <div className="left">
<h1 className="title">Car Hire</h1>
        </div>
        <div className="right">
          <img src="./images/slider/peugeot.png" alt=""/>
        </div>
      </div>
    </Layout>
  )
}

export default Home