
// Loading off
window.addEventListener("load", function(){
    document.getElementById("loading-screen").style.display = "none";
});

// Pages
function showPage(page){

    document.getElementById("home").classList.add("hidden");
    document.getElementById("vehicle").classList.add("hidden");
    document.getElementById("script").classList.add("hidden");

    document.getElementById(page).classList.remove("hidden");
}

// OPEN TICKET (vetëm kur klikon)
function openTicket(){
    document.getElementById("ticket-box").classList.remove("hidden");
}

// CLOSE TICKET
function closeTicket(){
    document.getElementById("ticket-box").classList.add("hidden");
}

// SEND TO DISCORD
function sendTicket(){

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if(name === "" || message === ""){
        alert("Ploteso fushat!");
        return;
    }

    const webhookURL = "https://discordapp.com/api/webhooks/1502752614591500560/Pi2OIq6CN3_0fvtvlJo6gCdwz4VmJKIZJULBJY_SEVGmjwReZx9Z233k5f9v9PAs8_ei";

    fetch(webhookURL, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            content:`🎫 Ticket\n👤 ${name}\n💬 ${message}`
        })
    });

    alert("U dergua!");
    closeTicket();
}