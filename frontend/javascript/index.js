import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

  function updateThirdTuesday() {
    const today = new Date();
    const thirdTueday = new Date(today.getFullYear(), today.getMonth(), 14);
  
    while (thirdTueday.getDay() !== 2) {
      thirdTueday.setDate(thirdTueday.getDate() + 1);
    }
  
    if (today.getMonth() === thirdTueday.getMonth() && today.getDate() >= thirdTueday.getDate())  {
      thirdTueday.setMonth(thirdTueday.getMonth() + 1);
    } else {
  
    }
  
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedDate = thirdTueday.toLocaleDateString('en-US', options);
  
    const meetingDate = document.getElementById('meeting-date');
    meetingDate.textContent = formattedDate;
  }

  updateThirdTuesday();
