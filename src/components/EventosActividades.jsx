import React, { useState } from "react";


const ChangeEventos = () => {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const cambiarOpcion = () => {
        setfirst(!first)
        setsecond(false)
    }
    const cambiarOpcion2 = () => {
        setsecond(!second)
        setfirst(false)
    }

    return (
        <>
            <div class="col-md-12">
                <ul class="nav nav-pills mb-5 flex justify-center navbar-subnav-botons" id="pills-tab" role="tablist">
                    <li class="nav-item subnav-link now" role="presentation">
                        <button onClick={() => cambiarOpcion()}
                            className={`nav-link ${first && "border-green-500 border-b-4 text-green-500"}`}>Próximos eventos</button>
                    </li>

                    <li class="nav-item subnav-link border-x-0" role="presentation">
                        <button onClick={() => cambiarOpcion2()} className={`nav-link ${second && "border-green-500 border-b-4 text-green-500"}`}>Actividades realizadas</button>
                    </li>
                </ul>
            </div>

            <div class="tab-content mt-10 w-full" id="pills-tabContent">
                {
                    first &&
                    <div class="tab-pane"
                    id="pills-eventos"
                    role="tabpanel"
                    aria-labelledby="pills-eventos-tab">
                    <fieldset class="w-600 flex justify-center">
                        <iframe
                            src="https://www.camara-arequipa.org.pe/public/archivos/agenda/Eventos en agenda.pdf"
                        ></iframe>
                    </fieldset>
                </div>

                }
                
                {
                    second &&
                    <div class="tab-pane"
                    id="pills-actividad"
                    role="tabpanel"
                    aria-labelledby="pills-actividad-tab"
                >
                    <div class="row">
                        <div class="container flex">
                            <div class="grid grid-cols-2 gap-[30px]">
                                <div class="column1">
                                    <div class="card border rounded-lg">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos1.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2">
                                            <h5 class="card-title">
                                                El reconocido profesional Julio Cáceres Arce
                                                asumió el liderazgo de la Cámara de Comercio
                                                e Industria de Arequipa
                                            </h5>
                                            <p>
                                                El acto ceremonial contó con la presencia de
                                                autoridades, el saliente presidente de la
                                                institución, Luís Caballero Vernal,
                                                destacados empresarios arequipeños y los
                                                nuevos miembros del Consejo Directivo
                                                quienes se comprometieron a trabajar
                                                conjuntamente por el desarrollo del
                                                empresariado y de la región.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos3.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 mb-[82px] pl-2 pr-2">
                                            <h5 class="card-title">
                                                Visita de la delegación de Canadá
                                            </h5>
                                            <p>
                                                Tuvimos en la Cámara de Comercio e Industria
                                                de Arequipa la visita de la delegación de
                                                Canadá junto al Embajador de Canadá Louis
                                                Marcotte y al diplomático Andrew Ng y la
                                                Agente de Relaciones Políticas Ana Vergara,
                                                donde se habló acerca de posibles alianzas y
                                                futuras charlas.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos5.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-4 pr-8 mb-[60px]">
                                            <h5 class="card-title">
                                                Tercer evento de Networking del 2022
                                            </h5>
                                            <p>
                                                Realizamos exitosamente nuestro tercer
                                                evento de Networking del 2022 donde
                                                distintos empresarios tuvieron la
                                                oportunidad de reunirse y descubrir futuros
                                                aliados comerciales. Agradecemos la
                                                participación de todos y esperamos que haya
                                                sido un evento que traiga muchos beneficios
                                                y lazos comerciales a futuro.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos7.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-4 pr-8">
                                            <h5 class="card-title">
                                                Sociedad Nacional de Industrias en alianza
                                                con la Cámara de Comercio e Industria de
                                                Arequipa reunieron a empresarios
                                            </h5>
                                            <p>
                                                La Sociedad Nacional de Industrias en
                                                alianza con la Cámara de Comercio e
                                                Industria de Arequipa reunieron a
                                                empresarios, académicos y especialistas para
                                                fomentar el diálogo en torno a la
                                                reactivación de las regiones del sur del
                                                país donde se presentó la agenda productiva
                                                de la Macrorregión Sur 2031. Se realizó
                                                también un debate con 5 candidatos al
                                                Gobierno Regional.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos9.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-4 pr-8 mb-[105px]">
                                            <h5 class="card-title">
                                                Cámara de Comercio e Industria de Arequipa
                                                recibió la grata visita de EuroCámaras Perú
                                            </h5>
                                            <p>
                                                El pasado miércoles 17, la Cámara de
                                                Comercio e Industria de Arequipa recibió la
                                                grata visita de EuroCámaras Perú. Pronto
                                                tendremos más información sobre el gran
                                                inicio de estas alianzas. En esta ocasión
                                                estuvieron presentes: Macarena Cisneros,
                                                Gerente General de la Cámara de Comercio
                                                Peruano Nórdica, Raúl Alta Torre, Presidente
                                                de Eurocámaras, César Iquira, Gerente
                                                General de la Cámara de Comercio e Industria
                                                de Arequipa y María del Pilar Gordillo Jerí.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos11.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-4 pr-8 mb-[75px]">
                                            <h5 class="card-title">
                                                EMPRESARIOS UNIDOS POR EL PERÚ
                                            </h5>
                                            <p>
                                                Se presentaron los representantes de
                                                empresarios y emprendedores de todo el sur
                                                del país en la Cámara de Comercio e
                                                Industria de Arequipa para exponer la
                                                situación que atraviesa nuestra nación y
                                                emitieron un pronunciamiento sobre la
                                                realidad del Perú y la política actual del
                                                Gobierno.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="column2">
                                    <div class="card border rounded-lg">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos2.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2 mb-[4px]">
                                            <h5 class="card-title">
                                                Develo del retrato de Jessica Rodríguez como
                                                Expresidente de la Cámara de Comercio e
                                                Industria de Arequipa
                                            </h5>
                                            <p>
                                                El jueves 3 de noviembre se develó el
                                                retrato de Jessica Rodríguez como
                                                Expresidente de la Cámara de Comercio e
                                                Industria de Arequipa. Asistieron los
                                                familiares, amigos, amigas y personalidades
                                                que acompañaron a la empresaria durante esta
                                                ceremonia.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos4.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2">
                                            <h5 class="card-title">
                                                La Cámara de Comercio e Industria de
                                                Arequipa, recibió a la comisión protocolar
                                                de la Asociación de Exportadores ADEX
                                            </h5>
                                            <p>
                                                El pasado viernes 16 de setiembre, en la
                                                Cámara de Comercio e Industria de Arequipa,
                                                recibimos a la comisión protocolar de la
                                                Asociación de Exportadores ADEX, con quienes
                                                se tendrá un convenio de cooperación con
                                                información, capacitaciones, pasantías, y la
                                                organización de congresos en la ciudad de
                                                Arequipa; entre otros.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos6.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2">
                                            <h5 class="card-title">
                                                La Cámara de Comercio e Industria de
                                                Arequipa tuvimos la Conferencia: “PERUMIN
                                                Inspira - Emprendimiento social
                                                descentralizado
                                            </h5>
                                            <p>
                                                En este evento, se destacó la llegada de los
                                                10 finalistas del principal reconocimiento a
                                                emprendedores sociales, PERUMIN Inspira,
                                                quienes vendrán a PERUMIN 35, desde las
                                                regiones de Puno, San Martín, Cusco, La
                                                Libertad, Cajamarca, Huánuco, entre otros,
                                                para exponer sus iniciativas con alto
                                                impacto en la zonas altoandinas del Perú.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos8.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2 mb-[120px]">
                                            <h5 class="card-title">
                                                Cámara de Comercio e Industria de Arequipa
                                                visita del CAEN
                                            </h5>
                                            <p>
                                                Tuvimos la visita de representantes del
                                                Centro de Altos Estudios Nacionales en la
                                                Cámara de Comercio e Industria de Arequipa,
                                                como parte de su formación y
                                                perfeccionamiento académico.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos10.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2">
                                            <h5 class="card-title">
                                                Homenaje póstumo en La Cámara de Comercio e
                                                Industria de Arequipa en honor a Vito
                                                Rodríguez Rodríguez
                                            </h5>
                                            <p>
                                                Realizamos un homenaje póstumo en La Cámara
                                                de Comercio e Industria de Arequipa en honor
                                                a Vito Rodríguez Rodríguez, destacado
                                                empresario arequipeño que contribuyó al
                                                desarrollo de la región y del país con sus
                                                empresas del Grupo Gloria. Asimismo,
                                                nombramos a uno de nuestros salones como
                                                “Directorio Vito Rodríguez Rodríguez”, para
                                                honrar su legado, visión y dedicación en el
                                                trabajo, según acuerdo unánime en sesión de
                                                Consejo Directivo.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="card border rounded-lg mt-8">
                                        <div
                                            class="card-header flex items-center justify-center"
                                        >
                                            <img
                                                src="./images/eventos12.webp"
                                                class="card-img-top"
                                                alt="..."
                                            />
                                        </div>
                                        <div class="card-body pl-2 pl-2 pr-2">
                                            <h5 class="card-title">
                                                Reunión en la Cámara de Comercio e Industria
                                                de Arequipa con delegación de la CONFIEP
                                            </h5>
                                            <p>
                                                Se reunieron en la Cámara de Comercio e
                                                Industria de Arequipa una delegación de la
                                                CONFIEP : Oscar Caipo, Ana María
                                                Choquehuanca y Alessandra Malaver; para
                                                dialogar sobre líneas de acción y trabajo
                                                conjunto con los empresarios de la ciudad de
                                                Arequipa.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                }

            </div>
        </>
    )
}
export default ChangeEventos