(function () {
    // Create the container for the chatbot and assistant
    const container = document.createElement("div");
    container.innerHTML = `
        <div id="assistant-embed-container">
            <div id="chatbot-icon" style="position:fixed;bottom:40px;right:70px;width:170px;height:170px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0,0,0,0.1);animation:bounce 2s infinite;">
              <img src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg" alt="Chatbot" style="width:170px;height:170px;object-fit:cover;" />
            </div>
            <div id="assistant-embed" style="position:fixed;bottom:20px;right:20px;width:750px;height:530px;border:1px solid #ccc;border-radius:10px;background:#fff;box-shadow:0 4px 8px rgba(0,0,0,0.1);display:none;">
              <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background-color:#f0f0f0;border-top-left-radius:10px;border-top-right-radius:10px;">
                <h4 style="margin:0;font-size:16px;">TutorGPT Assistant</h4>
                <button id="minimize-button" style="border:none;background:transparent;cursor:pointer;font-size:20px;">
                  <i class="fas fa-chevron-down" style="color:#ff4d4f;"></i>
                </button>
              </div>
              <iframe id="chatbot-iframe" width="100%" height="100%" 
                  style="border: none; border-radius: 0 0 10px 10px;" title="Custom Chatbot"></iframe>
           </div>
        </div>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform:translateY(0);}
            40% {transform:translateY(-10px);}
            60% {transform:translateY(-5px);}
          }
          
          #chatbot-icon {
            width: 150px;
            height: 150px;
            background-color: #008cba;
          }

          #chatbot-icon img {
            width: 130px;
            height: 130px;
            object-fit: cover;
            border-radius: 0; /* No border radius */
          }

        </style>
    `;

    // Append the container to the body
    document.body.appendChild(container);

    // Extract the assistant ID from the script URL query parameter
    const assistantId = new URLSearchParams(window.location.search).get('assistant_id');

    if (assistantId) {
        // Set the iframe's src to dynamically load the assistant based on the assistant_id
        document.getElementById("chatbot-iframe").src = `https://tutorgpt.managedcoder.com/assistants/${assistantId}`;
    } else {
        console.error("No assistant ID provided.");
    }

    // Chatbot icon click event to open the assistant
    document.getElementById("chatbot-icon").onclick = function () {
        document.getElementById("assistant-embed").style.display = "block";
        document.getElementById("chatbot-icon").style.display = "none";
    };

    // Minimize button click event to close the assistant
    document.getElementById("minimize-button").onclick = function () {
        document.getElementById("assistant-embed").style.display = "none";
        document.getElementById("chatbot-icon").style.display = "flex";
    };
})();
