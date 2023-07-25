```javascript
// Importing the necessary dependencies
import { socialLinks } from '../db/database.js';

// Function to load social links
function loadSocialLinks() {
  const socialLinksSection = document.getElementById('social-links');

  socialLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.classList.add('social-link');

    const icon = document.createElement('i');
    icon.classList.add('fab', `fa-${link.name}`);
    anchor.appendChild(icon);

    socialLinksSection.appendChild(anchor);
  });

  // Emitting an event to notify that the social links have been loaded
  const event = new CustomEvent('socialLinksLoaded');
  document.dispatchEvent(event);
}

// Listening for the DOMContentLoaded event to start loading the social links
document.addEventListener('DOMContentLoaded', loadSocialLinks);
```