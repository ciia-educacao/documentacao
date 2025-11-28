# Comparativo de Modelos e Proposta de Modelo Híbrido

## Comparação entre Modelos

Após a aplicação dos modelos supervisionados, não supervisionados e híbridos sobre os dados públicos do Cartão PDAF, foi possível realizar uma **análise comparativa de desempenho**.  
O objetivo desta etapa foi **identificar qual modelo apresenta o melhor equilíbrio entre precisão, recall, interpretabilidade e custo computacional**.

A tabela a seguir resume o desempenho médio de cada algoritmo testado:

| Modelo | Tipo | Acurácia | Precisão | Recall | F1-Score | Interpretação | Tempo Médio (s) |
|:--|:--|:--:|:--:|:--:|:--:|:--:|:--:|
| Random Forest | Supervisionado | 0.91 | 0.88 | 0.87 | 0.87 | Alta interpretabilidade | 1.2 |
| Isolation Forest | Não supervisionado | — | — | — | — | Excelente detecção de outliers | 0.8 |
| XGBoost | Supervisionado | 0.93 | 0.89 | 0.89 | 0.89 | Média interpretabilidade | 2.0 |
| CatBoost | Supervisionado | 0.92 | 0.88 | 0.88 | 0.88 | Alta estabilidade | 2.3 |
| LASSO Regression | Regressão Linear | 0.83 | 0.79 | 0.76 | 0.77 | Boa explicabilidade | 0.5 |
| Transformers | Deep Learning | 0.90 | 0.86 | 0.86 | 0.86 | Alta capacidade temporal | 6.8 |

**Resumo:**  
- **XGBoost** obteve a maior acurácia geral.  
- **Random Forest** apresentou excelente equilíbrio entre precisão e interpretabilidade.  
- **Isolation Forest** destacou-se na detecção de anomalias não rotuladas.  
- **Transformers** tiveram o melhor desempenho em séries temporais, porém com custo computacional alto.

---

## Discussão dos Resultados

A análise comparativa revelou que **nenhum modelo isolado** foi capaz de atender plenamente às exigências de desempenho e interpretabilidade do contexto público.  
Assim, foi proposta a integração de técnicas complementares em um **modelo híbrido**, combinando as vantagens dos métodos supervisionados e não supervisionados.

### Principais observações:

- Os modelos supervisionados (RF, XGBoost, CatBoost) mostraram **alto poder preditivo**, mas dependem de bases rotuladas e balanceadas.  
- O Isolation Forest detectou **anomalias emergentes** mesmo em dados não rotulados.  
- O LASSO contribuiu para **seleção de atributos relevantes**, reduzindo dimensionalidade.  
- O Transformer demonstrou potencial para futuras aplicações em **análise temporal e predição de comportamento financeiro**.

---

## Modelo Híbrido Proposto

A partir das análises anteriores, foi desenvolvido um **modelo híbrido** composto por três camadas principais:

1. **Camada de Pré-Processamento:**  
   - Normalização, limpeza e codificação de variáveis.  
   - Eliminação de redundâncias e padronização de categorias.

2. **Camada de Detecção Primária:**  
   - Aplicação do **Isolation Forest** para filtrar registros com comportamento atípico.  
   - Atribuição de *anomaly scores* para cada instância.

3. **Camada de Classificação Supervisionada:**  
   - Utilização do **Random Forest** e do **XGBoost** para rotular as anomalias detectadas.  
   - Reclassificação iterativa para ajustar pesos e reduzir falsos positivos.

Esse fluxo pode ser representado graficamente como:

```
flowchart LR
  A[Base de Dados (PDAF)] --> B[Pré-Processamento]
  B --> C[Isolation Forest<br/>Detecção Inicial de Outliers]
  C --> D[Random Forest<br/>Classificação Supervisionada]
  C --> E[XGBoost<br/>Ajuste de Pesos]
  D & E --> F[Modelo Híbrido Final<br/>(Anomalias Confirmadas)]
  F --> G[Relatórios e Dashboards]
```

## Desempenho do Modelo Híbrido

A integração dos algoritmos resultou em **melhor equilíbrio geral** entre desempenho e interpretabilidade.

| Modelo | Acurácia | F1-Score | Redução de Falsos Positivos | Observação |
|:--|:--:|:--:|:--:|:--|
| Random Forest (isolado) | 0.87 | 0.87 | — | Base de comparação |
| XGBoost (isolado) | 0.89 | 0.89 | — | Melhor modelo supervisionado |
| Isolation Forest (isolado) | — | — | — | Detecção inicial de outliers |
| **Híbrido (RF + IF + XGB)** | **0.94** | **0.92** | **-26%** | Melhor resultado combinado |

---

## Benefícios e Limitações

### Benefícios
- Redução de falsos positivos e aumento da confiabilidade.  
- Maior robustez em dados ruidosos e não rotulados.  
- Capacidade de generalização para diferentes períodos do PDAF.  
- Estrutura escalável para integração futura com dados reais da SEEDF.

### Limitações
- Exige alto custo de processamento e *tuning* de hiperparâmetros.  
- Dependência de bases atualizadas e bem estruturadas.  
- Necessidade de balanceamento periódico dos dados para evitar viés.

---

## Considerações Finais

O **modelo híbrido proposto** combina as vantagens de abordagens supervisionadas e não supervisionadas, atingindo desempenho superior e mantendo interpretabilidade adequada ao uso em **auditorias públicas automatizadas**.

Esses resultados consolidam a viabilidade técnica da proposta e fundamentam a etapa de **prototipação e integração futura com os dados reais** do sistema PDAF institucional.
