export const formatDateToPersian = (date) => {
  // Formatter for the date part
  const dateFormatter = new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Formatter for the time part
  const timeFormatter = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Format date and time separately
  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);

  // Combine with a separator
  return `${formattedDate} | ${formattedTime}`;
};
