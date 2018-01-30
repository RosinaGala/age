import { DateTime, Interval } from "luxon";

const container = document.getElementById("age");

calculateAge = () => {
  const durationOfLife = calculateDurationOfLife();
  const result = formatDurationWithSup(durationOfLife);

  container.innerHTML = result;
};

calculateDurationOfLife = () => {
  const now = DateTime.local();
  const born = DateTime.local(1989, 10, 26);

  return Interval.fromDateTimes(born, now);
};

formatDurationWithSup = dol => {
  const fullAgeAsString = dol.length("years", true).toString();
  const years = fullAgeAsString.substring(0, 2);
  const theRest = fullAgeAsString.substring(2, 11);

  return years + theRest.sup();
};

window.setInterval(calculateAge, 100);
