import React from 'react';

const Contact = ({contact, item}) =>
     <li>
          {item} {contact.name} {contact.phone}
     </li>


export default Contact;