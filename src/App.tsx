import React from 'react';
import './App.css';
import {Footer} from "./components/footer";
import {Header} from "./components/Header";
import {Converter} from "./components/converter";
import {TopHeader} from "./components/topHeader";
import {ThemeProvider} from "./contexts/themeContext";

function App() {
    return (
        <ThemeProvider initialTheme={'dark'}>
            <div className={'bg-primary text-primary h-screen'}>
                <TopHeader />
                <div className={'max-w-[1000px] mx-auto w-full'}>
                    <Header/>
                    <Converter />
                </div>
                <Footer/>
            </div>
        </ThemeProvider>

    );
}

export default App;
