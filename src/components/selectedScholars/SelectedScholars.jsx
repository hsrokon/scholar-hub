import SelectedScholar from "../selectedScholar/SelectedScholar";
import { HiOutlineCursorClick } from "react-icons/hi";


const SelectedScholars = ({selected, setActiveTab, handleDelete}) => {
    return (
        <div className="min-h-screen">
            {
                selected.length ===0 ? (
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="text-3xl  font-bold">No scholars selected.</h2>
                    <HiOutlineCursorClick className="size-18"/>
                </div>) : ''
            }
            <div className="flex flex-col gap-1.5">
                {
                    selected.map(selectedScholar=> <SelectedScholar 
                        key={selectedScholar.id}
                        selectedScholar={selectedScholar}
                        handleDelete={handleDelete}
                    ></SelectedScholar>)
                }
            </div>
            <button className="border-2 my-4 border-sky-950 bg-sky-950 hover:bg-sky-900 hover:border-amber-300 px-3 py-2 rounded-2xl text-lg text-white" onClick={()=>setActiveTab('available')}>Add scholars</button>
        </div>
    );
};

export default SelectedScholars;