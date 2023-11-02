import React, { useState } from "react";


const FeriasSec = () => {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)
    const cambiarOpcion = () => {
        setfirst(!first)
        setsecond(false)
        setthird(false)
        setfourth(false)
    }
    const cambiarOpcion2 = () => {
        setsecond(!second)
        setfirst(false)
        setthird(false)
        setfourth(false)
    }
    const cambiarOpcion3 = () => {
        setthird(!third)
        setfirst(false)
        setsecond(false)
        setfourth(false)
    }
    const cambiarOpcion4 = () => {
        setfourth(!fourth)
        setfirst(false)
        setsecond(false)
        setthird(false)
    }

    return (
        <>
            <ul className="nav nav-pills m-3 mt-5 flex justify-center pl-4 pr-4" id="pills-tab">
                <li className="nav-item">
                    <button onClick={() => cambiarOpcion()}
                        className={`nav-link ${first && "border-green-500 border-b text-green-500"}`}>Tecnología</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => cambiarOpcion2()} className={`nav-link ${second && "border-green-500 border-b text-green-500"}`}>Educación</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => cambiarOpcion3()} className={`nav-link ${third && "border-green-500 border-b text-green-500"}`}>Automotriz</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => cambiarOpcion4()} className={`nav-link ${fourth && "border-green-500 border-b text-green-500"}`}>Construcción</button>
                </li>
            </ul>

            {
                first &&
                <div className="tab-content mt-5" id="nav-tabContent">

                <div className="expl p-10 justify-center flex">

                    <img
                        src="./images/xploratec.webp"
                        width="250"
                        alt="..."
                    />

                </div>
                <div className="tab-pane fade active show items" id="nav-tecnologia" role="tabpanel" aria-labelledby="nav-tecnologia-tab">

                    <div className="grid grid-cols-3 gap-8 flex">

                        <div className="col">

                            <div className="card h-100">

                                <img src="./images/feria1.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria2.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria3.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria4.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria5.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria6.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria7.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria8.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria9.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
                
            }

            {
                second &&
                <div className="tab-content mt-5" id="nav-tabContent">

                <div className="expl p-10 justify-center flex">

                    <img
                        src="./images/expoeduca.webp"
                        width="250"
                        alt="..."
                    />

                </div>
                <div className="tab-pane fade active show items" id="nav-tecnologia" role="tabpanel" aria-labelledby="nav-tecnologia-tab">

                    <div className="grid grid-cols-3 gap-8 flex">

                        <div className="col">

                            <div className="card h-100">

                                <img src="./images/EE-Express-post.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/eei.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/EE-Idiomas-CCIA-APP y FB.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            }

            {
                third &&
                <div className="tab-content mt-5" id="nav-tabContent">

                <div className="expl p-10 justify-center flex">

                    <img
                        src="./images/motorfest.webp"
                        width="250"
                        alt="..."
                    />

                </div>
                <div className="tab-pane fade active show items" id="nav-tecnologia" role="tabpanel" aria-labelledby="nav-tecnologia-tab">

                    <div className="grid grid-cols-3 gap-8 flex">

                        <div className="col">

                            <div className="card h-100">

                                <img src="./images/motorfest2.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest3.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest4.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest5.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest6.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest7.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest8.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/motorfest9.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/feria9.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            }

            {
                fourth &&
                <div className="tab-content mt-5" id="nav-tabContent">

                <div className="expl p-10 justify-center flex">

                    <img
                        src="./images/expoaqp.webp"
                        width="250"
                        alt="..."
                    />

                </div>
                <div className="tab-pane fade active show items" id="nav-tecnologia" role="tabpanel" aria-labelledby="nav-tecnologia-tab">

                    <div className="grid grid-cols-3 gap-8 flex">

                        <div className="col">

                            <div className="card h-200">

                                <img src="./images/expoaqp2.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-fit">

                                <img src="./images/expoaqp3.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title">Maraton Inmobiliaria 2021</h5>

                                    <p className="card-text">24, 25 y 26 de Noviembre!</p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp4.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp5.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp6.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp7.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp8.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp9.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>


                        <div className="col mb-4">

                            <div className="card h-100">

                                <img src="./images/expoaqp10.webp" className="card-img-top" loading="lazy" alt="..." />

                                <div className="card-body flex-none">

                                    <h5 className="card-title"></h5>

                                    <p className="card-text"></p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            }
        </>
    )
}
export default FeriasSec