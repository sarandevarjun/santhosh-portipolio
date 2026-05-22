export default function DonateFormSection() {
  return (
    <>
      <section className="donate-form-section pb-100 pt-200">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-6">
                              <div className="donate-form-content">
                                  <h3>Are You like to Help people Across the World?</h3>
      
                                  <div className="donate-form-info">
                                      <span>Or call us now</span>
                                      <h4>(+00) 123 675432</h4>
                                  </div>
                              </div>
                          </div>
      
                          <div className="col-lg-6">
                              <form className="donate-form">
                                  <div className="row">
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-group">
                                              <input type="text" name="name" className="form-control" placeholder="Your Full Name " />
                                          </div>
                                      </div>
      
                                      <div className="col-lg-6 col-md-6">
                                          <div className="form-group">
                                              <div className="select-box">
                                                  <select className="form-control">
                                                      <option value="5">Your Country</option>
                                                      <option value="1">China</option>
                                                      <option value="2">United Kingdom</option>
                                                      <option value="0">Germany</option>
                                                      <option value="3">France</option>
                                                      <option value="4">Japan</option>
                                                  </select>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <div className="select-box">
                                                  <select className="form-control">
                                                      <option value="5">$400</option>
                                                      <option value="1">$500</option>
                                                      <option value="2">$600</option>
                                                      <option value="0">$50</option>
                                                      <option value="3">$1000</option>
                                                      <option value="4">$100</option>
                                                  </select>
                                                  <span className="usd">$ USD</span>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div className="col-lg-12">
                                          <div className="donate-form-btn">
                                              <button type="submit" className="default-btn">Donate Your Money <span></span></button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
      
                  <div className="donate-form-shape">
                      <img src="/assets/img/donate-form/shape.png" alt="image" />
                  </div>
                  <div className="white-shape">
                      <img src="/assets/img/white-shape.png" alt="Image" />
                  </div>
              </section>
    </>
  );
}
