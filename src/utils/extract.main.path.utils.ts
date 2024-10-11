export const extractMainPath = (url: string): string => {
  const urlParts = url.split("/");
  return urlParts.filter((part) => part !== "")[0];
};
