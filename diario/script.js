function sendMessage() {
    var message = document.getElementById("message").value;
    var file = document.getElementById("file-upload").files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var imageUrl = event.target.result;
        displayMessage(message, imageUrl);
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        displayMessage(message, null);
    }
}

function displayMessage(message, imageUrl) {
    var messagesContainer = document.getElementById("messages");
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    var messageText = document.createElement("p");
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    if (imageUrl) {
        var image = document.createElement("img");
        image.src = imageUrl;
        messageDiv.appendChild(image);
    }

    messagesContainer.appendChild(messageDiv);
}
