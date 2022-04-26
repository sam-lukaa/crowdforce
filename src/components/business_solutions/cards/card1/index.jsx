import "./index.css";
import Pay from "../../../../library/pay1.png";

export default function Index() {
  return (
    <div className="card1">
      <h3>Sell anywhere. Collect payments fast</h3>

      <div className="card1_card">
        <div className="card1_left">
          <img src={Pay} alt="" />
        </div>
        <div className="card1_right">
          <div className="card1_right_top">
            <h5>Bulk Collections</h5>
            <p>
              The new Bulk Transfers feature allows you to transfer funds from
              your MPayer Wallet Balance to multiple bank accounts at the same
              time by uploading a spreadsheet containing the recipients’ details
              , direct from your MPayer Dashboard.
            </p>
            <p className="green_btn">Learn More ></p>
          </div>

          <div className="card1_right_top">
            <h5>Online and In-store Payments </h5>
            <p>
              Users would also be able to make both online and in-store payments
              for goods and services at designated merchant websites and shops
              through direct wallet-wallet transfers, direct bank deposits, and
              debit card payment
            </p>
            <p className="green_btn">Learn More ></p>
          </div>
        </div>
      </div>
    </div>
  );
}
