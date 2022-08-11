let cl = console.log;

let data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "Mahismal memory on bike",
        "url": "https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.6435-9/67179548_1402220249943429_6833610451918520320_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=ngoSFfbJ5AwAX9f4fZN&_nc_ht=scontent.fpnq13-1.fna&oh=00_AT96ZubLmfelc7vIVj1Ljkjpnu6EbC7oxIP4nXf3FvHD1w&oe=63108608",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "Shihgad ford memory",
        "url": "https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.6435-9/39607985_1137850069713783_7957741536609828864_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2H7VyRU1sNcAX8DKukH&_nc_ht=scontent.fpnq13-1.fna&oh=00_AT9H7w2Mw0Niro6dFsEMMXKiOiIAboEDhonlp3Q8nQK5gQ&oe=63134B5F",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "Dance on DJ in weding",
        "url": "https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.6435-9/51810445_1271101083055347_8261999768637538304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=O5xZXF0VZZEAX-uchbI&_nc_ht=scontent.fpnq13-1.fna&oh=00_AT9dYk4SAOo_kRwys4V7DaR77ii3d_uMIXTKIcv1LO0qnA&oe=63105B77",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "Photographi at Rajgad ford",
        "url": "https://scontent.fpnq13-2.fna.fbcdn.net/v/t1.6435-9/43411563_1173459999486123_6405697246695784448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=6A38Sf64-NUAX9XseWQ&_nc_ht=scontent.fpnq13-2.fna&oh=00_AT-XKZk6QbGsSLk9kCd_eQgC4Pb4-TMo8jeRDhuIbhmwdw&oe=63133002",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "Photoshoot on Bullet",
        "url": "https://scontent.fpnq13-2.fna.fbcdn.net/v/t39.30808-6/241074819_2109503872548393_2590623191449314392_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KCItBksagU8AX9jvE7U&_nc_ht=scontent.fpnq13-2.fna&oh=00_AT8YmRyPf14QAwCxkl8vtqtPM4ZcNxmr3NjXWLHGmkqgWg&oe=62F182D1",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "Picture click in friendship garden",
        "url": "https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.6435-9/46437253_1204750693023720_7694912593479073792_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MoCQURjLYLEAX9Fcbvq&_nc_ht=scontent.fpnq13-1.fna&oh=00_AT-h0CdR6SukXIxWNkrBtyHRWobzj-DOWIYXshiWFOcaPA&oe=631026CD",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
]

let postInfo = document.getElementById("postInfo");

let result = ``;

data.forEach((post) => {
    result += ` 
    <div class="col-md-4">
    <div class="card">
        <div class="cardbody">
            <figure class="post">
                <img src="${post.url}">
                <figcaption>
                    <p>${post.title}</p>
                </figcaption>
                <span class="Id">${post.id}</span>
                <span class="albumbId">${post.albumId}</span>                            
            </figure>
        </div>
    </div>
</div>
    `
})

postInfo.innerHTML = result;