import styles from "~/styles/main.css";
import { useLoaderData } from "remix";
import { useEffect } from "react";

export function loader({ params }) {
  return params.room_id;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Room() {
  const roomId = useLoaderData();

  useEffect(() => {
    function randomStatus() {
      // 1-3 random chance
      // ANCHOR: REPLACE THIS WITH IF STATEMENT TO SELECT VALUE MANUALLY
      const random = Math.floor(Math.random() * 3) + 1;

      // Queried Selector Elements
      const body = document.querySelector("body");
      const statusText = document.querySelector(".status-text");

      if (random === 1) {
        statusText.innerHTML = "Come On In!";
        body.style.backgroundColor = "var(--available-background)";
      } else if (random === 2) {
        statusText.innerHTML = "Busy";
        body.style.backgroundColor = "var(--busy-background)";
      } else if (random === 3) {
        statusText.innerHTML = "In A Meeting";
        body.style.backgroundColor = "var(--dnd-background)";
      }
    }
    randomStatus();
  });

  return (
    <>
      <h2 className="align-right">Room-ID - {roomId}</h2>
      <div className="center-text">
        <div>
          <h1 className="status-text"></h1>
        </div>
      </div>
    </>
  );
}
