function List(){
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "pineapple", calories: 159},
                    {id: 5, name: "coconut", calories: 37}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name));  ALPHEBETICAL
    // fruits.sort((b,a) => a.name.localeCompare(b.name));  REVERSE 
    // fruits.sort((a,b) => a.calories - b.calories); NUMERIC
    fruits.sort((b,a) => a.calories - b.calories); // REVERSE NUMERIC

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b>
                                            </li>);


    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

    // const highCalFruit = fruits.filter(fruit => fruit.calories > 100);

    const listItems2 = lowCalFruit.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b>
                                            </li>);

    // return (<ul>{listItems}</ul>)
    
    return (
    <div>
        <ol>{listItems}</ol>
        <ol>{listItems2}</ol>
    </div>
    
    )
}

export default List