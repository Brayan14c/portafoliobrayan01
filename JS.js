// This code can be used to add or remove items from the list
const services = document.querySelector('.services');
const serviceItem = document.createElement('div');
serviceItem.classList.add('service-item');
serviceItem.innerText = 'New Service';
services.appendChild(serviceItem);

// To remove an item, you can use the following code
// services.removeChild(serviceItem);