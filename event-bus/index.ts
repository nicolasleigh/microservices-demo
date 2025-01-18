import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// Store events to prevent data loss in case one of the services breaks down.
const events = [] as any;

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  // FIX: Need to properly handle error; otherwise, if another service is down, this event-bus service will also fail
  axios.post("http://localhost:4000/events", event); // posts
  axios.post("http://localhost:4001/events", event); // comments
  axios.post("http://localhost:4002/events", event); // query
  axios.post("http://localhost:4003/events", event); // moderation

  res.send({ status: "ok" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("listening on port 4005");
});
