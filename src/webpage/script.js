// ---------- Mobile menu ----------
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMenu() {
  mobileMenu.hidden = true;
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}

hamburgerBtn.addEventListener('click', () => {
  const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  hamburgerBtn.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.hidden = isOpen;
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ---------- Search form ----------
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', (e) => e.preventDefault());

// ---------- Geolocation ----------
const useLocationBtn = document.getElementById('useLocationBtn');
const citySearch = document.getElementById('citySearch');
const searchStatus = document.getElementById('searchStatus');

useLocationBtn.addEventListener('click', () => {
  if (!('geolocation' in navigator)) {
    setStatus('Location isn\u2019t supported in this browser. Try searching your city instead.', true);
    return;
  }

  useLocationBtn.disabled = true;
  const originalLabel = useLocationBtn.querySelector('.btn-label').textContent;
  useLocationBtn.querySelector('.btn-label').textContent = 'Locating…';
  setStatus('Requesting your location…');

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      reverseGeocode(latitude, longitude);
      useLocationBtn.disabled = false;
      useLocationBtn.querySelector('.btn-label').textContent = originalLabel;
    },
    (error) => {
      useLocationBtn.disabled = false;
      useLocationBtn.querySelector('.btn-label').textContent = originalLabel;
      const messages = {
        1: 'Location access was denied. You can search your city manually instead.',
        2: 'Your location is currently unavailable. Please try again.',
        3: 'The location request timed out. Please try again.'
      };
      setStatus(messages[error.code] || 'Couldn\u2019t get your location. Please search your city instead.', true);
    },
    { enableHighAccuracy: false, timeout: 8000 }
  );
});

async function reverseGeocode(lat, lon) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`, {
      headers: { 'Accept-Language': 'en' }
    });
    if (!res.ok) throw new Error('Reverse geocode failed');
    const data = await res.json();
    const city = data.address?.city || data.address?.town || data.address?.county || data.address?.state;
    if (city) {
      citySearch.value = city;
      setStatus(`Showing recyclers near ${city}.`);
      scrollToFacilities();
    } else {
      setStatus('Found your location. Showing nearby facilities.');
      scrollToFacilities();
    }
  } catch (err) {
    setStatus('Got your coordinates, but couldn\u2019t resolve a city name. Showing nearby facilities anyway.');
    scrollToFacilities();
  }
}

function scrollToFacilities() {
  document.getElementById('find').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setStatus(message, isError = false) {
  searchStatus.textContent = message;
  searchStatus.classList.toggle('is-error', isError);
}

// ---------- Device chip / card interactions ----------
const chips = document.querySelectorAll('.chip[data-device]');
const deviceCards = document.querySelectorAll('.device-card[data-device]');

function selectDevice(deviceName) {
  chips.forEach(c => c.classList.toggle('active', c.dataset.device === deviceName));
  const lookup = document.getElementById('lookup');
  lookup.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setStatus(`Showing recycling guidance for ${deviceName}.`);
}

chips.forEach(chip => {
  chip.addEventListener('click', () => selectDevice(chip.dataset.device));
});

deviceCards.forEach(card => {
  card.addEventListener('click', () => {
    chips.forEach(c => c.classList.toggle('active', c.dataset.device === card.dataset.device));
  });
});