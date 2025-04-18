

const Scholar = ({scholar}) => {
    const {fullName, origin, currentCountry, category, description, languages, availability, pricing, image} = scholar;

    return (
        <div className="card bg-base-100 w-auto lg:w-96 shadow-sm">
            <figure className="h-64">
                <img className="h-full object-cover"
                src={image}
                alt={fullName} />
            </figure>
            <div className="card-body">
                    <h2 className="card-title text-amber-700">
                    {fullName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                <hr className="text-amber-400"/>
                <div className="my-2 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <p><span className="font-semibold text-sky-950">Currently live: </span> {currentCountry}</p>
                        <p><span className="font-semibold text-sky-950">From: </span>{origin}</p>
                    </div>
                        <h4><span className="font-semibold text-sky-950">Category: </span>{category}</h4>
                        <h4><span className="font-semibold text-sky-950">Language: </span>
                            {
                            languages.map((lan, idx) =>
                            <span 
                                key={idx}>
                                    {lan}
                                    {idx < languages.length-1 && ', '}
                            </span> )
                            }
                        </h4>
                        <h4><span className="font-semibold text-sky-950">Availability: </span>{availability}</h4>
                        <h4><span className="font-semibold text-sky-950">About: </span>{description}</h4>
                </div>
                
                <div className="card-actions justify-end">
                <button className="badge badge-outline border-2 border-sky-950 hover:bg-sky-950 hover:text-white hover:border-amber-300 px-2 py-3">Pricing: {pricing}</button>
                <button className="badge badge-outline border-2 border-sky-950 hover:bg-sky-950 hover:text-white hover:border-amber-300 px-2 py-3">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Scholar;