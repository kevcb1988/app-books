<template>
    <div>
        <div class="contenedor-inicio">
            <div class="container">
                <div class="jumbotron text-center col-md-6">
                    <h1 class="display-4 mb-2">Lorem ipsum dolor.</h1>    
                    <p>Lorem ipsum dolor sit</p>        
                    <form class="mt-5">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo Electrónico">
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña">
                            <a href="usuario.html" class="btn btn-block btn-primary">Inicia Sesión</a>
                        </div>
                    </form>
                    <p class="small my-4">¿Aún no eres usuario? <a href="registro.html">Registrate</a></p> 

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "inicio"
}
</script>