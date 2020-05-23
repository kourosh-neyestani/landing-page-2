import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Header from "../../components/Header";

// Scenes
import Service from "../../sections/service/Service";

import backgroundImage from "./1-1.jpg";

function Home() {
    return (
        <>
            <Header />
            <section className="section section-hero section-hero-1 overlay-image" style={{backgroundImage: `url(${backgroundImage})`}}>
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
                        </Row>
                    </Container>
                </div>
            </section>
            <Service />
        </>
    );
}

export default Home;
