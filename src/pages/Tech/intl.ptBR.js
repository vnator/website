const tech_ptBR = {
  title: 'Tecnologia',
  subtitle: 'Escopo',
  paragraph:
    'A VNATOR é composta por profissionais com mais de 10 anos de experiência na área de tecnologia como arquitetos de software e desenvolvedores, com conhecimento profundo das tecnologias fundamentais que compõem um produto web do lado do servidor(Backend), cliente(Frontend) e dos protocolos de comunicação que podem ser utilizados(http, tcp, websockets…).',
  backend: {
    title: 'Backend',
    paragraph:
      'O desenvolvimento server side deve possuir arquitetura tão eficiente quanto o possível para a finalidade da aplicação, pela nossa vasta experiência generalista não nos prendemos a uma tecnologia específica, isso nos dá a flexibilidade para atuar na tecnologia ideal para atender qualquer cenário.',
    architecturalPatterns: {
      title: 'Architectural Patterns',
      paragraph:
        'Nossa experiência em desenvolvimento de aplicações, se estende por diversos padrões de arquitetura, como Sistemas Monolíticos para aplicações focadas em uma estrutura simples e exata, sistemas multi tenancy, microservices ou Event Sourcing complexos com integrações de diversos serviços com alta escalabilidade. Rest full APIs seguindo boas práticas de arquitetura e organização de rotas, APIs GraphQL com infraestrutura segura e escalável economizando acesso de recurso com tráfego de informações específicas. Aplicações serverless fazendo uso dos melhores recursos de service providers.',
    },
    languages: {
      title: 'Linguagens de Programação',
      paragraph: {
        intro:
          'A adaptabilidade da VNATOR se estende por diversos padrões e linguagens, possuimos imensa facilidade em adaptar nos a novas tecnologias ou paradigmas.',
        java:
          'Estruturas declarativas e patterns resilientes como na linguagem de programação Orientada a Objeto Java, são uma rotina em nossas aplicações.',
        python:
          'Houve muito tempo e estudo investidos por nossos colaboradores em Python pela sua versatilidade como linguagem e ambientes de aplicação.',
        haskell:
          'Temos fascínio por linguagens funcionais(Haskell), mesmo em linguagens imperativas procuramos aplicar conceitos funcionais quando viável.',
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
          'Fazer a correta arquitetura de armazenamento dos dados é fundamental para utilizar informações de maneira concisa e eficiente. Escolher a tecnologia de banco de dados correta, quais as ferramentas e como desenhar a relação das informações.',
        sql:
          'Persistência dos dados utilizando banco de dados relacional é uma alternativa comum e segura, fazendo uso da normalização e dos recursos que cada um dos SGBD (Sistema de Gerenciamento de Banco de Dados) disponibilizam, por mais que todos sigam as normas SQL, cada um deles possui suas particularidades.',
        noSql:
          'Também podemos fazer uso de noSQL ou banco de dados não relacional, que tem uma característica muito simples de <quote>chave:valor</quote> e uma eficiência para armazenamento de dados simples e menos complexos.',
        redis:
          'Seguindo essa mesma idéia podemos falar dos bancos de dados em memória como Redis, famosos por reduzirem o tempo de acesso aos dados, sendo uma forma interessante de compartilhar dados entre diferentes aplicações com baixo custo de acessso.',
        orm:
          'Aplicações que necessitem de um modelo relacional, podem utilizar ORM (Object-relational mapping), ferramentas que facilitam o desenvolvimento de aplicações e padronização do acesso aos dados. O framework Hibernate é sem dúvida uma referência para trabalhar o ORM utilizado na linguagem Java, fazendo uso de anotações ou arquivo XML. Em Python Django faz uso de Herança pra de uma forma muito eficiente trabalhar o ORM. E o sequelize é uma alternativa muito interessante para o NodeJs, sendo uma interface entre o banco de dados e o objeto mapeado como scheama.',
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
          'Se tratando de desenvolvimento web, a nossa linguagem de programação oficial é o javascript nas versões ES2015 e posteriores. Em aplicações que precisem de código mais estruturado e com tipagem estática o TypeScript ou Elm são duas ótimas opções para desenvolvimento, sendo que TypeScript acaba tendo foco maior em Programação Orientada a Objetos com sintaxe similar a javascript, enquanto Elm uma linguagem puramente funcional aplica padrões de tipagem estática e sintaxe idênticas a Haskell, em acréscimo posso citar que Elm oferece uma segurança relevante para o desenvolvimento sem erros de execução. Caso a demanda exija uma linguagem com alto nível estrutural e maior foco na performance, Rust se torna a melhor escolha possível, compilando o código para WASM(Web Assembly é um Formato binário nativo em navegadores modernos) com excelentes recursos nativos para uma aplicação.',
        libraries:
          'React é a Biblioteca para Interfaces que adotamos como oficial na VNATOR, buscamos construir nossas aplicações Client Side como uma SPA(Single Page Application) Responsiva e utilizamos Redux para gestão de estado do frontend, caso a comunicação com o backend seja feita através de GraphQL optamos por utilizar apollo client.',
      },
    },
    mobile: {
      title: 'Mobile',
      paragraph:
        'Em Aplicações mobile podemos oferecer dois caminhos, o desenvolvimento de aplicações com tecnologia híbrida focada em manter um código fonte para ambas as plataformas(iOS e Android), ou apenas desenvolvimento nativo para Android, essa limitação se deve mais pela plataforma do iOS ser restritivo quanto a tecnologias para desenvolvimento de um produto.',
      reactNative: {
        title: 'React Native',
        paragraph:
          'Ferramenta focada em densenvolvimento de aplicações nativas utilizando javascript, tratasse de uma ferramenta ideal para aplicações que nao exijam a performance de uma app nativo, em troca disso utilizamos uma linguagem amplamente adotada pelo mercado que pode ser muito mais fácil em alocar recurso para mantenibilidade do projeto, assim como uma vasta coleção de bibliotecas e componentes mantidas pela comunidade Open Source.',
      },
      flutter: {
        title: 'Flutter',
        paragraph:
          'O Fluter é um kit de desenvolvimento para interfaces, que compila seu código em uma aplicação nativa. Acaba sendo superior a React Native no quesito performance, mas a linguagem de programacao utilizada no Fluter é o Dart. Ja esta sendo bem adotada pelo mercado mas ainda assim nao possui a popularidade do Javascript.',
      },
      androidSdk: {
        title: 'Android SDK',
        paragraph:
          'O desenvolvimento nativo sempre é a melhor opção para um produto que precisa ser eficiente, além disso as linguagens utilizadas para com AndroidSDK são Java ou Kotlin, duas linguagens bem resilientes e com ampla comunidade.',
      },
    },
  },
};

export { tech_ptBR };
