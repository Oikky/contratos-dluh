// ============================================================
//  MODELO — Contrato de Prestação de Serviços de Buffet
//  D'Luh Festas (CONTRATADA fixa)
// ============================================================
// Como funciona:
//  - "campos": as lacunas que aparecem no formulário.
//  - "clausulas": o texto do contrato. Use {{id_do_campo}} para
//    inserir o valor de um campo dentro do texto.
//  - Na tela de edição dá pra alterar o texto de qualquer cláusula.

window.MODELO_PADRAO = {
  titulo: "Contrato de Prestação de Serviços de Buffet",

  campos: [
    // --- Contratante ---
    { id: "contratante_nome", label: "Contratante — Nome",        tipo: "text", obrigatorio: true },
    { id: "contratante_end",  label: "Contratante — Endereço",    tipo: "text", obrigatorio: true },
    { id: "contratante_cpf",  label: "Contratante — CPF/CNPJ",    tipo: "doc",  obrigatorio: true },
    // --- Evento ---
    { id: "evento_tipo",   label: "Tipo de evento",               tipo: "text", obrigatorio: true },
    { id: "data_evento",   label: "Data do evento",               tipo: "date", obrigatorio: true },
    { id: "local_evento",  label: "Local/espaço do evento",       tipo: "text", obrigatorio: true },
    { id: "inicio",        label: "Horário de início",            tipo: "hora", obrigatorio: true },
    { id: "fim",           label: "Horário de término",           tipo: "hora", obrigatorio: true },
    { id: "duracao",       label: "Duração do evento",            tipo: "text", obrigatorio: true },
    { id: "tolerancia",    label: "Tolerância",                   tipo: "text", obrigatorio: false },
    { id: "convidados",    label: "Nº estimado de convidados",    tipo: "text", obrigatorio: true },
    { id: "chegada",       label: "Horário de chegada da equipe", tipo: "hora", obrigatorio: true },
    { id: "antecedencia",  label: "Antecedência de preparação",   tipo: "text", obrigatorio: false },
    { id: "garcons",       label: "Qtd. de garçons",              tipo: "text", obrigatorio: false, placeholder: "vazio se não houver" },
    { id: "cozinheiras",   label: "Qtd. de cozinheiras",          tipo: "text", obrigatorio: false, placeholder: "vazio se não houver" },
    { id: "organizadores", label: "Qtd. de organizadores",        tipo: "text", obrigatorio: false, placeholder: "vazio se não houver" },
    { id: "auxiliares",    label: "Qtd. de auxiliares",           tipo: "text", obrigatorio: false, placeholder: "vazio se não houver" },
    // --- Pagamento ---
    { id: "valor_total",   label: "Valor total (R$)",             tipo: "money", obrigatorio: true },
    { id: "valor_extenso", label: "Valor total por extenso",      tipo: "text",  obrigatorio: true },
    { id: "entrada",       label: "Valor da entrada (R$)",        tipo: "money", obrigatorio: true },
    { id: "data_entrada",  label: "Data da entrada",              tipo: "date",  obrigatorio: true },
    // --- Foro / assinatura ---
    { id: "cidade",        label: "Cidade (foro/assinatura)",     tipo: "text",  obrigatorio: true },
  ],

  clausulas: [
    {
      id: "partes",
      titulo: "IDENTIFICAÇÃO DAS PARTES CONTRATANTES",
      texto:
        "CONTRATANTE: {{contratante_nome}}\n" +
        "Endereço: {{contratante_end}}\n" +
        "CPF/CNPJ: {{contratante_cpf}}\n\n" +
        "CONTRATADA: LUCIANA DE AGUILAR FREITAS, proprietária da empresa D'Luh Festas, " +
        "com sede em Montes Claros, na Rua Visconde de Taunay, 278, Bairro Vila Maria Cândida, " +
        "CEP 39402-394, Estado de Minas Gerais. Nacionalidade: Brasileira. Estado civil: Casada. " +
        "Empresária, inscrita no CNPJ sob o nº 47.271.021/0001-05, residente e domiciliada no mesmo endereço.\n\n" +
        "As partes acima identificadas têm, entre si, justo e contratado o presente Contrato de Prestação " +
        "de Serviços de Buffet, oferecido pela D'Luh Festas, que se regerá pelas cláusulas seguintes e pelas " +
        "condições de preço, forma e termo de pagamento descritas neste instrumento."
    },
    {
      id: "c1",
      titulo: "CLÁUSULA 1ª – DO OBJETO DO CONTRATO",
      texto:
        "A presente contratação tem como objeto a prestação de serviços de buffet, pela CONTRATADA, para " +
        "{{evento_tipo}} da CONTRATANTE, a realizar-se no dia {{data_evento}}, no espaço {{local_evento}}, " +
        "com início às {{inicio}}."
    },
    {
      id: "c2",
      titulo: "CLÁUSULA 2ª – DO EVENTO",
      texto:
        "O evento terá duração de {{duracao}}, com tolerância de {{tolerancia}}, e contará com a presença " +
        "estimada de {{convidados}} convidados. O local e horário do evento são os descritos na cláusula anterior."
    },
    {
      id: "c3",
      titulo: "CLÁUSULA 3ª – DAS OBRIGAÇÕES DA CONTRATANTE",
      texto:
        "A CONTRATANTE compromete-se a fornecer todas as informações necessárias para a adequada realização " +
        "do serviço, especificando detalhes do evento e a forma de execução dos serviços contratados."
    },
    {
      id: "c4",
      titulo: "CLÁUSULA 4ª",
      texto: "A CONTRATANTE deverá realizar o pagamento conforme estipulado na Cláusula 11 deste contrato."
    },
    {
      id: "c5",
      titulo: "CLÁUSULA 5ª – DAS OBRIGAÇÕES DA CONTRATADA",
      texto:
        "A CONTRATADA deverá prestar os serviços conforme especificações da CONTRATANTE, iniciando-se às " +
        "{{inicio}} e finalizando às {{fim}}. Os produtos servidos deverão ser de alta qualidade, preparados " +
        "e apresentados dentro das normas de higiene e limpeza."
    },
    {
      id: "c6",
      titulo: "CLÁUSULA 6ª",
      texto:
        "A CONTRATADA se responsabiliza por fornecer utensílios como pratos, copos, taças, talheres, bandejas, " +
        "réchauds, baldes de gelo, entre outras especificações em anexo, para execução dos serviços."
    },
    {
      id: "c7",
      titulo: "CLÁUSULA 7ª",
      texto:
        "A CONTRATADA deverá estar presente no local do evento às {{chegada}}, a fim de realizar a preparação " +
        "do espaço com antecedência mínima de {{antecedencia}}."
    },
    {
      id: "c8",
      titulo: "CLÁUSULA 8ª",
      texto:
        "Serão disponibilizados para a execução do serviço: {{equipe}}."
    },
    {
      id: "c9",
      titulo: "CLÁUSULA 9ª",
      texto:
        "A CONTRATADA será exclusivamente responsável por seus colaboradores, incluindo cumprimento de " +
        "obrigações trabalhistas, previdenciárias, fiscais e sociais."
    },
    {
      id: "c10",
      titulo: "CLÁUSULA 10ª",
      texto:
        "Todos os colaboradores da CONTRATADA deverão estar devidamente uniformizados, apresentando conduta " +
        "adequada e profissional."
    },
    {
      id: "c11",
      titulo: "CLÁUSULA 11ª – DO PREÇO E CONDIÇÕES DE PAGAMENTO",
      texto:
        "O serviço será remunerado no valor de R$ {{valor_total}} ({{valor_extenso}}), com entrada de " +
        "R$ {{entrada}} em {{data_entrada}}."
    },
    {
      id: "c12",
      titulo: "CLÁUSULA 12ª – DO INADIMPLEMENTO",
      texto:
        "Em caso de inadimplemento da CONTRATANTE, incidirão multa de 2%, juros de mora de 1% ao mês e correção " +
        "monetária. Em caso de cobrança judicial, serão acrescidos honorários advocatícios de 20% e custas processuais."
    },
    {
      id: "c13",
      titulo: "CLÁUSULA 13ª – DA DEVOLUÇÃO",
      texto:
        "Todos os utensílios fornecidos deverão ser devolvidos em perfeito estado. Em caso de danos ou extravios, " +
        "a CONTRATANTE deverá arcar com o valor de reposição conforme anexo, no prazo máximo de 24 horas após o " +
        "evento, sob pena de aplicação de multa, juros e correção conforme cláusula anterior."
    },
    {
      id: "c14",
      titulo: "CLÁUSULA 14ª – DA RESCISÃO",
      texto:
        "O contrato poderá ser rescindido unilateralmente por qualquer das partes, mediante comunicação escrita " +
        "com justificativa, respeitado o prazo mínimo de 60 (sessenta) dias antes da data do evento."
    },
    {
      id: "c15",
      titulo: "CLÁUSULA 15ª – DAS MULTAS CONTRATUAIS",
      texto:
        "Salvo rescisão conforme cláusula anterior, a parte que descumprir o contrato deverá pagar multa de 50% " +
        "(cinquenta por cento) do valor total, sem prejuízo de eventuais perdas e danos."
    },
    {
      id: "c16",
      titulo: "CLÁUSULA 16ª – CONDIÇÕES GERAIS",
      texto:
        "Caso necessário, e havendo possibilidade, a CONTRATADA poderá complementar os serviços de buffet durante o evento."
    },
    {
      id: "c17",
      titulo: "CLÁUSULA 17ª",
      texto:
        "O cardápio será preparado de acordo com o número de convidados informado. A CONTRATADA não será " +
        "responsável por eventuais insuficiências caso haja número superior ao estipulado."
    },
    {
      id: "c18",
      titulo: "CLÁUSULA 18ª",
      texto:
        "Qualquer alteração neste contrato deverá ser feita por meio de Termo Aditivo, assinado por ambas as partes."
    },
    {
      id: "c19",
      titulo: "CLÁUSULA 19ª – DO FORO",
      texto:
        "Fica eleito o foro da Comarca de {{cidade}}/MG para dirimir quaisquer dúvidas ou litígios decorrentes deste contrato.\n\n" +
        "{{cidade}}, {{data_entrada}}.\n\n" +
        "_______________________________________\n" +
        "Nome e assinatura do Contratado (D'Luh Festas)\n\n" +
        "_______________________________________\n" +
        "Assinatura do Contratante"
    },
  ],
};
