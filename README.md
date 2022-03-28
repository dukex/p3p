# P3P

### Install the dependencies:

```bash
npm install
```

### Start Project:

```bash
npm start
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running.

This spawns a development server, so simply edit a file in `src`, save it, and reload the page to see your changes.

#### What to Expect

- A dev server is watching your files for changes. It will restart when it needs to.
- Rollup is watching your files for changes. It will restart when it needs to.
- If your `elder.config.js` has `@elderjs/plugin-browser-reload': {}` in it's plugins, your browser will automatically restart after the server restarts.

**esbuild**

If you are looking for a faster development experience run `npm run esbuild` this is experimental but will be improving rapidly.

### To Build HTML for Production:

```bash
npm run build
```

Let the build finish. It will put all of your statically generated files in `./public`.

If you wish to preview you can use:

```bash
npx sirv-cli public
```

### To Run in SSR Mode for Production:

```bash
npm run serve
```
