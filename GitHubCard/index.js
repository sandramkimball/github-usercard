

/* Step 3: Create a function that accepts a single object as its only argument. Create a component to return the following:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name"></h3>
    <p class="username"></p>
    <p>Location:</p>
    <p>Profile:  
      <a href={address to users github page}></a>
    </p>
    <p>Followers:</p>
    <p>Following:</p>
    <p>Bio:</p>
  </div>
</div>
*/



const allUsers = document.querySelector('.cards');

function userCard(obj){
  let userCard = document.createElement('div');
  let userImg = document.createElement('img');
  let cardInfo = document.createElement('div');
  let cardName = document.createElement('h3');
  let userName = document.createElement('p')
  let userLocation = document.createElement('p');
  let userProfile = document.createElement('p');
  let userProfileLink = document.createElement('a');
  let userFollowers = document.createElement('p');
  let userFollowing = document.createElement('p');
  let userBio = document.createElement('p');

  //classes
  userCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  userName.classList.add('username');

  //text content
  userFollowers.textContent = `Followers: ${obj.data.followers}`;
  userFollowing.textContent = `Following: ${obj.data.following}`;
  userBio.textContent = `${obj.data.bio}`;
  cardName.textContent = `${obj.data.name}`;
  userName.textContent = `${obj.data.login}`;
  userLocation.textContent = `${obj.data.location}`;
  userProfileLink.href = `${obj.data.html_url}`;
  userProfileLink.textContent = `Profile: ${obj.data.html_url}`;
  userImg.src = `${obj.data.avatar_url}`;

  userProfileLink.style.textDecoration = 'none';
  //append
  userCard.appendChild(userImg);
  userCard.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileLink);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return userCard;
}


axios.get(`https://api.github.com/users/sandramkimball`)
  .then( response => {
    console.log(response);
    let newUser = userCard(response);
    allUsers.appendChild(newUser);
  })
  .catch(error => {
    console.log(`AGH!`, error);
  });

  axios.get(`https://api.github.com/users/tetondan`)
  .then( response => {
    console.log(response);
    let newUser = userCard(response);
    allUsers.appendChild(newUser);
  })
  .catch(error => {
    console.log(`AGH!`, error);
  });
  axios.get(`https://api.github.com/users/dustinmyers`)
  .then( response => {
    console.log(response);
    let newUser = userCard(response);
    allUsers.appendChild(newUser);
  })
  .catch(error => {
    console.log(`AGH!`, error);
  });
  axios.get(`https://api.github.com/users/justsml`)
  .then( response => {
    console.log(response);
    let newUser = userCard(response);
    allUsers.appendChild(newUser);
  })
  .catch(error => {
    console.log(`AGH!`, error);
  });
  axios.get(`https://api.github.com/users/luishrd`)
  .then( response => {
    console.log(response);
    let newUser = userCard(response);
    allUsers.appendChild(newUser);
  })
  .catch(error => {
    console.log(`AGH!`, error);
  });

  axios.get(`https://api.github.com/users/bigknell`)
  .then( response => {
    console.log(response);
    let newUser = userCard(response);
    allUsers.appendChild(newUser);
  })
  .catch(error => {
    console.log(`AGH!`, error);
  });



// const followersArray = [
//   'tetondan',
//   'dustinmyers',
//   'justsml',
//   'luishrd',
//   'bigknell'
// ];


/* Step 1: using axios, send a GET request to the following URL: https://api.github.com/users/<your name> */

/* Step 4: Pass the data received from Github into your function. 
  Create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Get at least 5 different Github usernames and add them as Individual strings to the friendsArray below. Using that array, iterate over it, requesting data for each, creating a new card to add to the DOM.
          

*/