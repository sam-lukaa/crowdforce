import "./index.css";
import Mobile from "../../../library/mobile.png";
import Star from "../../../library/feature_star.png";

export default function index() {
  return (
    <div className="waller_feature">
      <div className="feature">
        <div className="feature_main">
          <button className="feature_btn">Get the App</button>
          <div className="feature_img_box">
            <div className="feature_content"></div>
            <img src={Mobile} alt="" className="feature_img" />
          </div>
        </div>
        <div className="feature_shape">
          <div className="feature_texts">
            <p className="featured_text">
              Best app I have ever used. I can easily make payment for ny stuffs
              in just a few clicks, great design!
            </p>
            <div className="featured_sub_texts">
              <p>Opemipo Oladiran</p>
              <p>Trader, Balogun Market</p>
              <p>Lagos</p>
            </div>
          </div>
          <div className="feature_star_main">
            {Array(5)
              .fill()
              .map((_, i) => (
                <img src={Star} alt="" className="feature_star" />
              ))}
          </div>
        </div>
      </div>

      <div className="wallet_texts">
        <h3>The Easiest Way to Make and Receive Payments</h3>
        <p className="wallet_text">
          MPayer is a digital business technology engagement platform offering
          easy, quick and secure access to important digital business services
          like Digital Commerce, Payments/Collections, Funds Transfer, Bill
          Payment, Utility Subscriptions, Airtime Topup, ETC
        </p>
      </div>
    </div>
  );
}
