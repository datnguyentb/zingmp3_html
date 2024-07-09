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
                <div>
                    ${item.icon}
                </div>
                <div class="sub">
                    <div class="sub_wrapper">
                        <div>
                        <h3>${item.title}</h3>
                        ${item.status?`<div class="status_icon">${item.status}</div>`:""}
                        </div>
                        <div>
                        ${item.more_icon?'<i class="fa-regular fa-circle-play"></i>':""}
                        </div>
                    </div>
                </div>
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
                <div>
                    ${item.icon}
                </div>
                <div class="sub">
                    <div class='sub_wrapper'>
                        <div>
                        <h3>${item.title}</h3>
                        ${item.status?`<div class="status_icon">${item.status}</div>`:""}
                        </div>
                        <div>
                            ${item.more_icon?'<i class="fa-regular fa-circle-play"></i>':""}
                        </div>
                    </div>
                </div>
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

//your playlist
if(current_user) {
    var personalMenu = document.querySelector('.personal_menu_playlist ul.navbar_menu');
    var library_personal = document.querySelector('.personal_menu_playlist ul.library_personal')
    let html_menu_playlist = '';
    let html_library_personal = '';
    PERSONAL_MENU.forEach((playlist, item) => {
        html_menu_playlist += 
        `<li>
            <a href=${playlist.href}>
                <div>${playlist.icon}</div>
                <div class="sub">
                    <div sub_wrapper>
                        <div>
                            <span>${playlist.title}</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`
    })

    current_user.playlist.forEach((playlist, index) => {
        html_library_personal += 
        `<li class='sub'>
            <a href="#main">
                <div class="sub_wrapper">
                    <div>
                        <span>${playlist.title}</span>
                    </div>
                    <div>${playlist.icon}</div>
                </div>
            </a>
        </li>`
    })
    personalMenu.innerHTML = html_menu_playlist;
    library_personal.innerHTML = html_library_personal;

}

//add direct 
const direct_show_left_slidebar = document.querySelector('#left_slidebar .direct-show');
const direct_close_left_slidebar = document.querySelector('#left_slidebar .direct-close');
const sub_elements_left_slidebar = document.querySelectorAll('#left_slidebar .sub')
const left_slidebar_element = document.getElementById('left_slidebar');
const add_new_playlist_box = document.querySelector('#left_slidebar .add_new_playlist');
const add_playlist_icon = document.querySelector('#left_slidebar i.add-playlist');
const left_slidebar_logo = document.querySelector('#left_slidebar .logo img');
const left_slidebar_logo_box = document.querySelector('#left_slidebar .logo');


direct_show_left_slidebar.addEventListener('click', () => {
    left_slidebar_element.style.width = '240px'
    direct_show_left_slidebar.classList.add('hidden')
    direct_show_left_slidebar.classList.remove('show')
    direct_close_left_slidebar.classList.remove('hidden')
    direct_close_left_slidebar.classList.add('show')
    add_new_playlist_box.style.padding = "0 24px" ;
    add_playlist_icon.classList.add('show');
    left_slidebar_logo.src='./assets/img/logo-dark.svg';

    sub_elements_left_slidebar.forEach(element => {
        element.classList.add('show');
    })
})

direct_close_left_slidebar.addEventListener('click', () => {
    left_slidebar_element.style.width = '70px'
    direct_show_left_slidebar.classList.remove('hidden')
    direct_close_left_slidebar.classList.add('hidden')
    direct_close_left_slidebar.classList.remove('show')
    add_new_playlist_box.classList.remove('show');
    add_new_playlist_box.style.padding = "0 15px" ;
    add_playlist_icon.classList.remove('show');
    left_slidebar_logo_box.style.padding = '0px 28px 0px 25px';
    left_slidebar_logo.src='./assets/img/logo_2.svg';
    
    sub_elements_left_slidebar.forEach(element => {
        element.classList.remove('show');
    })
})

//reponsive
function checkWidth() {
    if (window.innerWidth <= 1134) {
        left_slidebar_element.style.width = '70px';
        direct_show_left_slidebar.classList.add('show');
        direct_close_left_slidebar.classList.remove('show');
        add_new_playlist_box.style.padding = "0" ;
        add_playlist_icon.classList.remove('show');
        left_slidebar_logo.src='./assets/img/logo_2.svg';
        left_slidebar_logo_box.style.padding = '0px';
        left_slidebar_logo_box.style.padding = '0 15px';

        sub_elements_left_slidebar.forEach(element => {
            element.classList.add('hidden');
            element.classList.remove('show');
        })
    } else {
        left_slidebar_element.style.width = '240px';
        direct_show_left_slidebar.classList.remove('show');
        direct_close_left_slidebar.classList.remove('show');
        add_new_playlist_box.style.padding = "0 24px";
        left_slidebar_logo.src='./assets/img/logo-dark.svg';
        left_slidebar_logo_box.style.padding = '0px 28px 0px 25px';

        sub_elements_left_slidebar.forEach(element => {
            element.classList.add('show');
            element.classList.remove('hidden');
        })

    }
}

window.addEventListener("load", checkWidth);

window.addEventListener("resize", checkWidth);