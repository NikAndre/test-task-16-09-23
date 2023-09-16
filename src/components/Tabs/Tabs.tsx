import {tabType} from '../Main/Main';
import Tab from "./Tab";

type tabsType = {
    activeTab:tabType;
    handleOnTabClick: (name: tabType) => void;
};

export type tabInfoType = {
    name: 'All' | 'Active' | 'Completed' ;
    type: tabType;
    testid: 'allTab' | 'activeTab' | 'completedTab'
};

const Tabs = ({ activeTab, handleOnTabClick }:tabsType) =>  {
    const tabsArr: tabInfoType[] = [
        {
            name: 'All',
            type: 'all',
            testid: 'allTab'
        },
        {
            name: 'Active',
            type: 'active',
            testid: 'activeTab'
        },    {
            name: 'Completed',
            type: 'completed',
            testid: 'completedTab'
        }
    ];
    return (
        <ul className={'tabs_list'}>
            {tabsArr.map((tab, index) => {
                return <Tab key={tab.name + index} activeTab={activeTab} tabInfo={tab} handleOnTabClick={handleOnTabClick} />
            })}
        </ul>
    )
};

export default Tabs;


