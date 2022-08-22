import React, { useState } from "react"

import { About, Footer, Header, Skills, Testimonial, Work } from "./container"

import { Navbar } from "./components"
import "./App.scss"
import Loading from "./components/redirecting-loader/Loading"

const App = () => {
  let [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 800)
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="app">
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
