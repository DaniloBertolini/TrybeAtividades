import NavBar from '../Nav-bar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  )
}

export default Layout;
