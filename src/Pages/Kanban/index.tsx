import './style.css'

function Kanban() { 

  return (
    <>
      <header>
        <div className='wrapperlogo'>
          <img src="/src/Assets/KanbanLogo.png" alt="Logo"/>
          <h2> Kanban </h2>
        </div>
        <nav>
          <button id='buttonSair'> Sair</button>
          <button>+ Nova coluna</button>
        </nav>
      </header>
 
    {/* <h1>colunas aqui</h1> */}
    <footer>
      <p>Feito pelo grupo 2 - Formação Front-end da Ada Tech 2024</p>
      <a href="https://github.com/RodrigoConstantin0/ProjetoKanban" target="_blank" >
      <img src="/src/Assets/logoGithub.svg" alt="logo-gitbub" id='logoGithut'/>
      </a>
    </footer>
    </>
  )
}

export default Kanban
