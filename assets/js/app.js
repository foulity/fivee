
const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav-links');
if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const form=document.getElementById('quoteForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const s=encodeURIComponent('5 Star Construction Quote Request');const b=encodeURIComponent(`Name: ${d.get('Name')}\nPhone: ${d.get('Phone')}\nEmail: ${d.get('Email')}\nService: ${d.get('Service')}\n\nProject Details:\n${d.get('Project Details')||''}`);location.href=`mailto:yohanneszeresenay35@gmail.com?subject=${s}&body=${b}`})}


const galleryLightbox = document.getElementById("galleryLightbox");
if (galleryLightbox) {
  const lightboxImage = galleryLightbox.querySelector("img");
  const lightboxCaption = galleryLightbox.querySelector("p");
  const closeLightbox = () => {
    galleryLightbox.classList.remove("open");
    galleryLightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  document.querySelectorAll(".gallery-open").forEach(button => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      const caption = button.closest(".gallery-item").querySelector("figcaption").textContent;
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = caption;
      galleryLightbox.classList.add("open");
      galleryLightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });
  galleryLightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  galleryLightbox.addEventListener("click", event => {
    if (event.target === galleryLightbox) closeLightbox();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLightbox();
  });
}
