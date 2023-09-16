import {toDoItemType, tabType} from '../Main/Main';
import Item from "./Item";

type itemListType = {
    todosArr: toDoItemType[];
    handleCheckboxClick: (index: number, elem: toDoItemType) => void;
    activeTab:tabType;
};

const ItemList = ({ todosArr, handleCheckboxClick, activeTab }: itemListType) =>  {
    const newArr = activeTab !== 'all'
        ?  [...todosArr].filter((elem) => elem.status === activeTab)
        :   [...todosArr];

    return (
        <ul className={'tasks_list'}>
            {newArr.map((elem,index) => {
                return <Item key={elem.value + index} toDoItem={elem} index={index} handleCheckboxClick={handleCheckboxClick} />
            })}
        </ul>
    )
};

export default ItemList;