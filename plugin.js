import { jsx } from 'react/jsx-runtime'
import { useState, useEffect, useCallback } from 'react'

const ID = 'persian-font'
const STYLE_ID = 'hermes-persian-typography-style'
const FORCE_STYLE_ID = 'hermes-persian-force-rtl'

const baseCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap');
  @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');

  :root {
    --dt-font-sans: 'Inter', 'Vazirmatn', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif !important;
    --dt-font-mono: 'Geist Mono', 'JetBrains Mono', 'Vazirmatn', monospace !important;
  }

  body, button, input, textarea, select, [data-slot] {
    font-family: var(--dt-font-sans);
  }

  [data-slot="aui_assistant-message-root"],
  [data-slot="composer-rich-input"],
  [data-slot="thread-viewport"],
  .prose, p, li, h1, h2, h3, h4, h5, h6, blockquote {
    unicode-bidi: plaintext !important;
    text-align: start !important;
  }

  code, pre, pre *, code *, kbd, .font-mono, .monospace {
    font-family: var(--dt-font-mono) !important;
    direction: ltr !important;
    unicode-bidi: normal !important;
    text-align: left !important;
  }
`

const forceRtlCSS = `
  [data-slot="aui_assistant-message-root"],
  [data-slot="composer-rich-input"],
  [data-slot="thread-viewport"],
  .prose, p, li, h1, h2, h3, h4, h5, h6, blockquote {
    direction: rtl !important;
    unicode-bidi: embed !important;
    text-align: right !important;
  }

  code, pre, pre *, code *, kbd, .font-mono, .monospace {
    direction: ltr !important;
    unicode-bidi: isolate !important;
    text-align: left !important;
  }
`

function injectStyle(id, css) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('style')
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = css
}

function removeStyle(id) {
  document.getElementById(id)?.remove()
}

function ForceRtlToggle({ ctx }) {
  const [on, setOn] = useState(() => ctx.storage.get('forceRtl') ?? false)

  useEffect(() => {
    if (on) injectStyle(FORCE_STYLE_ID, forceRtlCSS)
    else removeStyle(FORCE_STYLE_ID)
    ctx.storage.set('forceRtl', on)
  }, [on])

  const toggle = useCallback(() => setOn(v => !v), [])

  return jsx('button', {
    onClick: toggle,
    title: on ? 'Force RTL: ON' : 'Force RTL: OFF',
    style: {
      display: 'flex', alignItems: 'center', gap: '4px',
      padding: '2px 8px', borderRadius: '6px', cursor: 'pointer',
      border: 'none', fontSize: '12px', lineHeight: '1',
      background: on ? 'var(--ui-accent)' : 'var(--ui-text-quaternary)',
      color: on ? 'var(--ui-accent-foreground, #fff)' : 'var(--ui-text-secondary)',
      transition: 'background 0.15s, color 0.15s',
    },
    children: [
      jsx('span', { children: '⬅➡', style: { fontSize: '11px' } }),
      jsx('span', { children: 'RTL' }),
    ],
  })
}

export default {
  id: ID,
  name: 'Persian Typography & RTL',
  register(ctx) {
    if (typeof document === 'undefined') return
    injectStyle(STYLE_ID, baseCSS)

    ctx.register({
      id: `${ID}-toggle`,
      area: 'statusBar.right',
      order: 100,
      render: () => jsx(ForceRtlToggle, { ctx }),
    })
  },
}
