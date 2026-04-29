(function () {
  var input = document.getElementById('terminal-input');
  var output = document.querySelector('.terminal-body');
  var terminal = document.getElementById('terminal');
  var toggle = document.querySelector('.terminal-toggle');
  var closeButton = document.querySelector('.terminal-close');
  if (!input || !output) {
    return;
  }

  var commands = {
    help: 'Commands: help, about, roles, skills, links, tasks, guides, tools, contact, clear',
    about: 'Creative contributor and community manager focused on hacker education and content.',
    roles: 'Creative Contributor @ Critical Thinking Podcast LLC.<br>Community Manager @ Pato Academy.',
    skills: 'Short-form video editing, YouTube thumbnails, community strategy, moderation, analytics.',
    links: [
      'GitHub: <a href="https://github.com/fdrian" target="_blank" rel="noopener">github.com/fdrian</a>',
      'LinkedIn: <a href="https://linkedin.com/in/fdrian" target="_blank" rel="noopener">linkedin.com/in/fdrian</a>',
      'Instagram: <a href="https://instagram.com/xfdrian" target="_blank" rel="noopener">instagram.com/xfdrian</a>'
    ].join('<br>'),
    tasks: 'Tasks: <a href="https://tasks.fdrian.me" target="_blank" rel="noopener">tasks.fdrian.me</a>',
    guides: 'Guides: <a href="https://guides.fdrian.me" target="_blank" rel="noopener">guides.fdrian.me</a>',
    tools: 'Tools: <a href="https://tools.fdrian.me" target="_blank" rel="noopener">tools.fdrian.me</a>',
    contact: [
      'Email: <a href="mailto:fdrian@proton.me">fdrian@proton.me</a>'
    ].join('<br>')
  };

  function appendLine(text) {
    var line = document.createElement('div');
    line.className = 'terminal-line';
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function appendLineHtml(html) {
    var line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = html;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function appendCommand(cmd) {
    var line = document.createElement('div');
    line.className = 'terminal-line';

    var prompt = document.createElement('span');
    prompt.className = 'terminal-prompt';
    prompt.textContent = 'guest@fdrian:~$';

    var commandText = document.createElement('span');
    commandText.textContent = ' ' + cmd;

    line.appendChild(prompt);
    line.appendChild(commandText);
    output.appendChild(line);
  }

  function handleCommand(raw) {
    var cmd = raw.trim().toLowerCase();
    if (!cmd) {
      return;
    }

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    var response = commands[cmd];
    if (response) {
      appendLineHtml(response);
      return;
    }

    appendLine("Unknown command. Type 'help'.");
  }

  input.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();
    var value = input.value;
    appendCommand(value);
    handleCommand(value);
    input.value = '';
  });

  function closeTerminal() {
    terminal.classList.remove('is-open');
    terminal.setAttribute('aria-hidden', 'true');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (terminal && toggle) {
    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var isOpen = terminal.classList.toggle('is-open');
      terminal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        input.focus();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && terminal.classList.contains('is-open')) {
        closeTerminal();
        toggle.focus();
      }
    });
  }

  if (terminal && closeButton) {
    closeButton.addEventListener('click', function () {
      closeTerminal();
      if (toggle) {
        toggle.focus();
      }
    });
  }
})();
