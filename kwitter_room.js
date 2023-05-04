// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDgLHxl2ELh6iLjJBlxMf6WWeHVS9pQxRE",
      authDomain: "classtest-2f8f4.firebaseapp.com",
      projectId: "classtest-2f8f4",
      storageBucket: "classtest-2f8f4.appspot.com",
      messagingSenderId: "976934265393",
      appId: "1:976934265393:web:2982d35c8ddc6605702b10"
    };
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
