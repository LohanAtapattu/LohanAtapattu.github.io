const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  });
});

const signalPanel = document.querySelector('.research-figure');
if (signalPanel) {
  const signalData = {
    eeg: {
      name: 'Electroencephalogram',
      range: 'LOW-AMPLITUDE NEURAL ACTIVITY',
      description: 'Neural activity measured at the scalp or ear.',
      path: 'M0 105l14-2 9 4 11-5 12 1 10-3 10 4 9-2 12 1 8-5 11 7 11-3 10-21 8 40 11-29 10 16 11-4 13 1 10-3 12 6 10-2 13 1 10-5 9 2 11-3 13 7 9-2 10-19 9 37 12-28 10 14 11-4 14 2 10-4 10 1 13-2 11 5 9-3 10 1 11-4 12 5 12-2 10 2 11-3 12 4 12-5 10 2 10-1 13 3 10-3 12 2 11-5 12 4 10-2 14 1 10-4 12 3 12-2 14 2'
    },
    ecg: {
      name: 'Electrocardiogram',
      range: 'HEART’S ELECTRICAL ACTIVITY',
      description: 'A simplified ECG trace showing repeating cardiac cycles.',
      path: 'M0 106h22l8-3 8 3h18l8 3 7-8 7 5 8 0 7-8 8-35 8 78 8-28 8 0 8-7 8 0 8 3h26l8-3 8 3h18l8 3 7-8 7 5 8 0 7-8 8-35 8 78 8-28 8 0 8-7 8 0 8 3h26l8-3 8 3h18l8 3 7-8 7 5 8 0 7-8 8-35 8 78 8-28 8 0 8-7 8 0 8 3h26l8-3 8 3h18l8 3 7-8 7 5 8 0 7-8 8-35 8 78 8-28 8 0 8-7 8 0 8 3h18'
    },
    emg: {
      name: 'Electromyogram',
      range: 'MUSCLE ELECTRICAL ACTIVITY',
      description: 'An illustrative EMG burst showing changing muscle activation.',
      path: 'M0 106l8-3 6 6 5-8 6 5 5-4 6 9 6-12 6 4 5-1 7 8 5-10 7 5 6-3 6 6 5-5 7 3 6-11 7 6 8-4 7 14 6-22 7 32 5-27 7 17 7-8 5 3 8-7 8 12 6-16 6 8 8-3 7 5 5-6 8 2 6-11 7 8 6-4 9 18 7-29 8 39 7-32 7 19 8-10 6 5 8-9 6 12 6-14 8 9 6-3 7 4 9-8 8 13 7-18 6 8 8-4 9 20 8-33 7 39 7-28 7 17 7-12 6 5 10-8 8 10 7-14 7 8 7-3 8 5 10-9 7 13 7-17 7 7 8-3 8 10 8-16 8 7 9-4 8 7 9-8 8 12 8-14 8 8 8-5 12 8 8-12 8 8 9-3 9 4 8-8 10 7 8-5 9 2 10-4 10 3'
    }
  };

  const trace = signalPanel.querySelector('.signal-trace');
  const heading = signalPanel.querySelector('#signal-heading');
  const range = signalPanel.querySelector('#signal-range');
  const description = signalPanel.querySelector('#signal-description');
  signalPanel.querySelectorAll('.signal-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const signal = signalData[tab.dataset.signal];
      if (!signal) return;
      trace.setAttribute('d', signal.path);
      signalPanel.querySelector('.signal-path').setAttribute('aria-label', `Illustrative ${signal.name} waveform`);
      heading.innerHTML = `${signal.name} <i>(${tab.textContent})</i>`;
      range.textContent = signal.range;
      description.textContent = signal.description;
      signalPanel.querySelectorAll('.signal-tab').forEach((item) => {
        item.setAttribute('aria-pressed', String(item === tab));
      });
    });
  });

  const pauseButton = signalPanel.querySelector('.signal-play');
  pauseButton.addEventListener('click', () => {
    const paused = signalPanel.classList.toggle('signal-paused');
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.textContent = paused ? 'Resume trace' : 'Pause trace';
  });
}
