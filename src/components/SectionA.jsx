import React from "react";
import Image from "next/image";
function SectionA() {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <Image
                src="/images/about-img2.png"
                alt="About Us Image"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionA;
