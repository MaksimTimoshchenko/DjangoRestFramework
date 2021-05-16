import React from 'react'


const Footer = () => {
   return (
    <footer className="bg-dark text-center text-white fixed-botom mt-auto">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>

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
