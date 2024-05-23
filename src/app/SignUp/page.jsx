import Header from "components/Header";

export const metadata = {
  title: "SignUp",
  description: "SignUp Page",
};

const Page = () => {
  return (
    <div style={{
      height: "100vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
      backgroundColor:"#06285D",
    }}>
      <Header/>
      <section className="contact_section layout_padding" id="contactLink">
        <div className="container">
          <div className="heading_container">
            <h2>Sign Up</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <form>
              <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className="form-control"
                      id="inputSubject4"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <input
                      type="text"
                      className="form-control"
                      id="inputSubject4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="Password"
                    className="form-control"
                    id="inputMessage"
                    placeholder="Password"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
