import React from 'react';
import './App.css';
import {Footer} from "./components/footer";
import {Header} from "./components/Header";

function App() {
    return (
        <div>
            <div className={'max-w-[1000px] mx-auto'}>
                <Header/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
