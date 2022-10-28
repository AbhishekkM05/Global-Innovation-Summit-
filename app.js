// Humberger menu
const menu = document.querySelector('.menu');
const nav = document.querySelector('.second');
const span = document.createElement('span');
span.innerHTML += '<span>&times;</span>';
span.classList.add('close');

menu.addEventListener('click', () => {
  if (nav.style.display === 'inline-block') {
    nav.style.display = 'none';
  } else {
    nav.appendChild(span);
    nav.style.display = 'flex';
    nav.classList.add('humberger');
    span.addEventListener('click', () => {
      nav.style.display = 'none';
    });
    document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
      nav.style.display = 'none';
    }));
  }
});

// Speakers

const speakers = [
  {
    img: 'assets/images/speaker_01.png',
    name: 'Yochai Benkler',
    job: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',

  },
  {
    img: 'assets/images/speaker_02.png',
    name: 'Yochai Benkler',
    job: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',

  },
  {
    img: 'assets/images/speaker_03.png',
    name: 'Yochai Benkler',
    job: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',

  },
  {
    img: 'assets/images/speaker_04.png',
    name: 'Yochai Benkler',
    job: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',

  },
  {
    img: 'assets/images/speaker_05.png',
    name: 'Yochai Benkler',
    job: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',

  },
  {
    img: 'assets/images/speaker_06.png',
    name: 'Yochai Benkler',
    job: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',

  },

];

const article = document.querySelector('.wrapper');

speakers.forEach((speaker, id) => {
  const speakereCard = document.createElement('div');
  speakereCard.className = 'speak-card';
  speakereCard.innerHTML = (`
    <div class="speakers">
      <div class="each speaker${id}">
        <img src="${speaker.img}" alt="speaker${id}">
      <div class = "speaker-info">
        <h3 class="name">${speaker.name}</h3>
        <p class="job">${speaker.job}</p>
        <span class ="separation"></span>
        <p class="desc">${speaker.description}</p>
      <div/>
      </div>
    </div>
  
    `);
  speakereCard.classList.add('speakers-sec');
  article.appendChild(speakereCard);
});

// Speakers
