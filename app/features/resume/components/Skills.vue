<!-- components/F/Resume/Skills.vue -->
<script setup lang="ts">
const stack = [
  { key: 'languages', values: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { key: 'frontend', values: ['Vue.js', 'Nuxt.js', 'TailwindCSS', 'Sass'] },
  { key: 'backend', values: ['Node.js', 'Laravel', 'PHP'] },
  { key: 'mobile', values: ['Android Studio', 'Kotlin'] },
  { key: 'database', values: ['PostgreSQL', 'MySQL'] },
  { key: 'tools', values: ['Vite', 'Git', 'GitHub', 'npm'] },
]

type Token = { text: string; type: 'key' | 'str' | 'punct' }
type Line = { indent: number; tokens: Token[] }

const lines = computed<Line[]>(() => {
  const out: Line[] = [{ indent: 0, tokens: [{ text: '{', type: 'punct' }] }]

  stack.forEach((group, gi) => {
    const isLastGroup = gi === stack.length - 1
    out.push({
      indent: 1,
      tokens: [
        { text: `"${group.key}"`, type: 'key' },
        { text: ': [', type: 'punct' },
      ],
    })
    group.values.forEach((val, vi) => {
      const isLastVal = vi === group.values.length - 1
      out.push({
        indent: 2,
        tokens: [
          { text: `"${val}"`, type: 'str' },
          { text: isLastVal ? '' : ',', type: 'punct' },
        ],
      })
    })
    out.push({
      indent: 1,
      tokens: [{ text: isLastGroup ? ']' : '],', type: 'punct' }],
    })
  })

  out.push({ indent: 0, tokens: [{ text: '}', type: 'punct' }] })
  return out
})

const copied = ref(false)
function copyJson() {
  const obj = Object.fromEntries(stack.map((s) => [s.key, s.values]))
  navigator.clipboard?.writeText(JSON.stringify(obj, null, 2))
  copied.value = true
  setTimeout(() => (copied.value = false), 1400)
}
</script>

<template>
  <div class="tab-content">
    <div class="code-block">
      <div class="code-topbar">
        <span class="code-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </span>
        <span class="code-filename">stack.json</span>
        <button class="copy-btn" type="button" @click="copyJson">
          <span :class="{ 'copy-ok': copied }">{{ copied ? 'copied' : 'copy' }}</span>
        </button>
      </div>

      <div class="code-body">
        <div v-for="(line, i) in lines" :key="i" class="code-line">
          <span class="ln">{{ i + 1 }}</span>
          <span class="code-text" :style="{ paddingLeft: `${line.indent * 18}px` }">
            <span
              v-for="(tok, ti) in line.tokens"
              :key="ti"
              :class="tok.type"
            >{{ tok.text }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-block {
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.code-topbar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border-subtle);
}

.code-dots { display: flex; gap: 6px; }
.dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.dot-red { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green { background: #28c840; }

.code-filename {
  font-size: 11.5px;
  color: var(--text-tertiary);
  margin-right: auto;
}

.copy-btn {
  font-size: 11px;
  font-family: inherit;
  color: var(--text-tertiary);
  background: transparent;
  border: 1px solid var(--border-subtle);
  border-radius: 5px;
  padding: 3px 9px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}
.copy-btn:hover { color: var(--mint); border-color: var(--mint-dim); }
.copy-ok { color: var(--mint); }

.code-body {
  padding: 14px 0;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
}

.code-line { display: flex; white-space: pre; }

.ln {
  flex: 0 0 auto;
  width: 34px;
  text-align: right;
  padding-right: 14px;
  color: var(--text-tertiary);
  opacity: 0.4;
  user-select: none;
}

.code-text { color: var(--text-secondary); }
.key { color: var(--mint); }
.str { color: var(--amber); transition: color 0.15s; }
.str:hover { color: var(--mint); }
.punct { color: var(--text-tertiary); }
</style>