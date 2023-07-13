import React from 'react'
import "../styles/Courses.css";
import CoursesBackground from "../assets/courses.jpg"

export default function Courses() {
    const courses = [
        'Introduction to Computer Science',
        'Data Structures and Algorithms',
        'Web Development Fundamentals',
        'Database Design and Management',
        'Software Engineering Principles',
      ];
  return (
    <div className="courses">
      <div style={{ backgroundImage: `url(${CoursesBackground})` }}
        className="coursesTop"
      ></div>
      <div className="coursesBottom">
        <h1>KURSET</h1>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </div>
    </div>
  )
}
