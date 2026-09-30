import type { ReactNode } from "react";
import styles from "./EventsList.module.css";

export default function EventsList({children}: {children: ReactNode}) {
  return (
    <section className={styles.eventsList}>
      {children}
    </section>
  );
}