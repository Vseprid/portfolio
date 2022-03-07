export default function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(season => {
        for (let i = 1; i <= 6; i++) {
          const img = new Image();
          img.src = `./assets/img/${season}/${i}.jpg`;
        }
    })
  }