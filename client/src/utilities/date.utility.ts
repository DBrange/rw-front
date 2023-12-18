export const date = (date: Date) => new Date(date).getTime();

export const onlyDate = (date: Date) =>
  (date as unknown as string)
    .split("")
    .slice(0, 10)
    .join("")
    .split("-")
    .reverse()
    .join("/");
