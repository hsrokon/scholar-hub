

const Header = () => {
    return (
        <header className="flex justify-between items-center my-2">
            <div className="w-16">
                <img src="https://i.ibb.co.com/KjjmM4Kz/logo-transparent-reduced-more.png" alt="logo" />
                {/* https://i.ibb.co.com/KjjmM4Kz/logo-transparent-reduced-more.png //reduced
                https://i.ibb.co.com/gLngNr2Q/logo-transparent.png
                https://i.ibb.co.com/SXMnFKY0/logo-transparent-with.png */}
            </div>
            <div className="flex gap-4">
                <li className="flex gap-4">
                    <ul><a href="">Home</a></ul>
                    <ul><a href="">Available</a></ul>     
                    <ul><a href="">Events</a></ul>
                    <ul><a href="">Schedules</a></ul> 
                </li>
                <button className="border-2 border-blue-800 px-1 rounded-md">Coin</button>
            </div>
            
        </header>
    );
};

export default Header;