import React from "react"
import Layout from "../../components/Layout"
import Description from "../../components/Description/Description"
import Gallery from "../../components/Gallery/Gallery"
import Competence from "../../components/Competence/Competence"
import Experience from "../../components/Experience/Experience"
import Formulaire from "../../components/Formulaire/Formulaire"

import './Home.css'

function Home() {
    return (
        <Layout>
            <Description />
            <Gallery />
            <Competence />
            <Experience />
            <Formulaire />
        </Layout>
    )
}

export default Home