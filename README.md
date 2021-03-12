# Vite nested plugins bug

If a plugin adds other plugins via the `config()` hook, they'll be ignored. See [`vite.config.ts`](./vite.config.ts) for more details.

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `npm start` and open the page
4. Page should render "It works!"

## Expected behaviour

Page should display the string "It works!"