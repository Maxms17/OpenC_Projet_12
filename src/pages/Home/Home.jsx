import React from "react"
import Layout from "../../components/Layout"
import Description from "../../components/Description/Description"
import Gallery from "../../components/Gallery/Gallery"
import Competence from "../../components/Competence/Competence"
import Experience from "../../components/Experience/Experience"

import './Home.css'

function Home() {
    return (
        <Layout>
            <Description />
            <Gallery />
            <Competence />
            <Experience />
        </Layout>
    )
}

export default Home