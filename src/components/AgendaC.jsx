import React,{useState} from "react";


const ChangeView = () => {
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
    return(
        <>
        <ul className="nav nav-pills mb-3 mt-5 flex justify-center" id="pills-tab">
            <li className="nav-item text-center">
                <button onClick={() => cambiarOpcion()}
                    className={`nav-link ${ first &&  "border-green-500 border-b text-green-500"}`}>Empresas asociadas</button>
            </li>
            <li className="nav-item" role="presentation">
                <button onClick={() => cambiarOpcion2()} className={`nav-link ${ second &&  "border-green-500 border-b text-green-500"}`}>Empresas no asociadas</button>
            </li>
        </ul>
        <div className="tab-content">
            {
                first &&
                <div className="tab-pane" id="pills-socios">
                <ol className="list-tarifa">
                    <li className="position-relative">
                        <div className="guion-prot"></div>
                        <p className="mt-10">
                            <span className="number">01</span> Costo por cita pactada
                            <small className="font-bold">incl. IGV</small>
                        </p>
                    </li>
                    <div className="precio mt-4 text-left active">
                        <p className="title">Tarifa actual</p>
                        <p className="moneda">
                            <span>S/</span> 100<span>.00</span>
                        </p>
                        <p className="text-verde">* 01 cita gratis al año.</p>
                    </div>
                </ol>
            </div>

            }

            {
                second &&
                <div className="tab-pane" id="pills-nosocios">
                <ol className="list-tarifa">
                    <li className="position-relative">
                        <div className="guion-prot"></div>
                        <p className="">
                            <span className="number">01</span> Costo por cita pactada
                            <small className="font-bold">incl. IGV</small>
                        </p>
                    </li>
                    <div className="precio mt-4 active">
                        <p className="title">Tarifa actual</p>
                        <p className="moneda">
                            <span>S/</span> 150<span>.00</span>
                        </p>
                    </div>
                </ol>
            </div>
            }
            
        </div>
        </>
        
    )
}
export default ChangeView