var firebaseConfig = {
  apiKey: "AIzaSyChWDCeEw5zTHyN-D8BhlMEhskuhxPPPwo",
  authDomain: "ktwitter-f6477.firebaseapp.com",
  projectId: "ktwitter-f6477",
  storageBucket: "ktwitter-f6477.appspot.com",
  messagingSenderId: "395649976869",
  appId: "1:395649976869:web:86404c9bbe5542171d0dcc"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

//Añade tus enlaces de Firebase

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "añadir el nombre de la sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
