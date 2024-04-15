import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import React from "react";

export default function Card({ course, likedCourses, setLikedCourses }) {
    //to handle the click event on the like button
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //already liked
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            //not liked 
            //have to add it inside the liked array
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked successfully");
        }
    }

    return (
        <div className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-11/12 xl:h-[320px] lg:h-[320px] md:h-[320px] xs:h-auto  bg-[#00224D] rounded-md">
            <div className="rounded">
                <img className="rounded"
                    src={course.image.url} />
                <div className="relative">
                    <button
                        className="absolute flex justify-center items-center right-2 bottom-[-1rem] w-[40px] h-[40px] bg-white rounded-full z-10"
                        onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                                (<FcLike fontSize="1.75rem" />) :
                                (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className="mt-2 p-2">
                <p className="text-lg font-bold">{course.title}</p>
                <p className="mt-1 text-sm">{(course.description).substring(0, 120)}...</p>
            </div>
        </div>
    );
} 