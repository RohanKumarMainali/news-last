import React from "react";
import Navbar from "../components/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Head from "next/head";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Script from "next/script";

// import required modules
import { Navigation } from "swiper";
import "swiper/css";
import Editorpick from "../components/home/Editorpick";
import Footer from "../components/Footer";


const news = [
  {
    "image": "	https://www.onlinekhabar.com/wp-content/uploads/2022/11/Kiran-KC-Ktm-7-270x170.jpg",
    "title": "२५ हजार मत ल्याएर चुनाव जित्छु : किरण केसी",
    "category": "राष्ट्रिय समाचार"
  },
  {
    "image": "https://www.onlinekhabar.com/wp-content/uploads/2022/11/NKorea-270x170.jpg",
    "title": "उत्तर कोरियाले जापानतर्फ हान्यो मिसाइल",
    "category": "राष्ट्रिय समाचार"
  },
  {
    "image": "https://www.onlinekhabar.com/wp-content/uploads/2022/09/gautam-buddha-international-airport-bhairahawa-8888-1024x553.jpg",
    "title": "ग्राउन्ड ह्यान्डलिङ दिने आश्वासनपछि भैरहवाबाट उडान गर्न हिमालय एयरलाइन्स तयार",
    "category": "बिजनेस प्रमुख"
  },
  {
    "image": "https://www.onlinekhabar.com/wp-content/uploads/2022/11/urea_kisan-1024x624.jpg",
    "title": "मल कारखाना : किसानको भोट तान्न दलहरुले पिटेको ढोल",
    "category": "बिजनेस विशेष"
  },
]

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

      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
      <Navbar />

      <div className="mt-20" style={{ marginTop: '80px' }}>
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
                  width: '100%'
                }}
              ></div>
              <span className="gridlove-hidden-overlay" />
            </div>

            <div className="gridlove-cover-content pl-10 ">
              <div className="entry-header">
                <div className="entry-category" style={{
                  position: 'absolute',
                  left: '0',
                  top: '15%',
                  color: 'white',
                }}>
                  <a
                    href="https://demo.mekshq.com/gridlove/?cat=3"
                    className="gridlove-cat gridlove-cat-3"
                    style={{ color: 'white' }}
                  >
                    Lifestyle
                  </a>{" "}
                </div>
                <h2 className="entry-title h1">

                  Everything you ever need to know about flowers
                </h2>
                <div className="entry-content">
                  <p>
                    Credibly empower enterprise wide mindshare for excellent
                    outside the box thinking. Proactively mesh impactful meta
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
                <div className="entry-category"
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '15%',
                    color: 'white',
                  }}
                >
                  <a
                    href="https://demo.mekshq.com/gridlove/?cat=3"
                    className="gridlove-cat gridlove-cat-3"
                    style={{ color: 'white' }}
                  >
                    Lifestyle
                  </a>{" "}
                </div>
                <h2 className="entry-title h1">

                  Everything you ever need to know about flowers
                </h2>
                <div className="entry-content">
                  <p>
                    Credibly empower enterprise wide mindshare for excellent
                    outside the box thinking. Proactively mesh impactful meta
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


        <div className="container">

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
            {
              news?.map((data, index) => {
                return (

                  <div className="col-lg-4 col-md-6 col-sm-12 layout-combo">
                    <article className="gridlove-post gridlove-post-a gridlove-box  post-201 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle">
                      <div className="entry-image">
                        <Link href="/news">
                          <img
                            width={370}
                            height={150}
                            src={data.image}
                            className="attachment-gridlove-a4 size-gridlove-a4 wp-post-image"
                            alt=""
                            loading="lazy"
                          />
                        </Link>
                        <div className="entry-category">
                          <a
                            href="#"
                            className="gridlove-cat gridlove-cat-3"
                          >
                            {data.catagory}
                          </a>
                        </div>
                      </div>
                      <div className="box-inner-p">
                        <div className="box-inner-ellipsis">
                          <div style={{ margin: 0, padding: 0, border: 0 }}>
                            <h2 className="entry-title h3">

                              {data.title}

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
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
