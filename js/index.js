let img=document.getElementById("image");
const url = "http://graven.yt/citations.json";
function affichedate(){
    //document.getElementById('demo').innerHTML = Date();
    $( "#demo" ).append(Date);

}

function repimage(){
    img.src="images/2325234-bigthumbnail.jpg";
}
function getjson() {
    fetch(url).then((data) => {
        data.json().then((data) => {
            citations = data;
            // affichage de citations
            console.log(data);
            $.each(citations, function (key, value) {
                $("#demo").append(key + ":" + value.nom +value['citation']+ "<br>") ;

            });

        });
    });
}


