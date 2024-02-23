import './style.css'
import { Button } from "../../Components/Button/index.tsx";
import AuthServiceProps from "../../Services/AuthService";
import { useNavigate } from 'react-router-dom';
import App from '../../Components/Board/App.tsx';

function Kanban() {
  const isLoggedIn = AuthServiceProps.isAuthenticated();
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthServiceProps.logout();
    navigate('/');
  };

  return (
    <>
    <div className='container'>
      <header className="header-kanban">
        <div className='wrapperlogo'>
          <div className="wrapperImg">
            <img src="/src/Assets/KanbanLogo.png" alt="Logo" className='logo'/>
          </div>
            <h2 className="h2header"> Kanban </h2>
        </div>
        <nav>
          {isLoggedIn && (
            <>
              <p className='style-bemVindo'>Bem-vindo, {userName}</p>
              <Button titulo="Sair" tipo='logout' onClick={handleLogout} estilo='kanban-button'/>
            </>
          )}
        </nav>
      </header>
    <App/>
    <footer className='footer-style'>
        <div className='footer-left'> 
        <p className='P-footer'>Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024</p>
        <a
          href="https://github.com/RodrigoConstantin0/ProjetoKanban"
          target="_blank"
        >
          <img
            src="/src/Assets/logoGithub.svg"
            alt="logo-gitbub"
            id="logoGithut"
            className='img-footer'
          />
        </a>
        </div>
    </footer>
      </div>
    </>
  );
}

export default Kanban;
