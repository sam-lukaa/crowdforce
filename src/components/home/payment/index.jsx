import "./index.css";
import Icon1 from "../../../library/icon1.png";
import Icon2 from "../../../library/icon2.png";
import Icon3 from "../../../library/icon3.png";
import Icon4 from "../../../library/icon4.png";
import Icon5 from "../../../library/icon5.png";

export default function Index() {
  const data = [
    { icon: Icon1, text: "Airtime Topup" },
    { icon: Icon2, text: "Electricity Bill Payment" },
    { icon: Icon3, text: "CableTV Subscription" },
    { icon: Icon4, text: "Internet Data Subscription" },
    { icon: Icon5, text: "Bus, Train & Flight Tickets" },
    { icon: Icon1, text: "School Fees Payment" },
    { icon: Icon2, text: "Order Food & Groceries" },
    { icon: Icon3, text: "All Payment Services" },
  ];
  return (
    <div className="payment">
      <h3 className="payment_header">Reacharge & pay Bills</h3>
      <div className="payment_main">
        {data.map((item) => (
          <div className="payment_details">
            <img src={item.icon} alt="" className="payment_icon" />
            <p className="payment_text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
