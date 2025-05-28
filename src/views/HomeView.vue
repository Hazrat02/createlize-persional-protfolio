<template>
  <div class="editor-container row">
    <!-- Editable Code Editor with Syntax Highlighting -->

    <div class="col-6">
      <pre class="language-html line-numbers">
        <code
          class="language-html"
          contenteditable="true"
          spellcheck="false"
          @input="onCodeInput"
          @keydown.tab.prevent="insertTab"
          ref="codeRef"
        ></code>
      </pre>

      <!-- Buttons -->
      <div class="buttons">
        <button @click="copyCode">📋 Copy</button>
        <button @click="runCode">▶ Run</button>
      </div>
    </div>
    <div class="col-6">
      <!-- Output iframe -->
      <iframe v-if="output" class="output" :srcdoc="output"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-css.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";

const defaultCode = `<section class="hero">
  <div class="content">
    <h1>Hazrat Ali</h1>
    <p>🚀 Full Stack Developer | Vue.js • Laravel • Node.js</p>
    <a href="#contact">Hire Me</a>
  </div>
</section>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #121212;
  color: white;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1f1f1f, #2d2d2d);
  padding: 20px;
}
.content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #4fc3f7;
}
.content p {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.content a {
  text-decoration: none;
  padding: 12px 24px;
  background: #4fc3f7;
  color: #000;
  border-radius: 6px;
  font-weight: bold;
  transition: background 0.3s;
}
.content a:hover {
  background: #03a9f4;
}
</style>`;

const code = ref(defaultCode);
const output = ref("");
const codeRef = ref(null);

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

onMounted(() => {
  nextTick(() => {
    highlight();
    runCode();
  });
});
</script>


<style scoped>
.editor-container {
  background: #1e1e1e;
  color: white;
  font-family: "Fira Code", monospace;
  padding: 20px;
  /* min-height: 100vh; */

  justify-content: space-between;
  align-items: center;
}

/* Code editor look */
pre {
  width: 100%;
  max-width: 900px;
  background: #2d2d2d;
  border-radius: 10px;
  overflow: auto;
  padding: 16px;
  margin-bottom: 10px;
  white-space: pre; /* Don't wrap lines */
}

code[contenteditable] {
  outline: none;
  display: block;
  font-family: "Fira Code", monospace;
  white-space: pre; /* Prevent line wrapping */
  min-height: 300px;
  caret-color: white;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.buttons button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-size: 16px;
}

.output {
  width: 100%;
  max-width: 900px;
  height: 250px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ccc;
}
</style>
