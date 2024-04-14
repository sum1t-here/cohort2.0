// axios vs fetch

// function main() {
//   fetch('https://sum-server.100xdevs.com/todos').then(async (response) => {
//     const json = await response.json();
//     console.log(json);
//   });
// }

// POST
async function main() {
  const response = await fetch('https://sum-server.100xdevs.com/todos', {
    method: 'POST',
    body: {
      username: 'kurapika',
      password: '1234',
    },
    headers: {
      Authorization: 'Bearer 123',
    },
  });
  const json = await response.json();
  console.log(json);
}

main();

// {
//     todos: [
//       {
//         id: 1,
//         title: 'Todo 1',
//         description: 'This is todo 1',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'Todo 2',
//         description: 'This is todo 2',
//         completed: false
//       }
//     ]
//   }

//  get
// const axios = require('axios');

// async function main1() {
//   const response = await axios.get('https://sum-server.100xdevs.com/todos');

//   console.log(response);
// }

// post
const axios = require('axios');

async function main1() {
  const response = await axios({
    url: 'https://httpdump.app/dumps/f5bc1f4c-6e28-4cd4-803b-0e685e1366d0',
    method: 'POST',
    headers: {
      Authorization: 'Bearer 123',
    },
    data: {
      username: 'kurapika',
      password: '1234',
    },
  });

  console.log(response);
}

main1();

// 3
