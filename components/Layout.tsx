import { useState } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>
                <main>{children}</main>
            </div>
            {/* <Footer /> */}
        </>
    )
}
