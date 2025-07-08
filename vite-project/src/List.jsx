import props from 'prop-types';
function List(
    items= [],
    category= "Unknown Category"
) {

    const itemList= props.items;
    const category = props.category;

    const listItems = itemList.map(item => 
    <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>
    );

    return(<>
            <h3 className='List-Category'>{category}</h3>
            <ol className='List-Items'>{listItems}</ol>
            </>);
}
export default List;