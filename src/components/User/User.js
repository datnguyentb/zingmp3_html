let current_user = {
    name: "Dat Nguyen",
    roman_copy: "",
    avatar: "./",
    rate: '100',
    premium: false,
    playlist: [
        {
            "title": "Like Song",
            "code": "ls",
            "likes": 100,
            "part_number": 1,
            "songs": ["song1", "song2", "song3", "song4"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Những giai điệu bạn yêu thích và không thể bỏ lỡ. Khám phá những bài hát mà bạn yêu mến, từ các bản hit đình đám đến những giai điệu đầy cảm xúc, đảm bảo sẽ khiến bạn muốn lắng nghe đi lắng nghe lại."
        },
        {
            "title": "Workout Mix",
            "code": "wm",
            "likes": 100,
            "part_number": 2,
            "songs": ["workout1", "workout2", "workout3"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Tăng cường năng lượng cho buổi tập luyện của bạn. Tăng cường năng lượng và động lực với những bài hát sôi động và đầy sức sống, hoàn hảo để thúc đẩy bạn trong mọi buổi tập luyện."
        },
        {
            "title": "Chill Vibes",
            "code": "cv",
            "likes": 100,
            "part_number": 3,
            "songs": ["chill1", "chill2", "chill3", "chill4", "chill5"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Thư giãn với những giai điệu êm dịu. Thả lỏng và thư giãn với các bài hát mượt mà, giúp bạn xua tan mệt mỏi và tìm thấy sự bình yên trong từng giai điệu."
        },
        {
            "title": "Driving Beats",
            "code": "db",
            "likes": 100,
            "part_number": 4,
            "songs": ["drive1", "drive2", "drive3"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Những giai điệu tuyệt vời cho chuyến hành trình của bạn. Biến mỗi chuyến đi trở thành một cuộc phiêu lưu âm nhạc với những bản nhạc mạnh mẽ và đầy hứng khởi, lý tưởng cho những cung đường dài."
        },
        {
            "title": "Throwback Hits",
            "code": "th",
            "likes": 100,
            "part_number": 5,
            "songs": ["throwback1", "throwback2", "throwback3", "throwback4"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Hồi tưởng lại những bản hit kinh điển. Trở về quá khứ với những bài hát đã từng làm nên tên tuổi, gợi nhớ về những ký ức đẹp và kỷ niệm không thể nào quên."
        },
        {
            "title": "Rainy Day Melodies",
            "code": "rdm",
            "likes": 100,
            "part_number": 6,
            "songs": ["rain1", "rain2", "rain3"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Những giai điệu êm ái cho ngày mưa. Hòa mình vào những giai điệu dịu dàng và tĩnh lặng, hoàn hảo cho những ngày mưa hoặc những lúc bạn cần một chút yên bình."
        },
        {
            "title": "Late Night Jazz",
            "code": "lnj",
            "likes": 100,
            "part_number": 7,
            "songs": ["jazz1", "jazz2", "jazz3", "jazz4"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Thưởng thức nhạc jazz vào những đêm muộn. Đắm chìm trong không gian thanh lịch và quyến rũ của nhạc jazz, lý tưởng cho những buổi tối thư giãn hay đêm muộn trầm lắng."
        },
        {
            "title": "Summer Vibes",
            "code": "sv",
            "likes": 100,
            "part_number": 8,
            "songs": ["summer1", "summer2", "summer3", "summer4", "summer5"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Cảm nhận mùa hè với những giai điệu sôi động. Khơi dậy không khí mùa hè với các bài hát tươi vui và năng động, đưa bạn vào những khoảnh khắc sôi nổi và rực rỡ của mùa hè."
        },
        {
            "title": "Study Focus",
            "code": "sf",
            "likes": 100,
            "part_number": 9,
            "songs": ["study1", "study2", "study3"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Tập trung và hiệu quả với âm nhạc. Tạo nên không gian học tập hoàn hảo với những bản nhạc không lời nhẹ nhàng, giúp bạn duy trì sự tập trung và hiệu suất cao trong học tập."
        },
        {
            "title": "Feel Good Classics",
            "code": "fgc",
            "likes": 100,
            "part_number": 10,
            "songs": ["classic1", "classic2", "classic3", "classic4"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Những bản nhạc kinh điển khiến bạn cảm thấy tuyệt vời. Đón nhận cảm giác phấn khởi và hạnh phúc với các bài hát kinh điển, chắc chắn sẽ làm bạn cảm thấy tươi vui và yêu đời hơn."
        }
    ],
    recently_playlist: [
        {
            "title": "Study Focus",
            "code": "sf",
            "likes": 100,
            "part_number": 9,
            "songs": ["study1", "study2", "study3"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Tập trung và hiệu quả với âm nhạc. Tạo nên không gian học tập hoàn hảo với những bản nhạc không lời nhẹ nhàng, giúp bạn duy trì sự tập trung và hiệu suất cao trong học tập."
        },
        {
            "title": "Feel Good Classics",
            "code": "fgc",
            "likes": 100,
            "part_number": 10,
            "songs": ["classic1", "classic2", "classic3", "classic4"],
            "icon": '<i class="fa-solid fa-ellipsis"></i>',
            "description": "Những bản nhạc kinh điển khiến bạn cảm thấy tuyệt vời. Đón nhận cảm giác phấn khởi và hạnh phúc với các bài hát kinh điển, chắc chắn sẽ làm bạn cảm thấy tươi vui và yêu đời hơn."
        }
    ]
        
};

export default current_user;