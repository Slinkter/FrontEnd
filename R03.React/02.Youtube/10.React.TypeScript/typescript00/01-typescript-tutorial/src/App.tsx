import React from "react";
import "./index.css";
import Component from "./components/tutorial";

const App = () => {
    return (
        <div className="min-h-dvh   flex flex-col justify-center items-center w-full border-2">
            <Component type="basic" name="liam" email="liam@gmail.com" />
        </div>
    );
};

export default App;
