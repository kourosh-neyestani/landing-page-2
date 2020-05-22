import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Scenes
import Home from "./scenes/Home";

function Root() {
    return (
        <div>
            <Home />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.register();
