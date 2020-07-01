import * as QuickJS from 'quickjs-emscripten'

if (typeof window!=='undefined') {
  window.QuickJS = QuickJS
}
