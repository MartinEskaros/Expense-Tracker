import styled from "styled-components";
import bg from './img/background.jpg';
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";




function App() {
  return (
      <AppStyled bg={bg} className='App'>
        <Orb />
        <MainLayout>
          <Navigation/>
        </MainLayout>

      </AppStyled>
        
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;



export default App;
