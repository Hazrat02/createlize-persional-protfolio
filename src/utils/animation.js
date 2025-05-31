// src/directives/animationDirective.js

export default {
    beforeMount(el) {
      const animationClasses = el.getAttribute('data-animation');
      const animationDuration = el.getAttribute('data-wow-duration');
  
      if (!animationClasses) return; // If no animation classes, exit early
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Apply animation classes and duration
            el.classList.add(...animationClasses.split(' '));
            if (animationDuration) {
              el.style.animationDuration = animationDuration;
            }
            
            el.addEventListener('animationend', () => {
              // Clean up classes after animation ends
              el.classList.remove(...animationClasses.split(' '));
              if (animationDuration) {
                el.style.animationDuration = '';
              }
            });
  
            observer.unobserve(el); // Stop observing after the animation is triggered
          }
        });
      }, {
        threshold: 0.1 // Adjust this value to determine when the element is considered in view
      });
  
      observer.observe(el);
    }
  };
  