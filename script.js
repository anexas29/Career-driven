
    // Career quiz logic
    document.getElementById('careerQuiz').addEventListener('submit', function (e) {
      e.preventDefault();
      const q1 = this.q1.value;
      const q2 = this.q2.value;
      const q3 = this.q3.value;
      let suggestion = '';

      if (q1 === 'tech' && q2 === 'logical') suggestion = 'Recommended Career: Software Developer or Data Analyst';
      else if (q1 === 'bio') suggestion = 'Recommended Career: Biotech Researcher or Doctor';
      else if (q2 === 'creative') suggestion = 'Recommended Career: UX/UI Designer or Content Creator';
      else if (q2 === 'helping') suggestion = 'Recommended Career: Healthcare Professional or Social Worker';
      else suggestion = 'Try exploring multiple areas to find your interest.';

      document.getElementById('result').innerText = suggestion;
    });

    // Feedback form submission
    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const feedback = document.getElementById('feedbackInput').value.trim();
      if (feedback.length === 0) return alert('Please enter your feedback!');
      alert('Thank you for your feedback!');
      this.reset();
    });

    // Chatbot toggle
    function toggleChat() {
      const chat = document.getElementById('chatWindow');
      chat.classList.toggle('show');
    }

    // Chatbot message handler (dummy replies o)
    async function handleChat(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const input = document.getElementById('chatInput').value.trim();
        if (!input) return;
        const chatBox = document.getElementById('chatMessages');

        // Append user message
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-message user-msg';
        userDiv.textContent = 'You: ' + input;
        chatBox.appendChild(userDiv);

        // Clear input
        document.getElementById('chatInput').value = '';

        // Append bot thinking
        const botDiv = document.createElement('div');
        botDiv.className = 'chat-message bot-msg';
        botDiv.textContent = 'Thinking...';
        chatBox.appendChild(botDiv);

        // Scroll down
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate AI response delay
        setTimeout(() => {
          botDiv.textContent = 'Bot: That sounds interesting! For career advice, try the quiz or ask me something specific.';
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1200);
      }
    }