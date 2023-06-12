import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/Coffee-list';
import Coffee from './pages/Coffee';
import NavBar from './components/Nav-bar';
import NotFound from './pages/Not-found';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/coffees" element={ <CoffeeList /> } />
          <Route path="/coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App;