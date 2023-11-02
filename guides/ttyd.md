# ttyd + upaint + Firefox

This guide explains how to open an ANSI artwork with upaint in a local ttyd session, connect to it in a Firefox browser, and then export the artwork to a high-resolution PNG with Firefox's built-in `:screenshot` developer tools command.

[ttyd](https://github.com/tsl0922/ttyd) is a command line tool for sharing a terminal over the web (through a web browser, not SSH).

Firstly, navigate to the directory in which your ANSI art `art.ansi` is stored. Now, start the ttyd session with

```sh
ttyd -p 8000 -t rendererType=dom [OTHER_OPTIONS] upaint art.ansi
```

The `-t rendererType=dom` is only necessary if you want to export to a higher resolution than your screen can display (DPR > 1).

`upaint art.ansi` is just the command run on startup, opening your artwork in upaint. You could replace it by `$SHELL`, which will simply launch your shell and you can print your artwork in any way want.

The other options can be used to customize rendering options like font and colors. I personally use the following: (Monokai-based)

```sh
ttyd -p 8000 -t rendererType=dom -t fontFamily="Fira Code" -t drawBoldTextInBrightColors=false -t 'theme={ "background": "#272822", "foreground": "#ffffff", "black": "#1a1a1a", "blue": "#9d65ff", "cyan": "#58d1eb", "green": "#98e024", "magenta": "#f4005f", "red": "#f4005f", "white": "#c4c5b5", "yellow": "#fa8419", "brightBlack": "#625e4c", "brightBlue": "#9d65ff", "brightCyan": "#58d1eb", "brightGreen": "#98e024", "brightMagenta": "#f4005f", "brightRed": "#f4005f", "brightWhite": "#f6f6ef", "brightYellow": "#e0d561" }' upaint art.ansi
```

Now open [http://localhost:8000](http://localhost:8000) in a Firefox browser. Open the developer tools (ctrl+shift+i).

Zoom in or out and move your artwork around so that it appers how you want it to. Now, in the console in the developer tools, run the command

```
:screenshot --dpr 10
```

DPR is short for Device Pixel Ratio, and the value 10 means that the generated screenshot's resolution will be 10x the resolution it is rendered with on your screen.
