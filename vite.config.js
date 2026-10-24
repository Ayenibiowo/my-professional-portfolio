import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({build:{rollupOptions:{input:{home:resolve('index.html'),books:resolve('books/index.html'),hope:resolve('books/hope-has-feet/index.html'),design:resolve('books/in-the-beginning-there-was-design/index.html'),identity:resolve('books/the-african-male-born-child/index.html'),grace:resolve('books/born-by-privilege-rise-by-grace/index.html'),roots:resolve('books/roots-and-wings/index.html')}}}});
