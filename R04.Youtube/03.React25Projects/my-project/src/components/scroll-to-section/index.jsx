import { useRef } from "react";
import data from "./db";

const ScrollToSection = () => {
    const ref = useRef(null);

    function handleScrollToSection() {
        let position = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: position,
            behavior: "smooth",
        });
    }

    return (
        <div
            className=""
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "800px",
            }}
        >
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}> click to scrooll</button>
            {data &&
                data.length &&
                data.map((item, index) => (
                    <div
                        style={item.style}
                        key={item.label}
                        ref={index === 4 ? ref : null}
                    >
                        {console.log(index, ref)}
                        <h3>{item.label} </h3>
                    </div>
                ))}
        </div>
    );
};

export default ScrollToSection;
