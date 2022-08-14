const MAIN_ID = "main"

export function initMain(el) {
  const mainEl = document.getElementById(MAIN_ID)

  if (!mainEl) throw new Error('No main element')

  mainEl.innerHTML = ''
  mainEl.appendChild(el)
}