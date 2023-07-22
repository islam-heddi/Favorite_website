function add(){
    var name = document.getElementById("name-website").value;
    var url = document.getElementById("name-url").value;

    if(name == "" || url ==""){
        document.getElementById("error").style.display = "block";
        return;
    }
    document.getElementById("error").style.display = "none";
    var list = document.getElementById("list");
    list.innerHTML += "<div class='item'><h1>" + name +"</h1><a href='http://"+url+"' ><img src='visit.bmp' alt='visite the site'></a></div>";
}