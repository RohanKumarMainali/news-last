import React from 'react'
import Head from 'next/head'
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
    return (
        <>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossorigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <div id="footer" className="gridlove-footer mt-5">
                <div className="container">
                    <div className="row">
                        <div style={{marginTop:'75px'}} className="col-lg-3 col-md-6 col-sm-12">
                            <div  id="text-4" className="widget widget_text m-0 p-0 ">
                                {" "}
                                <div className="textwidget">
                                    <p>
                                        <img
                                            width={159}
                                            src="https://mekshq.com/static/gridlove/gridlove_logo_invert.png"
                                            alt="Gridlove"
                                        />
                                    </p>
                                    <p>
                                        Gridlove is an attractive WordPress theme based on a grid
                                        framework. With many layouts to choose from you’ll have your
                                        website running in no time.
                                    </p>
                                </div>
                            </div>
                            <div id="mks_social_widget-5 " className="widget mks_social_widget">
                                <ul className=' d-flex'>
                                    <li style={{ fontSize: '30px', color: '#618feb' }}><i class="bi bi-facebook me-3"></i></li>
                                    <li style={{ fontSize: '30px', color: '#E1306C' }}><i class="bi bi-instagram me-3"></i></li>
                                    <li style={{ fontSize: '30px', color: '#1DA1F2' }}><i class="bi bi-twitter"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div id="text-5" className="widget widget_text">
                                <h4 className="widget-title">Email Newsletter</h4>{" "}
                                <div className="textwidget">
                                    <div id="mc_embed_signup">
                                        <form
                                            action="https://mekshq.us8.list-manage.com/subscribe/post?u=7b0c01faab4ec7b36214565c5&id=2f153d325c"
                                            method="post"
                                            id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className="validate"
                                            target="_blank"
                                            noValidate=""
                                        >
                                            <div id="mc_embed_signup_scroll">
                                                <p>
                                                    Subscribe to receive inspiration, news, and ideas in your
                                                    inbox.
                                                </p>
                                                <div className="mc-field-group">
                                                    <input
                                                        type="email"
                                                        defaultValue=""
                                                        name="EMAIL"
                                                        className="required email"
                                                        id="mce-EMAIL"
                                                        placeholder="Enter your email address"
                                                    />
                                                </div>
                                                <div id="mce-responses" className="clear">
                                                    <div
                                                        className="response"
                                                        id="mce-error-response"
                                                        style={{ display: "none" }}
                                                    />
                                                    <div
                                                        className="response"
                                                        id="mce-success-response"
                                                        style={{ display: "none" }}
                                                    />
                                                </div>{" "}
                                                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                                <div
                                                    style={{ position: "absolute", left: "-5000px" }}
                                                    aria-hidden="true"
                                                >
                                                    <input
                                                        type="text"
                                                        name="b_7b0c01faab4ec7b36214565c5_2f153d325c"
                                                        tabIndex={-1}
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="clear sub-menu">
                                                    <input
                                                        type="submit"
                                                        defaultValue="Subscribe"
                                                        name="subscribe"
                                                        id="mc-embedded-subscribe"
                                                        className="gridlove-button-search"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*End mc_embed_signup*/}
                                </div>
                            </div>{" "}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div style={{marginTop: '75px'}} id="nav_menu-4" className="widget widget_nav_menu">
                                <h4 className="widget-title">Help &amp; Support</h4>
                                <div className="menu-gridlove-footer-container">
                                    <ul id="menu-gridlove-footer" className="menu">
                                        <li
                                            id="menu-item-1959"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1959"
                                        >
                                            <a href="#">Support</a>
                                        </li>
                                        <li
                                            id="menu-item-1960"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1960"
                                        >
                                            <a href="#">Terms of use</a>
                                        </li>
                                        <li
                                            id="menu-item-1961"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1961"
                                        >
                                            <a href="#">Comunity Guidelines</a>
                                        </li>
                                        <li
                                            id="menu-item-1962"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1962"
                                        >
                                            <a href="#">About Gridlove</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{" "}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div id="text-7" className="widget widget_text">
                                {" "}
                                <div className="textwidget">
                                    <a href="javascript:void(0);" className="mks-ep-trigger-open">
                                        <img style={{width:'100%'}} src="https://mekshq.com/static/gridlove/td_gridlove_248.jpg" />
                                    </a>
                                </div>
                            </div>{" "}
                        </div>
                    </div>
                </div>
                <div className="gridlove-copyright py-4">
                    <div className="container text-light">
                        <p style={{ textAlign: "center", fontSize: '12px' }}>
                            Copyright © 2022 · Created by{" "}
                            <a className='text-light' href="#" target="_blank">
                                Meks
                            </a>{" "}
                            · Powered by{" "}
                            <a className='text-light' href="#" target="_blank">
                                WordPress
                            </a>
                        </p>{" "}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer