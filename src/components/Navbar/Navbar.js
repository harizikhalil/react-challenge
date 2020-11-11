import Proptypes from 'prop-types'
import './Navbar.css'

function Navbar(props) {
  const{logo,listItems}=props
  return (
    
      <nav className="navbar">
            <div className="navbar-container">
              
              <img src={logo} alt="logo" className="logo"/>
              <div className="navbar-menu">
                  {
                      listItems.map((element,i)=>{
                          return  <a href={element.href} key={i}>{element.content}</a>
                      })
                  }
              </div>
            </div>
          </nav>
    
  );
}
Navbar.propTypes={
  logo:Proptypes.string.isRequired,
  listItems: Proptypes.arrayOf(
    Proptypes.shape({
      href: Proptypes.string,
      content: Proptypes.string,
    })
  ),
  
}
export default Navbar;
