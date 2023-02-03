import './footer.css'

import Terms from './Terms/terms'
import FooterNav from './FooterNav/footerNav'
import Back from './Back/back'

export default function Footer() {
  return (
    <div className="footer">
      <Back />
      <FooterNav />
      <Terms />
    </div>
  )
}
