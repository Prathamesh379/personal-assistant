# Personal Assistant

A lightweight desktop application built with Electron that provides an interactive personal assistant interface for quick access to assistance on your desktop.

## Features

- 💻 **Desktop Application** - Cross-platform desktop app using Electron
- 🎯 **Always-On-Top** - Floating window that stays on top of other applications
- 🎨 **Clean UI** - Minimal and user-friendly interface
- ⚡ **Lightweight** - Fast and responsive assistant
- 🔒 **Secure** - Context isolation and preload script for security

## Tech Stack

- **Framework**: [Electron](https://www.electronjs.org/) (v40.4.0)
- **Frontend**: HTML, CSS, JavaScript
- **Runtime**: Node.js

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Prathamesh379/personal-assistant.git
cd personal-assistant
```

2. Install dependencies:
```bash
npm install
```

## Usage

Start the application:
```bash
npm start
```

The app will launch with a floating window. Type your question in the input field and click "Send" to interact with the assistant.

## Project Structure

```
personal-assistant/
├── main.js              # Electron main process
├── preload.js           # IPC bridge and security layer
├── renderer.js          # Renderer process logic
├── index.html           # Main UI template
├── style.css            # Application styling
├── package.json         # Project dependencies and scripts
├── .gitignore           # Git ignore configuration
└── README.md            # This file
```

### File Descriptions

- **main.js** - Sets up the Electron app, creates the browser window, and handles IPC events
- **preload.js** - Provides secure communication between main and renderer processes
- **renderer.js** - Handles UI interactions and user input
- **index.html** - Frontend markup with input area and response display
- **style.css** - Application styling and layout

## Configuration

The application window is configured with:
- Width: 350px
- Height: 500px
- Always-on-top: Yes
- Frameless: Yes (custom titlebar)
- Context isolation: Enabled for security

## Development

To modify the UI or functionality:

1. Edit `index.html` for layout changes
2. Edit `style.css` for styling updates
3. Edit `renderer.js` for frontend logic
4. Edit `main.js` for Electron configuration or IPC handlers

## Security

This project follows Electron security best practices:
- ✓ Context isolation enabled
- ✓ Preload script for secure IPC bridge
- ✓ No Node.js integration in renderer
- ✓ External URLs handled safely via `shell.openExternal()`

## License

ISC

## Author

Prathamesh379

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For issues or questions, please open an issue on the GitHub repository.
