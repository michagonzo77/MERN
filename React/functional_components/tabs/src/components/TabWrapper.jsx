import React from "react";
import { Tab } from "./Tab"
import { Display } from "./Display"


export const TabWrapper = (props) => {
    const {tabs, setTabs} = props;

    const tabClickHandler = (e, index) => {
        let newArr = [...tabs];
        newArr.forEach((tab) => {
            tab.isSelected = false;
        });
        newArr[index] = {...newArr[index], isSelected: true}
        setTabs(newArr);
    }


    return(
        <>
            {
                tabs.map((tab, i) => {
                    return <Tab
                    className="TabWrapper" 
                    tab={tab} 
                    index={i} 
                    tabClickHandler = {tabClickHandler}
                    />
                })
            }
            {
                tabs.map((tab, i) => {
                    return <Display className="Display" tab = {tab}/>
                })
            }
        </>
    )
}