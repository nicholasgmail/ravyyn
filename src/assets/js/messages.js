
//GLOBAL VARS
var campaignExtraInfluencers = [];

var advertiser = document.getElementById("messages").classList.contains("messagesAdvertiser");


function clear(target) {
   document.querySelector("." + target).classList.toggle(target);
}

function newMessageScroll() {
  let messagesContainer = document.getElementById("conversationBody");
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function messagesPopulate() {

  for(let amount = 0; amount < 10; amount++) {
    let clone = document.getElementById("cloneStem").cloneNode(true);
    clone.id = "";

    document.getElementById("messagesContainer").append(clone);

    console.log(clone);
  }
}

function messageSeen() {
  Array.from(document.getElementsByClassName("Unseen") ).forEach( (UnseenMessage)=> {
      UnseenMessage.innerText = "seen";
    } )
}


function triggerSend(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }
}


function receiveContractOffer() {
  let message = document.getElementById("conversationContractBody").cloneNode(true);
  let messagesContainer = document.getElementById("conversationBody");

  message.innerHTML += '<div class="bidRequestButtons"><a>Accept</a><a onclick="toggleContract()">Bid</a></div>';

  message = message.outerHTML;

  let messageSend = '<div class="messageReceived">'+
    '<div class="profilePic">'+
      '<img src="./assets/images/aden.jpg" class="influencerPicture">'+
    '</div>'+
    '<div class="conversationInfo contractSent">'+
      '<p class="messageSubheaderAlert">Jane Doe sent an Offer</p'+
      '</p><p class="articleJobTitle">Fitness Influencer For Protein Shake</p>'+
    '<div class="articleJobDate">'+
      '<div class="flexRow">'+
        '<p>Start Date</p>'+
        '<p>3/26/20</p>'+
      '</div>'+
      '<div class="flexRow">'+
        '<p>Start Time</p>'+
        '<p>1PM</p>'+
      '</div>'+
      '<div class="flexRow">'+
        '<p>Offer</p>'+
        '<p class="contractAmount">$75</p>'+
      '</div>'+
    '</div>'+
    '<div class="rowColumns boldRowColumns">'+
      '<div>'+
        '<p>$100</p>'+
        '<p>Budget</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Code</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Post</p>'+
      '</div>'+
      '<div>'+
        '<p>Yes</p>'+
        '<p>Story</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Link In Bio</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Custom Post</p>'+
      '</div>'+
    '</div>'+
    '<div class="bidRequestButtons"><a>Accept</a><a onclick="toggleContract()">Bid</a></div></div>'+
    '</div>'+
  '</div>';

  messagesContainer.innerHTML += messageSend;

  newMessageScroll();
}

function removeContract(contract) {
  contract.parentElement.parentElement.parentElement.remove();
}


function sendContractOffer() {
  let message = document.getElementById("conversationContractBody").cloneNode(true);
  let messagesContainer = document.getElementById("conversationBody");

  message.innerHTML += '<div class="bidRequestButtons"><a onclick="toggleContract()">Edit</a><a onclick="removeContract(this)">Remove</a></div>';

  message = message.outerHTML;

  let messageSend = '<div class="messageSent">'+
    '<div class="conversationInfo contractSent"><p class="messageSubheaderAlert">You sent an Offer'+
    '</p><p class="articleJobTitle">Fitness Influencer For Protein Shake</p>'+
    '<div class="articleJobDate">'+
      '<div class="flexRow">'+
        '<p>Start Date</p>'+
        '<p>3/26/20</p>'+
      '</div>'+
      '<div class="flexRow">'+
        '<p>Start Time</p>'+
        '<p>1PM</p>'+
      '</div>'+
      '<div class="flexRow">'+
        '<p>Offer</p>'+
        '<p class="contractAmount">$75</p>'+
      '</div>'+
    '</div>'+
    '<div class="rowColumns boldRowColumns">'+
      '<div>'+
        '<p>$100</p>'+
        '<p>Budget</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Code</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Post</p>'+
      '</div>'+
      '<div>'+
        '<p>Yes</p>'+
        '<p>Story</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Link In Bio</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Custom Post</p>'+
      '</div>'+
    '</div>'+
    '<div class="bidRequestButtons"><a onclick="toggleContract()">Edit</a><a onclick="removeContract(this)">Remove</a></div></div>'+
  '</div>';

  messagesContainer.innerHTML += messageSend;

  newMessageScroll();
  
  toggleContract();

  //TRIGGER RESPONSE TO DEMO HTML
  //REMOVE LATER
  setTimeout(()=>{
    sendContractAccepted();
    newMessageScroll();
  }, 1000)
}

function sendContractOfferEdited(contractEditType) {
  let message = document.getElementById("conversationContractBody").cloneNode(true);
  let messagesContainer = document.getElementById("conversationBody");

  message.innerHTML += '<div class="bidRequestButtons"><a onclick="toggleContract()">Edit</a><a onclick="removeContract(this)">Remove</a></div>';

  message = message.outerHTML;

  let messageSend = '<div class="messageSent">'+
    '<div class="conversationInfo contractSent"><p class="messageSubheaderAlert">You sent an Offer'+
    '</p><p class="articleJobTitle">Fitness Influencer For Protein Shake</p>'+
    '<div class="articleJobDate">'+
      '<div class="flexRow">'+
        '<p>Start Date</p>'+
        '<p>3/26/20</p>'+
      '</div>'+
      '<div class="flexRow">'+
        '<p>Start Time</p>'+
        '<p>1PM</p>'+
      '</div>'+
      '<div class="flexRow">'+
        '<p>Offer</p>'+
        '<p class="contractAmount">$75</p>'+
      '</div>'+
    '</div>'+
    '<div class="rowColumns boldRowColumns">'+
      '<div>'+
        '<p>$100</p>'+
        '<p>Budget</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Code</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Post</p>'+
      '</div>'+
      '<div>'+
        '<p>Yes</p>'+
        '<p>Story</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Link In Bio</p>'+
      '</div>'+
      '<div>'+
        '<p>No</p>'+
        '<p>Custom Post</p>'+
      '</div>'+
    '</div>'+
    '<div class="bidRequestButtons"><a onclick="toggleContract()">Edit</a><a onclick="removeContract(this)">Remove</a></div></div>'+
  '</div>';

  messagesContainer.innerHTML += messageSend;

  newMessageScroll();

  if(contractEditType === "campaign") {
    toggleContractOptions();
  }

  if(contractEditType === "discountCode") {
    toggleContractDiscountCode();
  }

  //TRIGGER RESPONSE TO DEMO HTML
  //REMOVE LATER
  setTimeout(()=>{
    sendContractAccepted();
    newMessageScroll();
  }, 1000)
}



function sendContractAccepted() {
  let message = document.getElementById("userMessage").value;
  let messagesContainer = document.getElementById("conversationBody");

  let messageSend = '<div class="messageReceived">'+
    '<div class="profilePic">'+
      '<img src="./assets/images/aden.jpg" class="influencerPicture">'+
    '</div>'+
    '<div class="conversationInfo">'+
      '<p class="messageSubheaderAlert">Jane Doe Accepted The Offer</p'+
      '<p class="conversationWords">' + 
      '<p class="orangeText">View Details</p>' + 
      '</p>'+
    '</div>'+
  '</div>';

  messagesContainer.innerHTML += messageSend;
  
  document.getElementById("userMessage").value = "";
  newMessageScroll();
}

function sendMessage() {
  let message = document.getElementById("userMessage").value;
  let messagesContainer = document.getElementById("conversationBody");

  let messageSend = '<div class="messageSent">'+
    '<div class="conversationInfo">'+
      '<p class="conversationTimestamp">10:46AM</p>'+
      '<p class="conversationWords">' + message + '</p>'+
      '<p class="conversationSeen Unseen">sent</p>'+
    '</div>'+
  '</div>';

  messagesContainer.innerHTML += messageSend;
  
  document.getElementById("userMessage").value = "";
  newMessageScroll();


  //TRIGGER FOR FAKE RESPONSE DEMO
  //REMOVE ONCE INTEGRATED INTO APP
  fakeMessageReceive();
}


function toggleContract() {

  if (mobile === true) {
    document.getElementById("conversationContract").classList.toggle("showFlexFixedBottom");
    showScreen("mobileScreen");
  } 

  else {

    document.getElementById("conversationContract").classList.toggle("displayFlex");

  }
  
  newMessageScroll();
}


function toggleContractOptions() {
  
  if (mobile === true) {
    document.getElementById("conversationContractOptions").classList.toggle("showFlexFixedBottom");
  } 

  else {

    document.getElementById("conversationContractOptions").classList.toggle("displayFlex");
    document.getElementById("conversationContract").classList.toggle("displayFlex");
  
  }

  newMessageScroll();
}


function toggleContractDiscountCode() {
  
  if (mobile === true) {
    document.getElementById("conversationContractDiscountCode").classList.toggle("showFlexFixedBottom");
  } 

  else {

    document.getElementById("conversationContractDiscountCode").classList.toggle("displayFlex");
    document.getElementById("conversationContract").classList.toggle("displayFlex");
  
  }

  newMessageScroll();
}


function toggleChatIconEnd() {
  document.getElementById("chatTypingIcon").remove();
  newMessageScroll();
}

function toggleChatIconStart() {
  let chatIcon = '<div class="messageReceived marginBottom25" id="chatTypingIcon">'+
    '<img src="./assets/icons/chatTypingIcon.png" class="chatTypingIcon">'+
  '</div>';

  let messagesContainer = document.getElementById("conversationBody").innerHTML+= chatIcon;
  setTimeout( ()=> {
    newMessageScroll();
  }, 50)
}

function toggleMobileChat() {
  document.getElementById("messagesContainer").classList.toggle("displayNone");
  document.getElementById("conversation").classList.toggle("displayBlock");
  document.getElementById("conversationHeader").classList.toggle("displayFlex");
  newMessageScroll();
}

function userChatHeadClick(chatHead) {
  if (mobile === true) {
    toggleMobileChat();
  } else {
    chatHead.nextElementSibling.classList.toggle("displayFlex");
  }
}


function clearChatBody() {
  document.getElementById("conversationBody").innerHTML = "";
}


function deleteChatHeader(chatBaseStem) {
  chatBaseStem.parentElement.remove();
}










function fakeMessageReceive() {
  let messagesContainer = document.getElementById("conversationBody");

  setTimeout( ()=> {
    toggleChatIconStart();
    messageSeen();
  }, 1000);

  setTimeout( ()=> {
    toggleChatIconEnd();
  }, 3000)

  let messageSend = '<div class="messageReceived">'+
    '<div class="profilePic">'+
      '<img src="./assets/images/aden.jpg" class="influencerPicture">'+
    '</div>'+
    '<div class="conversationInfo">'+
      '<p class="conversationTimestamp">10:48AM</p>'+
      '<p class="conversationWords">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ante, maximus ac tortor in, tristique fringilla nunc. Maecenas tempus tincidunt eros, in imperdiet arcu suscipit id. Phasellus et odio semper, tincidunt lorem non, sollicitudin purus. Proin tristique vitae libero eu volutpat. In ut purus a nunc suscipit viverra a vel purus. Etiam sodales enim non sapien laoreet mattis.</p>' +
    '</div>'+
  '</div>';

  setTimeout( ()=> {
    messagesContainer.innerHTML += messageSend;
    newMessageScroll();
  }, 3500)

}










//FUNCTION CALLS


//POPULATE MESSAGE LIST
messagesPopulate();

//SCROLL TO NEWEST OF MESSAGE
newMessageScroll();


//TRIGGER CONTRACT OFFER
setTimeout( ()=> {
  receiveContractOffer();
}, 1000)