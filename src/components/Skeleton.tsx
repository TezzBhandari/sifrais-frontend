import { cn } from "@/lib/utils/classnames";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        className={cn("animate-pulse rounded-md", className)}
        {...props}
      />
    </>
  );
}

export { Skeleton };
