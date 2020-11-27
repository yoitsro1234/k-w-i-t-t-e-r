 var username = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome, "+username+"!";

 var firebaseConfig = {
      apiKey: "AIzaSyCvTKG0ciZsmRwHLY0PuZIOiq3r3sRz-T8",
      authDomain: "kwitter-7ac44.firebaseapp.com",
      databaseURL: "https://kwitter-7ac44.firebaseio.com",
      projectId: "kwitter-7ac44",
      storageBucket: "kwitter-7ac44.appspot.com",
      messagingSenderId: "1681758027",
      appId: "1:1681758027:web:cc810803e4ae617dc83ace"
    };
 
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class = 'room_name' id ="+Room_names+"onclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose = "adding room"
  });
}

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  console.log(name);
  window.location="kwitter_page.html";
}

function logOut(){
  window.location="index.html";
}