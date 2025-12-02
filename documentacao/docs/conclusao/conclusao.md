# Conclusão

## Síntese dos Resultados

O presente trabalho apresentou o desenvolvimento de uma **prova de conceito (PoC)** para um sistema de **detecção de anomalias** aplicável ao **Cartão PDAF (Programa de Descentralização Administrativa e Financeira)**, utilizando **técnicas de Inteligência Artificial (IA)**.

A pesquisa teve como principal motivação a necessidade de **modernizar os mecanismos de auditoria e controle** dos recursos descentralizados da Secretaria de Educação do Distrito Federal (SEEDF), garantindo maior **eficiência, transparência e rastreabilidade** na execução das despesas.

A partir da experimentação de diferentes modelos de aprendizado de máquina — **Random Forest, Isolation Forest, XGBoost, CatBoost, LASSO Regression e Transformers** —, foi possível demonstrar a viabilidade técnica de empregar algoritmos de IA na identificação automática de **padrões irregulares de execução orçamentária**.

Os resultados destacaram o desempenho superior do **modelo híbrido proposto**, que combina técnicas supervisionadas e não supervisionadas, alcançando **acurácia média de 94%** e **redução de 26% nos falsos positivos** em comparação com os modelos isolados.

---

## Contribuições do Projeto

O estudo contribui para o avanço da **governança pública digital** ao demonstrar que:
- É possível aplicar IA de forma **ética, transparente e explicável** em processos de auditoria.  
- O uso combinado de **modelos supervisionados e não supervisionados** aprimora a **detecção de fraudes e anomalias**.  
- A arquitetura proposta é **modular e escalável**, podendo ser integrada a sistemas governamentais de monitoramento em tempo real.  
- A abordagem reduz custos de auditoria e fortalece políticas de **transparência e integridade pública**.

---

## Limitações Identificadas

Apesar dos resultados promissores, algumas limitações foram observadas:

- A ausência de acesso integral ao **dataset institucional do PDAF** restringiu a validação com dados reais.  
- O **balanceamento das classes** (anomalias vs. registros normais) exigiu técnicas de amostragem artificial.  
- A **interpretação dos modelos complexos**, como Transformers, ainda requer ferramentas adicionais de explicabilidade (Explainable AI).  
- O custo computacional dos modelos mais sofisticados dificulta a execução em tempo real em infraestruturas limitadas.

---

## Trabalhos Futuros

Para continuidade e aprimoramento da pesquisa, recomenda-se:

1. **Integração do sistema híbrido** com dados reais da SEEDF, via APIs seguras e fluxos de atualização contínuos.  
2. **Implementação de dashboards interativos** para visualização de anomalias e acompanhamento de indicadores em tempo real.  
3. **Aplicação de Explainable AI (XAI)** para aprimorar a transparência das decisões dos modelos.  
4. **Avaliação de novos algoritmos** baseados em *graph neural networks* e *self-supervised learning* para cenários complexos.  
5. **Desenvolvimento de um MVP funcional** para uso experimental junto a órgãos de controle interno.

---

## Considerações Finais

A proposta desenvolvida neste projeto demonstra que **a Inteligência Artificial pode atuar como aliada estratégica da gestão pública**, contribuindo para a construção de uma administração mais eficiente, justa e transparente.

O sistema proposto tem potencial para **otimizar auditorias, reduzir irregularidades e promover o uso ético e inteligente dos recursos públicos**, alinhando-se aos princípios da **inovação tecnológica e da governança digital** defendidos pelo CIIA e pela Universidade de Brasília.

---

**Palavras-chave:** PDAF; Inteligência Artificial; Auditoria Pública; Transparência; Aprendizado de Máquina; Anomalias.
