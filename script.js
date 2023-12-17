document.addEventListener('DOMContentLoaded', function() {
        const btn2El = document.getElementById("btn2");
        const CanEl = document.getElementById("activity");
       
        const apiURL2 = "https://www.boredapi.com/api/activity";
    
        async function getIdea() {
          try {
            btn2El.innerText = "...";
            btn2El.disabled = true;
            CanEl.innerText = "Uploading...";
            const response2 = await fetch(apiURL2);
            const data2 = await response2.json();
            const CanContent = data2.activity;
            CanEl.innerText = CanContent;
            btn2El.innerText = "Get an idea!";
            btn2El.disabled = false;
            console.log(data2);
          } catch (error) {
            console.log(error);
            quoteEl.innerText = "An error happened, try again later";
            authEl.innerText = "An error happened";
            btnEl.innerText = "Get a quote";
            btnEl.disabled = false;
          }
        }
    
        getIdea();
        btn2El.addEventListener("click", getIdea);
      });