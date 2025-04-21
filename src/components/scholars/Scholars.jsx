import { useEffect, useState } from "react";
import Scholar from "../scholar/Scholar";
import Selected from "../selectedScholars/SelectedScholars";
import SelectedScholars from "../selectedScholars/SelectedScholars";

const Scholars = () => {

    const [scholars, setScholars] = useState([]);

    const [activeTab, setActiveTab] = useState('available');

    const [selected, setSelected] = useState([]);

    const handleSelect = scholar => {
        setSelected([...selected, scholar]);
    }
     
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setScholars(data))
    },[])
    return (
        <div className="mt-20 lg:my-10">
            <div className="flex flex-col gap-1.5 lg:gap-0 lg:flex-row items-center justify-between my-8">
                <h2 className="text-lg lg:text-2xl font-bold">
                    {activeTab==='available'? `Available scholars : (${scholars.length})` : `Selected scholars: (${selected.length}/6)`} 
                </h2>  
                <div>
                    <button 
                    className={`border-2 px-2 py-1 rounded-l-lg  ${activeTab === 'available' ? "bg-sky-950 text-white border-amber-300" : "border-sky-950"} `} 
                    onClick={()=>setActiveTab('available')}>Available</button>
                    <button 
                    className={`border-2 px-2 py-1 rounded-r-lg  ${activeTab === 'selected' ? "bg-sky-950 text-white border-amber-300" : "border-sky-950"}`}
                    onClick={()=>setActiveTab('selected')}>Selected</button>
                </div>
            </div>

            {activeTab === 'available' ? 
            (<div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
                {
                    scholars.map(scholar => <Scholar
                        key={scholar.id}
                        scholar={scholar}
                        handleSelect={handleSelect}></Scholar>)
                }
            </div>) : <SelectedScholars
                        selected={selected}
                        ></SelectedScholars>}
            
        </div>
    );
};

//To add conditional class
//1-wrap with {}
//2-use backtick ``
//3-classes appear normally without ""
//4-them ${...condition.. ? "..classes in normal flow.." : "classes that overwrite but necessarily default" }
//then 2 close and then 1

//Conditional jsx rendering
//1-wrap with {}
//2- ternary or other condition then traditional backtick use
//ex: {activeTab==='available'? `Available scholars : (${scholars.length})` : `Selected scholars: ()`} 

export default Scholars;