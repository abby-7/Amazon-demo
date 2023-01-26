import "./footer.css";

import Terms from "./Terms/terms";
import FooterNav from "./FooterNav/footerNav";

export default function Footer() {
  return (
    <div className="footer">
      <FooterNav />
      <Terms />
    </div>
  );
}
