import {toDoItemType} from '../Main/Main';

type itemType = {
    toDoItem:toDoItemType;
    index:number ;
    handleCheckboxClick: (index: number, elem: toDoItemType) => void;
};

const Item = ({ toDoItem, index, handleCheckboxClick }:itemType) =>  {
    const checkBoxStyle = toDoItem.status === 'active' ? 'tasks_item__checkbox' : 'tasks_item__checkbox checked';
    const textStyle = toDoItem.status === 'active' ? '' : 'tasks_item__text checked';
    return (
        <li className={'tasks_item'}>
            <div
                role={'checkbox'}
                onClick={(e) => handleCheckboxClick(index, toDoItem)}
                className={checkBoxStyle}
            ></div>
            <p className={textStyle}>{toDoItem.value}</p>
        </li>

    );
};

export default Item;