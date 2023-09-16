import {tabType} from '../Main/Main';
import {tabInfoType} from "./Tabs";

type tabDataType = {
    activeTab: tabType;
    tabInfo: tabInfoType;
    handleOnTabClick: (name: tabType) => void;
};

const Tab = ({ activeTab, handleOnTabClick , tabInfo }:tabDataType) =>  {
    const { name, type, testid} = tabInfo;
    const tabStyle = activeTab === type ? 'tabs_item active' : 'tabs_item';

    return <li data-testid={testid} className={tabStyle} onClick={() => handleOnTabClick(type)}>{name}</li>
};

export default Tab;