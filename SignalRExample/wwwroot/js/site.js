$(document).ready(() => {
    let connection = new signalR
        .HubConnectionBuilder()
        .withUrl("http://localhost:5296/examplehub")
        .build();
    //console.log(connection.connectionState);
    connection.start();
    $("#send-btn").click(() => {
         let msg = $("#txtMessage").val();
        connection.invoke("SendMessageAsync", msg)
            .then(() =>console.log("Uğurlu qoşulma") )
            .catch(err => console.log("Mesaj göndərilmədə problem yarandı\n",
                err.toString()));
    });

    connection.on("receiveMessage", message => {
        $("#messages")
            .append(`<li class="list-group-item">${message}</li>`);
    })
});
          