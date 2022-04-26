import "./index.css";
import Image1 from "../../../../library/bg2.png";

export default function Index() {
  const cardData = [
    {
      bgColor: "#7abce7",
      img: Image1,
      title: "Bulk Airtime",
      text: "The new Bulk Transfers feature allows you to transfer funds from your Paystack Balance to multiple bank accounts at the same time by uploading.",
    },
    {
      bgColor: "#E5E5E5",
      img: Image1,
      title: "Bulk Payments",
      text: "TThe new Bulk Transfers feature allows you to transfer funds from your Paystack Balance to multiple bank accounts at the same time by uploading.",
    },
  ];
  return (
    <div className="card2">
      {cardData.map((data) => (
        <div className="card2_card" style={{ backgroundColor: `${data.bgColor}` }}>
          <img src={data.img} alt="" />

          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  );
}
