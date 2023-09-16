import {useState} from "react";
import ItemList from  '../Itemlist/Itemlist';
import './Main.css';
import Tabs from "../Tabs/Tabs";

export type toDoItemType = {
    value: string;
    status: 'active' | 'completed'
};

export type tabType = 'all' | 'active'  | 'completed';

const Main = () =>  {
    const [ inputValue, setInputValue ] = useState<string>('');
    const [ todosArr, setTodosArr ] = useState<toDoItemType[]>([]);
    const [ activeTab, setActiveTab ] = useState<tabType>('all');
    const itemsLeft: number = todosArr.filter((elem) => elem.status === "active").length || 0;

    const onInputChange = (value:string) =>  setInputValue(value);

    const handleAddBtnClick = () => {
        if (inputValue) {
            const toDoItem: toDoItemType = {
                value: inputValue,
                status: 'active'
            };
            setTodosArr(prevState => [...prevState, toDoItem]);
            setInputValue('');
        }
    };

    const handleCheckboxClick = (index: number, elem: toDoItemType) => {
        const toDoItem = {...elem};
        const arr = [...todosArr];

        toDoItem.status = elem.status === 'active' ? 'completed' : 'active';
        arr[index] = toDoItem;

        setTodosArr(arr);
    }

    const handleOnTabClick = (name:tabType) =>  setActiveTab(name);

    const handleClearBtnClick = () => {
        const clearedArr = [...todosArr].filter((elem) => elem.status === 'active');
        setTodosArr(clearedArr);
    }

    return (
        <main className={'main_block'}>
            <div className={'input_wrapper'}>
                <input
                    className={'todos_input'}
                    data-testid={'todos_input'}
                    type={'text'}
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                />
                <button className={'add_btn'} data-testid={'addBtn'} onClick={handleAddBtnClick}>Add</button>
            </div>
            <ItemList
                activeTab={activeTab}
                todosArr={todosArr}
                handleCheckboxClick={handleCheckboxClick}
            />
            <div className={'footer_wrapper'}>
                <p>{itemsLeft} items left</p>
                <Tabs activeTab={activeTab} handleOnTabClick={handleOnTabClick} />
                <button data-testid={'clearBtn'} onClick={handleClearBtnClick}>Clear completed</button>
            </div>
        </main>
    );
};

export default Main;