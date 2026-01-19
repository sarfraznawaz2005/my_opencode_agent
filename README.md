# My Custom Dev Workflow Agent for OpenCode

Copy `agent` folder to `~\.config\opencode` folder.

Add below to `opencode.json` file:

```
"agent": {
    "manager": {
      "mode": "primary",
      "model": "opencode/grok-code",
      "tools": {
        "bash": true,
        "write": false
      }
    }
}
```


## Tools Used:

- [Backlog.md](https://github.com/MrLesk/Backlog.md)

