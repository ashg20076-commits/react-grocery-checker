//cd my-react-app
//npm run dev

import ShoppingList from './ShoppingList.jsx'

function App() {
  const groceries = [
    { id: 1, name: "Item 1", purchased: false },
    { id: 2, name: "Item 2", purchased: false },
    { id: 3, name: "Item 3", purchased: true }
  ];

    
  return(
  <>
    <ShoppingList groceries={groceries}/>

    

  </>
  );
}


export default App;
