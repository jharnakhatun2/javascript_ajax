function loadData(outOfFunction) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log("response finished")
        outOfFunction(this);
        // console.log(this.getAllResponseHeaders( ))
        console.log(this.getResponseHeader("etag"));
    }
    xhr.open("GET", "/js/data.txt", false );
    xhr.setRequestHeader("Name", "Jharna Khatun");
    xhr.send();
    // xhr.status;
    //xhr.abort();
    console.log("Hello World")

}
function callbackOne(xhr) {
    const container = document.getElementById("demo1");
    container.innerHTML = xhr.responseText;
}
function callbackTwo(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}