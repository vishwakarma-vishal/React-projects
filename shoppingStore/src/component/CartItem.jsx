import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";
import { toast } from "react-toastify";

export default function CartItem({ item, itemIndex }) {
    console.log(item);
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

    return (
        <div className="lg:h-[200px] border-2 flex p-3 pl-5 pr-5 h-100% shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg">

            <div className="w-1/4 h-auto">
                <img src={item.image} className="h-full w-full"></img>
            </div>

            <div className="flex flex-col gap-y-2 w-3/4 p-5">
                <h1
                    className="text-gray-700 font-semibold text-lg text-left"
                >{item.title}
                </h1>
                <h1
                    className="text-gray-600 font-sm text-md text-left">
                    {item.description.split(" ").slice(0, 15).join(" ") + "..."}
                </h1>
                <div className="flex justify-between items-center mt-5">
                    <p className="text-green-600 font-semibold text-xl">${item.price}</p>
                    <div
                        className="flex justify-center items-center rounded-[50%] w-[30px] h-[30px] bg-red-200 cursor-pointer"
                        onClick={removeFromCart}>
                        <MdDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}