export default function BlogSection() {
  return (
    <>
      <section className="blog-section pt-100 pb-70">
                  <div className="container">
                      <div className="section-title">
                          <span>
                              <i className="flaticon-book"></i>
                              Our Blog
                          </span>
                          <h2>Check Out Our Latest News</h2>
                      </div>
      
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <div className="blog-item">
                                  <div className="image">
                                      <img src="/assets/img/blog/7.jpg" alt="image" />
                                  </div>
      
                                  <div className="content">
                                      <span>Poor, 22 January</span>
                                      <h3>Poverty not only money it can be food sometime</h3>
                                      <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididun.</p>
                                      <a href="/blog/single" className="blog-btn-one">
                                          Learn more 
                                          <i className="flaticon-plus"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
      
                          <div className="col-lg-4 col-md-6">
                              <div className="blog-item">
                                  <div className="image">
                                      <img src="/assets/img/blog/8.jpg" alt="image" />
                                  </div>
      
                                  <div className="content">
                                      <span>Food, 21 December</span>
                                      <h3>Strawberry-Banana Quinoa Muffins Recipe for poor</h3>
                                      <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididun.</p>
                                      <a href="/blog/single" className="blog-btn-one">
                                          Learn more 
                                          <i className="flaticon-plus"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
      
                          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                              <div className="blog-item">
                                  <div className="image">
                                      <img src="/assets/img/blog/9.jpg" alt="image" />
                                  </div>
      
                                  <div className="content">
                                      <span>Healthy, 21 June</span>
                                      <h3>The Plant Powered Dietitian to consume habit</h3>
                                      <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempo incididun.</p>
                                      <a href="/blog/single" className="blog-btn-one">
                                          Learn more 
                                          <i className="flaticon-plus"></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}
