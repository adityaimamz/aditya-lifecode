fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f282de831a299ba1c20e76cd1e8785b8&hash=28ac79de88cf527841890c75cdd33e3f")
.then((response)=>response.json())
.then((json)=>console.log(json))