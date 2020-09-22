# P2Pbin
***
A pastebin based on IPFS. It is a 100% static website running on JavaScript and HTML.

Basically:
1. You create a paste
2. You get the hash
3. You pin it. The save modal give you instructions on how to pin it.

To be added: 
- A simple button to pin directly to [Pinata](https://pinata.cloud) with it's API.

Notes: 
- You kind of need to know IPFS to use this lol. https://ipfs.io/
- I had to change the name because there is also another IPFSbin.


Features:
- It requires no server storage.
 
Thanks:
- @youngchief_btw for the HTTP to HTTPS redirect
- @khalby786 for the PWA


### How To selfhost:
1. Download the latest version: [https://github.com/owner/repository/releases/latest/download/](https://github.com/owner/repository/releases/latest/download/)
2. Unzip it.
3. Then, add it using this command.
```
ipfs add -r p2pbin/
```
Project URL: [https://p2pbin.glitch.me/](https://p2pbin.glitch.me/)
GitHub: [https://github.com/aboutDavid/p2pbin](https://github.com/aboutDavid/p2pbin)
