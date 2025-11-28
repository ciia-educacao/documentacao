# Metodologia – População e Amostra

## Contextualização

O presente estudo foi conduzido com base em **dados públicos e institucionais** relacionados ao **Programa de Descentralização Administrativa e Financeira (PDAF)** da Secretaria de Educação do Distrito Federal (SEEDF).  
O objetivo central da metodologia é **estruturar uma base de dados confiável** que permita **testar e validar modelos de Inteligência Artificial** aplicados à **detecção de anomalias financeiras e operacionais**.

A definição da população e da amostra considerou os seguintes critérios:

- **População-alvo:** todas as **unidades executoras do PDAF**, incluindo **escolas públicas e Coordenações Regionais de Ensino (CREs)**.  
- **Período de referência:** dados de **2024 e 2025**, abrangendo ordens de serviço, solicitações e processos de pagamento.  
- **Fonte de dados:** portais públicos, relatórios da SEEDF, informações do **Sistema Eletrônico de Informações (SEI)** e documentos disponibilizados em **dados.gov.br**.

---

## Estrutura dos Dados Reais

O **dataset real** (a ser integrado futuramente ao sistema proposto) segue o paradigma **ELT – Extract, Load, Transform**, sendo obtido diretamente do banco de dados institucional do PDAF, sob responsabilidade da **Diretoria de Informações Educacionais (DINFE/SEEDF)**.

A Tabela 1 ilustra os principais campos do dataset interno:

| Coluna | Tipo | Descrição |
|:--|:--|:--|
| cd_solicitacao | int8 | Código da solicitação |
| unidade_executora | varchar | Unidade executora (escola/CRE) |
| ds_tipo_solicitacao | text | Descrição do tipo de solicitação |
| ds_solicitacao | varchar | Descrição detalhada |
| dt_solicitacao | timestamp | Data da solicitação |
| dt_acao_fornecedor | timestamp | Data da ação do fornecedor |
| st_acao_fornecedor | text | Status da ação do fornecedor |
| ds_recusa | varchar | Motivo de recusa (se houver) |
| fornecedor | varchar | Nome do fornecedor |
| dbt_updated_at | timestamptz | Data da última atualização |

Esses campos permitem acompanhar o **ciclo completo de execução dos recursos**, desde a solicitação até o fechamento do processo de compra.

---

## Estrutura dos Dados Públicos

Dada a restrição de acesso aos dados internos, foi construído um **dataset público de referência**, derivado de informações abertas sobre o PDAF.  
A Tabela 2 exemplifica a estrutura utilizada para análises experimentais:

| Coluna | Tipo | Descrição |
|:--|:--|:--|
| cd_os | int8 | Código da ordem de serviço |
| cd_solicitacao | int8 | Código da solicitação associada |
| unidade_executora | varchar | Escola ou CRE responsável |
| cd_usuario | varchar | Identificação do usuário |
| ds_solicitacao | varchar | Descrição do serviço |
| nome_item | varchar | Item contratado |
| quantidade | numeric(38,9) | Quantidade solicitada |
| preco_unitario | numeric(38,9) | Valor unitário |
| preco_total | numeric(38,9) | Valor total |
| situacao_os | text | Situação da ordem de serviço |
| fornecedor | varchar | Fornecedor |
| vl_total_os | numeric(38,9) | Valor total da OS |
| justificativa | varchar | Justificativa da compra |

Esses dados, obtidos por meio de scraping e cruzamento de fontes abertas, foram tratados para **garantir consistência e anonimização**, mantendo apenas atributos relevantes à análise de anomalias.

---

## Pré-Processamento dos Dados

As etapas de pré-processamento aplicadas incluíram:

1. **Limpeza de dados faltantes** e remoção de registros inconsistentes.  
2. **Normalização** e padronização dos valores monetários.  
3. **Conversão de datas e codificação categórica** para variáveis numéricas.  
4. **Verificação de duplicidades** entre ordens e solicitações.  
5. **Anonimização de informações sensíveis**, preservando o valor estatístico dos dados.

O resultado dessas etapas foi uma base consolidada, pronta para uso em **modelos de aprendizado supervisionado e não supervisionado**.

---

## Considerações

A metodologia de coleta e tratamento dos dados garante **reprodutibilidade e integridade**, fundamentais para a validação dos modelos de IA.  
As próximas seções detalham as **estratégias de modelagem**, **seleção de algoritmos** e **avaliação de desempenho** aplicadas ao problema.
