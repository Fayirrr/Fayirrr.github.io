const tabs=[...document.querySelectorAll('.tab')];const panels=[...document.querySelectorAll('.panel')];tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.toggle('active',t===tab));panels.forEach(p=>p.classList.toggle('active',p.id===tab.dataset.tab));window.scrollTo({top:0,behavior:'smooth'});}));document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('light');});document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('visitorName').value.trim();const email=document.getElementById('visitorEmail').value.trim();const message=document.getElementById('visitorMessage').value.trim();const subject=encodeURIComponent('Portfolio contact from '+name);const body=encodeURIComponent('Name: '+name+'\\nEmail: '+email+'\\n\\n'+message);window.location.href='mailto:mohammadfayeer@gmail.com?subject='+subject+'&body='+body;});
const profileAvatar = document.getElementById("profileAvatar");
if (profileAvatar) {
  const profileAvatarImage = profileAvatar.querySelector("img");
  let showingIllustration = true;
  profileAvatar.addEventListener("click", () => {
    showingIllustration = !showingIllustration;
    profileAvatarImage.src = showingIllustration ? "avatar-art.png" : "avatar-photo.jpeg";
    profileAvatarImage.alt = showingIllustration
      ? "Mohammad Fayeer illustrated avatar"
      : "Mohammad Fayeer profile photo";
  });
}
