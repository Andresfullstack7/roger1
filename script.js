const message = document.querySelector('.message');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

yesBtn.addEventListener('click', function() {
  message.innerHTML = 'You have made me the happiest person on earth! I love you more than words can express, and I promise to cherish and love you always. You are my soulmate, my partner, and my best friend. Together, we can conquer anything life throws our way.';
});

noBtn.addEventListener('click', function() {
  message.innerHTML = 'I understand, and I respect your decision. I hope we can remain good friends and continue to share our lives together. Thank you for everything, Roger.';
});
