# Render ANSI art with xterm.js in Firefox browser

## Dependencies

- Python 3
- Bun
    ```sh
    curl -fsSL https://bun.sh/install | bash
    ```
- Modules defined in `package.json`
    ```sh
    bun install
    ```

## Usage

Host `index.html`, `index.js` and the `node_modules` directory from a local HTTP server

```sh
python3 -m http.server
```

Then open [http://localhost:8000/index.html](http://localhost:8000/index.html) in you browser. Open the developer tools (ctrl+shift+i).

Zoom in or out so that your artwork appers how you want it to. Now, in the console in the developer tools, run the command

```
:screenshot --dpr 10
```

DPR is short for Device Pixel Ratio, and the value 10 means that the generated screenshot's resolution will be 10x the resolution it is rendered with on your screen.
