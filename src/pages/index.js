import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/OneClick.gif";
import thumbnailEvent from "../../static/images/Avalanche-DeFi.gif"
import thumbnailBoard from "../../static/images/avalanche3.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"


const IndexPage = () => (
    <Layout>
        <SEO title="New Internet Media"/>

        <div className={"page-header home"}>
            <h1>The New Internet Media (NIM) ecosystem</h1>

            <p>New Internet Media (NIM) leads an ecosystem of companies, aiming to democratize rights administration for digital content on the Internet.<br/>
                Supported by up and running technology, we allow almost real-time payment of royalties to creators and owners of copyright.<br/>
                Starting with music- by licensing the music to DSP’s (Digital Service Providers; e.g. Spotify, Deezer, Apple Music)
            </p>

            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>NIM's CopyrightChain</h2>
                                <p>NIM CopyrightChain's infrastructure is a spoon (friendly fork) of the Avalanche blockchain.
                                    CopyrightChain is designed to fully incentivise the creators to continuously produce high-quality content, keeping the whole ecosystem robust in the long term..
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>What is Avalanche?</h2>
                                <p>Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality, and has the most validators securing its activity of any proof-of-stake protocol.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Internal News</h2>
                                <p>Get rid of sending news by e-mail and its problems; post the news in an internal and attractive format via HiStaff instead.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Teams</h2>
                                <p>HiStaff let you add staff in specific teams and manage them easily.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Staff management</h2>
                                <p>Discard traditional ways to archive staff documents and information, and try new ways to store and archive them in HiStaff easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Sign up for free</h2>
                    <p>Sign up and start increasing the productivity of your business with HiStaff.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
