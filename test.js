import singers from "./src/database/Singers/index.js";
import All_songs from "./src/database/Songs/index.js";


var singer_element = document.querySelector('#singers');
var html_singers = '';
singers.forEach((singer) => {
    var html_singer = '';
    var song_list = All_songs.filter(song => {
        return song.singer[0] === singer.part;
    })

    song_list.forEach(song => {
        html_singer += `<li>${song.title}</li>`
    })
    console.log(song_list);

    html_singers += `
        <div style="margin-top: 30px" class="item">
            <h1 class="singer">
                ${singer.name}
            </h1>
            <ul>
                ${html_singer}
            </ul>
        </div>`;
})

singer_element.innerHTML = html_singers;