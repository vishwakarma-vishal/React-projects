import { MdShoppingCart } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const { cart } = useSelector((state) => state);

    return (
        <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto ">
            <NavLink to="/">
                <div className="ml-5 text-white flex justify-between items-end ">
                    <IoStorefrontSharp className="text-4xl" />
                    <span className="ml-3 text-lg bold">Apani Dukaan</span>
                </div>
            </NavLink>

            <div className="flex item-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/Cart">
                    <div className="relative">
                        <MdShoppingCart className="text-2xl"/>
                        {
                            cart.length > 0 &&
                            <span className="absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                        }
                    </div>
                </NavLink>
            </div>
        </div>
    )
}