import React, { CSSProperties, ReactNode } from "react";
interface RandomBgProps {
    children: ReactNode;
    className?: string;
    colorClassName?: "blueColor" | "greenColor" | "pinkColor" | "orangeColor" | "darkColor" | "lightColor" | "defaultColor";
    style?: CSSProperties;
}
declare const HoloBg: React.FC<RandomBgProps>;
export default HoloBg;
