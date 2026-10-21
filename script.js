// Mobile menu
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});

// Skill bars fill when they scroll into view
const bars=document.querySelectorAll('.bar i');
if(bars.length){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.style.width=e.target.dataset.w+'%';io.unobserve(e.target)}
  }),{threshold:.4});
  bars.forEach(b=>io.observe(b));
}

// Contact form: validate, then open the visitor's email app
const form=document.getElementById('contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const n=form.name.value.trim(),m=form.email.value.trim(),t=form.message.value.trim(),out=document.getElementById('form-msg');
    if(!n||!/^\S+@\S+\.\S+$/.test(m)||!t){out.textContent='Enter your name, a valid email and a message.';out.className='msg error';return}
    out.className='msg';out.textContent='Opening your email app...';
    window.location.href='mailto:your.email@example.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(t+'\n\nFrom: '+n+' ('+m+')');
  });
}
