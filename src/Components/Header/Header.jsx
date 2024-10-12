import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const navLinks = [
        {name: 'Home', link: '/'},
        {name: 'Recipes', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Search', link: '/'}
    ]

    return (
        <div className="flex justify-between items-center py-10">
            <div>
                <h1 className="font-bold text-3xl">Recipe Calories</h1>
            </div>
            <div>
                <ul className="flex gap-5 text-base">
                    {
                        navLinks.map((navLink, idx) => <li key={idx}><a className="py-2 px-3 rounded-sm" href="">{navLink.name}</a></li>)
                    }
                </ul>
            </div>
            <div className="flex">
                <form action="" className="md:w-[350px]">
                    <div className="relative">
                        <input type="search" placeholder="Search Here" className="w-full p-2 pl-6 rounded-full bg-slate-300 outline-none" />
                        <button className="absolute bg-slate-400 rounded-full p-3 right-[1px] top-1/2 -translate-y-1/2"><IoIosSearch />
                        </button>
                    </div>
                </form>
                <div className="ml-3 item-center p-2 text-black text-xl bg-green-500 rounded-full">
                    <a className="text-2xl" href="/">< CgProfile /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;