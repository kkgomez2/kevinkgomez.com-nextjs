import { useState } from "react";

export default function ShowMore({ children }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div
        style={
          expand
            ? {}
            : {
                height: "369px",
                overflow: "hidden",
                marginBottom: "20px",
                maskImage: "linear-gradient(#000, transparent)",
              }
        }
      >
        {children}
      </div>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {expand ? <a>Show less</a> : <a>Show more</a>}
      </div>
    </div>
  );
}
