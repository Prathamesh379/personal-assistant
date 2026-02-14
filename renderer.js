// Renderer process
document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const responseArea = document.getElementById('response');

  const processCommand = (command) => {
    const lowerCommand = command.toLowerCase().trim();

    if (lowerCommand.includes('open youtube')) {
      window.api.openURL('https://www.youtube.com');
      return 'Opening YouTube...';
    } else if (lowerCommand.includes('open google')) {
      window.api.openURL('https://www.google.com');
      return 'Opening Google...';
    } else if (lowerCommand.includes('open whatsapp')) {
      window.api.openURL('https://web.whatsapp.com');
      return 'Opening WhatsApp Web...';
    } else if (lowerCommand.includes('time')) {
      const now = new Date();
      return `Current time: ${now.toLocaleTimeString()}`;
    } else if (command.trim()) {
      return 'Command not recognized';
    }
    return 'Please enter a command';
  };

  const handleSend = () => {
    const command = userInput.value;
    if (command.trim()) {
      const response = processCommand(command);
      responseArea.textContent = response;
      userInput.value = '';
      userInput.focus();
    }
  };

  sendBtn.addEventListener('click', handleSend);
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
});
