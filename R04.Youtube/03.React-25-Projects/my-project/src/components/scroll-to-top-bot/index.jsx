import React, { useRef } from "react";
import useFetch from "../use-fetch/useFetch";

const ScrollToTopAndBottm = () => {
    /*  */
    const url_api = "https://dummyjson.com/products?limit=100";
    const { data, error, pending } = useFetch(url_api);
    const divBottomRef = useRef(null);
    /*  */

    function handleGoToTop() {
        const position = { top: 0, left: 0, behavior: "smooth" };
        window.scrollTo(position);
    }
    function handleGoToBottom() {
        divBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (pending) {
        return <h1> Loading</h1>;
    }
    if (error) {
        return <h1> error occured !! please </h1>;
    }

    const render =
        data && data.products && data.products.length
            ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
            : null;

    console.log({ data, error, pending });

    return (
        <>
            <h1>Scroll to top and bottom feature</h1>
            <h3> top section </h3>
            <button onClick={handleGoToBottom}>Scrooll to bottom</button>
            <ul style={{ listStyle: "none" }}>{render}</ul>
            <button onClick={handleGoToTop}>Scrooll to Top</button>
            <div ref={divBottomRef}></div>
            <h3> bottom of the page</h3>
        </>
    );
};

export default ScrollToTopAndBottm;
