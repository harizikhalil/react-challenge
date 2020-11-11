import Proptypes from 'prop-types'
import './Contact.css'
const Contact=(props)=>{
  const{title="Contact"}=props
    return(
        <section id="contact">
    <div className="contact_container">
      <h1 className="section-title">{title}</h1>

      <form className="contact-form">
        <input type="text" className="input_text" placeholder="Your Full Name"  required/> <br/>
        <input type="email" className="input_text" placeholder="Your Email"  required/> <br />
        <input type="text" className="input_text" placeholder="Subject"  required/> <br />
        <textarea className="messageZone" placeholder="Message"  required></textarea> <br />
        <input type="submit" value="Send Message" className="btn"/>
      </form>
    </div>
  </section>
    );
}
Contact.propTypes={
  title:Proptypes.string.isRequired,
}
export default Contact;