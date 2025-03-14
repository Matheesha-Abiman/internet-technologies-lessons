console.log('Attribute Modification is loded...');

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.facebook.com')

link.setAttribute('target', 'blank');
link.removeAttribute('target');