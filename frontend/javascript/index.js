import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

function getNextThirdTuesday() {
  const today = new Date();
  const currentMonth = today.getMonth();
  let thirdTuesday = new Date(today.getFullYear(), currentMonth, 14);

  while (thirdTuesday.getDay() !== 2) {
    thirdTuesday.setDate(thirdTuesday.getDate() + 1);
  }

  if (thirdTuesday.getMonth() !== currentMonth) {
    thirdTuesday = new Date(today.getFullYear(), currentMonth + 1, 1);

    while (thirdTuesday.getDay() !== 2) {
      thirdTuesday.setDate(thirdTuesday.getDate() + 1);
    }
  }

  return thirdTuesday;
}

function updateThirdTuesday() {
  const nextThirdTuesday = getNextThirdTuesday();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = nextThirdTuesday.toLocaleDateString('en-US', options);

  const meetingDate = document.getElementById('meeting-date');
  meetingDate.textContent = formattedDate;
}

updateThirdTuesday();
