import "./index.css";
import Logo from "../../library/logo.png";
import Arrow from "../../library/arrow.png";

export default function Index() {
  return (
    <div>
      <div className="footer_top">
        <h2>Ready to get started?</h2>
        <p>Start making all your payments, the right way.</p>
        <input type="text" placeholder="Enter Email" />

        <p className="footer_top_p">Get setup in minutes</p>
        <button>Let's get started <img src={Arrow} alt="" /></button>
      </div>

      <div className="footer">
        <img src={Logo} alt="" />
        <div className="footer_bottom">
          <div className="left_footer">
            <p>Products</p>
            <p>Business Solutiona</p>
            <p>FAQs</p>
            <p>Support</p>
          </div>
          <div className="right_footer">
            <p>&copy; MPayer Technologies Limited 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}