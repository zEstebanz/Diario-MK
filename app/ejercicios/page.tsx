import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Ejercicios = [
    {
        id: 1,
        title: '# Ejercicio',
        consigna: `
    * Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:

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
    {
        id: 2,
        title: '# Ejercicio',
        consigna: `### crear un modulo en node js community".`,
        solucion: "https://github.com/"

    },
    {
        id: 2,
        title: '# Ejercicio',
        consigna: `### crear un modulo en node js community".`,
        solucion: "https://github.com/"

    },
    {
        id: 2,
        title: '# Ejercicio',
        consigna: `### crear un modulo en node js community".`,
        solucion: "https://github.com/"

    },
    {
        id: 2,
        title: '# Ejercicio',
        consigna: `### crear un modulo en node js community".`,
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
        <section className="section-port h-auto min-h-screen pt-16 bg-gray-100">
            <h1 className="text-center font-bold text-4xl md:text-6xl text-white bg-black ">Ejercicios de Lógica</h1>
            <div className='p-4 md:p-8'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-4">
                        {Ejercicios.map((ejercicio, index) => (
                            <div key={index} className="bg-gray-800 rounded p-4 transition duration-300">
                                <h2 className="text-xl md:text-2xl text-white font-bold">{ejercicio.title} {ejercicio.id}</h2>
                                <code className="text-white whitespace-pre-wrap overflow-auto">{ejercicio.consigna}</code>
                                <Link href={ejercicio.solucion} target='_blank' className="block py-2 px-4 mt-4 bg-blue-400 hover:bg-blue-500 text-white rounded flex items-center justify-center transition duration-300">
                                    <FaGithub className='mr-1' /> {ejercicio.title} {ejercicio.id}
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