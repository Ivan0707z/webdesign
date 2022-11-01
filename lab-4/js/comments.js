function myjson(datas) {
    //console.log(datas);
    //console.log(datas.comments[0].body);

    // for (var i = 0; i < datas.comments.length; i++) {
    //     // console.log(datas.comments[i].body);
    // }
    for (var i in datas.comments) {
        // console.log(datas.comments[i].user.username);
        commentUser = `
        <div class="comment">
            <div class="name">` + datas.comments[i].user.username + `:</div>
            <div class="text">` + datas.comments[i].body + `</div>
        </div>
        `;
        document.getElementById('comments').innerHTML += commentUser;

    }
}

fetch('https://dummyjson.com/comments?limit=7&skip=11')
    .then(res => res.json())
    .then(data => { myjson(data); });