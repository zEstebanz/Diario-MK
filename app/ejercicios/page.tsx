import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Ejercicios = [
    {
        id: 1,
        title: '# Ejercicio',
        consigna: `
    * Escribe un programa que muestre por consola (con un print) los
    números de 1 a 100 (ambos incluidos y con un salto de línea entre
    cada impresión), sustituyendo los siguientes:

    - Múltiplos de 3 por la palabra "fizz".
    - Múltiplos de 5 por la palabra "buzz".
    - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
`,
        solucion: "https://github.com/"

    },
    {
        id: 2,
        title: '# Ejercicio',
        consigna: `### crear un modulo en node js community".`,
        solucion: "https://github.com/"

    },
]
function page() {
    return (
        <section className="section-port h-auto min-h-screen pt-16">
            <h1 className="text-center font-bold text-6xl pt-10 text-black">Ejercicios de Lógica</h1>
            <div className='p-8'>
                <div className="container">
                    <div className="grid grid-cols-1 gap-8 p-8">

                        {Ejercicios.map((ejercicio, index) => (
                            <div key={index} className="container bg-gray-800 rounded p-4 transition duration-300">
                                <h2 className="text-xl text-white font-bold">{ejercicio.title} {ejercicio.id}</h2>
                                <pre className="text-white">{ejercicio.consigna}</pre>
                                <Link href={ejercicio.solucion} target='_blank'>
                                    <p className="block py-2 px-4 mt-4 bg-blue-400 hover:bg-blue-500 text-white rounded flex items-center justify-center transition duration-300">
                                        <FaGithub className='mr-1' /> {ejercicio.title} {ejercicio.id}
                                    </p>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default page