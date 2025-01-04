import React, { useEffect } from "react";

function SingleEmoji({ singleEmoji }) {
  return (
    <div>
      <p> {singleEmoji.description} </p>
    </div>
  );
}

export default SingleEmoji;