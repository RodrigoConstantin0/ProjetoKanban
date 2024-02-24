import "./style.css";
import { Button } from "../../Components/Button/index.tsx";
import AuthServiceProps from "../../Services/AuthService";
import kanbanLogo from "../../Assets/KanbanLogo.png";
import githubLogo from "../../Assets/logoGithub.svg";
import { useNavigate } from "react-router-dom";
import App from "../../Components/Board/App.tsx";

function Kanban() {
  const isLoggedIn = AuthServiceProps.isAuthenticated();
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthServiceProps.logout();
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <header className="header-kanban">
          <div className="wrapperlogo">
            <img src={kanbanLogo} alt="Logo" />
            <h2 className="h2header"> Trella </h2>
          </div>
          <nav className="navKanban">
            {isLoggedIn && (
              <>
                <p className="style-bemVindo">Bem-vindo, {userName}</p>
                <Button
                  titulo="Sair"
                  tipo="logout"
                  onClick={handleLogout}
                  estilo="kanban-button"
                />
              </>
            )}
          </nav>
        </header>
        <App />
        <footer className="footer-style">
          <div className="footer-left">
            <p className="P-footer">
              Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024
            </p>
          </div>
          <a
            href="https://github.com/RodrigoConstantin0/ProjetoKanban"
            target="_blank"
          >
            <img
              src={githubLogo}
              alt="logo-gitbub"
              id="logoGithut"
              className="img-footer"
            />
          </a>
        </footer>
      </div>
    </>
  );
}

export default Kanban;
