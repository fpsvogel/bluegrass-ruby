import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")


function updateNextThirdTuesday() {
    const today = new Date();
    let thirdTuesday = new Date(today.getFullYear(), today.getMonth(), 1);
      
    while (thirdTuesday.getDay() !== 2) {
      thirdTuesday.setDate(thirdTuesday.getDate() + 1);
    }
  
    thirdTuesday.setDate(thirdTuesday.getDate() + 14);
  
    if (today >= thirdTuesday) {
      const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      return updateNextThirdTuesday.call(nextMonth);
    }
      
    const formattedDate = thirdTuesday.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const meetingDate = document.getElementById('meeting-date');
    meetingDate.textContent = formattedDate;
  }
  
  updateNextThirdTuesday();