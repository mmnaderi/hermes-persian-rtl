import { host } from '@hermes/plugin-sdk'

const ID = 'persian-font'

export default {
  id: ID,
  name: 'Persian Typography & RTL',
  register(ctx) {
    if (typeof document === 'undefined') return

    const STYLE_ID = 'hermes-persian-typography-style'
    let styleEl = document.getElementById(STYLE_ID)

    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = STYLE_ID
      styleEl.textContent = `
        /* 
         * Persian Typography & RTL Plugin for Hermes Agent Desktop
         * Fonts: Inter (Latin) + Vazirmatn (Persian/Arabic) + Geist Mono (Code)
         */
        @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');

        :root {
          /* Primary UI font: Inter for English/Latin, Vazirmatn for Persian */
          --dt-font-sans: 'Inter', 'Vazirmatn', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif !important;
          
          /* Code and monospace font: Geist Mono with JetBrains Mono and Vazirmatn fallbacks */
          --dt-font-mono: 'Geist Mono', 'JetBrains Mono', 'Vazirmatn', monospace !important;
        }

        body, button, input, textarea, select, [data-slot] {
          font-family: var(--dt-font-sans);
        }

        /* Smart Bidi / Direction for conversation, input, and markdown text */
        [data-slot="aui_assistant-message-root"],
        [data-slot="composer-rich-input"],
        [data-slot="thread-viewport"],
        .prose, p, li, h1, h2, h3, h4, h5, h6, blockquote {
          unicode-bidi: plaintext !important;
          text-align: start !important;
        }

        /* Keep code blocks, inline code, terminal, and monospace in LTR */
        code, pre, pre *, code *, kbd, .font-mono, .monospace {
          font-family: var(--dt-font-mono) !important;
          direction: ltr !important;
          unicode-bidi: normal !important;
          text-align: left !important;
        }
      `
      document.head.appendChild(styleEl)
    }
  }
}
