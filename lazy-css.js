export default (async () => {
  let s = document.createElement("style");
  s.innerHTML = await (await fetch(
    "https://unpkg.com/sweetalert2@9.11.0/dist/sweetalert2.min.css"
  )).text();
  document.head.appendChild(s);
})();

(async()=>{
  document.querySelector("#icons").innerHTML=await(await fetch("https://fonts.googleapis.com/icon?family=Material+Icons&display=block")).text()
})()