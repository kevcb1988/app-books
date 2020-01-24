<template>
    <div>
        <div class="contenedor-usuario mb-5">        
            <div class="jumbotron text-center">
                <h2 class="display-4"><i class="fas fa-book"></i> Lista de libros</h2>
                <p class="my-3">Aún no tienes un libro en tu lista... </p>
                <button class="btn btn-warning mt-3" data-toggle="modal" data-target="#agregar-libro">Añadir <i class="fas fa-plus-circle"></i></button>
            </div>
            <!-- Listado de libros -->
            <div class="lista-libros container-fluid col-sm-12 col-md-5">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="lista-libros-descripcion">
                            <p class="lista-libros-titulo pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <small class="lista-libros-autor">Dan Brown</small>
                            <br>
                            <span class="lista-libros-estado badge badge-info"><i class="fas fa-gift mr-1"></i>Por adquirir</span>
                            <!-- <span class="badge badge-info mt-2 p-1"><i class="fas fa-book-open mr-1"></i>Leyendo...</span>
                            <span class="badge badge-info mt-2 p-1"><i class="fas fa-check mr-1"></i>Finalizado</span> -->
                        </div>
                        <div class="lista-libros-botones">
                            <button class="btn btn-success" data-toggle="modal" data-target="#editar-libro"><i class="far fa-edit"></i></button>                
                            <button class="btn btn-danger" ><i class="far fa-trash-alt"></i></button>
                        </div>
                    </li>
                    
                </ul>
            </div>        
        </div>
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>
