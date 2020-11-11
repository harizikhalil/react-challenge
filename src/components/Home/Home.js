import './Home.css'
function Home() {
    return (
        <section id="home">
        <div className="home-container">
          <div className="content">
            <h1></h1>
            <div className="icon">
              <a href="https://www.facebook.com/khalil.harizi.1" className="fab fa-facebook-square" target="_blank" rel="noreferrer"></a>
              
              <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3Ftrk%3Dguest_homepage-basic_nav-header-signin" 
              className="fab fa-linkedin-in" target="_blank" rel="noreferrer"></a>
              
            </div>
            <div className="buttons">
              <a href="#contact">Contact me</a>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;