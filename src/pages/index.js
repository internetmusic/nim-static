import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/OneClick.gif";
import thumbnailEvent from "../../static/images/Avalanche-DeFi.gif"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <h1>The New Internet Media (NIM) ecosystem</h1>
            <p>The NIM ecosystem is a group of services contained in a decentralised system.<br/>
                All the services have been designed for specific purposes.<br/>
                The essence of the ecosystem is to enable creative people everywhere to live upon their creativity.<br/>
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
                                <h2>Public Board</h2>
                                <p>Let the staff write down on the board freely,<br/>Joking with each other and writing cool content can make the workplace more diverse and attractive for employees. </p>
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
