import "./Contact.scss"
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import { faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const telegramUserName = '@Mikyyetklyelij';
  const linkdinUserName = 'https://www.linkedin.com/in/mikyas-negash-01b400263';
  const phoneNumber = '0902464535';

  const handleDial = () => {
    window.location.href = `tel:${phoneNumber}`;
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
    <div id="contact" className="containerC flex justify-between contact-page">
      <div className="text-zone">
        <h1 className="h1 text-black"
         data-aos="zoom-in" 
         data-aos-duration="1000" data-aos-delay="400">
          {letters.map((i, index) => {
            return (
              <span key={index}  className="father">
                {i}
              </span>
            );
          })}
        </h1>
        <p className="text-black"
         data-aos="zoom-in" 
         data-aos-duration="1400" data-aos-delay="500">
          IF YOU WANT TO CONTACT US. USE THE FOLLOWING ADDRESSES
        </p>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="flex-2 text-black ">
            <ul>
              <li className="half text-black"
               data-aos="zoom-in" 
               data-aos-duration="2000" data-aos-delay="600">
                <input
                  type="text"
                  className="text"
                  name="from_name"
                  id="sendername"
                  placeholder="Name"
                />
              </li>
              <li className="half text-black"
               data-aos="zoom-in" 
               data-aos-duration="2200" data-aos-delay="600">
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
                  className="text-black"
                  data-aos="zoom-in" 
                  data-aos-duration="2400" data-aos-delay="600" />
                <input type="submit" value="Send" className="flat"  data-aos="zoom-in" 
                  data-aos-duration="2600" data-aos-delay="600" />
              </li>
            </ul>
          </form>

          <section className="additional flex-1 text-black">
            <div className="call-us"  data-aos="zoom-in" 
               data-aos-duration="2400" data-aos-delay="800">
              <a
                href={`tel:${phoneNumber}`}
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
                  <span> +2519024635<br></br>+2519876543 </span>{' '}
                </strong>
              </a>
              <a className="phone">
                <FontAwesomeIcon
                  className="anchor"
                  icon={faAddressCard}
                  color="#4d4d4e"
                />{' '}
                <strong>
                  ADDRESS<br></br>
                  <span>CHURCHIL SRT 234 ,UI LI<br></br> BUILDING 2ND </span>
                </strong>
              </a>
            </div>

            <div className="social-link" >
              <a href={telegramLink} className="social"  data-aos="zoom-in" 
                  data-aos-duration="2500" data-aos-delay="1200">
                <FontAwesomeIcon className="linkt" icon={faTelegram} color="#" />
              </a >
              <a href={linkdinUserName} className="social"  data-aos="zoom-in" 
                  data-aos-duration="2700" data-aos-delay="1500">
                <FontAwesomeIcon className="linkf" icon={faFacebook} color="#"/>
              </a>
              <a href={linkdinUserName} className="social"
               data-aos="zoom-in" 
               data-aos-duration="2900" data-aos-delay="1700">
                <FontAwesomeIcon className="linkv" icon={faWhatsapp}color="#"/>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
