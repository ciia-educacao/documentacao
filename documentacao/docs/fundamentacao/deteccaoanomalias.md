# Detecção de Anomalias com Inteligência Artificial

## Conceitos Fundamentais

A **Inteligência Artificial (IA)** é o campo da ciência da computação voltado ao desenvolvimento de sistemas capazes de **executar tarefas que exigem raciocínio, aprendizado e tomada de decisão** semelhantes às humanas.  
Dentro desse campo, o **Aprendizado de Máquina (Machine Learning)** se destaca como o principal conjunto de técnicas aplicadas à **identificação de padrões e detecção de anomalias** em grandes volumes de dados.

A detecção de anomalias consiste em **identificar ocorrências que se desviam significativamente do comportamento esperado**, podendo indicar **erros, fraudes, falhas ou eventos incomuns**.  
Em contextos como auditorias públicas e financeiras, esse tipo de análise é fundamental para **prevenir irregularidades e aprimorar a governança** dos recursos.

---

## Tipos de Aprendizado de Máquina

Os algoritmos de aprendizado de máquina podem ser classificados em três grandes grupos:

1. **Aprendizado Supervisionado:**  
   Baseia-se em dados rotulados, onde cada amostra possui uma categoria conhecida.  
   Modelos como **Random Forest**, **XGBoost** e **CatBoost** são amplamente usados para **classificação de transações legítimas e fraudulentas**.

2. **Aprendizado Não Supervisionado:**  
   Utiliza dados não rotulados, buscando padrões ou agrupamentos naturais.  
   Técnicas como o **Isolation Forest** e o **Autoencoder** são capazes de **detectar anomalias** a partir da distribuição dos dados, sem depender de exemplos prévios de fraude.

3. **Aprendizado Semi-Supervisionado ou Híbrido:**  
   Combina ambos os paradigmas, aproveitando um pequeno conjunto de dados rotulados e um grande volume de dados não rotulados.  
   Esse tipo de abordagem é especialmente útil em cenários de **dados incompletos ou sensíveis**, como registros administrativos e financeiros públicos.

---

## Abordagens para Detecção de Anomalias

Dentre as principais abordagens adotadas na literatura, destacam-se:

- **Modelos Estatísticos:**  
  Identificam desvios em relação à média, mediana ou variância. São simples e interpretáveis, porém limitados em dados complexos.

- **Modelos Baseados em Árvores:**  
  Algoritmos como **Random Forest** e **Isolation Forest** criam múltiplas árvores de decisão para separar padrões normais de anômalos, com alta precisão e robustez a ruído.

- **Modelos Baseados em Regressão:**  
  Utilizam regressões lineares ou regulares (como o **LASSO**) para prever comportamentos esperados e detectar discrepâncias.

- **Modelos de Deep Learning:**  
  Redes neurais, especialmente **Autoencoders** e **Transformers**, são capazes de aprender representações complexas dos dados e capturar anomalias sutis em relações não lineares.

- **Modelos Ensemble (Híbridos):**  
  Combinam diferentes técnicas para aumentar a acurácia e a estabilidade da detecção — abordagem adotada neste projeto.

---

## Aplicações em Auditoria e Finanças Públicas

A aplicação de IA em auditoria pública tem crescido globalmente, principalmente em órgãos de controle e agências de transparência.  
Essas ferramentas permitem:

- Identificar padrões suspeitos em contratações e ordens de serviço;  
- Automatizar a triagem de registros contábeis e processos administrativos;  
- Apoiar decisões baseadas em evidências (data-driven decision making);  
- Reduzir custos e tempo de auditorias tradicionais.

No contexto do **Cartão PDAF**, a IA tem potencial para:

- **Detectar anomalias** em valores de repasse, justificativas de despesa e fornecedores;  
- **Alertar preventivamente** as áreas de controle interno sobre riscos de fraude;  
- **Gerar relatórios de conformidade** de forma automática, aumentando a eficiência do processo fiscalizatório.

---

## Considerações Finais

O uso de Inteligência Artificial para a detecção de anomalias representa uma **ferramenta estratégica para a gestão pública moderna**, permitindo aliar **eficiência operacional e integridade dos gastos**.  
No caso do PDAF, essa tecnologia viabiliza **monitoramento contínuo e proativo**, ampliando a transparência e reduzindo a incidência de erros humanos ou omissões deliberadas.

Assim, esta fundamentação técnica fornece a base conceitual para as **etapas metodológicas** e **experimentos práticos** descritos nas próximas seções do projeto.
