import "./index.css";
import Icon from "../../../../library/mark_icon.png";
import Section3 from "../../../../library/section3.png";

export default function Index() {
  return (
    <div className="section3" data-aos="fade-right">
      <div className="section3_title">
        <h3>Get Unlimited Cashbacks and Discounts</h3>
        <p>
          MPayer is a digital financial services platform offering user easy,
          quick and secure access to important digital payment services like
          Funds Transfer, Bill Payment, Utility Subscriptions, Airtime Topup,
          Bulk Collections,
        </p>
        <button>Learn More ></button>
      </div>
      <div className="section3_main">
        <div className="right_section3">
          <div className="section3_text">
            <h3>Scan and pay in just seconds</h3>
            <p>
              Make contactless and secure QR Payments at a partner merchant
              outlets near you as well as online and checkout in just a few
              clicks using your MPayer Wallet App.
            </p>
          </div>

          <div>
            <div className="section3_list">
              <img src={Icon} alt="" />
              <p>Pay with MPayer Wallet Credits</p>
            </div>

            <div className="section3_list">
              <img src={Icon} alt="" />
              <p>Pay directly from your bank account</p>
            </div>

            <div className="section3_list">
              <img src={Icon} alt="" />
              <p>Pay through direct wallet-wallet transfers</p>
            </div>
          </div>
        </div>

        <div className="left_section3">
          <img src={Section3} alt="" />
        </div>
      </div>
    </div>
  );
}
