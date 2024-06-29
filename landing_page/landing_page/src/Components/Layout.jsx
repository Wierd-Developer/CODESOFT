import React from 'react'
import Navbar from './Navbar/Navbar'

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "85vh", marginTop: "10vh", backgroundColor: "#f7f4ed" }}>
                <div>
                    {props.children}
                </div>
            </main>
        </>
    )
}

export default Layout