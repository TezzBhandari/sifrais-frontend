import { cn } from "@/lib/utils/classnames";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        className={cn("animate-pulse bg-gray-400 rounded-md", className)}
        {...props}
      />
    </>
  );
}

export { Skeleton };
