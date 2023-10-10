# Towards Latency Sensitive Cloud Native Applications: A Performance Study on AWS

I. Pelle, J. Czentye, J. Dóka and B. Sonkoly, "Towards Latency Sensitive Cloud Native Applications: A Performance Study on AWS," 2019 IEEE 12th International Conference on Cloud Computing (CLOUD), Milan, Italy, 2019, pp. 272-280, doi: 10.1109/CLOUD.2019.00054.

## 1. Fichamento de Conteúdo

Esse artigo aborda o problema de desenvolver e implantar aplicativos nativos da nuvem que são sensíveis à latência em ambientes em nuvem pública. Para resolver esse problema, os autores empregaram uma abordagem experimental e conduziram um estudo de desempenho para avaliar a latência de diferentes serviços na nuvem _Amazon Web Services_ (AWS) e comparar o desempenho de diferentes tecnologias de contêineres, como _Docker_ e _Kubernetes_. Os resultados indicam que o _Kubernetes_ pode ter melhor desempenho para aplicativos sensíveis à latência, mas também destacam a importância de ajustar os parâmetros do ambiente em nuvem para obter melhor desempenho. O artigo oferece informações úteis para desenvolvedores e engenheiros de sistemas que trabalham com aplicativos em nuvem e desejam melhorar o desempenho e a latência de seus aplicativos.

## 2. Fichamento Bibliográfico 

* _Latency_ (latência) é o tempo decorrido desde o envio de uma solicitação até o recebimento de uma resposta, e é uma das principais métricas de desempenho de aplicativos (página 1).

* _Function as a Service_ é um modelo de computação em nuvem que permite aos desenvolvedores escrever e executar código em pequenas unidades de execução, conhecidas como funções, sem se preocupar com a complexidade da infraestrutura necessária para executar o código. (página 1).

* _Cloud native_ (computação nativa em nuvem) é um estilo de desenvolvimento de _software_ que aproveita ao máximo a flexibilidade e escalabilidade dos serviços em nuvem (página 2).


## 3. Fichamento de Citações 

* _"On the other hand, runtime environments provided by FaaS solutions, function invocation time, read and write latency of different data stores are affected by the cloud platform and requested services."_

* _"The cloud platform itself contributes to the overall latency mainly by invocation times and external data access times."_

* _"To sum up, if we choose cloud services carefully at design time and the application tolerates delays up to ∼100 ms, then the cloud native approach can be feasible with all of its advantages."_

