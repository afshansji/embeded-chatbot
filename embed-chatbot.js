(function () {
    const container = document.createElement("div");
    container.innerHTML = `
        <div id="assistant-embed-container">
            <div id="chatbot-icon" style="position:fixed;bottom:40px;right:70px;width:100px;height:100px;background-color:#008cba;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(0,0,0,0.1);animation:bounce 2s infinite;">
              <img src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg" alt="Chatbot" style="width:450px;height:250px;border-radius:50%;" />
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
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform:translateY(0);}
            40% {transform:translateY(-10px);}
            60% {transform:translateY(-5px);}
          }
        </style>
    `;
    document.body.appendChild(container);

    document.getElementById("chatbot-icon").onclick = function () {
        document.getElementById("assistant-embed").style.display = "block";
        document.getElementById("chatbot-icon").style.display = "none";
    };
    document.getElementById("minimize-button").onclick = function () {
        document.getElementById("assistant-embed").style.display = "none";
        document.getElementById("chatbot-icon").style.display = "flex";
    };
})();
