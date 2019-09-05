
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/sandramkimball').then(response=> {
  console.log(response);
  response.data.message.forEach(item =>{
    const newUser = userCard(item);
    cardSections.appendChild(newUser);
  });
})
.catch(error => {
  console.log(`Agh! Something's wrong.`, error)
})

/* Step 2: Inspect and study the data coming back in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function. 
  Create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


const followersArray = [];

function userCard(obj){
  const cardSection = document.querySelector('.cards');
  let userImg = document.createElement('img');
  let cardInfo = document.createElement('div');
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
  cardSection.appendChild(userImg);
  cardSection.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  return cardSection
}


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component to return the following:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
