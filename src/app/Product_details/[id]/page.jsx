import Header from "components/Header";
import Image from "next/image";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "SignIn",
  description: "SignIn Page",
};
async function getData(iddd) {
  const res = await fetch(`http://localhost:4000/products/${iddd}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async ({ params }) => {


  const objData = await getData(params.id);
  console.log(objData);

    return (
    <div className="hero_area">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <Image
                  src={`/${objData.productImg}`}
                  alt="About Us Image"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>{objData.title}</h2>
                  <a href="#">${objData.price}</a>
                </div>
                <p>
                {objData.description}
                </p>
                <a href="#"><FontAwesomeIcon style={{width: "1.1rem"}} icon={faCartPlus}  />  Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
