import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = ({ img, children }) => {
    return (
        <ParallaxBanner translateY={[-20, 20]} opacity="0.5" layers={[{image: img, amount:0.6}]} style={{height: "100vh", zIndex: "-1"}}>
            <div>
                {children}
            </div>
        </ParallaxBanner>
    )
}

export default ParallaxImg;