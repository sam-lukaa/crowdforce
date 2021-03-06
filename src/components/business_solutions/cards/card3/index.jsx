import "./index.css";
import Image1 from "../../../../library/bg2.png";

export default function Index() {
  return (
    <div className="card3">
      <div className="card3_text">
        <h3>Direct Invoicing</h3>
        <p>
          The new Bulk Transfers feature allows you to transfer funds from your
          Paystack Balance to multiple bank accounts at the same time by
          uploading a spreadsheet containing the recipientsâ€™ details , direct
          from your Paystack Dashboard.
        </p>
        <p className="green_btn">Learn More ></p>
      </div>
      <div className="card3_img">
        <img src={Image1} alt="" />
      </div>
    </div>
  );
}