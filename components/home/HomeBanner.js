export default function HomeBanner() {
  return (
    <>
      <div className="home-banner-three home-banner-three-video">
                  <video loop muted autoPlay playsInline poster="" className="background-video">
                      <source src="/assets/img/banner-video.mp4" type="video/mp4" />
                  </video>
                  <div className="">
                      <div className="home-item">
                          <div className="d-table">
                              <div className="d-table-cell">
                                  <div className="container">
                                      <div className="row align-items-center">
                                          <div className="col-lg-7">
                                              <div className="main-banner-content">
                                                  <span>Huruma</span>
                                                  <h1>It is more difficult to give money away </h1>
                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.</p>
                                                  <div className="banner-btn">
                                                      <a href="/contact" className="default-btn">
                                                          Donate Now
                                                          <i className="flaticon-right"></i>
                                                          <span></span>
                                                      </a>
                                                      <a className="optional-btn" href="/team">
                                                          Become Member
                                                          <i className="flaticon-right"></i>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
      
                                          <div className="col-lg-5">
                                              <div className="banner-bar">
                                                  <div className="banner-video">
                                                      <span>Watch Intro</span>
                                                      <a href="https://www.youtube.com/watch?v=uemObN8_dcw" className="video-btn popup-youtube">
                                                          <i className="bx bx-play"></i>
                                                      </a>
                                                  </div>
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
}
