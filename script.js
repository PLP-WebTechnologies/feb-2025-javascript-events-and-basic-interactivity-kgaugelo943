document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.getElementById("order-button");
    
    orderButton.addEventListener("click", () => {
      alert("Thanks for your interest! Online ordering is coming soon.");
    });
  });

   // Change heading text and style
   heading.textContent = "SimplyKgau: Healthy snack, healty kids!";
   heading.style.backgroundColor = "#dff0d8";
   heading.style.color = "#2e7d32";
   heading.style.padding = "15px";
   heading.style.borderRadius = "10px";
   heading.style.textAlign = "center";
  
   
   const track = document.getElementById("sliderTrack");
   let currentSlide = 0;
 
   setInterval(() => {
     currentSlide = (currentSlide + 1) % 3; 
     track.style.transform = `translateX(-${currentSlide * 300}px)`;
   }, 3000);
 
  const form = document.getElementById("myForm");
  const password = document.getElementById("password");
  const inputs = form.querySelectorAll("input[required]");
  const fname = document.getElementById("fname");
  const secret = document.getElementById("secretMessage");

 
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    // prevent real submission
    alert("Form submitted successfully!");
  });

  
  password.addEventListener("input", () => {
    if (password.value.length >= 8) {
      password.classList.add("valid");
      password.classList.remove("invalid");
    } else {
      password.classList.remove("valid");
      password.classList.add("invalid");
    }
  });

  
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }

      
      if (input.value.toLowerCase().includes("treat")) {
        secret.classList.add("show");
      }
    });
  });

  
  fname.addEventListener("keypress", (e) => {
    console.log("Key pressed in First Name:", e.key);
  });

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    toggleBtn.textContent = toggleBtn.classList.contains("active") ? "Clicked!" : "Click Me!";
  });

  const accordionHeader = document.querySelector(".accordion h3");
  const accordionContent = document.querySelector(".accordion-content");

  accordionHeader.addEventListener("click", () => {
    accordionContent.classList.toggle("show");
  });

  
