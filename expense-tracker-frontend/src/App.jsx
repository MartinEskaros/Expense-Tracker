import styled from "styled-components";
import bg from './img/background.jpg';
import { MainLayout } from "./styles/Layout";

import Navigation from "./Components/Navigation/Navigation";
import React, { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import Income from "./Components/Incomes/Income";
import Dashboard from "./Components/Dashboard/Dashboard";




function App() {
  const [active,setActive] = React.useState(1);

  const displayData = ()=>{
      switch(active){
        case 1:
          return <Dashboard/>
        case 2:
          return <Dashboard/>
        case 3:
          return <Income/>
        case 4:
          return <Expenses/>
        default: 
          return <Dashboard/>
      }
  }
  

  return (
      <AppStyled bg={bg} className='App'>
        
        <MainLayout>
          <Navigation active={active} setActive={setActive}/> 
          <main>
           {displayData()}
          </main>
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
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    box-shadow: 0px 1px 10px darkblue;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;



export default App;
