import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

function getNextThirdTuesday() {
  const today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();

  // Check if the current day is after the third Tuesday
  if (today.getDate() > 15) {
    // Move to the next month
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
  }

  const nextMonth = new Date(year, month, 1);

  // Find the first Tuesday of the next month
  while (nextMonth.getDay() !== 2) {
    nextMonth.setDate(nextMonth.getDate() + 1);
  }

  // Add 14 days to get the third Tuesday
  nextMonth.setDate(nextMonth.getDate() + 14);

  return nextMonth;
}

function updateThirdTuesday() {
  const nextThirdTuesday = getNextThirdTuesday();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = nextThirdTuesday.toLocaleDateString('en-US', options);

  const meetingDate = document.getElementById('meeting-date');
  meetingDate.textContent = formattedDate;
}

updateThirdTuesday();

