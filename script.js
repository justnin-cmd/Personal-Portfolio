 const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active")); // remove neon on others
    link.classList.add("active"); // add neon to clicked one
  });
});

 
 function toggleTheme() {
      const html = document.documentElement;
      html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    }
    document.getElementById('contactForm').addEventListener('submit',function(e){
      e.preventDefault();
      const phone=document.getElementById('phone').value;
      const err=document.getElementById('formError');
      if(phone.length!==11){err.textContent='Phone must be exactly 11 digits.';return}
      err.style.color='green';err.textContent='Message sent (simulated).';
      this.reset();
    });

function filterProjects(type){
    const projects=document.querySelectorAll('.project');
    projects.forEach(p=>{p.style.display=(type==='all'||p.classList.contains(type))? 'block':'none';});
  }

const filterButtons = document.querySelectorAll('.controls button');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
  });
});


   