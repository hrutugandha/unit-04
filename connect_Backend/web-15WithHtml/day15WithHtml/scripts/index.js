// let url = `http://www.omdbapi.com/?apikey=7bfd57b7&s=movie`
let url = `http://web15.masaischool.com/users`;
async function FetchApi(){
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        appendData(data)
    } catch (error) {
        console.log("error",error);
    }
}
FetchApi();

function appendData(data){
    data.forEach(element => {
        console.log(element);
        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = element.firstName;

        // let img = document.createElement("img");
        // img.src = element.profilePic

        div.append(p);
        document.querySelector(".main").append(div);

    });
}
