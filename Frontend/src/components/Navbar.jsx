// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css'; // Make sure this file contains relevant styles

const Navbar = () => {
  return (
    <nav className='bg-green-600 shadow-lg' 
    style={{paddingTop:'10px', paddingBottom:'10px', marginTop:'50px', backgroundColor:'aquamarine'}}>
      <div className='container mx-auto p-6'>
        <ul className='flex justify-around items-center space-x-6'>
          <li>
            <Link
              to="/"
              className='bg-green-500 text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
            style={{backgroundColor:'white', color:'black'}}
            >
              Create Rule
            </Link>
          </li>
          <li>
            <Link
              to="/combine-rules"
              className='bg-green-500 text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              style={{backgroundColor:'white', color:'black'}}
            >
              Combine Rules
            </Link>
          </li>
          <li>
            <Link
              to="/evaluate-rule"
              className='bg-green-500 text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              style={{backgroundColor:'white', color:'black'}}
            >
              Evaluate Rule
            </Link>
          </li>
          <li>
            <Link
              to="/display-rules"
              className='bg-green-500 text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              style={{backgroundColor:'white', color:'black'}}
            >
              Display Rules
            </Link>
          </li>
          <li>
            <Link
              to="/modify-rules"
              className='bg-green-500 text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              style={{backgroundColor:'white', color:'black'}}
            >
              Modify Rules
            </Link>
          </li>
          <li>
            <Link
              to="/getall-rules"
              className='bg-green-500 text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              style={{backgroundColor:'white', color:'black'}}
            >
              Get All Rules
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
