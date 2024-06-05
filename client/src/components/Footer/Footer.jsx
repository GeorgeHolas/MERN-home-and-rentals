// Footer.jsx
import { LocalPhone, Email } from "@mui/icons-material"
import './Footer.scss';;

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src="/resources/logo.webp" alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 235 879 930</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>homehopper@support.com</p>
        </div>
        <img src="/resources/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer