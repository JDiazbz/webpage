document.addEventListener("DOMContentLoaded", () => {
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const messagesList = document.getElementById("messages");
  
    // Event listener for sending messages
    messageForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const messageText = messageInput.value.trim();
      if (!messageText) return;
  
      // Create new message element
      const message = document.createElement("li");
      message.className = "message";
  
      // Create username and text elements
      const usernameElement = document.createElement("span");
      usernameElement.className = "username";
      usernameElement.textContent = "You:";
      const textElement = document.createElement("span");
      textElement.className = "text";
      textElement.textContent = messageText;
  
      // Append elements to message element
      message.appendChild(usernameElement);
      message.appendChild(textElement);
  
      // Add message to messages list
      messagesList.appendChild(message);
  
      // Clear message input
      messageInput.value = "";
  
      // Autoscroll to the bottom of the chat
      messagesList.scrollTop = messagesList.scrollHeight;
    });
  
    // Event listener for new messages from server
    // This part is not implemented in this example, but you would need to implement a WebSocket or AJAX connection to your server-side API to handle real-time communication.
  });