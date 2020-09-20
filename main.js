
      document.addEventListener("DOMContentLoaded", async () => {
        const node = await Ipfs.create({ repo: "ipfs-" + Math.random() });
        window.node = node;

        const status = node.isOnline() ? "⬤" : "⭘";

        console.log(`Node status: ${status}`);
        document.getElementById("status").innerHTML = `Node status: ${status}`;
var params = new URLSearchParams(document.location.search.substring(1));
var id = params.get("id");
if (!id){
  id = "QmQzCQn4puG4qu8PVysxZmscmQ5vT1ZXpqo7f58Uh9QfyY"
}
document.getElementById("body").value = null
        
      for await (const data of
      node.cat(id)) {
    document.getElementById("body").value = filterXSS(data.toString()) } 
    
      });