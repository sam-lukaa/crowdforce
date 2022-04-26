import "./index.css";
import Icon from "../../../../library/mark_icon.png";
import Arrow from "../../../../library/arrow.png";
import Section1 from "../../../../library/section1.png";

export default function Index() {
  return (
    <div className="section1" data-aos="fade-left">
      <div className="right_section">
        <div className="section_text">
          <h3>Scan and pay in just seconds</h3>
          <p>
            Make contactless and secure QR Payments at a partner merchant
            outlets near you as well as online and checkout in just a few clicks
            using your MPayer Wallet App.
          </p>
        </div>

        <div>
          <div className="section_list">
            <img src={Icon} alt="" />
            <p>Pay with MPayer Wallet Credits</p>
          </div>

          <div className="section_list">
            <img src={Icon} alt="" />
            <p>Pay directly from your bank account</p>
          </div>

          <div className="section_list">
            <img src={Icon} alt="" />
            <p>Pay through direct wallet-wallet transfers</p>
          </div>
        </div>

        <button className="section_btn">
          Find out how <img src={Arrow} alt="" />
        </button>
      </div>

      <div className="left_section">
        <img src={Section1} alt="" />
      </div>
    </div>
  );
}
