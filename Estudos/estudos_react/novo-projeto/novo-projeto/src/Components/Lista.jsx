const Listaa = () => {
  const produtos = ['maça','banana','pera','morango']

  return (
    produtos.map((item, index) => {
      return (   // <---- faltava o return aqui
        <ul key={index} className="flex flex-col gap-[10px]">
          <li className=" py-[10px] px-[20px] bg-red-500 hover:text-violet-700 cursor-pointer text-[20px] border-2 border-black">{item}</li>
        </ul>
      )
    })
  )
}

export default Listaa
