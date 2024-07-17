import { useEffect, useState }  from "react";
import React from 'react'
import { Course, CourseProps } from "./Course";
import CourseList from "./CourseList";

export default function CourseDetail() {
    const [courses, setCourses] = useState<CourseProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://sistech-server.vercel.app/api/data");
                const jsonData = await res.json();
                console.log("Fetched data:", jsonData);
                const courseData = jsonData.data.map((item: any) => ({
                    course: item.course,
                    imgUrl: item.imgUrl,
                    totalTopics: item.totalTopics
                }));
                setCourses(courseData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData(); // Pindahkan panggilan fetchData ke sini
    }, []);
    
    return (
         <CourseList title="Course List" courses={courses} />
    );
}