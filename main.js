document.addEventListener("DOMContentLoaded", async () => {
  const node = await Ipfs.create({ repo: "ipfs-" + Math.random() });
        window.node = node;

        const status = node.isOnline() ? "&nbsp;⬤ (Ready!)" : "&nbsp;⭘ (Not Ready!)";

        console.log(`Node status: ${status}`);
        document.getElementById("status").innerHTML = `IPFS status: ${status}`;
var params = new URLSearchParams(document.location.search.substring(1));
var id = params.get("id");
if (!id){
  id = "QmZbCgzQUKensoruM7ghihFBD5vLp8g15CSrzTxyRpd2Mi"
}
        
      for await (const data of
      node.cat(id)) {
    document.getElementById("body").value = filterXSS(data.toString()) } 
  body.disabled = false;
   save.disabled = false;
  

      });