//Importaciones de información y archivos 
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/NavBar/Nav"
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate,useLocation} from "react-router-dom"
import AboutMe from "./components/AboutMe/AboutMe"
import AboutApp from "./components/AboutApp/AboutApp"
import CardDetails from "./components/Details/CardDetails"
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"
import { connect } from 'react-redux';
import { deleteFavorites, addFavorites } from './redux/actions';

function App(props) {
   const { pathname } = useLocation()
   // Función buscar info de carta por ID
   const [characters,setCharacters] = useState([]);
   async function onSearch(id) {
      try {
         const endpoint = "http://localhost:3001/rickandmorty/character/" + id
         const {data} = await axios(endpoint)
         if (data.name) {
            if (!characters.some((objeto) => objeto.id === (id))) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
            else {
               window.alert('This character is already on screen!');
            }
         } 
         else {
            window.alert('There are no characters with this ID!');
         }
      } 
      catch (error) {
         window.alert('This ID does not exist. Check your value. ID Range: (1-826)')
      }
      // axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      // .then((response) => response.data)
      // .then((data) => {
      //    if (data.name) {
      //       if (!characters.some((objeto) => objeto.id === (`${id}`))) {
      //          setCharacters((oldChars) => [...oldChars, data]);
      //       }
      //       else {
      //          window.alert('¡Este personaje ya está en pantalla');
      //       }
      //    } 
      //    else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // })
      // .catch(() => {
      //     window.alert('Este ID no existe. Revise su valor. Rango de ID: (1-826)');
      // });
   };
   // Función cierre de carta

   function onClose(id) {
      // var idnum = parseInt(id)
      const update = characters.filter((object => object.id !== id))
      setCharacters(update)
      props.deleteFavorite(id)
   }
   //Login 
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   // const EMAIL = 'sebastianochoa05@gmail.com';
   // const PASSWORD = 'JSverde5';
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const query = `?email=${email}&password=${password}`
         const {data} = await axios(URL + query)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
         if (access === false) {
            window.alert('Wrong password and email');
         }
      } catch (error) {
         return {error: error.message}
      }
   // const { email, password } = userData;
   // const URL = 'http://localhost:3001/rickandmorty/login/';
   // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //    const { access } = data;
   //    setAccess(data);
   //    access && navigate('/home');
   // });
}
   //Renderizado
   return (
      <div>
         <nav>
            { pathname != "/" && 
            <Nav onSearch={onSearch}/>
            }
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


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorites(character)),
      deleteFavorite: (id) => dispatch(deleteFavorites(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// Codigo obsoleto/utilizado no necesario 
// import Card from './components/Card.jsx';
// import {Rick} from './data.js';
// import SearchBar from './components/SearchBar';
