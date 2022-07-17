import { useState } from 'react'
import Header from './componentes/Header'
import AddItem from './componentes/AddItem'
import Items from './componentes/Items'
import './App.css'
import AddItem from './componentes/AddItem';

function App() {
  

   const [items, setItems] = useState([

    
    {
      id: 1,
      title: 'Empleado',
      category: '12345',
      day:'Lunes',
      time: '18:00'
  },
  {
      id: 2,
      title: 'Cliente',
      category: '324342',
      day:'martes',
      time: '03/05/2022'
  },
  {
      id: 3,
      title: 'proximos',
      category: '809',
      day:'miercoles',
      time: '04/06/2022'
  },
  {
      id: 4,
      title: 'empleadores',
      category: '11',
      day:'jueves',
      time: '05/07/2022'
  }

   ]);

   const addItem  = (item) => {

    
    const id = Math.floor(Math.random()*1000) + 1;
    const newItem = {id,...item}
    console.log(newItem)
    setItems ([...items, newItem])
   }

   const deleteItem = (id) => {

    setItems(items.filter((item)=>item.id!==id))
    

  }


    return(
      <div className="container">
        <div className="row justify-content-center">
          <Header/>
          <Items addItem={addItem} deleteItem={deleteItem}/>
          <AddItem/>
        </div>

      </div>
    )
}

export default App;
