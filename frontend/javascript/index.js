import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

function getNextNthTuesday(n) {
  const today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();

  // Check if the current day is after the Nth Tuesday
  if (today.getDate() > (n - 1) * 7 + 1) {
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

  // Add weeks to get the Nth Tuesday
  nextMonth.setDate(nextMonth.getDate() + (n - 1) * 7);

  return nextMonth;
}

function updateMeetingDate() {
  const nextFirstTuesday = getNextNthTuesday(1);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = nextFirstTuesday.toLocaleDateString('en-US', options);

  const meetingDate = document.getElementById('meeting-date');
  meetingDate.textContent = formattedDate;
}

//updateMeetingDate();

