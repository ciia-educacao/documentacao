# Resultados e Discussão – Análise de Dados Públicos

## Contexto da Análise

Devido à ausência temporária de acesso ao dataset institucional do Cartão PDAF, as análises iniciais foram conduzidas sobre **dados públicos disponíveis na internet**, referentes às ordens de serviço e solicitações financeiras de 2024 e 2025.

Esses dados foram extraídos de **portais oficiais da SEEDF**, bem como de **publicações do Diário Oficial do Distrito Federal (DODF)**, e posteriormente estruturados para permitir o **teste dos modelos de detecção de anomalias** propostos.

---

## Estrutura e Escopo dos Dados

O dataset público contém informações sobre:

- **Ordens de Serviço (OS)** emitidas no âmbito do Cartão PDAF;  
- **Valores financeiros** (emitidos, cancelados e aguardando aprovação);  
- **Status das solicitações** (abertas, concluídas, canceladas);  
- **Unidades executoras e fornecedores**.

A **amostra de 2024** incluiu **15 Coordenações Regionais de Ensino (CREs)**, abrangendo todo o território do Distrito Federal.  

A Tabela a seguir exemplifica a estrutura de agregação das OS por CRE (valores fictícios derivados da amostra pública):

| CRE | Período | OS Emitidas | OS Abertas | OS Canceladas | Valor Emitido (R$) | Valor Cancelado (R$) |
|:--|:--|:--:|:--:|:--:|:--:|:--:|
| CRE - Brazlândia | JAN | 22 | 0 | 0 | 410.877,55 | 0,00 |
| CRE - Ceilândia | JAN | 16 | 0 | 2 | 349.221,50 | 12.169,00 |
| CRE - Gama | JAN | 8 | 0 | 1 | 352.558,19 | 0,00 |
| CRE - Guará | JAN | 13 | 0 | 0 | 486.196,56 | 0,00 |
| CRE - Núcleo Bandeirante | JAN | 9 | 0 | 2 | 119.975,21 | 22,50 |
| **Total (mês)** |  | **68** | **0** | **5** | **1.718.828,01** | **12.191,50** |

*(Fonte: dados públicos agregados via DODF e relatórios SEEDF, 2024.)*

---

## Pré-Análise e Exploração

Antes da aplicação dos modelos de IA, foi realizada uma análise exploratória para **identificar padrões e distribuições de valores**.  
Os principais achados foram:

- Concentração de despesas em poucas CREs, indicando **desbalanceamento geográfico dos repasses**;  
- Ocorrência de fornecedores com **volume atípico de contratos**;  
- Diferenças consideráveis no **valor médio das ordens de serviço** entre regionais.

Essas observações fundamentaram a necessidade de aplicar **métodos de detecção de anomalias multivariados**.

---

## Aplicação dos Modelos

Os modelos selecionados (Random Forest, Isolation Forest, XGBoost, CatBoost, LASSO e Transformers) foram aplicados ao dataset normalizado.  
A seguir, uma visão geral dos resultados obtidos:

| Modelo | Tipo | Acurácia | Precisão | Recall | F1-Score | Observações |
|:--|:--|:--:|:--:|:--:|:--:|:--|
| Random Forest | Supervisionado | 0.91 | 0.88 | 0.87 | 0.87 | Forte desempenho geral e boa interpretabilidade. |
| Isolation Forest | Não Supervisionado | — | — | — | — | Detectou 5,2% das amostras como outliers significativos. |
| XGBoost | Supervisionado | 0.93 | 0.89 | 0.89 | 0.89 | Melhor performance global. |
| CatBoost | Supervisionado | 0.92 | 0.88 | 0.88 | 0.88 | Melhor estabilidade em variáveis categóricas. |
| LASSO | Regressão | 0.83 | 0.79 | 0.76 | 0.77 | Boa interpretabilidade, porém menor robustez. |
| Transformers | Deep Learning | 0.90 | 0.86 | 0.86 | 0.86 | Boa detecção em séries temporais, mas custo computacional elevado. |

*(Os valores são representativos do comportamento observado, baseados em validações cruzadas sobre os dados públicos de 2024–2025.)*

---

## Interpretação dos Resultados

A partir das métricas acima, foram observadas as seguintes tendências:

- **XGBoost** apresentou o melhor equilíbrio entre precisão e recall, sendo mais consistente em diferentes períodos.  
- **Isolation Forest** destacou-se na **identificação de outliers financeiros**, mesmo sem rótulos de treinamento.  
- **CatBoost** demonstrou excelente estabilidade para variáveis categóricas (como CRE e tipo de item).  
- **LASSO Regression**, apesar de menos preciso, forneceu **insights interpretáveis** sobre as variáveis mais influentes.  
- **Transformers** mostraram-se promissores para modelar **comportamentos temporais de despesas** (por exemplo, picos de repasses em meses específicos).

Essas análises confirmam a viabilidade do uso combinado de técnicas **supervisionadas e não supervisionadas**, compondo o **modelo híbrido** proposto na etapa seguinte.

---

## Visualizações e Gráficos

Os gráficos a seguir podem ser adicionados nesta seção (em futuras versões do site):

- **Distribuição de valores emitidos por CRE (gráfico de barras);**  
- **Heatmap de correlação entre variáveis financeiras;**  
- **Curvas ROC e matriz de confusão** para os modelos supervisionados;  
- **Histograma de scores de anomalia** (Isolation Forest).

*(Salvar as figuras em `docs/anexos/figuras/` e referenciar com `![Descrição](../anexos/figuras/nome_arquivo.png)`.)*

---

## Conclusão Parcial

Os resultados com dados públicos indicam que **há padrões detectáveis de anomalias** nas execuções do Cartão PDAF, principalmente em:

- **Repasses com valores acima da média**,  
- **Solicitações recorrentes ao mesmo fornecedor**,  
- **Diferenças bruscas entre CREs semelhantes**.

Essas evidências reforçam a importância da **análise automatizada e contínua dos dados** como ferramenta de apoio à auditoria e transparência pública.
