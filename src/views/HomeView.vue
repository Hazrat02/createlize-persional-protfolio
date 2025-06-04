<template>
  <HomeLayout>
 
    <section class="container-fluid mt-5">
      <div class="row justify-content-between align-items-center hero">
      <!-- Editable Code Editor -->
       
      <div  class="col-md-6 mb-md-0 mb-5">
        <div v-html="output">
        
       </div>
    <div class="container">   <a target="_blank" href="https://github.com/Hazrat02" class="btn btn-outline-one icon-space-left">See Github <i class="fa-brands fa-github"></i>
    </a></div>
      </div>
      <div class="col-md-6">
        <div class="editor-container">
          <div class="pin">

            <span class="red-circle"></span>
            <span class="yellow-circle"></span>
            <span class="green-circle"></span>
            
          </div>
          <div class="buttons">
            <button @click="copyCode">📋 Copy</button>
            <div style="flex: 1"></div>
            <button @click="runCode">▶ Run</button>
          </div>

          <pre class="language-html line-numbers">
            <code
              class="language-html"
              :contenteditable="!isTyping"
              spellcheck="false"
              @input="onCodeInput"
              @keydown.tab.prevent="insertTab"
              ref="codeRef"
            ></code>
          </pre>
        </div>
      </div>

      <!-- Output -->
    
    </div>


    <div class="hero__footer">
          <div class="hero__footer-left">
            <div class="hero__footer-left-arrow">
              <img src="https://andreagandolfo.it/images/hero/arrow.svg" alt="Icon">
            </div>
            <div class="hero__footer-content">
              <div class="hero__footer-thumbs">
                <img src="https://andreagandolfo.it/images/hero/thumb-1.jpg" alt="Avatar">
                <img src="https://andreagandolfo.it/images/hero/thumb-2.jpg" alt="Avatar">
                <img src="https://andreagandolfo.it/images/hero/thumb-3.jpg" alt="Avatar">
                <img src="https://andreagandolfo.it/images/hero/thumb-4.jpg" alt="Avatar">
              </div>
              <div class="hero__footer-text">
                <p>Oltre 30 clienti si affidano ai miei servizi</p>
              </div>
            </div>
          </div>
          <div class="hero__footer-btn">
            <a href="contact.html" class="btn btn__full">
              <span class="icon d-inline-flex align-items-center justify-content-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4553 4.32604V13.996C13.4553 14.3565 13.5774 14.6589 13.8217 14.9032C14.066 15.1475 14.368 15.2692 14.7276 15.2684C15.0873 15.2675 15.3893 15.1454 15.6336 14.9019C15.8779 14.6585 16 14.3565 16 13.996V1.27237C16 0.911862 15.8779 0.609887 15.6336 0.366441C15.3893 0.122995 15.0873 0.000848244 14.7276 0H2.00398C1.64347 0 1.34108 0.122147 1.09678 0.366441C0.852488 0.610736 0.730763 0.91271 0.731611 1.27237C0.73246 1.63202 0.854608 1.93442 1.09805 2.17956C1.3415 2.4247 1.64347 2.54643 2.00398 2.54473H11.674L0.349903 13.8688C0.116636 14.1021 9.53674e-07 14.3989 9.53674e-07 14.7594C9.53674e-07 15.1199 0.116636 15.4168 0.349903 15.6501C0.58317 15.8834 0.880054 16 1.24056 16C1.60106 16 1.89795 15.8834 2.13121 15.6501L13.4553 4.32604Z" fill="#0B0B0B"/>
                </svg>                                    
              </span>
              <div class="btn__full-inner d-flex align-items-center position-relative">
                <span>
                  <span data-title="Scrivimi!">
                    <span>I Miei Contatti</span>
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div class="image-full">
      <div class="image-full__scroll">
        <img src="./../assets/frontend/img/my-img-2.png" alt="Image">
      </div>
      <div class="image-full__circle">
        <a href="contact.html">          
          <img class="image-circle" src="https://andreagandolfo.it/images/circle-text.jpg" alt="Circle">
          <img class="image-avatar" src="https://andreagandolfo.it/images/avatar.png" alt="Avatar">
        </a>
      </div>
    </div>
    </section>
  </HomeLayout>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import HomeLayout from "./../Layouts/HomeLayout.vue";


import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-css.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";


import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const defaultCode = `<section class="hero2">
  <div class="content">
    <h3 class="mb-2">Hello! I’m</h3>
    <h1 class="mb-4">Hazrat Ali</h1>
    <p>🚀 Full Stack Developer | Vue.js • Laravel • PHP</p>
    
  </div>
</section>`;

const code = ref("");
const output = ref("");
const codeRef = ref(null);
const isTyping = ref(true);
let typingIndex = 0;



function saveCaret(el) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  const preSelectionRange = range.cloneRange();
  preSelectionRange.selectNodeContents(el);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);
  const start = preSelectionRange.toString().length;
  return start;
}

function restoreCaret(el, pos) {
  const selection = window.getSelection();
  if (!selection) return;
  let charIndex = 0;
  const range = document.createRange();
  range.setStart(el, 0);
  range.collapse(true);

  const nodeStack = [el];
  let node,
    foundStart = false;

  while (!foundStart && (node = nodeStack.pop())) {
    if (node.nodeType === 3) {
      const nextCharIndex = charIndex + node.length;
      if (pos >= charIndex && pos <= nextCharIndex) {
        range.setStart(node, pos - charIndex);
        range.collapse(true);
        foundStart = true;
        break;
      }
      charIndex = nextCharIndex;
    } else {
      let i = node.childNodes.length;
      while (i--) {
        nodeStack.push(node.childNodes[i]);
      }
    }
  }

  selection.removeAllRanges();
  selection.addRange(range);
}

function highlight() {
  if (codeRef.value) {
    const caret = saveCaret(codeRef.value);
    codeRef.value.textContent = code.value;
    Prism.highlightElement(codeRef.value);
    nextTick(() => {
      if (caret !== null) restoreCaret(codeRef.value, caret);
    });
  }
}

function onCodeInput(e) {
  code.value = e.target.innerText;
  highlight();
}

function insertTab() {
  document.execCommand("insertText", false, "  ");
}

function copyCode() {
  navigator.clipboard.writeText(code.value);
  alert("Copied!");
}

function runCode() {
  output.value = code.value;
}

function typeCode() {
  if (typingIndex < defaultCode.length) {
    code.value += defaultCode[typingIndex++];
    highlight();
    setTimeout(typeCode, 10);
  } else {
    isTyping.value = false;
  }
}

onMounted(() => {
  nextTick(() => {
    output.value = defaultCode; // Show full output instantly
    typeCode();                 // Start typing animation
  });

  const imageFull = document.querySelector('.image-full')

  if (imageFull) {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageFull,
        start: 'top top',
        end: '+=120%',
        scrub: true,
        pin: true
      }
    })

    tl.to('.image-full__scroll', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'none'
    })
  }
  




});

</script>

<style scoped>
.editor-container {
  position: relative;
  background: #1e1e1e;
  color: white;
  font-family: "Fira Code", monospace;
}
/* .language-html{
  padding-top: 20px;
} */

pre {
  position: relative;
  width: 100%;
  max-height: 400px;
  background: linear-gradient(135deg, #1f1f1f, #2d2d2d);
  /* background: #2d2d2d; */
  border-radius: 10px;
  overflow: auto;
  padding: 16px;
  white-space: pre;
  padding-top: 50px;



}

code[contenteditable] {
  outline: none;
  display: block;
  font-family: "Fira Code", monospace;
  min-height: 200px;
  caret-color: white;

  
}

.buttons {
  position: absolute;
  top: 0;
  right: 15px;
  display: flex;
  gap: 10px;
  padding: 10px;
  z-index: 1;
}

.buttons button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  transition: background 0.3s;
}

.buttons button:hover {
  background: rgba(255, 255, 255, 0.3);
}

pre::-webkit-scrollbar {
  height: 8px; /* Bottom scrollbar height */
  width: 8px;  /* Right scrollbar width (in case of vertical) */
}

pre::-webkit-scrollbar-track {
  background: #1e1e1e;
  border-radius: 10px;
}

pre::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 10px;
  transition: background 0.3s;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #888;
}

.pin{
  position: absolute;
  top: 0;
  left: 15px;
  display: flex;
  gap: 5px;
  padding: 10px;
  z-index: 1;
}

.pin span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.red-circle {
  background-color: #ff5f56;
}

.yellow-circle {
  background-color: #ffbd2e;
}

.green-circle {
  background-color: #27c93f;
}

.pin:hover .red-circle {
  background-color: #27c93f; /* Red ➝ Green */
}

.pin:hover .yellow-circle {
  background-color: #ff5f56; /* Yellow ➝ Red */
}

.pin:hover .green-circle {
  background-color: #ffbd2e; /* Green ➝ Yellow */
}
</style>
