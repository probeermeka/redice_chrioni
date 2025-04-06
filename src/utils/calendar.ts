export const generateGoogleCalendarUrl = () => {
  const event = {
    text: "Mariage de Redice & Chrioni",
    dates: "20250705T100000/20250705T230000",
    details: "Cérémonie religieuse à l'église (Imperiastraat 8, 1930 Zaventem) suivie de la réception (Stoofstraat 34, 1785 Merchtem)",
    location: "Imperiastraat 8, 1930 Zaventem",
  };

  const baseUrl = "https://calendar.google.com/calendar/render";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.text,
    dates: event.dates,
    details: event.details,
    location: event.location,
  });

  return `${baseUrl}?${params.toString()}`;
};