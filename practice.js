// String Properties

const movie = {
  title: 'a',
  Year: 2020,
  director: 'b',
  rate: 5.4,
};

showProperties(movie);

function showProperties(object) {
  for (let key in object)
    if (typeof object[key] !== 'number') console.log(key, object[key]);
}
