let count = 0;
const btn = document.getElementById('actionBtn');
const status = document.getElementById('status');
        // INNOVATIVE ADDITION: Reversal of actions (Rule 6) and Memory Load (Rule 8)
   function performAction() {
      count++;
    
    // Rule 3: Informative Feedback
      btn.classList.add('click-feedback');
      setTimeout(() => {
        btn.classList.remove('click-feedback');
        if (!btn.disabled) 
        {
          btn.innerText = "Process Data (Click me!)";
        }
      }, 500);

    status.textContent = `✅ Processed ${count}/3 times`;
    
    if (count >= 3) {
        btn.disabled = true;
        btn.innerText = "Task Complete"; // Clear state communication
        btn.classList.add('constrained', 'disabled-signifier');
        status.innerHTML = '⛔ <b>Limit reached:</b> System is now in a constrained state.';
    }
}

btn .addEventListener('click', performAction);