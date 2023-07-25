```javascript
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const SocialLinkSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', ContactSchema);
const SocialLink = mongoose.model('SocialLink', SocialLinkSchema);

module.exports = {
  Contact,
  SocialLink
};
```