let tblUsuarios = $('#tblUsuarios').DataTable({
    ajax: {
        url: API_BASE_URL + '/usuario',
        dataSrc: ''
    },
    columns: [
        (data: 'nombreUsuario')
        (data: 'correo')
    ]
})

async function guardarUsuario(){
    let nombreUsuario=document.getElementById('nombreUsuario').value;
    let password=document.getElementById('password').value;
    let correo=document.getElementById('correo').value;

    let body = {
        nombreUsuario : nombreUsuario,
        password : password,
        correo: correo,
    }

    fetch(API_BASE_URL + '/usuario',{
        method: 'POST',
        headers: {
            'Content-Type': 'applicarion/json'
        },
        body: JSON.stringify(data)
    })
}