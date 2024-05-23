import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/products", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SectionS = async () => {
  const Arrdata = await getData();

  return (
    <section className="service_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container">
          <h2>Our Products</h2>
          <p>See all products</p>
        </div>
        <div className="service_container">
          {Arrdata.map((item) => {
            return (
              <div className="box" title={item.title} key={item.id}>
                <Link href={`/Product_details/${item.id}`}>
                  {" "}
                  <div className="img-box">
                    <img
                      src={item.productImg}
                      alt="About Us Image"
                      width={900}
                      height={100}
                    />
                  </div>
                </Link>
                <div className="detail-box">
                  <h5>{item.title.slice(0, 15)}...</h5>
                  <p> {item.description.slice(0, 111)}....</p>
                </div>
                <div className="detail-box">
                  <h5>${item.price}</h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-box">
          <a href="">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default SectionS;
