import Newsletter from "./Newsletter";


const Footer = () => {
    return (
        <div className="bg-sky-950 mt-40 relative">
            <div className="absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2
            p-3 border-2 border-amber-500 rounded-3xl">
                <Newsletter></Newsletter>
            </div>
            <div className=" w-11/12 mx-auto flex justify-between pt-40 pb-6 text-slate-300">
                <div className="w-1/3 flex flex-col gap-2">
                    <h4 className="text-slate-200 font-semibold">About Us</h4>
                    <p className="hover:text-slate-200">We help you to discover and invite renowned Islamic scholars for conferences, lectures, and events worldwide.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-slate-200 font-semibold ">Quick Links</h4>
                    <ul>
                        <li className="hover:text-slate-200"><a href="#">&#x2022; Home</a></li>
                        <li className="hover:text-slate-200"><a href="#">&#x2022; Services</a></li>
                        <li className="hover:text-slate-200"><a href="#">&#x2022; About</a></li>
                        <li className="hover:text-slate-200"><a href="#">&#x2022; Contact</a></li>
                    </ul>
                </div>
                <div className="w-1/3 flex flex-col gap-2">
                    <h4 className="text-slate-200 font-semibold">Visit site developer</h4>
                    <a className="hover:text-slate-200" href="hsrokon.com">HS Rokon</a>
                    <p className="hover:text-slate-200">- Discover the awesome projects and creative work by the developer behind this site.</p>
                </div>
            </div>
            <hr className="text-slate-500"/>
            <p className="text-slate-400 text-center py-4">&#64;2025 Scholar Hub All Right Reserved.</p>
        </div>
    );
};

export default Footer;