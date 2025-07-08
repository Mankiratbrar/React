import PropTypes from 'prop-types';
function List({
    items = [],
    category = "Unknown Category"
}) {

    const listItems = items.map(item => 
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
List.propTypes = {
  items: [],
  category: PropTypes.string,
};
export default List;