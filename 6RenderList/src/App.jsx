import List from "./List"
import MyList from "./MyList"

function App() {

  const fruits = [
    {id: 1, name: "apple", calories: 95},
    {id: 2, name: "orange", calories: 45},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "pineapple", calories: 159},
    {id: 5, name: "coconut", calories: 37},
  ]

  const vegetables = [
    {id: 6, name: "potatoes", calories: 110},
    {id: 7, name: "celery", calories: 15},
    {id: 8, name: "carrots", calories: 25},
    {id: 9, name: "corn", calories: 63},
    {id: 10, name: "broccoli", calories: 50},
  ]

  return (
    <>
      <List/>
      {fruits.length > 0 ? <MyList items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 && <MyList items={vegetables} category="Vegetables"/>}
      <MyList/>
    </>
  )
}

export default App
