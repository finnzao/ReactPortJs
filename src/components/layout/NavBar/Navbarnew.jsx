import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.ToggleMode = this.ToggleMode = () => {
            setMode(!active)
            window.scrollTo(0, 0)
        }
        this.display = this.display.bind(this)

        const [active, setMode] = useState(false);
    }
    display() {
        window.scrollTo(0, 0)
    }

    render() {
        return (<>
            <div className={active ? `${styles.menuMobile} ${styles.menuOpen}` : `${styles.menuMobile} ${styles.menuClose}`}>
                <ul className={styles.listMobile}>
                    <ul className={active ? `${styles.itemMobile} ${styles.iconActive}` : `${styles.itemMobile}`} onClick={props.ToggleMode} ><Link to="/">HOME</Link></ul>
                    <ul className={active ? `${styles.itemMobile} ${styles.iconActive}` : `${styles.itemMobile}`} onClick={ToggleMode} ><Link to="/portfolio">PORTFOLIO</Link></ul>
                    <ul className={active ? `${styles.itemMobile} ${styles.iconActive}` : `${styles.itemMobile}`} onClick={ToggleMode} ><Link to="/about">SOBRE</Link></ul>
                    <div className={active ? `${styles.buttonMobile} ${styles.iconActive}` : `${styles.buttonMobile}`} onClick={ToggleMode} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg></div>
                </ul>
            </div>
            <nav className={styles.navBar}>
                <h3>ICON</h3>
                <div className={active ? `${styles.icon} ${styles.iconActive}` : `${styles.icon}`} onClick={ToggleMode}>
                    <button className={styles.menubtn} ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></button>
                </div>




                <div >
                    <ul className={styles.menu}>
                        <ul className={styles.item} onClick={props.display}><Link to="/">HOME</Link></ul>
                        <ul className={styles.item} onClick={props.display}><Link to="/portfolio">PORTFOLIO</Link></ul>
                        <ul className={styles.item} onClick={props.display}><Link to="/about">SOBRE</Link></ul>
                    </ul>
                </div>
            </nav >
        </>
        )
    }
}
