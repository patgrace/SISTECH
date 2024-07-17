import React from "react";
import { Course, CourseProps } from "./Course";

type CourseListProps = {
  title: string;
  courses: CourseProps[];
};

function CourseList({ title, courses }: CourseListProps) {
  return (
    <div className="flex flex-col items-center m-4">
      <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;