# Modelos de Inteligência Artificial

## Seleção de Modelos

O desenvolvimento do sistema proposto envolveu a experimentação de diferentes **modelos de aprendizado de máquina**, com o objetivo de identificar quais técnicas apresentam **melhor desempenho na detecção de anomalias financeiras** no contexto do Cartão PDAF.

Foram testados modelos **supervisionados**, **não supervisionados** e **híbridos**, a fim de comparar sua capacidade de generalização, precisão e interpretabilidade.

Os algoritmos utilizados estão listados a seguir.

---

### Random Forest (RF)

O **Random Forest** é um método de aprendizado supervisionado baseado em **conjuntos de árvores de decisão**.  
Ele gera múltiplas árvores a partir de subconjuntos de dados e variáveis, combinando os resultados por votação.

**Vantagens:**
- Alta precisão em conjuntos heterogêneos.  
- Capacidade de lidar com variáveis numéricas e categóricas.  
- Identificação da importância de cada atributo.

**Aplicação no PDAF:**  
Foi utilizado para **classificar registros suspeitos** de irregularidade, a partir de variáveis como valores de ordens de serviço, tipo de fornecedor e frequência de solicitações.

---

### Isolation Forest (IF)

O **Isolation Forest** é um algoritmo não supervisionado voltado à **detecção de outliers**.  
Ele baseia-se na ideia de que **anomalias são mais fáceis de isolar** em árvores de partição aleatória do que pontos normais.

**Vantagens:**
- Alta eficiência em grandes volumes de dados.  
- Dispensa rótulos de treinamento.  
- Baixa complexidade computacional.

**Aplicação no PDAF:**  
Usado para **detectar comportamentos atípicos** em valores de despesa e na sequência temporal de solicitações.

---

### XGBoost

O **Extreme Gradient Boosting (XGBoost)** é um modelo supervisionado baseado em **boosting de árvores de decisão**, otimizado para velocidade e desempenho.

**Vantagens:**
- Redução de overfitting.  
- Ótima performance em datasets com variáveis correlacionadas.  
- Métricas nativas para classificação e regressão.

**Aplicação no PDAF:**  
Empregado para **analisar padrões complexos** de combinações entre valor total, fornecedor e tipo de item.

---

### CatBoost

O **CatBoost** é um algoritmo supervisionado de **boosting por gradiente**, com suporte nativo a variáveis categóricas sem necessidade de codificação manual.

**Vantagens:**
- Suporte direto a *categorical features*.  
- Maior estabilidade em bases pequenas ou desbalanceadas.  
- Excelente interpretabilidade via SHAP Values.

**Aplicação no PDAF:**  
Usado para **modelar relações não lineares** entre variáveis administrativas e financeiras, mantendo interpretabilidade.

---

### LASSO Regression

A **LASSO (Least Absolute Shrinkage and Selection Operator)** é uma regressão linear regularizada que realiza **seleção automática de variáveis** ao penalizar coeficientes irrelevantes.

**Vantagens:**
- Simplicidade e fácil interpretação.  
- Indica atributos mais relevantes.  
- Evita sobreajuste (*overfitting*).

**Aplicação no PDAF:**  
Empregada para **verificar correlações diretas** entre variáveis monetárias e ocorrência de inconsistências contábeis.

---

### Transformers

Os **Transformers**, originários do aprendizado profundo (*Deep Learning*), utilizam **mecanismos de atenção** que permitem identificar padrões complexos em séries temporais e textos.

**Vantagens:**
- Excelente desempenho em dados sequenciais.  
- Capacidade de aprendizado contextual.  
- Aplicável a detecção de padrões em séries temporais de despesas.

**Aplicação no PDAF:**  
Utilizados para **modelar padrões temporais de repasses e solicitações**, detectando anomalias em cronogramas de execução financeira.

---

## Métricas de Avaliação

Os modelos foram avaliados de acordo com métricas clássicas de desempenho em detecção de anomalias:

| Métrica | Descrição |
|:--|:--|
| **Acurácia (Accuracy)** | Proporção de previsões corretas sobre o total. |
| **Precisão (Precision)** | Percentual de registros classificados como anômalos que realmente o são. |
| **Revocação (Recall)** | Proporção de anomalias corretamente identificadas. |
| **F1-Score** | Média harmônica entre precisão e revocação. |
| **AUC-ROC** | Capacidade do modelo em distinguir entre classes positivas e negativas. |

Além disso, para os modelos não supervisionados (como Isolation Forest), foi usada a métrica de **anomaly score**, que quantifica o grau de isolamento de cada ponto.

---

## Critérios de Seleção

A comparação entre modelos considerou:

- **Desempenho estatístico**, segundo as métricas anteriores;  
- **Tempo de processamento e escalabilidade**;  
- **Facilidade de interpretação** para fins de auditoria pública;  
- **Capacidade de generalização** em dados de diferentes períodos.

A partir dessas análises, foram definidos os **modelos finais** a serem utilizados na **prova de conceito (PoC)**, incluindo uma **abordagem híbrida** combinando Random Forest e Isolation Forest.

---

## Considerações Finais

Os experimentos evidenciaram que a combinação de técnicas supervisionadas e não supervisionadas é a mais adequada ao cenário do PDAF, pois permite **detectar tanto padrões conhecidos de irregularidade quanto comportamentos emergentes**.

Nas próximas seções, são apresentados os **resultados obtidos com dados públicos e simulados**, seguidos da **comparação de desempenho entre modelos** e da proposta do **modelo híbrido final**.
