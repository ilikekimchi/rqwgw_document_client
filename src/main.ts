import './index.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
    <div class="flex gap-8 mb-8">
      <a href="https://vite.dev" target="_blank" class="hover:scale-110 transition-transform">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank" class="hover:scale-110 transition-transform">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Vite + TypeScript</h1>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <button id="counter" type="button" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"></button>
    </div>
    <p class="mt-8 text-gray-600">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
