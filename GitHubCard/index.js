
/* Step 2: Inspect and study the data coming back in order to build your component function.*/

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


const allUsers = document.querySelector('.cards')


function userCard(object){
  let cardSection = document.createElement('.card');
  let cardInfo = document.createElement('div');
  let userImg = document.createElement('img');
  let cardName = document.createElement('h3');
  let userName = document.createElement('p')
  let userLocation = document.createElement('p');
  let userProfile = document.createElement('p');
  let userFollowers = document.createElement('p');
  let userFollowing = document.createElement('p');
  let userBio = document.createElement('p');

  //classes
  cardSection.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  userName.classList.add('username');

  //append
  allUsers.appendChild(cardSection);
  cardSection.appendChild(userImg);
  cardSection.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  //text content
  userFollowers.textContent = `Followers: ${object.data.followers}`;
  userFollowing.textContent = `Following: ${object.data.following}`;
  userBio.textContent = `${object.data.bio}`;
  cardName.textContent = `${object.data.name}`;
  userName.textContent = `${object.data.login}`;
  userLocation.textContent = `${object.data.location}`;
  userProfile.href = `${object.data.html_url}`;
  userImg.textContent = `${object.data.avatar_url}`;

  return cardSection;
}

// allUsers.appendChild(userCard())



/* Step 1: using axios, send a GET request to the following URL: https://api.github.com/users/<your name> */

axios.get(`https://api.github.com/users/sandramkimball`)

.then( res => {
  console.log(res);
  for (let i = 0; i < res.data.length; i++) {
    let newUser = userCard(item);
    allUsers.appendChild(newUser);
  }
})

.catch(error => {
  console.log(`AGH!`, error)
})


// menu.appendChild(list); 



/* Step 4: Pass the data received from Github into your function. 
  Create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Get at least 5 different Github usernames and add them as Individual strings to the friendsArray below. Using that array, iterate over it, requesting data for each, creating a new card to add to the DOM.
          
const followersArray = [
  'tetondan'
  'dustinmyers'
  'justsml'
  'luishrd'
  'bigknell'
];
*/