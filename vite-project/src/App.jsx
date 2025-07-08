import List from './List.jsx';
function App() {

    const fruits=[  {id:1 ,name:  "Apple", calories:95},
                    {id:2 ,name: "Banana", calories:105},
                    {id:3 ,name: "Cherry", calories: 50},
                    {id:4 ,name: "Date" , calories: 282},
                    {id:5 ,name: "Elderberry",calories: 73}];
    
  return( 
        <List items={fruits} category={fruits}/>
      );
}

export default App
