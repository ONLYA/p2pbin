

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const node = await Ipfs.create({ repo: "ipfs-" + Math.random() });
  window.node = node;

  const status = node.isOnline() ? "&nbsp;⬤ (Ready!)" : "&nbsp;⭘ (Not Ready!)";

  console.log(`Node status: ${status}`);
  document.getElementById("status").innerHTML = `IPFS status: ${status}`;
  var params = new URLSearchParams(document.location.search.substring(1));
  var id = params.get("id");
  if (!id) {
    id = "QmVrs4fxNVqczt8FsWTp2FGXoA1rMNoDwCyFwnYwHAvUtz";
  }

  for await (const data of node.cat(id)) {
    
    document.getElementById("paste").value = filterXSS(data.toString());
    document.getElementById("paste").innerHTML = filterXSS(data.toString());
  }
  paste.disabled = false;
  copybtn.disabled = false;

  window.history.replaceState({}, document.title, "/");

});
