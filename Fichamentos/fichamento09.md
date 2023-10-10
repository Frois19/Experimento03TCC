# What Helped, and what did not? An Evaluation of the Strategies to Improve Continuous Integration

X. Jin and F. Servant, "What Helped, and what did not? An Evaluation of the Strategies to Improve Continuous Integration," 2021 IEEE/ACM 43rd International Conference on Software Engineering (ICSE), Madrid, ES, 2021, pp. 213-225, doi: 10.1109/ICSE43902.2021.00031.

## 1. Fichamento de Conteúdo

Tem como contexto a prática de integração contínua (CI,  do inglês _Continuous Integration_) em projetos de _software_, que visa melhorar a qualidade do _software_ através de vários procedimentos, como a integração frequente do código-fonte em um repositório compartilhado, testes automatizados e análise estática de código. O problema que o artigo busca resolver é o fato de que, apesar dos benefícios que a CI pode gerar, nem sempre ela é implementada de forma eficiente, e muitas vezes, as práticas adotadas não resultam em melhoria. Para isso, os autores propõem um estudo para avaliar as estratégias que foram utilizadas para melhorar a CI em diferentes projetos de _software_. O método utilizado foi uma revisão sistemática da literatura para identificar as estratégias de melhoria da CI, seguida de uma pesquisa online com desenvolvedores para avaliar a eficácia das estratégias adotadas. Os resultados indicaram que a estratégia mais eficaz foi a automação de testes, seguida pela integração frequente do código-fonte e pela análise estática de código. Além disso, os autores identificaram várias barreiras que podem impedir a implementação bem-sucedida da CI e forneceram recomendações para superar essas barreiras.

## 2. Fichamento Bibliográfico 

* _Continuous Integration_ (integração contínua) é prática de desenvolvimento de _software_ em que os desenvolvedores integram código em um repositório compartilhado várias vezes ao dia, com o objetivo de garantir que o código esteja sempre pronto para ser implantado em produção (página 213).

* _Granularity_ (granularidade) é nível de detalhamento de uma técnica para melhorar a integração contínua, que pode ser de dois tipos: granularidade de testes ou granularidade de _builds_ (página 213).

* _Trade-offs_ é situação em que há um conflito entre diferentes objetivos e é necessário fazer escolhas, com ganhos e perdas em diferentes aspectos. No contexto da melhoria da integração contínua, os _trade-offs_ podem estar relacionados à escolha entre técnicas que reduzem custos e aquelas que priorizam a observação de falhas ou _feedback_ precoce (página 222).


## 3. Fichamento de Citações 

* _"Continuous Integration (CI) is a software development practice by which developers integrate code into a shared repository several times a day."_

* _"Problems of CI include the time to receive feedback from the build process and the computational cost of running builds."_

* _"Most of the proposed techniques to improve CI have the goal of reducing either its time-to-feedback or its computational cost, and they consider the observation of build failures to be more valuable than build passes."_