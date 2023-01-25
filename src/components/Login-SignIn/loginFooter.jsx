import './loginCSS.css';

function LoginFooter() {
    return (
     <footer>
    <hr class="hr1" />
    <div className='footer-text'><a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088' target="_blank" rel="noopener noreferrer"> Conditions of Use </a>  &nbsp;&nbsp;&nbsp;  
    <a href='https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496' target="_blank" rel="noopener noreferrer">Privacy Notice</a>  &nbsp;&nbsp;&nbsp;         
    <a href='https://www.amazon.com/gp/help/customer/display.html' target="_blank" rel="noopener noreferrer"> Help </a></div>
      <div className='footer-text'>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
    </footer>   
)
}

export default LoginFooter