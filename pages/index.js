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
                  <div className="meta-item meta-author d-flex">
                    <div className="coauthors">
                      <span className="vcard author">
                        <span className="fn">
                          <a
                            href="https://demo.mekshq.com/gridlove?author_name=meks2"
                            className="d-flex mr-10"
                          >
                            <img
                              alt=""
                              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                              className="avatar avatar-24 photo"
                              loading="lazy"
                              width={24}
                              height={24}
                            />
                            Lisa Scholfield
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="meta-item meta-comments">
                    <a href="https://demo.mekshq.com/gridlove/?p=192#comments">
                      4 comments
                    </a>
                  </div>
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
                  <div className="meta-item meta-author d-flex">
                    <div className="coauthors">
                      <span className="vcard author">
                        <span className="fn">
                          <a
                            href="https://demo.mekshq.com/gridlove?author_name=meks2"
                            className="d-flex mr-10"
                          >
                            <img
                              alt=""
                              src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                              className="avatar avatar-24 photo"
                              loading="lazy"
                              width={24}
                              height={24}
                            />
                            Lisa Scholfield
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="meta-item meta-comments">
                    <a href="https://demo.mekshq.com/gridlove/?p=192#comments">
                      4 comments
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Editorpick></Editorpick>
        {/* latest article   */}

        <div className="latest-article">
          <div className="container-fluid d-flex justify-content-center">
            <div style={{ width: "80%" }}>
              <h1
                style={{
                  color: "#111111",
                  fontSize: "28px",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                }}
              >
                Latest Article
              </h1>

              <div
                className="d-flex flex-wrap  align-items-center "
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <div
                  style={{ width: "30%", height: "400px" }}
                  className=" article-container me-4"
                >
                  <div
                    className="position-relative article-img"
                    style={{
                      backgroundImage: `url(https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_23-370x150.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "60%",
                      width: "auto",
                    }}
                  >
                    <div class="entry-category">
                      <a
                        href="https://demo.mekshq.com/gridlove/?cat=2"
                        class="gridlove-cat gridlove-cat-2"
                      >
                        Travel
                      </a>{" "}
                    </div>
                  </div>
                  <div className="box-inner-p">
                    <div className="box-inner-ellipsis">
                      <div
                        style={{
                          margin: "0px",
                          padding: "0px",
                          border: "0px none",
                        }}
                      >
                        <h2 className="entry-title h3">
                          <a href="https://demo.mekshq.com/gridlove/?p=167">
                            Australia is the ultimate place in the world for
                            kangaroo...
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="entry-meta">
                      <div className="meta-item meta-author">
                        <div className="coauthors">
                          <span className="vcard author">
                            <span className="fn">
                              <a href="https://demo.mekshq.com/gridlove?author_name=meks2">
                                <img
                                  alt=""
                                  src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                                  className="avatar avatar-24 photo"
                                  loading="lazy"
                                  width={24}
                                  height={24}
                                />
                                Lisa Scholfield
                              </a>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="meta-item meta-date">
                        <span className="updated d-flex">
                          <li
                            class="bi bi-calendar"
                            style={{ listStyle: "none" }}
                          ></li>
                          1 month ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ width: "30%", height: "400px" }}
                  className=" article-container me-4"
                >
                  <div
                    className="article-img position-relative"
                    style={{
                      backgroundImage: `url(https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_08-370x150.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "60%",
                      width: "auto",
                    }}
                  >
                    <div class="entry-category">
                      <a
                        href="https://demo.mekshq.com/gridlove/?cat=2"
                        class="gridlove-cat gridlove-cat-2"
                      >
                        Travel
                      </a>{" "}
                    </div>
                  </div>
                  <div className="box-inner-p">
                    <div className="box-inner-ellipsis">
                      <div
                        style={{
                          margin: "0px",
                          padding: "0px",
                          border: "0px none",
                        }}
                      >
                        <h2 className="entry-title h3">
                          <a href="https://demo.mekshq.com/gridlove/?p=167">
                            Australia is the ultimate place in the world for
                            kangaroo...
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="entry-meta">
                      <div className="meta-item meta-author">
                        <div className="coauthors">
                          <span className="vcard author">
                            <span className="fn">
                              <a href="https://demo.mekshq.com/gridlove?author_name=meks2">
                                <img
                                  alt=""
                                  src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                                  className="avatar avatar-24 photo"
                                  loading="lazy"
                                  width={24}
                                  height={24}
                                />
                                Lisa Scholfield
                              </a>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="meta-item meta-date">
                        <span className="updated d-flex">
                          <li
                            class="bi bi-calendar"
                            style={{ listStyle: "none" }}
                          ></li>
                          1 month ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ width: "30%", height: "400px" }}
                  className=" article-container me-4"
                >
                  <div
                    className="article-img position-relative"
                    style={{
                      backgroundImage: `url(https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/gridlock_04-370x150.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "60%",
                      width: "auto",
                    }}
                  >
                    <div class="entry-category">
                      <a
                        href="https://demo.mekshq.com/gridlove/?cat=2"
                        class="gridlove-cat gridlove-cat-2"
                      >
                        Travel
                      </a>{" "}
                    </div>
                  </div>
                  <div className="box-inner-p">
                    <div className="box-inner-ellipsis">
                      <div
                        style={{
                          margin: "0px",
                          padding: "0px",
                          border: "0px none",
                        }}
                      >
                        <h2 className="entry-title h3">
                          <a href="https://demo.mekshq.com/gridlove/?p=167">
                            Australia is the ultimate place in the world for
                            kangaroo...
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="entry-meta">
                      <div className="meta-item meta-author">
                        <div className="coauthors">
                          <span className="vcard author">
                            <span className="fn">
                              <a href="https://demo.mekshq.com/gridlove?author_name=meks2">
                                <img
                                  alt=""
                                  src="https://mksdmcdn-9b59.kxcdn.com/gridlove/wp-content/uploads/2016/09/avatar_user_4_1473333956-24x24.jpg"
                                  className="avatar avatar-24 photo"
                                  loading="lazy"
                                  width={24}
                                  height={24}
                                />
                                Lisa Scholfield
                              </a>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="meta-item meta-date">
                        <span className="updated d-flex">
                          <li
                            class="bi bi-calendar"
                            style={{ listStyle: "none" }}
                          ></li>
                          1 month ago
                        </span>
                      </div>
                    </div>
                  </div>
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
