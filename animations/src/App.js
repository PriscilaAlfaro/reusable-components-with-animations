import './App.css';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Loaders from './components/Loaders';
import NotFound from './components/NotFound';

const MainContainer = styled.main`
    text-align: center;
    width: 100%;
    color: black;
    
`


function App() {
  return (
    <MainContainer>
    <Header/>
    <NotFound/>
    <Loaders />
    <Footer />
    </MainContainer>
  );
}

export default App;
