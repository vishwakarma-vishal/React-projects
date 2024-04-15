import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CartItem from "../component/CartItem";

export default function Cart() {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    const location = useLocation();
    console.log("location obj", location);

    return (
        <div className="flex justify-center items-start h-full">
            {
                cart.length > 0 ?
                    (
                        <div className="w-full flex flex-wrap justify-center items-start py-3 gap-3 h-auto">
                            <div className=" xl:basis-[60%] lg:basis-[72%] md:basis-[60%] sm:basis-[90%] xs:basis-[90%] basis-[90%] flex flex-col gap-5">
                                {
                                    cart.map((item, index) => {
                                        return <CartItem key={item.id} item={item} itemIndex={index} />
                                    })
                                }
                            </div>

                            <div
                                className="lg:basis-[25%] md:basis-[25%] sm:basis-[90%] xs:basis-[90%] basis-[90%] lg:h-[82vh] md:h-[82vh] sm:h-auto xs:h-auto border-2 px-5 py-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg flex flex-col justify-between">
                                <div>
                                    <div className="text-green-700 font-bold uppercase">Your cart</div>
                                    <div className="text-green-700 text-3xl font-bold -mt-1">Summary</div>
                                    <p className="text-gray-700 font-bold mt-2">
                                        <span>Total items: {cart.length}</span>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-600 font-bold text-md">
                                        Total Amount:
                                        <span className="text-gray-800">${totalAmount}</span></p>
                                    <button className="w-full bg-green-800 text-white font-bold text-sm py-2 rounded mt-4">Checkout Now</button>
                                </div>
                            </div>

                        </div>

                    ) :
                    (
                        < div >
                            <h1>Cart is empty</h1>
                            <NavLink to='/'>
                                <button>Shop Now</button>
                            </NavLink>
                        </div >
                    )
            }
        </div >
    )
}