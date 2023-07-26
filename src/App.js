//Importaciones de información y archivos 
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/NavBar/Nav"
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate} from "react-router-dom"
import AboutMe from "./components/AboutMe/AboutMe"
import AboutApp from "./components/AboutApp/AboutApp"
import CardDetails from "./components/Details/CardDetails"
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"

function App() {
   // Función buscar info de carta por ID
   const [characters,setCharacters] = useState([]);
   function onSearch(id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            if (!characters.some((objeto) => objeto.id === parseInt(`${id}`))) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
            else {
               window.alert('¡Este personaje ya está en pantalla');
            }
         } 
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch(() => {
          window.alert('Este ID no existe. Revise su valor. Rango de ID: (1-826)');
      });
   };
   // Función cierre de carta
   function onClose(id) {
      var idnum = parseInt(id)
      const update = characters.filter((object => object.id !== idnum))
      setCharacters(update)
   }
   //Login 
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'sebastianochoa05@gmail.com';
   const PASSWORD = 'JSverde5';
   function login(data) {
   if (data.password === PASSWORD && data.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }}
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   //Renderizado
   return (
      <div>
         <nav>
            <Nav onSearch={onSearch}/>
         </nav>
         <Routes>
            <Route
            path='/'
            element={<Form onLogin={login} />} />
            <Route
            path='/Home'
            element={<Cards onClose={onClose} characters={characters} />} />
            <Route
            path='/AboutMe'
            element={<AboutMe/>} />
            <Route
            path='/AboutApp'
            element={<AboutApp/>} />
            <Route
            path='/details/:id'
            element={<CardDetails/>} />
            <Route
            path='*'
            element={<Error/>}/>
            <Route 
            path='/favorites'
            element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;


// Codigo obsoleto/utilizado no necesario 
// import Card from './components/Card.jsx';
// import {Rick} from './data.js';
// import SearchBar from './components/SearchBar';
