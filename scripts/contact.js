```javascript
// Importing the necessary dependencies
import { ContactSchema } from '../db/database.js';

// Getting the contact form DOM element
const contactForm = document.getElementById('contact-form');

// Function to handle the contact form submission
function submitContactForm(event) {
  event.preventDefault();

  // Getting the form data
  const formData = new FormData(contactForm);

  // Creating a new contact object
  const newContact = new ContactSchema({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  });

  // Saving the new contact to the database
  newContact.save()
    .then(() => {
      // Emitting the 'contactFormSubmitted' event
      const event = new CustomEvent('contactFormSubmitted', { detail: newContact });
      document.dispatchEvent(event);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Adding the event listener to the contact form
contactForm.addEventListener('submit', submitContactForm);
```