function getRepodata() {
    var username = document.getElementById('username').value;
    var index = document.getElementById('index').value;
    $.ajax({
        url: `https://api.github.com/users/${username}/repos`,
        success: function (data) {
            var a = JSON.stringify(data[index])
            document.getElementById('result').innerHTML = a.split("+\n");
           
        },
        error: function (e) {
            console.log(e);
        }
    })
}



