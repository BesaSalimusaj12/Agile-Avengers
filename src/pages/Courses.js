import React from 'react'
import "../styles/Courses.css";
import CoursesBackground from "../assets/courses.jpg"
import { Link } from 'react-router-dom';


export default function Courses() {
  return (
    <div className="courses">
      <div style={{ backgroundImage: `url(${CoursesBackground})` }}
        className="coursesTop"
      >
        <div className="text-overlay">
          <h1 className="text">KURSET</h1>
        </div>
      </div>

      <div className="coursesBottom">
      <ul className="category-list">
        <li>
          <Link to="/category1" className="category-link">
            Category 1
          </Link>
        </li>
        <li>
          <Link to="/category2" className="category-link">
            Category 2
          </Link>
        </li>
        <li>
          <Link to="/category3" className="category-link">
            Category 3
          </Link>
        </li>
        <li>
          <Link to="/category4" className="category-link">
            Category 4
          </Link>
        </li>
        <li>
          <Link to="/category5" className="category-link">
            Category 5
          </Link>
        </li>
        <li>
          <Link to="/category6" className="category-link">
            Category 6
          </Link>
        </li>
        <li>
          <Link to="/category7" className="category-link">
            Category 7
          </Link>
        </li>
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
