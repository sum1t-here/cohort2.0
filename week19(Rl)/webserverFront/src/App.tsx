import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestmsg, setLatestmsg] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log("Receive msg: ", message.data);
      setLatestmsg(message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <div> Connecting to Socket Server .....</div>;
  }

  return (
    <>
      <input />
      <button
        onClick={() => {
          socket.send("Hello world");
        }}
      >
        Send
      </button>
      {latestmsg}
    </>
  );
}

export default App;
