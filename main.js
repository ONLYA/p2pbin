
      document.addEventListener("DOMContentLoaded", async () => {
        const node = await Ipfs.create({ repo: "ipfs-" + Math.random() });
        window.node = node;

        const status = node.isOnline() ? "⬤" : "⭘";

        console.log(`Node status: ${status}`);
        document.getElementById("status").innerHTML = `Node status: ${status}`;
var params = new URLSearchParams(document.location.search.substring(1));
if
      });