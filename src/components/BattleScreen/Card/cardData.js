const blackGoldModules = import.meta.glob('/src/assets/black-gold-cards/*.png', { eager: true, query: '?url', import: 'default' });
const purpleChromeModules = import.meta.glob('/src/assets/purple-chrome-cards/*.png', { eager: true, query: '?url', import: 'default' });

function processCardModules(moduleObject) {
  return Object.entries(moduleObject).map(([path, imgUrl], index) => {
    const fileName = path.split('/').pop();
    const name = fileName.split('.')[0];

    return {
      id: index + 1,
      name: name,
      img: imgUrl,
    };
  });
}

const allDecks = {
  blackGold: processCardModules(blackGoldModules),
  purpleChrome: processCardModules(purpleChromeModules),
};

export default allDecks;