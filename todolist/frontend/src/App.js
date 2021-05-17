import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           
       }
   }

   render () {
       return (
            <section className="d-flex flex-column min-vh-100">
                <Navbar />
                <Main />
                <Footer />
            </section>
       )
   }
}

export default App
