import React, { CSSProperties, ReactNode, useEffect, useRef } from "react";

import styles from "./LetterHologram.module.css";

const ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const generateRandomString = (length: number): string =>
  Array.from(
    { length },
    () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  ).join("");

interface RandomBgProps {
  children: ReactNode;
  className?: string;
  colorClassName?:
    | "blueColor"
    | "greenColor"
    | "pinkColor"
    | "orangeColor"
    | "darkColor"
    | "lightColor"
    | "defaultColor";
  style?: CSSProperties;
}

const HoloBg: React.FC<RandomBgProps> = ({
  children,
  className = "",
  colorClassName = "defaultColor",
  style,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const letters = card.querySelector<HTMLDivElement>(
      `.${styles["card-letters"]}`
    );

    if (letters && x !== undefined && y !== undefined) {
      letters.style.setProperty("--x", `${x}px`);
      letters.style.setProperty("--y", `${y}px`);
      letters.innerText = generateRandomString(50000);
    }
  };

  const handleTouchMove = (e: TouchEvent, card: HTMLDivElement) => {
    e.preventDefault();
    const rect = card.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    const letters = card.querySelector<HTMLDivElement>(
      `.${styles["card-letters"]}`
    );

    if (letters && x !== undefined && y !== undefined) {
      letters.style.setProperty("--x", `${x}px`);
      letters.style.setProperty("--y", `${y}px`);
      letters.innerText = generateRandomString(50000);
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMoveMouse = (e: MouseEvent) => handleMouseMove(e, card);
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e, card);

    card.addEventListener("mousemove", onMoveMouse);
    card.addEventListener("touchmove", onTouchMove);

    return () => {
      card.removeEventListener("mousemove", onMoveMouse);
      card.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const widthTw = RegExp(/w-\[(\d+px)\]/).exec(className)?.[1];
  const width = style?.width ?? widthTw ?? "600px";
  const cardSize = `calc(${width} * 0.8)`;
  const fontSize = `calc(${width} / 45)`;

  const cardStyles: CSSProperties & {
    [key: string]: string | number | undefined;
  } = {
    ...style,
    "--card-size": cardSize,
    "--font-size": fontSize,
  };

  return (
    <div
      className={`${styles.card} ${className}`}
      ref={cardRef}
      style={cardStyles}
    >
      <div className={styles["card-wrap-child"]}>{children}</div>
      <div
        className={`${styles["card-gradient"]} ${styles[colorClassName]}`}
      ></div>
      <div
        className={`${styles["card-letters"]} ${styles[colorClassName]}`}
      ></div>
    </div>
  );
};

export default HoloBg;
