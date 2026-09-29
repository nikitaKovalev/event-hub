import { createBrowserRouter } from "react-router";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: '/events',
        lazy: async () => {
          const {default: Component} = await import("./pages/EventsPage/EventsPage");
          return {Component};
        },
      },
      {
        path: '/events/:eventid',
        lazy: async () => {
          const {default: Component} = await import("./pages/EventPage/EventPage");
          return {Component};
        },
      },
      {
        path: 'attendees',
        lazy: async () => {
          const {default: Component} = await import("./pages/AttendeesPage/AttendeesPage");
          return {Component};
        },
      }
    ],
  }
]);