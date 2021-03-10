console.log("I am here!!!");
document.body.onload = addElement;

function addElement(){
    var youtume_inline = document.querySelector("ytd-inline-form-renderer");
    var title = youtume_inline.querySelector("yt-formatted-string").innerText;


    var ytd_playlist_sidebar = document.getElementsByTagName("ytd-playlist-sidebar-renderer")[0];
    var newDiv = document.createElement("div");
    var button = document.createElement("button");
    button.innerHTML = "Save Playlist";
    newDiv.appendChild(button);     
    ytd_playlist_sidebar.appendChild(newDiv);

    button.onclick = function () {
        var ytd_section_list =  document.getElementsByTagName("ytd-playlist-video-list-renderer")[0];
        var obj_list = ytd_section_list.querySelector("#contents");
        console.log("Title of playlist: ",title);
        obj_list.childNodes.forEach(
            function(currentValue, currentIndex, listObj) {
              var content = currentValue.querySelector("#content").querySelector("#container").querySelector("#meta").querySelector("h3").querySelector("a").title;
              console.log(currentIndex + 1, content);

            },
            ''
          );
    }
}