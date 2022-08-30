import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/anime-r.png';
import img from '../assets/images/HD-wallpaper-anime-original-starry-sky.jpg'
function CollapsibleExample() {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg"  variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
            <img className='logo'  src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto highlightTextIn">
            
          <a href='/' alt="Anime List">Anime List</a>
          <a href='/recommender' alt="Recommender">Recommender</a> 
           
            
          
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;