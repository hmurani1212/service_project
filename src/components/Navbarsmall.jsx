import React from 'react'

function Navbarsmall() {
  const handleEmailClick = () => {
    const email = "kkami5754049@gmail.com";
    const subject = "Inquiry"; 
    const body = "Hello! I would like to get in touch."; 
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  const handleContactClick = () => {
    const phoneNumber = "+923047949332"; 
    const message = "Hello! I would like to get in touch."; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div>
            <div>
         <div class="upper-navbar navbarsmall {
">
        <div class="contact-info">
            <span className='cursor-pointer' onClick={handleContactClick}>(PAK): +92047949332</span>
            <span>Email: <a href="mailto:Biz@VeevoTech.com" onClick={handleEmailClick}>kkami5754049@gmail.com</a></span>
        </div>
        <div class="social-media">
            <span>Follow Us:</span>
            <a href="#" class="social-icon">F</a>
            <a href="#" class="social-icon">X</a>
            <a href="#" class="social-icon">in</a>
            <a href="#" class="social-icon">Y</a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbarsmall