import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="top_footer">
                    <div className="column">
                        <h3>GET IN TOUCH</h3>
                        <ul>
                            <li>
                                <Link>FAQs</Link>
                            </li>
                            <li>
                                <Link>Give us feedback</Link>
                            </li>
                            <li>
                                <Link>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>ABOUT MOVIE STAR</h3>
                        <ul>
                            <li>
                                <Link>FAQs</Link>
                            </li>
                            <li>
                                <Link>Give us feedback</Link>
                            </li>
                            <li>
                                <Link>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>LEGAL STUFF</h3>
                        <ul>
                            <li>
                                <Link>FAQs</Link>
                            </li>
                            <li>
                                <Link>Give us feedback</Link>
                            </li>
                            <li>
                                <Link>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>CONNECT WITH US</h3>
                        <ul>
                            <li>
                                <Link>FAQs</Link>
                            </li>
                            <li>
                                <Link>Give us feedback</Link>
                            </li>
                            <li>
                                <Link>Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom_footer">
                    <span>2020 © Specto.  All rights reserved.</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer