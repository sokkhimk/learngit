import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/list"

interface Istate {
  people:{
    name: string
    age: number
    url: string
    note?:string
  }[]
}
function App() {
  const [people, setpeople]=useState<Istate["people"]>([])
  people.map(person=>{
    person.name
  })
  return (
    <div className="App">
      <h1>People invited</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
