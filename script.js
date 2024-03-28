const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    

    // Aqui você pode adicionar a lógica de autenticação com Firebase
    // Por enquanto, apenas exibindo uma mensagem de sucesso
    loginForm.reset();
});

function login() {
    var email = loginForm.email.value;
    var password = loginForm.password.value;
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
        console.log("macaco")
    }).catch(error => {
        console.log("antes")
    })
    console.log("ata")
}
