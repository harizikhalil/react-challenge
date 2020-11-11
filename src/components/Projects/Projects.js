import Proptypes from 'prop-types'
import './Projects.css'
const Projects = (props) => {
  const{title="Projects"}=props
  return (
    <section id="projects" className="dark">
      <h1 className="section-title">{title}</h1>
      <div className="project_container">
        {props.listCards.map((element, i) => {
          return (
            <div className="card" key={i}>
              <img src={element.image} alt={element.title}/>
              <div className="card_container">
                <h4>{element.title}</h4>
                <p>{element.paragraph}</p>
                <a href={element.link} target="_blank" rel="noreferrer">{element.linktitle}</a>
              </div>
            </div>
          );
        })}
       
      <iframe
        width="80%"
        height="490"
        src="https://www.youtube.com/embed/31AcXasOg08"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      </div>
    </section>
  );
};

Projects.propTypes={
  title:Proptypes.string.isRequired,
  listCards: Proptypes.arrayOf(
    Proptypes.shape({
      image: Proptypes.string,
      title: Proptypes.string,
      paragraph: Proptypes.string,
      linktitle: Proptypes.string,
      link:Proptypes.string
    })
  ),
  
}
export default Projects;
