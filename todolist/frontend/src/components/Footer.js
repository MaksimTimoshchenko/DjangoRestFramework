import React from 'react'


const Footer = () => {
   return (
    <footer className="bg-dark text-center text-white fixed-botom mt-auto">
        <div className="container p-4">
            <section>
                <p className="mb-0">Project was created as part of the GeekBrains course</p>
            </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2021 Developed by:&nbsp;
            <a className="text-white" target="_blank" href="https://github.com/MaksymTymoshchenko/GeekBrains">Maksym Tymoshchenko</a>
        </div>
    </footer>
   )
}

export default Footer
