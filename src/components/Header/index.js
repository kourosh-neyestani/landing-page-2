import React, { useState } from "react";
import { Container } from "react-grid-system";
import { useRouteMatch, NavLink, Link } from "react-router-dom";

const links = [
    {
        path: "/home",
        title: "خانه",
    },
    {
        path: "/plans",
        title: "تعرفه ها",
    },
    {
        path: "/service",
        title: "خدمات",
    },
    {
        path: "/blog",
        title: "وبلاگ",
    },
    {
        path: "/about",
        title: "درباره ما",
    },
    {
        path: "/contact",
        title: "تماس با ما",
    },
];

function Header() {
    let { url } = useRouteMatch();

    const [displaySidenav, setDisplaySidenav] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplaySidenav(!displaySidenav);
    };

    return (
        <>
            <header className="app-header app-header-1">
                <Container>
                    <div className="header-nav">
                        <div className="header-right">
                            <div className="header-menu">
                                <ul>
                                    {links.map((item, index) => (
                                        <li key={index}>
                                            <NavLink to={`${url}${item.path}`} activeClassName="active">
                                                <span className="anchor">{item.title}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="button button-menu" onClick={(e) => handleClick(e)}>
                                <span></span>
                            </button>
                        </div>
                        <div className="header-left">
                            <div className="header-logo">
                                <Link to={url}>اپلیکیشن ساز</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <aside className={`app-sidenav ${displaySidenav && "active"}`}>
                <div className="sidenav-nav">
                    <div className="logo">
                        <Link to={url}>اپلیکیشن ساز</Link>
                    </div>
                    <button className="button" onClick={(e) => handleClick(e)}></button>
                    <div className="sidenav-menu">
                        <ul>
                            {links.map((item, index) => (
                                <li key={index} onClick={(e) => handleClick(e)}>
                                    <NavLink to={`${url}${item.path}`} activeClassName="active">
                                        <span className="anchor">{item.title}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <span className="sidenav-close" />
            </aside>
        </>
    );
}

export default Header;
