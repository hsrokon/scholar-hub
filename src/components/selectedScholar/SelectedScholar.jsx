import { MdDeleteForever } from "react-icons/md";

const SelectedScholar = ({selectedScholar}) => {

const {fullName, image, category} = selectedScholar;

    return (
        <div className="border-2 border-amber-500 flex justify-between items-center px-4 py-2 rounded-2xl">
            <div className="flex gap-4">
                <div className="w-32 h-24">
                    <img className="w-full h-full object-cover rounded-xl" src={image} alt={fullName} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">{fullName}</h1>
                    <p>{category}</p>
                </div>
            </div>
            <button className="cursor-pointer"><MdDeleteForever className="text-red-600 size-6" /></button>
        </div>
    );
};

export default SelectedScholar;