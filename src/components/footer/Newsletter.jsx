

const Newsletter = () => {
    return (
        <div className="flex flex-col gap-2  items-center bg-white
            py-14 w-fit mx-auto px-28 border-2 border-amber-500 rounded-3xl">
            <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
            <p>Get the latest updates and news right in your inbox!</p>
            <form className="flex gap-2">
                <input className="border border-slate-400 rounded-2xl px-4 py-1.5 placeholder:text-sm" 
                type="email" name="" id="" placeholder="Enter your email"/>
                <button className="cursor-pointer bg-sky-950 text-white rounded-2xl px-3 ">Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;