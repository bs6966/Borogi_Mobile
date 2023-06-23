const firebaseConfig = {
    apiKey: "AIzaSyDYw8agsTmj5x1bz72BlJ-f9YYB1dmmrdg",
    authDomain: "borogi.firebaseapp.com",
    databaseURL: "https://borogi-default-rtdb.firebaseio.com",
    projectId: "borogi",
    storageBucket: "borogi.appspot.com",
    messagingSenderId: "49527605540",
    appId: "1:49527605540:web:6daf22af889ba3a0528bb1"
  };

firebase.initializeApp(firebaseConfig);

var paymentFormDB=firebase.database().ref('borogi')

document.getElementById('paymentForm').addEventListener('submit',submitForm)

function submitForm(event) {
    event.preventDefault()

    var name = getElementVal('name')
    var email = getElementVal('email')
    var contact = getElementVal('contact')
    var address = getElementVal('address')
    var size = getElementVal('size')
    var productName = getElementVal('productName')
    
    saveMessages(name,email,contact,address,size,productName)

}

const saveMessages = (name,email,contact,address,size,productName) => {
    var newPyamentForm = paymentFormDB.push()

    newPyamentForm.set({
        name: name,
        email: email,
        contact: contact,
        address: address,
        size: size,
        productName:productName
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value
}
