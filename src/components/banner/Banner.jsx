

const Banner = () => {
    return (
        <div className="relative">
            <img className="lg:hidden" src="https://i.ibb.co.com/sdBJjG1n/bannar-croped-1.png" alt="" />
            <img className="hidden lg:block" src="https://i.ibb.co.com/4nd0dR69/banner-extended-optimized.jpg" alt="" />
            {/* https://i.ibb.co.com/4nd0dR69/banner-extended-optimized.jpg
            https://i.ibb.co.com/8LvqG38x/bannar-in-use-optimized2.jpg */}
            <button className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 lg:bottom-12
            border-2 border-gray-500 hover:bg-sky-950 hover:text-white hover:border-amber-300 rounded-lg px-2 py-1 ">Claim free credits</button>
        </div>
    );
};

export default Banner;