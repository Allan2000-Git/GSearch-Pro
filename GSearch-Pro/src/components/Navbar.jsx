import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = ({darkMode, setDarkMode}) => {

    return (
        <>
            <div className="p-6 flex flex-wrap items-center justify-center sm:justify-between bg-gray-100 border-b border-gray-200 dark:bg-gray-700 dark:text-gray-100">
                <div className="flex justify-between items-center space-x-6 w-screen">
                    <NavLink to="/">
                        <h1 className="text-xl bg-[#17A398] font-bold text-white py-1.5 px-2 rounded-md dark:bg-gray-50 dark:text-gray-900">🔎 GSearch-Pro</h1>
                    </NavLink>
                    <button className="text-lg font-medium dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg" onClick={()=>setDarkMode(!darkMode)} type="button">
                        {darkMode ? '💡 Light' : '🌙 Dark'}
                    </button>
                </div>
                <Searchbar />
            </div>
        </>
    )
}

export default Navbar
