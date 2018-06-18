        var mds = document.getElementById("gilherbson");
        mds.addEventListener("mouseover", function(){
            alert("esse alert é do Gilherbson")
        })
        
        $('body').on('mouseover', '#subtitulo', function() {
        $("#subtitulo").removeClass("linkA");
        $("#subtitulo").addClass("linkB");
            });
      $('body').on('mouseout', '#subtitulo', function() {
        $("#subtitulo").removeClass("linkB");
        $("#subtitulo").addClass("linkA");
            });