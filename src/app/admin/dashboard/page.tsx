import React from "react";

let x = [1, 2, 3, 5, 5, 5, 555, 5, 5, 55, 5];

const page = () => {
  return (
    <div>
      {x.map((i, v) => {
        return (
          <h1 className="h-14 w-full" key={v}>
            {i}
          </h1>
        );
      })}
    </div>
  );
};

export default page;
