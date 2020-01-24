<template>
    <div>
        <div class="contenedor-inicio">
            <div class="container">
                <div class="jumbotron text-center col-md-6">
                    <h2 class="display-4 mb-2">Nuevo Usuario</h2>    
                    <p class="small">Por favor diligencia los siguientes campos</p>        
                    <form class="mt-5">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa un e-mail">
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu contraseña">
                            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Repite la contraseña">
                            <button class="btn btn-block btn-primary">Registrate</button>
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "registro"
}
</script>