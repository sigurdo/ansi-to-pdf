// Necessary imports for creating a bundle.
// import { Terminal } from 'xterm';

// let resolution = [30000, 15000];
let font_size = 20;
let columns = 140;
let rows = 70;

// let font_size = Math.floor(resolution[1] / rows);
let resolution = [font_size / 2 * columns, font_size * rows];

let terminal_element = document.querySelector('#terminal');
terminal_element.style.width = resolution[0] + 'px';
terminal_element.style.height = resolution[1] + 'px';
let terminal = new Terminal({
    fontSize: font_size,
    fontFamily: "Fira Code",
    theme: {
        background: "#272822",
        foreground: "#ffffff",
        black: "#1a1a1a",
        blue: "#9d65ff",
        cyan: "#58d1eb",
        green: "#98e024",
        magenta: "#f4005f",
        red: "#f4005f",
        white: "#c4c5b5",
        yellow: "#fa8419",
        brightBlack: "#625e4c",
        brightBlue: "#9d65ff",
        brightCyan: "#58d1eb",
        brightGreen: "#98e024",
        brightMagenta: "#f4005f",
        brightRed: "#f4005f",
        brightWhite: "#f6f6ef",
        brightYellow: "#e0d561"
    },
    cols: columns,
    rows: rows,
    convertEol: true,
    disableStdin: true,
});
terminal.open(terminal_element);

// Hide cursor
terminal.write('\x1b[?25l');

fetch('mathildenhohe.ansi').then(async response => {
    let ting = await response.text();
    terminal.write(ting);
});

// Refresh on F5
addEventListener("keydown", event => {
    console.log(event.keyCode);
    if (event.keyCode == 116) {
        location.reload();
    }
});
