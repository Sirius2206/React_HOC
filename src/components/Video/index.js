import { nanoid } from "nanoid";
import React from "react";
import DateTimePretty from "./DateTimePretty";
import "./index.css";

export function DateTime(props) {
  return <p className="date">{props.date}</p>
}

export function Video(props) {
  const DatePrettied = DateTimePretty(DateTime);
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DatePrettied date={props.date}/>
    </div>
  );
}

export function VideoList(props) {
  return props.list.map((item) => (
    <Video key={nanoid()} url={item.url} date={item.date} />
  ));
}
