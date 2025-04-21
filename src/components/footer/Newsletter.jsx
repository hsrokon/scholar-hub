

const Newsletter = () => {
    return (
        <div className="flex flex-col gap-2  items-center bg-white
            py-10 w-fit mx-auto px-10 border-2 border-amber-500 rounded-3xl">
            <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
            <p>Get the latest updates and news right in your inbox!</p>
            <form className="flex gap-2">
                <input className="border border-gray-300 rounded-2xl px-4 py-1.5 placeholder:text-sm" 
                type="email" name="" id="" placeholder="Enter your email"/>
                <button>Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;