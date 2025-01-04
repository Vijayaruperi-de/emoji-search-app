import React, { useEffect, useState } from "react";
import emojiList from "../emojiList";
import EmojiContainer from "./EmojiContainer";

function Main() {
  const [list, setlist] = useState(emojiList);
  const [keyword, setKeyword] = useState("");
  const typed = (e) => {
    const value = e.target.value.toLowerCase();
    setKeyword(value);
  };

  useEffect(() => {
    const filterList = emojiList.filter((singleEmoji) => {
      if (singleEmoji.emoji === keyword) {
        return true;
      }
      if (singleEmoji.description.startsWith(keyword)) {
        return true;
      }
      return false;
    });

    setlist(filterList);
  }, [keyword]);

  return (
    <div>
      <div className="search">
         <br />
        <input type="text" placeholder="Enter your emojee 🔎" className="w-100" onKeyUp={typed} />
        <br />
        {keyword === "" ? false : <h3> Result for - {keyword}</h3>}
      </div>
      <hr />
      {list.length === 0 ? (
        <h3>No Emoji found 😢😢</h3>
      ) : (
        <EmojiContainer list={list} />
      )}
    </div>
  );
}

export default Main;