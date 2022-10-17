import React from "react";
import Navbar from "../components/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";

import "bootstrap-icons/font/bootstrap-icons.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import "swiper/css";
import Editorpick from "../components/home/Editorpick";

const HomePage = () => {

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
      <Navbar />

      <div className="mt-20">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="banner-image position-relative">
              <div
                className="banner-img"
                style={{
                  backgroundImage: `url(https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_02-1500x500.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "auto",
                }}
              ></div>
              <span className="gridlove-hidden-overlay" />
            </div>

            <div className="gridlove-cover-content pl-10 ">
              <div className="entry-header">
                <div className="entry-category">
                  <a
                    href="https://demo.mekshq.com/gridlove/?cat=3"
                    className="gridlove-cat gridlove-cat-3"
                  >
                    Lifestyle
                  </a>{" "}
                </div>
                <h2 className="entry-title h1">
                  <a
                    href="https://demo.mekshq.com/gridlove/?p=192"
                    className="banner-h2"
                  >
                    Everything you ever need to know about flowers
                  </a>
                </h2>
                <div className="entry-content">
                  <p>
                    Credibly empower enterprise wide mindshare for excellent
                    "outside the box" thinking. Proactively mesh impactful meta
                    services rather than enterprise results. Professionally
                    generate end-to-end human capital...
                  </p>
                </div>
                <div
                  className="entry-meta d-flex"
                  style={{ color: "rgba(255, 255, 255, .8)" }}
                >

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-image position-relative">
              <div
                className="banner-img"
                style={{
                  backgroundImage: `url(https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_37-1500x500.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "auto",
                }}
              ></div>

              <span className="gridlove-hidden-overlay" />
            </div>

            <div className="gridlove-cover-content pl-10 ">
              <div className="entry-header">
                <div className="entry-category">
                  <a
                    href="https://demo.mekshq.com/gridlove/?cat=3"
                    className="gridlove-cat gridlove-cat-3"
                  >
                    Lifestyle
                  </a>{" "}
                </div>
                <h2 className="entry-title h1">
                  <a
                    href="https://demo.mekshq.com/gridlove/?p=192"
                    className="banner-h2"
                  >
                    Everything you ever need to know about flowers
                  </a>
                </h2>
                <div className="entry-content">
                  <p>
                    Credibly empower enterprise wide mindshare for excellent
                    "outside the box" thinking. Proactively mesh impactful meta
                    services rather than enterprise results. Professionally
                    generate end-to-end human capital...
                  </p>
                </div>
                <div
                  className="entry-meta d-flex"
                  style={{ color: "rgba(255, 255, 255, .8)" }}
                >

                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Editorpick></Editorpick>
        {/* latest article   */}

        <div className="latest-article">
          <div className="container">
            <div >
              <h1
                className="mt-4"
                style={{
                  color: "#111111",
                  fontSize: "28px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Latest Article
              </h1>

              <div className="row" >
                <div className="col-lg-4 col-md-6 col-sm-12 layout-combo">
                  <article className="gridlove-post gridlove-post-a gridlove-box  post-201 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                    <div className="entry-image">

                      <img
                        width={370}
                        height={150}
                        src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_23-370x150.jpg"
                        className="attachment-gridlove-a4 size-gridlove-a4 wp-post-image"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-category">
                        <a
                          href="#"
                          className="gridlove-cat gridlove-cat-3"
                        >
                          Lifestyle
                        </a>
                      </div>
                    </div>
                    <div className="box-inner-p">
                      <div className="box-inner-ellipsis">
                        <div style={{ margin: 0, padding: 0, border: 0 }}>
                          <h2 className="entry-title h3">

                            If you’re truly happy and you know it let it show

                          </h2>
                        </div>
                      </div>
                      <div className="entry-meta">
                        <div className="meta-item meta-author">
                          <div className="coauthors">
                            <span className="vcard author">
                              <span className="fn">
                                <img
                                  alt=""
                                  src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg"
                                  className="avatar avatar-24 photo"
                                  height={24}
                                  width={24}
                                  loading="lazy"
                                />
                                Joana Bergstein
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="meta-item meta-date">
                          <span className="updated">1 month ago</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 layout-combo">
                  <article className="gridlove-post gridlove-post-a gridlove-box  post-201 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                    <div className="entry-image">

                      <img
                        width={370}
                        height={150}
                        src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_39-370x150.jpg"
                        className="attachment-gridlove-a4 size-gridlove-a4 wp-post-image"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-category">
                        <a
                          href="#"
                          className="gridlove-cat gridlove-cat-3"
                        >
                          Lifestyle
                        </a>
                      </div>
                    </div>
                    <div className="box-inner-p">
                      <div className="box-inner-ellipsis">
                        <div style={{ margin: 0, padding: 0, border: 0 }}>
                          <h2 className="entry-title h3">

                            If you’re truly happy and you know it let it show

                          </h2>
                        </div>
                      </div>
                      <div className="entry-meta">
                        <div className="meta-item meta-author">
                          <div className="coauthors">
                            <span className="vcard author">
                              <span className="fn">
                                <img
                                  alt=""
                                  src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg"
                                  className="avatar avatar-24 photo"
                                  height={24}
                                  width={24}
                                  loading="lazy"
                                />
                                Joana Bergstein
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="meta-item meta-date">
                          <span className="updated">1 month ago</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 layout-combo">
                  <article className="gridlove-post gridlove-post-a gridlove-box  post-201 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                    <div className="entry-image">

                      <img
                        width={370}
                        height={150}
                        src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_30-370x150.jpg"
                        className="attachment-gridlove-a4 size-gridlove-a4 wp-post-image"
                        alt=""
                        loading="lazy"
                      />
                      <div className="entry-category">
                        <a
                          href="#"
                          className="gridlove-cat gridlove-cat-3"
                        >
                          Lifestyle
                        </a>
                      </div>
                    </div>
                    <div className="box-inner-p">
                      <div className="box-inner-ellipsis">
                        <div style={{ margin: 0, padding: 0, border: 0 }}>
                          <h2 className="entry-title h3">

                            If you’re truly happy and you know it let it show

                          </h2>
                        </div>
                      </div>
                      <div className="entry-meta">
                        <div className="meta-item meta-author">
                          <div className="coauthors">
                            <span className="vcard author">
                              <span className="fn">
                                <img
                                  alt=""
                                  src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_5_1473333966-24x24.jpg"
                                  className="avatar avatar-24 photo"
                                  height={24}
                                  width={24}
                                  loading="lazy"
                                />
                                Joana Bergstein
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="meta-item meta-date">
                          <span className="updated">1 month ago</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
