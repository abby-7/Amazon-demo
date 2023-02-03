import './footerNav.css'

export default function FooterNav() {
  return (
    <div className="footer-nav">
      <table className="footer-content">
        {/* 链接使用自带链接，估计网页还做的没那么快 */}
        <tbody>
          <tr>
            <td className="footer-item-box">
              <a
                href="https://music.amazon.com?ref=dm_aff_amz_com"
                className="footer-item">
                Amazon Music
                <br />
                <span style={{ color: '#999' }}>
                  Stream millions
                  <br />
                  of songs
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com"
                className="footer-item">
                Amazon <br />
                Advertizing
                <br />
                <span style={{ color: '#999' }}>
                  Find, attract, and
                  <br />
                  engage <br />
                  customers
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://www.amazon.com/gp/browse.html?node=15547130011&ref_=_us_footer_drive"
                className="footer-item">
                Amazon Drive
                <br />
                <span style={{ color: '#999' }}>
                  Cloud storage
                  <br />
                  from Amazon
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a href="https://www.6pm.com/" className="footer-item">
                6pm
                <br />
                <span style={{ color: '#999' }}>
                  Score deals
                  <br />
                  on fashion
                  <br /> brands
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a href="https://www.abebooks.com/" className="footer-item">
                AbeBooks
                <br />
                <span style={{ color: '#999' }}>
                  Books, art
                  <br />& collectibles
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a href="https://www.acx.com/" className="footer-item">
                ACX
                <br />
                <span style={{ color: '#999' }}>
                  Audiobook
                  <br /> Publishing
                  <br />
                  Made Easy
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://sell.amazon.com/?ld=AZUSSOA-footer-aff&ref_=footer_sell"
                className="footer-item">
                Sell on Amazon
                <br />
                <span style={{ color: '#999' }}>Start a Selling Account</span>
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td className="footer-item-box">
              <a
                href="https://www.amazon.com/business?ref_=footer_retail_b2b"
                className="footer-item">
                Amazon Business
                <br />
                <span style={{ color: '#999' }}>
                  Everything For
                  <br />
                  Your Business
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://www.amazon.com/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&ref_=footer_aff_fresh"
                className="footer-item">
                Amazon Fresh
                <br />
                <span style={{ color: '#999' }}>
                  Groceries & More
                  <br />
                  Right To Your <br />
                  Door
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://www.amazon.com/gp/browse.html?node=230659011&ref_=footer_amazonglobal"
                className="footer-item">
                AmazonGlobal
                <br />
                <span style={{ color: '#999' }}>
                  Ship Orders
                  <br />
                  Internationally
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://www.amazon.com/services?ref_=footer_services"
                className="footer-item">
                Home Services
                <br />
                <span style={{ color: '#999' }}>
                  Experienced
                  <br /> Pros Happiness
                  <br /> Guarantee
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://ignite.amazon.com/?ref=amazon_footer_ignite"
                className="footer-item">
                Amazon
                <br /> Ignite
                <br />
                <span style={{ color: '#999' }}>
                  Sell your
                  <br /> original
                  <br />
                  Digital <br />
                  Educational
                  <br />
                  Resources
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=amazonfooter"
                className="footer-item">
                Amazon Web <br />
                Services
                <br />
                <span style={{ color: '#999' }}>
                  Scalable Cloud
                  <br />
                  Computing <br />
                  Services
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a href="https://www.audible.com" className="footer-item">
                Audible
                <br />
                <span style={{ color: '#999' }}>
                  Listen to Books & <br />
                  Original
                  <br />
                  Audio Performances
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className="footer-item-box">
              <a href="https://www.pillpack.com/" className="footer-item">
                PillPack
                <br />
                <span style={{ color: '#999' }}>
                  Pharmacy <br />
                  Simplified
                </span>
              </a>
            </td>
            <td className="footer-item-box">
              <a
                href="https://www.amazon.com/gp/browse.html?node=12653393011&ref_=footer_usrenew"
                className="footer-item">
                Amazon <br />
                Renewed
                <br />
                <span style={{ color: '#999' }}>
                  Like-new <br />
                  products <br />
                  you can trust
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
