import styled from 'styled-components';
import React, { useState , useEffect} from 'react';
import  {useParams, useLocation, BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function useQuery() {
  return new URLSearchParams( useLocation().search );
}

function Categoria() {

  let query = useQuery();
  let cat2 = query.get('tipo');
  let subCat = query.get('subcat');

  let { cat } = useParams();

  return (
    <div>
      <h4>Página Categoria</h4>
      <p>Exibindo itens da categoria: {cat}</p>
      <p>Exibindo itens da categoria: {cat2} - {subCat}</p>
    </div>
  )
}

export default Categoria;