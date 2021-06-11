# P2Pbin
***
```
  _____ ___  _____  ____ _____ _   _ 
__/\\\\\\\\\\\\\______/\\\\\\\\\______/\\\\\\\\\\\\\____/\\\\\\\\\\\\\____/\\\\\\\\\\\__/\\\\\_____/\\\_        
 _\/\\\/////////\\\__/\\\///////\\\___\/\\\/////////\\\_\/\\\/////////\\\_\/////\\\///__\/\\\\\\___\/\\\_       
  _\/\\\_______\/\\\_\///______\//\\\__\/\\\_______\/\\\_\/\\\_______\/\\\_____\/\\\_____\/\\\/\\\__\/\\\_      
   _\/\\\\\\\\\\\\\/____________/\\\/___\/\\\\\\\\\\\\\/__\/\\\\\\\\\\\\\\______\/\\\_____\/\\\//\\\_\/\\\_     
    _\/\\\/////////___________/\\\//_____\/\\\/////////____\/\\\/////////\\\_____\/\\\_____\/\\\\//\\\\/\\\_    
     _\/\\\_________________/\\\//________\/\\\_____________\/\\\_______\/\\\_____\/\\\_____\/\\\_\//\\\/\\\_   
      _\/\\\_______________/\\\/___________\/\\\_____________\/\\\_______\/\\\_____\/\\\_____\/\\\__\//\\\\\\_  
       _\/\\\______________/\\\\\\\\\\\\\\\_\/\\\_____________\/\\\\\\\\\\\\\/___/\\\\\\\\\\\_\/\\\___\//\\\\\_ 
        _\///______________\///////////////__\///______________\/////////////____\///////////__\///_____\/////__


```
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
