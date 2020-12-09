// doesn't require redux

// import React, { useEffect } from 'react';

// import DrawMap from '../d3/DrawMap'
// import MapInput from '../components/MapInput'

// import { Row } from 'react-bootstrap'
// import { Col } from 'react-bootstrap'
// import { Card } from 'react-bootstrap'
import React, { Component,} from "react";
import { Link } from "react-router-dom";
import FrontImg from "../img/landingImage.jpg";
import SIR from "../img/SIR-unscreen.gif";
import "./Home.css";
import Country from "../img/country.png";



// const Home = () => {

//     useEffect( () => {
//         DrawMap(); 
//     }, [])

//     return (
//         <Row>
//             <Col sm="12" md="3" lg="3" xl="3">
//                 <Card>
//                     <MapInput />
//                 </Card>
//             </Col>
//             <Col sm="12" md="9" lg="9" xl="9" >
//                 <Card className="mapviz">

//                 </Card>
//             </Col>
//         </Row>
//     )
// }

// export default Home


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
                            <h4 className="card"> COVID SIR Model</h4>
                            <h5 className="card"> How it works </h5>
                            <p className="card"> We created a network SIR (susceptible, infected, recovered) model to display small-scale COVID transmission. This agent-based, mechanistic version of the SIR model visualizes close connections by linking nodes together, and probabilistically chooses neighbor nodes to infect. Because COVID transmission is hard to predict, we made the infection and recovery rate editable.In addition, connections and node states can be changed. </p>
                            <Link
                                key="1"
                                to="/">
                                <button className="homeButton"> Explore our SIR Model </button>
                            </Link>
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
                            <p className="card"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
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