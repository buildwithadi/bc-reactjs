import PropTypes from 'prop-types'

function MyList({category= "Category", items=[{id:0,name:"name",calories:10}]}){

    category = category;
    items = items;

    const listItems = items.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

MyList.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
    }))
}



export default MyList;