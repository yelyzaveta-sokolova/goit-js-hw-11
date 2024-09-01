// У файлі pixabay-api.js зберігай функції для HTTP-запитів.


// function getPictures(name) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const KEY = '32552782-0d4c86680018457e820f20492';

//   if (name.includes(' ')) {
//     name.replace(/\s+/g, '+');
//   }

//   const searchParams = new URLSearchParams({
//     key: KEY,
//     q: name,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   })

//   return fetch(`${BASE_URL}?${searchParams}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }
//       return res.json();
//     })
// }
