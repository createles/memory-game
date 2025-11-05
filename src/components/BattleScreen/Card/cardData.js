const allImageModules = import.meta.glob('/src/assets/tarot-cards/*.png', { eager: true, query: '?url', import: 'default' });

export const allCards = Object.entries(allImageModules).map(([path, imgUrl], index) => {
  const fileName = path.split('/').pop();
  const name = fileName.split('.')[0];

  return {
    id: index + 1,
    name: name,
    img: imgUrl,
  };
});