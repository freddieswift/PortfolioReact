import React from 'react'
import classes from './Header.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.mainNav}>
                <ul className={classes.navLinks}>
                    <li className={classes.navLink}>About Me</li>
                    <li className={classes.navLink}>Blog</li>
                    <li className={classes.navLink}>Projects</li>
                </ul>
            </nav>
        </header>
    )
}
