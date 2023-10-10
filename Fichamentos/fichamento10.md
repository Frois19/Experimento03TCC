# One Size Does Not Fit All: An Empirical Study of Containerized Continuous Deployment Workflows

Yang Zhang, Bogdan Vasilescu, Huaimin Wang, and Vladimir Filkov. 2018. One Size Does Not Fit All: An Empirical Study of Containerized Continuous Deployment Workflows. In Proceedings of the 26th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE ’18), November 4–9, 2018, Lake Buena Vista, FL, USA. ACM, New York, NY, USA, 12 pages. doi.org/10.1145/3236024.3236033.

## 1. Fichamento de Conteúdo

Nesse artigo é abordado a utilização de contêineres em ambientes de entrega contínua (CD,  do inglês _Continuous Delivery_) e como as práticas de CD variam entre diferentes organizações. O objetivo é avaliar diferentes estratégias de CD para determinar quais são mais adequadas para cada contexto. O método utilizado foi um estudo empírico realizado com quatro empresas que adotam a CD em ambientes de contêineres. O estudo analisou as práticas de CD utilizadas pelas empresas e avaliou os resultados obtidos com a implementação dessas práticas. Os resultados mostram que não existe uma única estratégia de CD que possa ser aplicada a todas as empresas e que a escolha da estratégia deve ser baseada nas necessidades e características específicas de cada organização.

## 2. Fichamento Bibliográfico 

* _Continuous deployment_ (entrega contínua) é o processo automatizado de colocar _software_ em produção imediatamente após a conclusão de um conjunto de testes de unidade, integração e outros (página 1).

* _Containerization_ (containerização) é uma técnica de virtualização em que um sistema operacional de hospedeiro é dividido em vários ambientes isolados, cada um com sua própria cópia do sistema operacional e das dependências de _software_ necessárias (página 2).

* _Workflow_ é um conjunto de etapas sequenciais que são executadas para realizar uma determinada tarefa ou processo. No contexto do artigo, refere-se aos fluxos de trabalho de CD que foram estudados. (página 3)

## 3. Fichamento de Citações 

* _"Continuous deployment (CD), also referred to as continuous delivery, is the fast-paced, automation-heavy software engineering approach in which teams work in short iterations to produce software that is deployable (production ready) at any time."_

* _"Our findings indicate that developers face trade-offs when choosing between different CD workflows with respect to configurability, simplicity, requirements, performance, stability, developer experience, etc., and we were able to distill some implications for different stakeholders."_

* _"Containerization has transformed CD workflows, promising additional speedups and higher level of abstraction. Containers (or images) encapsulating a packaged application ready for deployment can be specified declaratively, versioned together with the rest of the infrastructure code, built automatically, and published to some cloud-based registry for easy access by users and other applications"_