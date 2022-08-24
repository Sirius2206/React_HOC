import React, { useState } from "react";
import { Video, Article } from "./PopNew";
import PopNew from "./PopNew";
import { nanoid } from "nanoid";
import "./index.css";



function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        const PopNewVideo = PopNew(Video);
        return <PopNewVideo key={nanoid()} {...item} />;

      case "article":
        const PopNewArticle = PopNew(Article);
        return <PopNewArticle key={nanoid()} {...item} />;
    }
  });
}

export default List;
