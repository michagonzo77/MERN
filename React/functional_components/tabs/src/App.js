import './App.css';
import {useState} from "react";
import {TabWrapper} from "./components/TabWrapper"

function App() {
  const [tabs, setTabs] = useState([
    {
        name: "tab1",
        content: "this is the content from tab 1",
        isSelected: true
    },
{
    name: "tab2",
    content: "this is the content from tab 2",
    isSelected: false
},
{
    name: "tab3",
    content: "this is the content from tab 3",
    isSelected: false
}
])
  return (
    <>
    <div className="Main">
    <TabWrapper className='TabWrapper' tabs = {tabs} setTabs = {setTabs} />
    </div>
    </>
  );
}

export default App;
