
import React, { Component,} from "react";
import { Link } from "react-router-dom";
import FrontImg from "../img/landingImage.jpg";
import SIR from "../img/SIR-unscreen.gif";
import "./Home.css";
import Country from "../img/country.png";


class Home extends Component {
    render () {
        return (
            <div className="Home">
                <div className="Banner">
                    <img src={FrontImg} alt="Homepage" />
                </div>
                <br />
                <br />
                <h3 className="text"> <b> Welcome to our COVID-19 data visualizations portal! </b></h3>
                <br/>
                <p className="text"> With the on-going pandemic, the world is under uncertainty of COVID-19. We have faced a stress in health care system, an economic recession and panic feeling. Many people are terrified of the pandemic, and it might be very hard to face the current situation. Therefore, our goal is to develop a platform that provide interactive visualizations that would help users to have a better understanding of this pandemic. We offer an interactive COVID SIR model for spread of disease where the users can simulate the spread with differnt conditions. We also provide graphs that allow users to explore and compare the COVID-19 outbreak at a global scale. Also remember to check out our "What you can do" page for tips that would help protect yourselves and your loved ones.
                </p>

                <br/>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-4 left">
                            <img id="SIR" src={SIR} alt="SIR gif"/>
                        </div>
                        <div className="col-8 right">
                            <h4 className="card"> COVID-19 SIR Model</h4>
                            <h5 className="card"> How it works </h5>
                            <p className="card"> We created a network SIR (susceptible, infected, recovered) model to display small-scale COVID transmission. This agent-based, mechanistic version of the SIR model visualizes close connections by linking nodes together, and probabilistically chooses neighbor nodes to infect. Because COVID transmission is hard to predict, we made the infection and recovery rate editable.In addition, connections and node states can be changed. </p>
                            {/* <Link
                                key="1"
                                to="/simu"> */}
                                <button onClick={event =>  window.location.href='https://trusting-varahamihira-144139.netlify.app/'} className="homeButton"> Explore our SIR Model </button>
                            {/* </Link> */}
                        </div>
                    </div>
                    <br/>
                    <br/>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-8 left">
                            <h4 className="card"> COVID-19 Cases by Country</h4>
                            <h5 className="card"> How it works </h5>
                            <p className="card"> We created an interactive dashbaord to show data visualizations of COVID cases (total cases, active cases, recovered cases, daily cases) in side-by-side histograms or overlaying linegraphs. All visualizations are rendered dynamically in real time using data fetched from Johns Hopkins CSSE. </p>
                            <Link
                                key="1"
                                to="/new">
                                <button className="homeButton"> Explore COVID Cases by Country </button>
                            </Link>
                        </div>
                        <div className="col-4 right">
                            <img id="country" src={Country} alt="country data"/>
                        </div>
                    </div>
                    <br/>
                    <br/>

                </div>






            </div>

        )
    }
}

export default Home;