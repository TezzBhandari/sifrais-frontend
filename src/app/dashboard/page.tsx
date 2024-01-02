const page = () => {
  let d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="border border-red-400">
        {d.map((value, index) => {
          return (
            <div key={index} className="p-4 border-2 border-red-400">
              Hello world
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
