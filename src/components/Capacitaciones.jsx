import React,{useState} from "react";
import Arrow from "./comuns/Arrow.astro";

const ChangeCap = () => {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)
    const [fifth, setfifth] = useState(false)
    const cambiarOpcion = () => {
        setfirst(!first)
        setsecond(false)
        setthird(false)
        setfourth(false)
        setfifth(false)
    }
    const cambiarOpcion2 = () => {
        setsecond(!second)
        setfirst(false)
        setthird(false)
        setfourth(false)
        setfifth(false)
    }
    const cambiarOpcion3 = () => {
        setthird(!third)
        setfirst(false)
        setsecond(false)
        setfourth(false)
        setfifth(false)
    }
    const cambiarOpcion4 = () => {
        setfourth(!fourth)
        setfirst(false)
        setsecond(false)
        setthird(false)
        setfifth(false)
    }
    const cambiarOpcion5 = () => {
        setfifth(!fifth)
        setfirst(false)
        setsecond(false)
        setthird(false)
        setfourth(false)
    }
    return(
        <>
        <ul className="nav nav-pills mb-3 mt-5 flex justify-center pl-4 pr-4" id="pills-tab">
                <li classNameName="nav-item text-center">
                <button onClick={() => cambiarOpcion()}
                    className={`nav-link ${ first &&  "border-green-500 border-b text-green-500"}`}>Extensión Profesional</button>
                </li>
                <li className="nav-item" role="presentation">
                <button onClick={() => cambiarOpcion2()} className={`nav-link ${ second &&  "border-green-500 border-b text-green-500"}`}>Cursos, Talleres y Sesiones</button>
                </li>
                <li className="nav-item" role="presentation">
                <button onClick={() => cambiarOpcion3()} className={`nav-link ${ third &&  "border-green-500 border-b text-green-500"}`}>Ciclo de conferencias magistrales,
                        talleres gratutitos</button>
                </li>
                <li className="nav-item" role="presentation">
                <button onClick={() => cambiarOpcion4()} className={`nav-link ${ fourth &&  "border-green-500 border-b text-green-500"}`}>Herramientas y asesorías</button>
                </li>
                <li className="nav-item" role="presentation">
                <button onClick={() => cambiarOpcion5()} className={`nav-link ${ fifth &&  "border-green-500 border-b text-green-500"}`}>Diplomados</button>
                </li>
        </ul>
        <div className="tab-content">
                {
                    first &&
                    <div className="tab-pane grid grid-cols-3 gap-4 flex" id="pills-extension">
                        <div className="card border rounded-lg">
                            <div className="card-header flex items-center justify-center pt-[90px] pb-[90px]">
                                <img src="./images/tecsup.webp"
                                    className="card-img-top"
                                    alt="..."/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">TECSUP</h5>
                                <p className="pt-2 pb-4">Hasta 25%</p>
                                <a className="btn-secundario flex" href="/detallesCapacitaciones/"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                            </div>
                        </div>
                        <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[60px] pb-[60px]">
                            <img src="./images/esan.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">Universidad ESAN</h5>
                            <p className="pt-2 pb-4">15%</p> 
                            <a className="btn-secundario flex"  href="/detallesCapacitaciones/"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                        </div>
                        <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[30px] pb-[30px]">
                            <img src="./images/lasalle.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Universidad La Salle</h5>
                            <p className="pt-2 pb-4">10%</p> 
                            <a className="btn-secundario flex" href="/detallesCapacitaciones/"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
                    
                    </div>
                }


                {
                    second &&
                    <div className="tab-pane grid grid-cols-3 gap-4 flex" id="pills-cursos">
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center  pt-[70px] pb-[80px]">
                            <img src="./images/HP-360.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">High Performance 360</h5>
                            <p className="pt-2 pb-4">20%</p> 
                            <a className="btn-secundario flex"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
    
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[70px] pb-[90px]">
                            <img src="./images/orion.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">Orion GPE</h5>
                            <p className="pt-2 pb-4">20%</p> 
                            <a className="btn-secundario flex"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
    
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[80px] pb-[100px]">
                            <img src="./images/proavance.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">Proavance</h5>
                            <p className="pt-2 pb-4">20%</p> 
                            <a className="btn-secundario flex"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
                    </div>
                }

                {
                    third &&
                    <div className="tab-pane grid grid-cols-3 gap-4 flex" id="pills-ciclos">
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[60px] pb-[60px]">
                            <img src="./images/ey.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">EY</h5>
                            <a className="btn-secundario flex pt-4"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
    
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[70px] pb-[60px]">
                            <img src="./images/pwc.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">PwC Perú</h5>
                            <a className="btn-secundario flex pt-4"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
    
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center  pt-[80px] pb-[67px]">
                            <img src="./images/esan.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">Universidad ESAN</h5>
                            <a className="btn-secundario flex pt-4"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
                    </div>
                }

                {
                    fourth &&
                    <div className="tab-pane grid grid-cols-3 gap-4 flex" id="pills-herramientas">
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[30px] pb-[30px]">
                            <img src="./images/cognitio.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Cognitio</h5>
                            <a className="btn-secundario flex pt-4"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
    
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center pt-[80px] pb-[100px]">
                            <img src="./images/intedya.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">INTEDYA</h5>
                            <a className="btn-secundario flex pt-4"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
    
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center  pt-[100px] pb-[105px]">
                            <img src="./images/ms.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">M+S</h5>
                            <a className="btn-secundario flex pt-4"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
                    
                    </div>
                }

{
                    fifth &&
                    <div className="tab-pane grid-cols-3 gap-4 flex" id="pills-diplomados">
                    <div className="card border rounded-lg">
                        <div className="card-header flex items-center justify-center  pt-[80px] pb-[100px]">
                            <img src="./images/proavance.webp"
                                className="card-img-top"
                                alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">Proavance</h5>
                            <p className="pt-2 pb-4">20%</p> 
                            <a className="btn-secundario flex"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="w-5 h-5 flex mr-2 mt-0"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clip-rule="evenodd"></path>
                            </svg><i className=""> Más información</i></a>
                        </div>
                    </div>
                </div>

                }      

                         
    
                
        </div>
        </>
    )
}
export default ChangeCap