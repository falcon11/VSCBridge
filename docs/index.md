---
title: vsc-bridge - Bridge between vscode extension and webview.
order: 10
hero:
  title: vsc-bridge
  desc: 📖 Bridge between vscode extension and webview.
footer: Open-source MIT Licensed | Copyright © 2021-present<br />Powered by Ashoka
---

## Getting Started

install `@vscbridge/ext` in extension project

```bash
yarn add @vscbridge/ext
```

install `@vscbridge/webview` in webview project

```bash
yarn add @vscbridge/webview
```

extension register caller for webview to call

```js
...
import Bridge from '@vscbridge/ext';
...
// Create and show a new webview panel
this._panel = vscode.window.createWebviewPanel(ReactPanel.viewType, "React", column, {
  // Enable javascript in the webview
  enableScripts: true,

  // And restric the webview to only loading content from our extension's `media` directory.
  localResourceRoots: [
    vscode.Uri.file(path.join(this._extensionPath, 'build'))
  ]
});

this._bridge = new Bridge({ webview: this._panel.webview });

this._bridge.registerHandler('echo', (data, callback) => {
  callback(data);
});
...
```

webview(React Project) call extension's echo method

```js
...
import bridge from '@vscbridge/webview';
...

function App() {
  const [text, setText] = useState('');
  const [echoText, setEchoText] = useState('');
  const handleClick = async (e) => {
    e.preventDefault();
    // data is result returned by extension
    const data = await bridge.callHandler('echo', text);
    setEchoText(String(data));
  };
  return (
    <div className="App">
      <form>
        <label>1212:</label>
        <input onChange={e => setText(e.target.value)}/>
        <br/>
        <button onClick={handleClick}>
          call extension echo method
        </button>
        <br/>
        <label>echoText:</label>
        <p>{echoText}</p>
      </form>
    </div>
  );
}

```

webview(React Project) register caller for extension to call

```js
...
import bridge from '@vscbridge/webview';
...

useEffect(() => {
  bridge.registerHandler('echo', (data, callback) => {
    callback(data);
  });
}, []);

...
```

extension call webview's echo method

```js
...
import Bridge from '@vscbridge/ext';
...
bridge = new Bridge({ webview: this._panel.webview });
bridge.callHandler('echo', 'hello webview')
.then(data => {
  vscode.window.showInformationMessage(`echo text: ${data}`);
});
...
```

[Full Example](https://github.com/falcon11/VSCBridge/tree/master/demos)
## Feedback

Please visit [issues](https://github.com/falcon11/VSCBridge/issues)
