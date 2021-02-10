function getCookie(name) {
    var arr = document.cookie.split(";");
    console.log(arr);
    for(var i=0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return null;
}