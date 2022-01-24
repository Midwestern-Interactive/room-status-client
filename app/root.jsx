import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";

export function meta() {
  // Not sure if this wants to be changed. Main page is just a blank white page.
  return { title: "Page" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  );
}

// What happens when you go to a page that hasn't been created.
export function CatchBoundary() {
  const caught = useCatch();
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector("*").style.color = "#fff";
  });
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {caught.status} : {caught.statusText}
        </h1>
        <Scripts />
        <p>Error: Your room number was not found!</p>
      </body>
    </html>
  );
}
