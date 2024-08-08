import "./Contact.scss"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const telegramUserName = '@Mikyyetklyelij';
  const linkdinUserName = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
  const phoneNumber = '0902464535';
  const phoneNumber2 = '0901962782';
  const whatsapplink="https://wa.me/qr/3GK62EOD3WVQE1"



  const handleDial = () => {
    window.location.href = `tel:${phoneNumber}`;
    window.location.href = `tel:${phoneNumber2}`;

  };

  const telegramLink = `https://t.me/${telegramUserName}`;

  const letters = ['S', 'A', 'Y', '-', 'H', 'Y'];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uk7hzdl', 'template_0fnzi45', form.current, {
        publicKey: 're8UOJpBf_mKVPA23',
      })
      .then(
        () => {
          alert('SUCCESSFULLY SENT!');
          form.current.reset();
        },
        (error) => {
          alert('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="containerC">
      <div  id="contact" className=" flex justify-between contact-page"  data-aos="zoom-in" 
    data-aos-duration="1000" data-aos-delay="400">
      <div className="text-zone">
        <h1 className="h1 text-white"
        >
          {letters.map((i, index) => {
            return (
              <span key={index}  className="father">
                {i}
              </span>
            );
          })}
        </h1>
        <p className="text-white">
          IF YOU WANT TO CONTACT ME. PLEASE USE THE FOLLOWING ADDRESSES
        </p>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="flex-2 text-black ">
            <ul>
              <li className="half text-black">
                <input
                  type="text"
                  className="text"
                  name="from_name"
                  id="sendername"
                  placeholder="Name"
                />
              </li>
              <li className="half text-black">
                <input
                  type="text"
                  className="text"
                  name="from_email"
                  id="replyto"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                   />
                <input type="submit" value="Send" className="flat"  />
              </li>
            </ul>
          </form>

          <section className="additional flex-1 text-black">
            <div className="call-us">
              <div
                className="phone"
                onClick={handleDial}
              >
                <FontAwesomeIcon
                  className="anchor"
                  icon={faPhone}
                  color="#4d4d4e"
                />{' '}
                <strong>
                  PHONES<br></br>
                  <span><a href={`tel:${phoneNumber}`}>+251902464535</a> <br></br>
                  <a href={`tel:${phoneNumber2}`}>+251901962782</a> </span>{' '}
                </strong>
              </div>
            
            </div>

            <div className="social-link" >
              <a href={telegramLink} className="social">
                <FontAwesomeIcon className="linkt" icon={faTelegram} color="#" />
              </a >
              <a href={linkdinUserName} className="social" >
                <FontAwesomeIcon className="linkf" icon={faLinkedin} color="#"/>
              </a>
              <a href={whatsapplink} className="social">
                <FontAwesomeIcon className="linkv" icon={faWhatsapp}color="#"/>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Contact;
