import React from "react";

const LogInForm = () => {
    

    return(
        <div class="#modalLogin" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-modal="true" style="padding-right: 15px; display: block;">
        <div class="modal-dialog justify-center" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div class="modal-body mt-5 ">
                    <div class="container ">
                        <div class="row flex justify-center">
                            <div class="col-xs-12 mx-auto">
                                <h1 class="text-center">Iniciar <span>sesión</span></h1>
                                <form action="" method="post" class="my-5 text-center" id="formLoginWeb">
                                    <div class="form-group mt-4">
                                        <input type="text" class="form-control input-control" name="usuario" id="" placeholder="Número de RUC" required="" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <input type="password" class="form-control input-control" name="password" id="" placeholder="Contraseña" required=""/>
                                    </div>
                                    <p class="my-2"><a href="" class="btn-secundario">He olvidado mi contraseña</a></p>
                                    <button type="submit" class="mt-4 btn btn-primario">Ingresar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default LogInForm