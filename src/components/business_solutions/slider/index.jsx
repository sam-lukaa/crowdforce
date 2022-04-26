import "./index.css";
import Image1 from "../../../library/section3.png";

export default function Index() {
  return (
    <div className="slider">
      <div className="slider_img">
        {/* <img src={Image1} alt="" /> */}
      </div>
      <div className="slider_card">
        <h3>Card Payments</h3>
        <p>
          The new Bulk Transfers feature allows you to transfer funds from your
          Paystack Balance to multiple bank accounts at the same time by
          uploading a spreadsheet containing the recipients’ details , direct
          from your Paystack Dashboard.
        </p>
        <p className="white_btn">Learn More ></p>
      </div>
    </div>
  );
}
