let users = null;

$().ready(() => {
    getUsers();
})

const getUsers = () => {
    let url = "http://doudsystems.com/prsdbserver/api/users";
    $.getJSON(url)
        .done((res) => {
            $("h3").fadeOut();
            console.log(res);
            users = res;
            display();
        })
}

const display = () => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let row = $("<tr></tr>");
        tbody.append(row);
        row.append( $(`<td>${user.id}</td>`) );
        row.append( $(`<td>${user.username}</td>`) );
        row.append( $(`<td>${user.firstname} ${user.lastname}</td>`) );
        row.append( $(`<td>${user.phone}</td>`) );
        row.append( $(`<td>${user.email}</td>`) );
        row.append( $(`<td>${user.isReviewer ? "YES" : "NO"}</td>`) );
        row.append( $(`<td>${user.isAdmin ? "YES" : "NO"}</td>`) );
    }
}