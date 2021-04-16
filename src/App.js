import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/UI/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';
import './App.css';

const App = () => {

  const [items,setItems] = useState([])  //the items here refers to characters of breaking bad
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')
 
  useEffect(() => {
    const fetchItems = async() => { //since async can't be used directly on useEffect therefore create a function named fetchItems
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)  //this gives us the characters from the url we used and it is stored in result

      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)  //since we got all the data therefore set isloading to false
    }

    fetchItems()
  },[query])  //this means useEffect is fired everytime query changes i.e. every time some chracter is searched

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>  
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App; 

//here the <Search getQuery={(q) => setQuery(q)}/> 
//in this getQuery is passed from Search.js to App.js
