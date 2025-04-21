import SelectedScholar from "../selectedScholar/SelectedScholar";


const SelectedScholars = ({selected}) => {
    return (
        <div >
            <div className="flex flex-col gap-1.5">
                {
                    selected.map(selectedScholar=> <SelectedScholar 
                        key={selectedScholar.id}
                        selectedScholar={selectedScholar}
                    ></SelectedScholar>)
                }
            </div>
            <button className="border-2 my-4 border-sky-950 bg-sky-950 hover:bg-sky-900 hover:border-amber-300 px-3 py-2 rounded-2xl text-lg text-white">Add scholars</button>
        </div>
    );
};

export default SelectedScholars;