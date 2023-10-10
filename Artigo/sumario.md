# Terraform e CDK: Uma análise comparativa entre ferramentas de gerência de infraestrutura

1. João Victor Tadeu Chaves Frois
1. Lucas Gabriel Padrão Rezende

* Cleiton Silva Tavares
* Jose Laerte Pires Xavier Junior
* Nome do orientador acadêmico

## Introdução

1. A área da Engenharia de _Software_ tratada neste trabalho é a gestão de infraestruturas como código.
2. O problema tratado neste trabalho é a escassez de clareza sobre a eficiência de diferentes ferramentas de suporte para o gerenciamento de infraestruturas como código.
3. Resolver este o problema é fundamental para que as equipes de desenvolvimento possam tomar decisões mais assertivas e garantir o sucesso dos projetos na _cloud_.
4. O objetivo geral deste trabalho é avaliar a eficiência do Terraform e do AWS CDK por meio de uma análise comparativa.
5. Os objetivos específicos deste trabalho são: (i) avaliar o impacto da abstração de ferramentas de gestão de infraestrutura; (ii) avaliar o tempo de execução, a facilidade de uso, a escalabilidade e a manutenibilidade das ferramentas; e (iii) avaliar o desempenho do Terraform e do AWS CDK na criação e configuração de recursos comumente utilizados na AWS.

## Fundamentação Teórica

1. O conceito/teoria principal associado a este trabalho é _Devops_. A sua definição neste trabalho é conforme definido pelo artigo "The Path to DevOps" pelo autor Erik Dörnenburg e pelo livro "Manual de DevOps: como obter agilidade, confiabilidade e segurança em organizações tecnológicas" pelos autores Gene Kim  Jez Humble, John Willis, Patrick Debois.
2. O conceito/teoria secundário associado a este trabalho é Infraestrutura como Código. A sua definição neste trabalho é conforme definido pelo artigos "DevSecOps: A Security Model for Infrastructure as Code Over the Cloud" pelos autores Julio Sandobalín, Emilio Insfran e Silvia Abrahão, "Within-Project Defect Prediction of Infrastructure-as-Code Using Product and Process Metrics" pelos autores Stefano Dalla Palma, Dario Di Nucci, Fabio Palomba e Damian A. Tamburri.
    - A primeira ferramenta associado a Infraestrutura como Código é _Terraform_. A sua definição neste trabalho é conforme definido pela empresa HashiCorp, criadora da ferramenta e  no trabalho "Deploying Hadoop Architecture Using Ansible and Terraform" pelos autores Manu Gupta, Mandepudi Nobel Chowdary, Sankeerth Bussa e Chowdary Chennupati Kumar.
    - A segunda ferramenta associado a Infraestrutura como Código é _AWS Cloud Development Kit_. A sua definição neste trabalho é conforme definido por Werner Vogels, Matt Coulter, Nelli Lovchikova e por participações no  livro "AWS Cloud Development Kit (CDK) - The Complete Guide" pelo desenvolvedor Elad Ben-Israel.

## Trabalhos Relacionados

1. O trabalho mais relacionado é o Toward a catalog of software quality metrics for infrastructure code, publicado no ano 2020, porque enriquece a metodologia deste trabalho ao aplicar algumas das métricas do catálogo apresentado para avaliar a qualidade de projetos.
2. O segundo trabalho mais relacionado é Deploying Hadoop Architecture Using Ansible and Terraform, publicado no ano 2021, porque fornece informações e práticas importantes sobre o gerenciamento de infraestrutura, apresentando diferentes abordagens e ferramentas que podem ser úteis, além da aplicabilidade dos testes para verificar a escalabilidades das infraestruturas.
3. O terceiro trabalho mais relacionado é o Towards Reliable Infrastructure as Code, publicado em 2023, pois aborda a automatização das infraestruturas, embora o presente estudo utilize ferramentas diferentes, como AWS CDK e Terraform.
4. O quarto trabalho mais relacionado é To Type or Not to Type? A Systematic Comparison of the Software Quality of JavaScript and TypeScript Applications on GitHub, publicado no ano 2022, porque evidência a
importância de se comparar diferentes tecnologias, neste caso as ferramentas Terraform e CDK.
5. O quinto trabalho mais relacionado é The Seven Sins: Security Smells in Infrastructure as Code Scripts, publicado no ano 2019, porque oferecem _insights_ importantes para a pesquisa atual na detecção de práticas inseguras de codificação em scripts de IaC, servindo como um referencial para a criação de padrões sólidos de IaC.

## Materiais e Métodos

1. O tipo de pesquisa adotado neste trabalho é descritiva quantitativa e qualitativa aplicada, por que manipula as variaveis e descreve e comparar as ferramentas com base nas metricas coletadas
2. Os materiais utilizados neste trabalho são computadores e recursos disponiveis na AWS.
3. Os métodos empregados neste trabalho são coleta de dados, experimentos praticos e controlados.
4. As métricas de avaliação são escalabilidade, manutenibilidade, tempo de execução, tempo de implementação e facilidade de uso.
5. As etapa de execução do trabalho são: criação dos scripts dos módulos base; coletar as métricas dos scritps; montar visualização gráfica e textual; elaborar plano de aula; executar e coletar as métricas; montar visualização gráfica e textual; revisar o documento e preparar a apresentação final.
