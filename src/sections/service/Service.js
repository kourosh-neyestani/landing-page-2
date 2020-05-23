import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

const service = [
    {
        link: "/",
        title: "برنامه ساز iOS",
        subtitle: "به سادگی میتوانید برنامه هایی که در JoApp طراحی کرده اید به اپ استور منتقل نمایید این سرویس برای کاربرانی است که مایل به تولید برنامه iOS در کنار برنامه های اندروید است.",
        button: "معرفی و آموزش",
        icon: "ti-mobile",
    },
    {
        link: "/",
        title: "برنامه ساز اندروید",
        subtitle: "با JoApp میتوانید به سادگی آب خورد برنامه های اندروید بسازید و با آموزش هایی که برای شما قرار داده ایم به سادگی خروجی APK فایل برنامه خود را دریافت و برای کاربرانتان ارسال کنید",
        button: "معرفی و آموزش",
        icon: "ti-tablet",
    },
    {
        link: "/",
        title: "اپ ساز وردپرس",
        subtitle: "تنها در چند دقیقه میتوانید سایت وردپرسی خود را تبدیل به یک اپلیکیشن محتوایی پیشرفته نمایید امکانات این سرویس برای حرفه ای ها بی نظیر است",
        button: "معرفی سرویس",
        icon: "ti-blackboard",
    },
    {
        link: "/",
        title: "ارسال پوش نوتیفیکیشن",
        subtitle: "با استفاده از افزونه های JoApp به سادگی پوش ناتیفیکیشن به کاربرانتان ارسال کنید و همیشه کاربران خود را از آخرین رویداد هایتان مطلع کنید.",
        button: "افزونه ها و آموزش ها",
        icon: "ti-volume",
    },
    {
        link: "/",
        title: "پرداخت درون برنامه ای",
        subtitle: "در برنامه ساز JoApp با استفاده از افزونه ها میتوانید تمامی درگاههای پرداخت مارکت های اندرویدی را در برنامه ایجاد نمایید",
        button: "افزونه ها برنامه ساز",
        icon: "ti-server",
    },
    {
        link: "/",
        title: "فروشگاه ساز",
        subtitle: "فقط کافی است شما در وردپرس WooCommerce را نصب نمایید و از طریق این سرویس بزرگترین اپلیکیشن فروشگاهی با امکانات حرفه ای را به صورت Native تولید نمایید.",
        button: "معرفی و آموزش",
        icon: "ti-ruler-pencil",
    },
];

function Service() {
    return (
        <section className="section section-service section-service-1">
            <Container>
                <Row nogutter className="row-0">
                    {service.map((item, index) => (
                        <Col lg={4} key={index} className="column">
                            <div className="el-card">
                                <div className="el-icon">
                                    <span className={`icon ${item.icon}`}></span>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                                <Link to={item.link}>
                                    <button className="button button-lg button-primary text-primary">{item.button}</button>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Service;
