import { PropsWithChildren } from "react";
import styles from "./header.module.css";

export default function Header(props: PropsWithChildren) {
  return (
    <>
      <h1 className={styles.header}>{props.children}</h1>
    </>
  );
}
