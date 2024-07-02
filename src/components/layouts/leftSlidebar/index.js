import SVG from "../../../../assets/fonts/svg/index.js";

var LIST_MENU = [
    {
        title: "Thư Viện",
        active: true,
        primary: true,
        icon: SVG.library,
        code: "LM1",
        more_icon: true,
    },
    {
        title: "Khám Phá",
        primary: true,
        active: false,
        icon: SVG.discover,
        code: "LM2",
    },
    {
        title: "#zingchart",
        primary: true,
        active: false,
        icon: SVG.zingchart,
        code: "LM3",
        more_icon: true
    },
    {
        title: "Radio",
        primary: true,
        active: false,
        icon: SVG.radio,
        code: "LM5",
        more_icon: true,
        status: 'live',
    },
    {
        title: "BXH Nhạc Mới",
        active: false,
        icon: SVG.bxh,
        code: "LM6",
        more_icon: true
    },
    {
        title: "Chủ Đề & Thể Loại",
        active: false,
        icon: SVG.subject,
        code: "LM7",
    },
    {
        title: "Top 100",
        active: false,
        icon: SVG.top,
        code: "LM8",
    },
]

const PERSONAL_MENU = [
    {
        title: 'Nghe gần đây',
        icon: SVG.listen_recently,
        href: './',
    },
    {
        title: 'Bài hát yêu thích',
        icon: SVG.liked_songs,
        href: './',
    },
    {
        title: 'Playlist',
        icon: SVG.playlist,
        href: './',
    },
    {
        title: 'Album',
        icon: SVG.album,
        href: './',
    },
    {
        title: 'Đã tải lên',
        icon: SVG.uploaded,
        href: './',
    },
]


import current_user from "../../User/User.js";
//top_menu
var top_menu_left_slidebar = document.querySelector('#left_slidebar .top_menu ul');
var top_menu_left_slidebar_HTML = '';
LIST_MENU.forEach((item, index) => {
    if(item.primary) {
        top_menu_left_slidebar_HTML += 
        `<li class="item_menu ${item.active?'active':''}">
            <a>
                <div class="sub">
                    ${item.icon}
                    <h3>${item.title}</h3>
                    ${item.status?`<div class=${item.status}>${item.status}</div>`:""}
                </div>
                ${item.more_icon?'<i class="fa-regular fa-circle-play"></i>':""}
            </a>
        </li>`
    }
})
top_menu_left_slidebar.innerHTML = top_menu_left_slidebar_HTML;

//Main menu
var main_menu_left_slidebar = document.querySelector('#left_slidebar .main_menu ul');
var main_menu_left_slidebar_HTML = '';
LIST_MENU.forEach((item, index) => {
    if(!item.primary) {
        main_menu_left_slidebar_HTML += 
        `<li class="item_menu">
            <a>
                <div class="sub">
                    ${item.icon}
                    <h3>${item.title}</h3>
                </div>
                ${item.more_icon?'<i class="fa-regular fa-circle-play"></i>':""}
            </a>
        </li>`
    }
})
main_menu_left_slidebar.innerHTML = main_menu_left_slidebar_HTML;

//avtive li
var li_list = document.querySelectorAll('#left_slidebar li');
li_list.forEach((item,index) => {
    item.addEventListener('click', ()=> {
        for(let i = 0; i < li_list.length; i++) {
            if(i == index) {
                li_list[i].classList.add('active');
            } else {
                li_list[i].classList.remove('active')
            }
        }
    })
})

//ads display
var ads = document.querySelector('.ads')
var ads_html = ''
if(!current_user) {
    ads_html = `
        <p>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
        <a href="./src/Pages/Login/login.html">Đăng nhập</a>
    `
} else if(current_user && current_user.premium == false) {
    ads.classList.add('upgrade')
    ads_html = `
        <p>Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</p>
        <a href="./src/Pages/Login/upgrade.html">Nâng cấp tài khoản</a>
    `
} else {
    ads.classList.add('hidden');
}
ads.innerHTML = ads_html;

//test icon
if(current_user) {
    var personalMenu = document.querySelector('.personal_menu_playlist ul.navbar_menu');
    var library_personal = document.querySelector('.personal_menu_playlist ul.library_personal')
    let html_menu_playlist = '';
    let html_library_personal = '';
    PERSONAL_MENU.forEach((playlist, item) => {
        html_menu_playlist += 
        `<li>
            <a href=${playlist.href}>
                ${playlist.icon}
                <span>${playlist.title}</span>
            </a>
        </li>`
    })

    current_user.playlist.forEach((playlist, index) => {
        html_library_personal += `<li><a><span>${playlist.title}</span></a></li>`
    })
    personalMenu.innerHTML = html_menu_playlist;
    library_personal.innerHTML = html_library_personal;

}