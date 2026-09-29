import type { ReactNode } from "react";
import "./EventsList.css";

export default function EventsList({children}: {children: ReactNode}) {
  return (
    <section className="events-list">
      {children}
    </section>
  );
}