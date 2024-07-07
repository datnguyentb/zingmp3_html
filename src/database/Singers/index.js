let singers = [
    {
        name: 'Sơn Tùng M-TP',
        avatar: "./src/database/Singers/avatar/son_tung_mtp.jpg",
        describe: [
            '1/1/1999',
            'Thái Bình',
            'Sơn Tùng M-TP là một ca sĩ, nhạc sĩ nổi tiếng với nhiều bản hit đình đám trong làng nhạc Việt.'
        ],
        part: "st_mpt",
        songs: ['st1', 'st2'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 100,
    },
    {
        name: 'Đen Vâu',
        avatar: "./src/database/Singers/avatar/den_vau.jpg",
        describe: [
            '13/5/1989',
            'Quảng Ninh',
            'Đen Vâu là một rapper nổi tiếng với phong cách âm nhạc sâu lắng, truyền cảm hứng cho nhiều thế hệ.'
        ],
        part: "dv",
        songs: ['dv1', 'dv2', 'dv3'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 98,
    },
    {
        name: 'Hoàng Thùy Linh',
        avatar: "./src/database/Singers/avatar/hoang_thuy_linh.jpg",
        describe: [
            '11/8/1988',
            'Hà Nội',
            'Hoàng Thùy Linh là một ca sĩ, diễn viên tài năng, nổi tiếng với những ca khúc đậm chất văn hóa Việt Nam.'
        ],
        part: "htl",
        songs: ['htl1', 'htl2', 'htl3', 'htl4'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 95,
    },
    {
        name: 'Bích Phương',
        avatar: "./src/database/Singers/avatar/bich_phuong.jpg",
        describe: [
            '30/9/1989',
            'Quảng Ninh',
            'Bích Phương được biết đến với giọng hát ấm áp và các bản ballad nhẹ nhàng, dễ đi vào lòng người.'
        ],
        part: "bp",
        songs: ['bp1', 'bp2', 'bp3'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 93,
    },
    {
        name: 'Jack',
        avatar: "./src/database/Singers/avatar/jack.jpg",
        describe: [
            '12/4/1997',
            'Bến Tre',
            'Jack là một ca sĩ trẻ đầy triển vọng, nổi tiếng với nhiều bài hit triệu views trên các nền tảng trực tuyến.'
        ],
        part: "jack",
        songs: ['jack1', 'jack2', 'jack3', 'jack4', 'jack5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 97,
    },
    {
        name: 'Min',
        avatar: "./src/database/Singers/avatar/min.jpg",
        describe: [
            '7/12/1988',
            'Hà Nội',
            'Min là một ca sĩ, dancer nổi tiếng với phong cách âm nhạc hiện đại và vũ đạo đẹp mắt.'
        ],
        part: "min",
        songs: ['min1', 'min2', 'min3'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 92,
    },
    {
        name: 'Tóc Tiên',
        avatar: "./src/database/Singers/avatar/toc_tien.jpg",
        describe: [
            '13/5/1989',
            'Hà Nội',
            'Tóc Tiên là một nghệ sĩ đa tài, nổi bật với phong cách âm nhạc độc đáo và hình ảnh cá tính.'
        ],
        part: "tt",
        songs: ['tt1', 'tt2', 'tt3', 'tt4'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 94,
    },
    {
        name: 'Erik',
        avatar: "./src/database/Singers/avatar/erik.jpg",
        describe: [
            '13/10/1997',
            'Hà Nội',
            'Erik là một ca sĩ trẻ với giọng hát nội lực và phong cách âm nhạc đầy cảm xúc, thu hút đông đảo fan hâm mộ.'
        ],
        part: "erik",
        songs: ['erik1', 'erik2', 'erik3', 'erik4', 'erik5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 90,
    },
    {
        name: 'JustaTee',
        avatar: "./src/database/Singers/avatar/justatee.jpg",
        describe: [
            '1/11/1991',
            'Hà Nội',
            'JustaTee là một trong những nghệ sĩ tiên phong của dòng nhạc R&B tại Việt Nam, được yêu thích qua nhiều bản hit đình đám.'
        ],
        part: "jt",
        songs: ['jt1', 'jt2', 'jt3'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 91,
    },
    {
        name: 'Amee',
        avatar: "./src/database/Singers/avatar/amee.jpg",
        describe: [
            '23/3/2000',
            'Hà Nội',
            'Amee là một ca sĩ trẻ nổi lên với phong cách âm nhạc tươi trẻ, đáng yêu, và nhiều bản hit nhanh chóng gây bão.'
        ],
        part: "amee",
        songs: ['amee1', 'amee2', 'amee3'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 89,
    },
    {
        name: 'Hòa Minzy',
        avatar: "./src/database/Singers/avatar/hoa_minzy.jpg",
        describe: [
            '31/5/1995',
            'Bắc Ninh',
            'Hòa Minzy là một ca sĩ tài năng, nổi bật với giọng hát khỏe khoắn và khả năng biểu diễn đầy lôi cuốn.'
        ],
        part: "hmz",
        songs: ['hmz1', 'hmz2', 'hmz3', 'hmz4'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 87,
    },
    {
        name: 'Trúc Nhân',
        avatar: "./src/database/Singers/avatar/truc_nhan.jpg",
        describe: [
            '30/11/1991',
            'Đắk Lắk',
            'Trúc Nhân là một ca sĩ nổi tiếng với những ca khúc mang phong cách độc đáo, pha trộn giữa truyền thống và hiện đại.'
        ],
        part: "tn",
        songs: ['tn1', 'tn2', 'tn3', 'tn4', 'tn5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 96,
    },
    {
        name: 'Taylor Swift',
        avatar: "./src/database/Singers/avatar/taylor_swift.jpg",
        describe: [
            '13/12/1989',
            'Pennsylvania, USA',
            'Taylor Swift là một trong những ca sĩ và nhạc sĩ nổi tiếng nhất thế giới, được biết đến với nhiều ca khúc pop và country thành công.'
        ],
        part: "ts",
        songs: ['ts1', 'ts2', 'ts3', 'ts4', 'ts5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 99,
    },
    {
        name: 'Ed Sheeran',
        avatar: "./src/database/Singers/avatar/ed_sheeran.jpg",
        describe: [
            '17/2/1991',
            'Halifax, England',
            'Ed Sheeran là một ca sĩ, nhạc sĩ người Anh nổi tiếng với giọng hát ấm áp và khả năng viết nhạc tuyệt vời.'
        ],
        part: "es",
        songs: ['es1', 'es2', 'es3', 'es4', 'es5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 98,
    },
    {
        name: 'Adele',
        avatar: "./src/database/Singers/avatar/adele.jpg",
        describe: [
            '5/5/1988',
            'London, England',
            'Adele là một trong những ca sĩ có giọng hát mạnh mẽ nhất, nổi tiếng với các bản ballad đầy cảm xúc.'
        ],
        part: "adele",
        songs: ['adele1', 'adele2', 'adele3', 'adele4'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 97,
    },
    {
        name: 'BTS',
        avatar: "./src/database/Singers/avatar/bts.jpg",
        describe: [
            'Ra mắt vào năm 2013',
            'Seoul, Hàn Quốc',
            'BTS là một nhóm nhạc nam Hàn Quốc nổi tiếng toàn cầu, với những bản hit khuấy động và vũ đạo đặc sắc.'
        ],
        part: "bts",
        songs: ['bts1', 'bts2', 'bts3', 'bts4', 'bts5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 100,
    },
    {
        name: 'Ariana Grande',
        avatar: "./src/database/Singers/avatar/ariana_grande.jpg",
        describe: [
            '26/6/1993',
            'Boca Raton, Florida, USA',
            'Ariana Grande là một ca sĩ pop nổi tiếng với giọng hát cao và những ca khúc ăn khách trên toàn thế giới.'
        ],
        part: "ag",
        songs: ['ag1', 'ag2', 'ag3', 'ag4', 'ag5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 95,
    },
    {
        name: 'Bruno Mars',
        avatar: "./src/database/Singers/avatar/bruno_mars.jpg",
        describe: [
            '8/10/1985',
            'Honolulu, Hawaii, USA',
            'Bruno Mars là một ca sĩ, nhạc sĩ và vũ công đa tài, nổi tiếng với các bài hát pop và funk đầy năng lượng.'
        ],
        part: "bm",
        songs: ['bm1', 'bm2', 'bm3', 'bm4', 'bm5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 96,
    },
    {
        name: 'Billie Eilish',
        avatar: "./src/database/Singers/avatar/billie_eilish.jpg",
        describe: [
            '18/12/2001',
            'Los Angeles, California, USA',
            'Billie Eilish là một ca sĩ trẻ với phong cách âm nhạc độc đáo và đã nhanh chóng trở thành hiện tượng toàn cầu.'
        ],
        part: "be",
        songs: ['be1', 'be2', 'be3', 'be4', 'be5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 94,
    },
    {
        name: 'Shawn Mendes',
        avatar: "./src/database/Singers/avatar/shawn_mendes.jpg",
        describe: [
            '8/8/1998',
            'Pickering, Ontario, Canada',
            'Shawn Mendes là một ca sĩ kiêm nhạc sĩ người Canada nổi tiếng với các bản hit pop lãng mạn.'
        ],
        part: "sm",
        songs: ['sm1', 'sm2', 'sm3', 'sm4', 'sm5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 93,
    },
    {
        name: 'Dua Lipa',
        avatar: "./src/database/Singers/avatar/dua_lipa.jpg",
        describe: [
            '22/8/1995',
            'London, England',
            'Dua Lipa là một ca sĩ người Anh nổi tiếng với phong cách pop mạnh mẽ và nhiều bản hit toàn cầu.'
        ],
        part: "dl",
        songs: ['dl1', 'dl2', 'dl3', 'dl4', 'dl5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 92,
    },
    {
        name: 'The Weeknd',
        avatar: "./src/database/Singers/avatar/the_weeknd.jpg",
        describe: [
            '16/2/1990',
            'Toronto, Ontario, Canada',
            'The Weeknd là một nghệ sĩ R&B nổi tiếng với giọng hát đặc trưng và những bản hit đình đám.'
        ],
        part: "tw",
        songs: ['tw1', 'tw2', 'tw3', 'tw4', 'tw5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 94,
    },
    {
        name: 'Lady Gaga',
        avatar: "./src/database/Singers/avatar/lady_gaga.jpg",
        describe: [
            '28/3/1986',
            'New York City, New York, USA',
            'Lady Gaga là một ca sĩ, nhạc sĩ và diễn viên nổi tiếng với phong cách thời trang độc đáo và giọng hát mạnh mẽ.'
        ],
        part: "lg",
        songs: ['lg1', 'lg2', 'lg3', 'lg4', 'lg5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 96,
    },
    {
        name: 'Justin Bieber',
        avatar: "./src/database/Singers/avatar/justin_bieber.jpg",
        describe: [
            '1/3/1994',
            'London, Ontario, Canada',
            'Justin Bieber là một ca sĩ nhạc pop nổi tiếng với nhiều bản hit toàn cầu, thu hút một lượng fan khổng lồ.'
        ],
        part: "jb",
        songs: ['jb1', 'jb2', 'jb3', 'jb4', 'jb5'],
        following: [],
        follower: [],
        country: 'vn',
        rate: 95,
    }    
  
]

export default singers;