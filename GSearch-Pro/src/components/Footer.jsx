import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <div className="p-6 text-center border-t dark:border-t-gray-200 ">
            © {year} GSearch Pro. All Rights Reserved. 🌐
            </div>
        </>
    )
}

export default Footer
