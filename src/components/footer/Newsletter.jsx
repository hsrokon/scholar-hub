

const Newsletter = () => {
    return (
        <div className="flex flex-col gap-2 items-center bg-white py-5
            md:py-10 lg:py-14 w-fit mx-auto px-4 md:px-12 lg:px-28 border-2 border-amber-500 rounded-3xl">
            <h2 className="text-lg lg:text-2xl font-semibold">Subscribe to our Newsletter</h2>
            <p className="text-sm lg:text-base">Get the latest updates and news right in your inbox!</p>
            <form className="flex gap-0.5 md:gap-2">
                <input className="w-44 md:w-auto border border-slate-400 rounded-2xl px-2 md:px-4 py-0.5 md:py-1.5 placeholder:text-xs md:placeholder:text-sm" 
                type="email" name="" id="" placeholder="Enter your email"/>
                <button className="cursor-pointer bg-sky-950 text-white rounded-2xl px-2 md:px-3 ">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;