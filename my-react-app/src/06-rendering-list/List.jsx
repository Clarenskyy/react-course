import PropTypes from 'prop-types';
import style from './List.module.css'
import proptypes from 'prop-types'

function List(props){

    const itemList = props.items

    const listItems = itemList.map(item => 
    <li className={style.listItemLi} key={item.id}>{item.name}: &nbsp; 
    <b>{item.calories}</b></li>
    );

    return(
        <>
        <h3 className={style.listCategory} >{props.category}</h3>
        <ol className={style.listItem}>{listItems}</ol>
        </>
        )
}

List.proptypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List