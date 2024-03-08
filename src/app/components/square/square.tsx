import { ButtonHTMLAttributes } from "react";
import styles from "./square.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Square({ children, ...props }: ButtonProps) {
  return (
    <>
      <button className={styles.square} {...props}>
        {children}
      </button>
    </>
  );
}
