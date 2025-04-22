import { useEffect, useState } from "react";
import Scholar from "../scholar/Scholar";
import SelectedScholars from "../selectedScholars/SelectedScholars";
import { Bounce, toast } from 'react-toastify';

const Scholars = ({coins, setCoins}) => {

    const [scholars, setScholars] = useState([]);
    const [activeTab, setActiveTab] = useState('available');
    const [selected, setSelected] = useState([]);

    const handleSelect = scholar => {
        const alreadySelected = selected.find(sch => sch.id ===scholar.id )
        if (coins<scholar.pricing) {
            toast.error('Not enough credit!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            return;
        } else if(!alreadySelected) {
            setCoins(coins-scholar.pricing)
        }

        if(selected.length===6){
            toast.info(`Can't select more than 6!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            return;
        }

        if (alreadySelected) {
            toast.info(`Scholar already selected!`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            return;
        }

        setSelected([...selected, scholar]);
        toast.success('Scholar selected!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }

    const handleDelete = id => {
        const newSelected = selected.filter(sch => sch.id !==id);
        setSelected(newSelected);
        toast.warn('Scholar removed!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
     
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setScholars(data))
    },[])
    return (
        <div className="mt-20 lg:my-10">
            <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row items-center justify-between my-8 
            sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm rounded-lg px-4 py-2.5 md:py-4">
                <h2 className="text-lg lg:text-2xl font-bold">
                    {activeTab==='available'? `Available scholars : (${scholars.length})` : `Selected scholars: (${selected.length}/6)`} 
                </h2>  
                <div>
                    <button 
                    className={`border-2 px-2 py-1 rounded-l-lg  
                        ${activeTab === 'available' ? "bg-sky-950 text-white border-amber-300" : "border-sky-950"} `} 
                    onClick={()=>setActiveTab('available')}>Available</button>
                    <button 
                    className={`border-2 px-2 py-1 rounded-r-lg  
                        ${activeTab === 'selected' ? "bg-sky-950 text-white border-amber-300" : "border-sky-950"}`}
                    onClick={()=>setActiveTab('selected')}>Selected ({selected.length})</button>
                </div>
            </div>

            {activeTab === 'available' ? 
            (<div className="w-fit mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-20 lg:gap-y-16">
                {
                    scholars.map(scholar => <Scholar
                        key={scholar.id}
                        scholar={scholar}
                        handleSelect={handleSelect}></Scholar>)
                }
            </div>) : <SelectedScholars
                        selected={selected}
                        setActiveTab={setActiveTab}
                        handleDelete={handleDelete}
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