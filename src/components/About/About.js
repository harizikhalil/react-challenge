import Proptypes from 'prop-types'
import './About.css'

const About =(props)=>{
   const {title="About",profilPhoto}=props
    return(
      
        <section id="about">
    <div className="about-container">
      <h2 className="section-title">{title}</h2>
      <div className="about-content">
        <img src={profilPhoto} alt="" className="about-pic"/>
        <div className="about-text">
          <h2>Hello, I'm Khalil Harizi</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga eaque, culpa cupiditate animi laborum natus! Similique odio sit facilis <br/>
            dolorum dicta velit provident sequi iusto, est pariatur quisquam corrupti animi necessitatibus aliquid deserunt reprehenderit voluptatibus? Exercitationem<br/>
             deserunt fugit dicta nesciunt velit quae tempora eius praesentium odio est, voluptatem vero incidunt omnis ad iure, soluta maiores nostrum inventore alias culpa.<br/>
              Nihil suscipit possimus est harum accusamus impedit libero deleniti repellat.
          </p>
        </div>
      </div>
      </div>
  </section>
    );
}

About.prototype={
  title:Proptypes.string.isRequired,
  profilPhoto:Proptypes.string.isRequired
}
export default About;