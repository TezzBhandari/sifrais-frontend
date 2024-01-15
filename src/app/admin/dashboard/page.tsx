import SelectForm from "@/components/SelectForm";

let x = [1, 2, 3, 5, 5, 5, 555, 5, 5, 55, 5, 5, 555, 5, 5, 55];

const page = () => {
  return (
    <div className="px-3 py-2">
      <SelectForm />
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
