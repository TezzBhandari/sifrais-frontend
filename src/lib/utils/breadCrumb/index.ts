/**
 * returns a list of breadCrum with it's corresponding url when you provide a pathname
 * @param url path string
 * @returns {pathLabel: string; url: string} breadcrum and it's url
 */
const GetBreadCrumb = (path: string) => {
  const pathParts = path.split("/").filter((p) => p.trim() !== "");
  const breadCrums = pathParts.map((part, partIndex) => {
    const previousPart = pathParts.slice(0, partIndex);
    return {
      pathLabel: part,
      url:
        previousPart.length > 0
          ? `/${previousPart.join("/")}/${part}`
          : `/${part}`,
    };
  });
  return [{ pathLabel: "home", url: "/" }, ...breadCrums];
};

export { GetBreadCrumb };
