import Card from './Card';
import { React, useState } from 'react';

export default function Cards({ courses, category }) {
    const [likedCourses, setLikedCourses] = useState([]);

    //to get all the courses in one array
    const getCourses = () => {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        } else {
            //only pass specific array
            return courses[category]
        }
    }


    return (
        <div className='m-auto flex basis-1/3 flex-wrap justify-center items-center gap-5'>
            {
                getCourses().map((course) => {
                    return (
                        <Card
                            key={course.id}
                            course={course}
                            likedCourses={likedCourses}
                            setLikedCourses={setLikedCourses}
                        />);
                })
            }
        </div>
    );
}