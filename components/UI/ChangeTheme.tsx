"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { CgDarkMode } from "react-icons/cg";

function ChangeTheme() {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }

    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
    }


    return (
        <div className="fixed bottom-0 right-0 p-4">
            <button
                className="text-4xl text-black dark:text-white"
                onClick={handleChangeTheme}
            >
                <CgDarkMode />
            </button>
        </div>
    )
}

export default ChangeTheme