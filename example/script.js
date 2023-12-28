function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if(xhr.status >= 400) {
                reject(`There was an application error and the response status is ${this.status}`)
            }else{
                resolve(this.response)
            }
            
        }
        xhr.onerror = function() {
            reject("There was an error")
        }
        xhr.open(method,  url);
        xhr.responseType =  "json";
        xhr.send(data);
    });
    return promise;

   
}

function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
    .then((responseData) => {
        console.log(responseData);
    })
    .catch((err) => {
        console.log(err)
    })
}
function sendData() {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        "user Id" : 101,
        "name" : "Jharna",
        "last name" : "Khatun"
    }))
    .then((responseData) => {
        console.log(responseData);
    })
    .catch((err) => {
        console.log(err)
    })
}

const getButton = document.getElementById("demo");
const sendButton = document.getElementById("demo1");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);