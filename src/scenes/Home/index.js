import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Slider from "react-slick";

// Components
import Header from "../../components/Header";

// Scenes
import Service from "../../sections/service/Service";

import backgroundImage from "./1-1.jpg";

function Home() {
    const sliderSettings = {
        dots: false,
        speed: 500,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <Header />
            <section className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="display-center">
                    <Container>
                        <Row>
                            <Col md={7}>
                                <header className="el-heading">
                                    <h1 className="text-gradient">اپلیکین ساز افرانکست</h1>
                                    <p> معرفی محصولات ، معرفی سایت ، ساخت رزومه کاری و تجاری ، ساخت برنامه های آموزشی برای مشتریان ویا هنرجویان ، ساخت برنامه فروشگاهی ، ساخت اپلیکیشن سایت ، ساخت برنامه های آنلاین ، ساخت گالری تصویری از کار و حرفه خود</p>
                                </header>
                                <button className="button button-lg button-primary">
                                    <span className="wave"></span>
                                    <span className="text">خدمات و تعرفه ها</span>
                                </button>
                                <button className="button button-lg button-line-primary">
                                    <span className="text">مشاهده نمونه کارها</span>
                                </button>
                            </Col>
                            <Col>
                                <div className="display-center">
                                    <div class="el-mobile el-mobile-1">
                                        <div className="el-mobile-frame"></div>
                                        <ul className="el-mobile-popovers">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <Service />
        </>
    );
}

export default Home;
