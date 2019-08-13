const tech_enUS = {
  title: 'Technology',
  paragraph:
    'A VNATOR é composta por profissionais com mais de 10 anos de experiência na área de tecnologia como arquitetos de software e desenvolvedores, com conhecimento profundo das tecnologias fundamentais que compõem um produto web do lado do servidor(Backend), cliente(Frontend) e dos protocolos de comunicação que podem ser utilizados(http, tcp, websockets…).',
  backend: {
    title: 'Backend',
    paragraph:
      'Nosso desenvolvimento server side é focado na estrutura dos dados mais eficiente e possível para a finalidade da aplicação, pela vasta experiência generalizada não nos prendemos a uma tecnologia específica.',
    architecturalPatterns: {
      title: 'Architectural Patterns',
      paragraph:
        'Nossa experiência em desenvolvimento de aplicações, se estende por diversos padrões de arquitetura, como Sistemas Monolíticos para aplicações focadas em uma estrutura simples e exata, Microservices e Event Sourcing pensando em sistemas multi tenancy complexos com integrações de diversos serviços, Desenvolvimento Orientado a Eventos e escalabilidade. Rest APIs seguindo boas práticas de arquitetura e organização de rotas, APIs GraphQL com infraestrutura segura e escalável economizando acesso de recurso com tráfego de informações específicas, Aplicações serverless fazendo uso dos melhores recursos de service providers.',
    },
    languages: {
      title: 'Linguagens de Programação',
      paragraph: {
        intro:
          'Por termos trabalhado com diversas linguagens, adquirimos imensa facilidade em adaptar nos a novas tecnologias ou paradigmas.',
        java:
          'Estruturas declarativas e patterns resilientes como a linguagem de programação Orientada a Objeto Java, são uma rotina em nossas aplicações.',
        python:
          'Houve muito tempo e estudo investidos por nossos colaboradores em Python pela sua versatilidade como linguagem e ambientes de aplicação.',
        haskell:
          'Temos fascínio por linguagens funcionais(Haskell <3), mesmo em linguagens imperativas procuramos aplicar conceitos funcionais quando viável.',
        node:
          'Caso sua demanda exija Javascript NodeJS, adquirimos um profundo conhecimento de seus recursos e limitações, sabemos como extrair o melhor dessa linguagem que possui uma comunidade que produz uma quantidade extraordinária de ferramentas, bibliotecas e plataformas.',
        tcl:
          'TCL é uma linguagem de programação, que pode ser utilizado como script (fazendo uso do interpretador TCL), também pode ser encontrado dentro do próprio python através da biblioteca tkinter, ou pode ser utilizado como uma biblioteca no código C; TCL é uma linguagem multiplataforma, muito poderoso, leve e elegante.',
        rust:
          'Por fim nosso amor mais profundo é dedicado a linguagens que nos dão um controle primordial sobre o processamento do dado, como C/C++ e Rust.',
      },
    },
    persistence: {
      title: 'Persistencia',
      paragraph: {
        intro:
          'Fazer a correta arquitetura de armazenamento dos dados é fundamental para utilizar informações de forma concisa e eficiente, entendendo conforme a necessidade do sistema seja consulta ou inserção qual deve ser favorecido em cada caso.',
        sql:
          'A persistência dos dados utilizando banco de dados relacional, fazendo uso da normalização e dos recursos que cada um dos SGBD (Sistema de Gerenciamento de Banco de Dados) disponibilizam, por mais que todos sigam as normas SQL, cada um deles possui suas particularidades.',
        noSql:
          'Também podemos fazer uso de noSQL ou banco de dados não relacional, que tem uma característica muito simples de “chave:valor” e uma eficiência para armazenamento de dados simples e menos complexos.',
        reddis:
          'Seguindo essa mesma idéia podemos falar do banco de dados em memória como Redis, famosos por reduzirem o tempo de acesso aos dados, sendo uma forma interessante de compartilhar dados entre diferentes aplicações com baixo custo de leitura/escrita.',
        orm:
          'Aplicações que necessitem de um modelo relacional, podem utilizar ORM (Object-relational mapping), ferramentas que facilitam o desenvolvimento de aplicações e padronização do acesso aos dados. O framework Hibernate é sem dúvida uma referência para trabalhar o ORM utilizado na linguagem Java, fazendo uso de anotações ou arquivo XML. Em Python Django faz uso de Herança pra de uma forma muito eficiente trabalhar o ORM. E o sequelize é uma alternativa muito interessante para o javascript, sendo uma interface entre o banco de dados e o objeto mapeado como scheama.',
      },
    },
  },
  frontend: {
    title: 'Frontend',
    paragraph:
      'Nosso objetivo com o frontend é manter o desenvolvimento estruturado. Por esse motivo aderimos a stacks de tecnologias específicas, buscando maior produtividade e resiliência.',
    web: {
      title: 'Web',
      paragraph: {
        languages:
          'Se tratando de desenvolvimento web, a nossa linguagem de programacao oficial eh o javascript nas versoes ES2015 e posteriores. Em aplicacoes que precisem de codigo mais estruturado e com tipagem estatica o TypeScript ou Elm sao duas otimas opcoes para desenvolvimento, sendo que TypeScript acaba tendo foco maior em Programacao Orientada a Objetos com sintaxe similar a javascript, enquanto Elm uma linguagem puramente funcional aplica padroes de tipagem estatica e sintaxe identicas a Haskell, em acresimo posso citar que Elm oferece uma seguranca relevante para o desenvolvimente sem erros de execucao. Caso a demanda exija uma linguagem com alto nivel estrutural e maior foco na performance, Rust se torna a melhor escolha possivel, compilando o codigo para WASM(Formato binario nativo em navegadores modernos) com excelentes recursos nativos para uma aplicacao.',
        libraries:
          'React eh a Biblioteca para Interfaces que adotamos como oficial na VNATOR, buscamos construir nossas aplicacoes Client Side como SPAs Responsivas e utilizamos Redux como para gestao de estado da aplicacao, caso a comunicacao com o backend seja feita atraves de GraphQl optamos por utilizar apollo client.',
      },
    },
    mobile: {
      title: 'mobile',
      paragraph:
        'Em Aplicações mobile podemos oferecer dois caminhos, o desenvolvimento de aplicações com tecnologia híbrida focada em manter um código fonte para ambas as plataformas(iOS e Android), ou apenas desenvolvimento nativo para Android, essa limitação se deve mais pela plataforma do iOS ser mais restritivo quanto a tecnologias para desenvolvimento de um produto.',
      reactNative: {
        title: 'React Native',
        paragraph:
          'Ferramenta focada em densenvolvimento de aplicacoes nativas utilizando javascript, tratasse de uma ferramenta ideal para aplicacoes que nao exijam a performance de uma aplicacao nativa, em troca disso utilizamos uma linguagem amplamente adotada pelo mercado que pode ser muito mais facil em alocar recurso para mantenibilidade do projeto, assim como uma vasta colecao de bibliotecas e componentes mantidas pela comunidade Open Source.',
      },
      flutter: {
        title: 'Flutter',
        paragraph:
          'O Fluter eh um kit de desenvolvimento para interfaces, que compila seu codigo em uma aplicacao nativa. Acaba sendo mais performatico que React Native, mas a linguagem de programacao utilizada no Fluter eh o Dart. Ja esta sendo bem adotada pelo mercado mas ainda assim nao possui a popularidade do Javascript.',
      },
      androidSdk: {
        title: 'Android SDK',
        paragraph:
          'O desenvolvimento nativo acaba sendo sempre a melhor opcao quando se espera um produto com a melhor performance possivel, alem disso as linguagens utilizadas para com AndroidSDK sao Java ou Kotlin, duas linguagens que estao bem ',
      },
    },
  },
};

export { tech_enUS };
