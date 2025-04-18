import { useEffect, useState } from "react";
import Scholar from "../scholar/Scholar";

const Scholars = () => {

    const [scholars, setScholars] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setScholars(data))
    },[])
    return (
        <div className="mt-20 lg:my-10">
            <div className="flex flex-col gap-1.5 lg:gap-0 lg:flex-row items-center justify-between my-8">
                <h2 className="text-lg lg:text-2xl font-bold">Available scholars : ({scholars.length})</h2>
                <div>
                    <button className="border-2 px-2 py-1 rounded-l-lg border-sky-950 hover:bg-sky-950 hover:text-white hover:border-amber-300">Available</button>
                    <button className="border-2 px-2 py-1 rounded-r-lg border-sky-950 hover:bg-sky-950 hover:text-white hover:border-amber-300">Selected</button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
                {
                    scholars.map(scholar => <Scholar
                        key={scholar.id}
                        scholar={scholar}></Scholar>)
                }
            </div>
        </div>
    );
};

export default Scholars;