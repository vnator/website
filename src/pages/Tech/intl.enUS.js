const tech_enUS = {
  title: 'Technology',
  subtitle: 'Scope',
  paragraph:
    'VNATOR is composed for professionals with more than 10 years of  experience in technology information as software architects and developers, with lot of knowledge of core technologies that make up a server-side(Backend), client-side of web product(Frontend) and communication protocols that can be used (http, tcp, websockets…).',
  backend: {
    title: 'Backend',
    paragraph:
      'Server side development should have as efficient architecture as possible for the application, Due to our vast generalist experience we are stuck to a specific technology, it gives us the flexibility to act on the ideal technology to suit any scenario.',
    architecturalPatterns: {
      title: 'Architectural Patterns',
      paragraph:
        'Our application development expertise extends across a variety of architectural standards, such as Monolithic Systems for applications focused on a simple and accurate structure, complex multi tenancy systems, microservices or Event Sourcing with high scalability or a lot of third party service integrations. RestFull APIs by following best practices, with strong patterns in architecture and organization. GraphQL APIs with secure and scalable infrastructure saving resource access with specific information traffic. Serverless applications making use of the best features of service providers.',
    },
    languages: {
      title: 'Programing Languages',
      paragraph: {
        intro:
          'Cause we have worked with several languages, we have become extremely adaptable to new technologies or paradigms.',
        java:
          'Declarative structures and resilient patterns like the Java Object Oriented programming language are a routine in our work.',
        python:
          'We have invested a lot of time and study in Python for its versatility as a language and application environment.',
        haskell:
          'We are fascinated by functional languages (Haskell <3), even in imperative languages we seek to apply functional concepts when we find it appropriate.',
        node:
          'If your demand requires Javascript NodeJS, we have a thorough knowledge of its features and limitations, we know how to get the best of this language that has a community that produces an extraordinary amount of frameworks, libraries and platforms.',
        tcl:
          'TCL is a programming language that can be used as a script (making use of the TCL interpreter), can also be found inside python itself via the tKinter library, or can be used as a library in C/C++; TCL is a multiplatform language, very powerful, light and elegant.',
        rust:
          'Finally our deepest love is devoted to languages that give us primary control over data processing such as C / C ++ and Rust.',
      },
    },
    persistence: {
      title: 'Persistence',
      paragraph: {
        intro:
          'Making the right data storage architecture is critical to using information concisely and efficiently. Choose the right database technology, tools, and how to draw the relationship of information.',
        sql:
          'Data persistence using relational database is a common and secure alternative, making use of the standardization and resources that each DBMS (Database Management System) provides, however much everyone follows SQL standards, everyone has their own peculiarities.',
        noSql:
          'We can use noSQL (non relational database), which has a very simple <quote>key: value</quote> feature and an efficiency for simple and less complex data storage.',
        reddis:
          'Following the same pattern that NoSql, we can talk about in-memory databases like Redis, famous for reducing data access time, being an interesting way to share data between different applications with low access cost.',
        orm:
          'Applications that require a relational model can use ORM (Object-relational mapping), a tool that facilitates application development and standardization of data access. The Hibernate framework is a great example for working with ORM in Java, making use of annotations or XML files. In Python Django makes use of Inheritance to work ORM very efficiently. And sequelize is a very interesting alternative to NodeJs, being an interface between the database and the mapped object as scheama.',
      },
    },
  },
  frontend: {
    title: 'Frontend',
    paragraph:
      "With the frontend our main rule is to keep the development structured. That's why we stick to technology-specific stacks for greater productivity and resilience.",
    web: {
      title: 'Web',
      paragraph: {
        languages:
          'In web development, our official programming language is javascript in ES2015 and later versions. In applications that require more structured and statically typed code, TypeScript or Elm are two great options for development. TypeScript has a greater focus on Object Oriented Programming with javascript-like syntax, while Elm a purely functional language use an identical typing system and syntax to Haskell, in addition I can mention that Elm offers relevant security for development without runtime errors. If demand requires a language with a high structural level and a greater focus on performance, Rust becomes the best choice possible, compiling the WASM code (native binary format in modern browsers) with excellent native features for an application.',
        libraries:
          'React is the Interfaces Library adopted by VNATOR, we seek to build Responsive applications and use Redux for frontend state management. If the communication with the backend is done through GraphQL we chose to use apolloClient.',
      },
    },
    mobile: {
      title: 'Mobile',
      paragraph:
        'In Mobile Applications we can offer two ways, developing applications with hybrid technology focused on maintaining source code for both platforms (iOS and Android), or just native Android development, this limitation is due to the iOS platform being restrictive in technologies for product development.',
      reactNative: {
        title: 'React Native',
        paragraph:
          'Native application development tool using javascript programming language is great for applications that do not require the performance of a native application, instead we use a language widely adopted by the market with many developers in the market to maintain the project, with many libraries and components maintained by the Open Source community.',
      },
      flutter: {
        title: 'Flutter',
        paragraph:
          'Fluter is an interface development kit that compiles your code into a native application. It is superior to React Native in terms of performance, the programming language used in Fluter or Dart, is being well adopted by the market but still does not have the popularity of Javascript.',
      },
      androidSdk: {
        title: 'Android SDK',
        paragraph:
          'Native development is always the best choice for a product that seeks higher performance, and the languages used for AndroidSDK are Java or Kotlin, two very resilient and wide-community languages.',
      },
    },
  },
};

export { tech_enUS };
