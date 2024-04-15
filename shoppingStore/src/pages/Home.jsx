import { useEffect, useState } from "react";
import Spinner from "../component/Spinner";
import Product from "../component/Product";
import { useLocation } from "react-router-dom";

export default function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    //function to get the data from API
    async function fetchProducts() {
        setLoading(true);
        console.log(loading);
        try {
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log(data);
            setPosts(data);
        }
        catch (error) {
            console.log("Error occured: ", error);
            setPosts([]);
        }

        setLoading(false);
        console.log(loading);
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    // const location = useLocation();
    // console.log("location obj", location);
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (< div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                            {
                                posts.map((post) => (
                                    <Product key={post.id} post={post} />
                                ))
                            }
                        </div>) :
                        <div className="flex justify-center items-center">
                            <p>Posts Not found</p>
                        </div>
            }
        </div >
    )
}