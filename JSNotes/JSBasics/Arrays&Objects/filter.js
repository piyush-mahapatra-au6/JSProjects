const items = [
  {
    name: 'Bike',
    Price: 100,
  },
  {
    name: 'TV',
    Price: 1000,
  },
  {
    name: 'Car',
    Price: 10000,
  },
  {
    name: 'House',
    Price: 100000,
  },
  {
    name: 'Plane',
    Price: 1000000,
  },
  {
    name: 'Island',
    Price: 10000000,
  },
  {
    name: 'Me',
    Price: 100000000000,
  },
];

const filteredArray = items.filter((item) => {
  return item.Price <= 100000;
});
console.log(`THis is a filterd Array : ${filteredArray}`);
