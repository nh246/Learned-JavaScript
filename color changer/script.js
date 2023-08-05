var c = 0;
function changrcolor(){
    var color =["red","blue","pink","orangr","green"];

    document.getElementsByTagName("body")[0].style.background = color[c++];
    if (c > color.length -1) {
        c = 0;
    }
}