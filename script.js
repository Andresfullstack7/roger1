const message = document.querySelector('.message');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

yesBtn.addEventListener('click', function() {
  message.innerHTML = '<p>You have made me the happiest person on earth! I love you more than words can express, and I promise to cherish and love you always. You are my soulmate, my partner, and my best friend. Together, we can conquer anything life throws our way.</p>' +
  '<img src="./IMG-9128.jpg" alt="Image Description">';
});

noBtn.addEventListener('click', function() {
  message.innerHTML = 'cries in spanish.';
});
