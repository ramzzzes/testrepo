import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useMemo, useRef} from 'react';
import axios from 'axios';
import './Sass.scss'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

 
function App() {
  //  const ChemiTegi = styled.p`
  //   font-size: 1.5em;
  //   color: ${props => props.inputColor || "red"};
  // `;

  // const styles = {
  //     color: "red",
  // };

  return (
      <>
        {/* <ChemiTegi inputColor="green">test</ChemiTegi>
        <h1 style={styles}>Hello Style!</h1>
        <div style={{
            'color' : 'red',
            'font-size' : '20px'  
        }}>
            test
        </div> */}


        <Button as="a" variant="danger">
          Button as link
        </Button>
      </>
  );

}



export default App;
