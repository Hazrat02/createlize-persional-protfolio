<template>
  <HomeLayout>
    <div class="row justify-content-between align-content-start hero">
      <!-- Editable Code Editor -->
      <div class="col-6">
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
      <div v-html="output" class="col-6"></div>
    </div>
    <div class="image-full">
      <div class="image-full__scroll">
        <img src="./img/my-img-2.png" alt="Image">
      </div>
      <div class="image-full__circle">
        <a href="contact.html">          
          <img class="image-circle" src="https://andreagandolfo.it/images/circle-text.jpg" alt="Circle">
          <img class="image-avatar" src="https://andreagandolfo.it/images/avatar.png" alt="Avatar">
        </a>
      </div>
    </div>
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

const defaultCode = `<section class="hero2">
  <div class="content">
    <h1>Hazrat Ali</h1>
    <p>🚀 Full Stack Developer | Vue.js • Laravel • Node.js</p>
    <a href="#contact">Hire Me</a>
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
  background: #2d2d2d;
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
