import "./index.css";
import Phone from "../../../../library/section2.png";

export default function Index() {
  return (
    <div className="section2" data-aos="fade-up">
      <div className="section2_header">
        <h3>Pay later with your MPayer Postpaid Credits</h3>
        <p>
          MPayer is a digital financial services platform offering user easy,
          quick and secure access to important
        </p>
      </div>
      <div className="section2_main">
        <div className="section2_left">
          <img src={Phone} alt="" />
        </div>
        <div className="section2_right">
          <div className="section2_sub1">
            <h3>Pay With Credit Leverage</h3>
            <p>
              Users would also be able to make both online and in-store payments
              for goods and services at designated merchant websites and shops
              through
            </p>
            <button>Learn More ></button>
          </div>

          <div className="section2_sub2">
            <h3>Pay With Credit Leverage</h3>
            <p>
              Users would also be able to make both online and in-store payments
              for goods and services at designated merchant websites and shops
              through
            </p>
            <button>Learn More ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
