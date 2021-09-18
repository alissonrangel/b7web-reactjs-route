import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import './estilo.css';

const ModalBackground = styled.div`
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items:center;
  position: fixed;
  left: 0;
  top: 0;
  bottom:0;
  right:0;
  opacity: 1;
  transition: all 1s;
  z-index:90;
`

const ModalArea = styled.div`
  background-color: #fff;
  padding: 10px;
`

function Modal(props) {

  const [modal, setModal] = useState('show');

  function handleClickButton() {
    document.getElementById('modalBack').classList.add('hidden');
    setTimeout(() => {
      props.setVisible(false);
    }, 1000);
  }

  useEffect(()=>{
    setTimeout(() => {
      
    }, 1000);
  },[])
  // useEffect(()=>{
  //   // setTimeout(() => {
  //   //   document.getElementById('modalBack').classList.add('show');
  //   // }, 1000);    
  // },[modal])

  return (
    <>
      {props.visible &&
        <ModalBackground id="modalBack" >
          <ModalArea >
            <button onClick={handleClickButton}> Close Modal</button>
            {props.children}
          </ModalArea>
        </ModalBackground>
      }
    </>
  );
}

export default Modal;