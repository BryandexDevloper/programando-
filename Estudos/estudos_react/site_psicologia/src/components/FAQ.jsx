import ListaServicos from "./Lista_Servicos";
const Faq = () => {
  return (
    <section>
      <div className=" flex flex-col items-center gap-[10px] w-full px-[20px] py-[10px] bg-white pb-[50px]">
        <div>
          <p className="text-blue-500 text-[20px] text-center">FAQ ---</p>
          <p className="text-blue-500 text-[50px] text-center">
            Principais dúvidas
          </p>
        </div>
        <div className="w-[30%] h-auto max-md:w-full ">
          <ul className="flex flex-col gap-[10px]">
            <ListaServicos
              texto="A TCC entende que as nossas emoções e comportamentos são influenciados pelo nosso pensamento. Então, em linhas gerais, o principal objetivo seria te ensinar a entender o seu modo de pensar, já que muitos dos nossos problemas acabam vindo disso. Depois desta compreensão, serão pensadas em técnicas de manejo específicas.

"
              servicos="Como funciona terapia congnitivo comportamental TCC"
            />
            <ListaServicos
              texto="Os atendimentos podem ser realizados de forma online, em plataformas que são seguras e criptografadas, ou presencialmente em Ribeirão Preto.

"
              servicos="Os atendimentos são on-line ou presencial?"
            />
            <ListaServicos
              texto="Os valores das sessões variam de acordo com a frequência, modalidade do atendimento (online/presencial) e a forma de pagamento. A primeira sessão possui um valor fixo e as demais é feito um planejamento financeiro junto com o paciente. Entre em contato comigo para verificar os valores e condições de pagamento.

"
              servicos="Qual o valor da sessão"
            />
            <ListaServicos
              texto="São sessões de aproximadamente 50 minutos voltadas as necessidades específicas de cada pessoa.

"
              servicos="Quanto tempo dura cada sessão"
            />
            <ListaServicos
              texto="Somente na modalidade reembolso. Disponibilizo o comprovante para que o cliente solicite reembolso junto ao seu convênio (verificar possibilidade junto ao seu convênio).

"
              servicos="Atende atraves de convenio?"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
