const atendimentos = {

"Transferência entre Regionais": d => `${d.protocolo}

TRASNFERIDO ENTRE REGIONAIS

Cliente pertencia a outra CRM, sendo necessário a transferência.`,


  "Lentidão": d => `${d.protocolo}

Cliente com lentidão, verificado configurações do roteador, feito reinício, e testes após, retornando ao padrão.`,

"Lentidão ( RECORRENTE )": d => `${d.protocolo}

Cliente com lentidão, verificado configurações do roteador, feito reinício, e testes após, não retornou ao padrão, por ser recorrente foi feita a liberação de visita

Ouve atendimento nos últimos 30 dias: Sim / Não

Ouve visita técnica nos últimos 30 dias: Sim / Não

------------------------------------------------------------


Solicitante: ${d.nome}

Telefone para contato: ${d.telefone}

Endereço: ${d.endereco} ( verificar complemento do endereço )`,


 "Lentidão – Velocidade Alta, Mas Não Atinge a Velocidade Contratada" : d => `${d.protocolo}

Cliente testou internet com cabo de rede, feito configurações, reinício e testes após, mais mesmo assim não passa dos 80% garantido pela Anatel.

Cabo de rede compátivel com plano: Sim / Não

Quantos Mbps está chegando: ( Peça ao cliente para testar no Speed Test)


Plano contratado: ( Colocar plano atual )

------------------------------------------------------------


Solicitante: ${d.nome}

Telefone para contato: ${d.telefone}

Endereço: ${d.endereco} ( verificar complemento do endereço )`,


"Cliente Atenuado": d => `${d.protocolo}

CLIENTE COM SINAL ATENUADO

Telefone de contato para visita: ${d.telefone}

Solicitante: ${d.nome}

------------------------------------------------------------


SINAL:

Endereço: ${d.endereco} ( verificar complemento do endereço )`,



"Sem Acesso – Cliente Autenticado - 2": d => `${d.protocolo}

SEM ACESSO A INTERNET

Cliente autenticado no Radius, mas conectado, sem acesso à internet mesmo após configurações, testes e reinício.

Cliente testou em mais de um dispositivo: Sim / Não

Cliente conectou na rede 5G: Sim / Não

------------------------------------------------------------


Solicitante: ${d.nome}

Telefone para contato: ${d.telefone}

Endereço: ${d.endereco} ( verificar complemento do endereço )`,



  "Sem Acesso – Cliente Não Autenticado - 1": d => `${d.protocolo}

CLIENTE COM LOSS INDIVIDUAL

Telefone de contato para visita: ${d.telefone}

Solicitante: ${d.nome}

------------------------------------------------------------


SN:

QUEDA:

Endereço: ${d.endereco} ( verificar complemento do endereço )`,

"DYINGGASP": d => `${d.protocolo}


CLIENTE SEM ACESSO

Erro de DyingGasp no UNM, porem aparelho está ligado, feito teste de colocar roteador em outra tomada, sem sem sucesso 

Solicitante: ${d.nome}

Telefone de contato para visita: ${d.telefone}

-----------------------------------------------------------

SN:

QUEDA:

Endereço: ${d.endereco} ( verificar complemento do endereço )`,


"IPV4 Dinâmico ( IP Fixo)": d => `${d.protocolo}

Cliente solicitou que fosse removido do CGNAT e que fosse colocado no IPV4 Dinâmico.

Informado ao cliente que a Vero não faz mais vendas de IP Fixo para CPF somente para CNPJ.`,



"DMZ (Redirecionamento de Portas)": d => `${d.protocolo}

Cliente solicitou redirecionamento de portas para o Ip solicitado

Redirecionado para qual IP: 

Feito o redirecionamento de acordo com a solicitação do cliente.`,


"Amarrar IP": d => `${d.protocolo}

Cliente solicitou que amarrasse o IP no equipamento pessoal.

IP solicitado:

Feito configuração de acordo com a solicitação do cliente.`,




"Configuração do Equipamento": d => `${d.protocolo}

Cliente solicitou configurações específicas do roteador.

Sendo aplicada de acordo com a solicitação.`,



"Cabos Baixas": d => `${d.protocolo}

Cliente entrou em contato informando que os cabos de fibra na sua casa estão baixos, saindo fora do padrão.

Telefone de contato para visita: ${d.telefone}

Solicitante: ${d.nome}

------------------------------------------------------------

Endereço: ${d.endereco} ( verificar complemento do endereço )`,


"QUEDAS PPPOE": d => `${d.protocolo}

Cliente tendo várias desconexões diárias, ultrapassando o mínimo de 4 quedas diárias.

Maior número de quedas:

Solicitante: ${d.nome}

Telefone para contato: ${d.telefone}

Endereço: ${d.endereco} ( verificar complemento do endereço )`,


"Deathorize Sem Sucesso": d => `${d.protocolo}

DEATHORIZE SEM SUCESSO

Cliente estava desconectado no Adapter e conectado no UNM, feito deathorize na ONT do cliente, mais não ouve autenticação no Radius, sendo assim, necessário visita técnica

Telefone de contato para visita: ${d.telefone}

Solicitante: ${d.nome}

------------------------------------------------------------


SN:

QUEDA:

Endereço: ${d.endereco} ( verificar complemento do endereço )`,


"Deathorize Com Sucesso": d => `${d.protocolo}

Cliente estava desconectado no Adapter e conectado no UNM, feito deathorize na ONT do cliente, ouve autenticação no Radius, após isso feito configurações testes e reinício, voltando ao normal.`,


"Mudança de Endereço": d => `${d.protocolo}

MUDANÇA DE ENDEREÇO

Solicitante: ${d.nome}

Telefone: ${d.telefone}

Endereço novo:

Endereço antigo: ${d.endereco} 

Tem viabilidade: Sim / Não

------------------------------------------------------------

Realizada atualização de endereço no sistema conforme solicitação do cliente.`,

"Alteração de senha WIFI" : d => `${d.protocolo}

Cliente entrou em contato, solicitando a troca da senha do roteador.

Sendo alterado de acordo com a solicitação do cliente`,



  "Upgrade de Plano": d => `${d.protocolo}

UPGRADE / DOWNGRADE

Cliente informado sobre a troca de plano, ofertado para o cliente o plano abaixo.

Plano Antigo: ${d.planoAntigo}

Plano Novo: (Colaborador deve adicionar o plano ofertado)

Plano com chip: Sim / Não

Cliente ciente da fidelidade.`,


"Desbloqueio por Confiança": d => `${d.protocolo}

Cliente está suspenso por falta de pagamento, solicitou habilitação por confiança, verificado as informações abaixo

Ouve habilitação nos últimos 30 dias:  Sim / Não

Cliente foi habilitado: Sim / Não

Realizado o desbloqueio por confiança conforme solicitação do cliente.`,

"Duvidas sobre faturas": d => `${d.protocolo}

DUVIDAS SOBRE FATURAS

Cliente ligou questionando as faturas, sendo esclarecido as duvidas do cliente em linha`,



"Contestação de Faturas": d => `${d.protocolo}

Cliente entra em contato informando que as faturas estão sendo geradas com o valor errado, verificado as informações abaixo.

Fatura estava incorreta: Sim / Não  

Teve valor contestado: Sim / Não`,



"Solicitação de Negociação": d => `${d.protocolo}

Cliente solcitou negociação da fatura vencida.

Fatura já havia vencido a mais de 30 dias: Sim / Não.`,



"Renegociação": d => `${d.protocolo}

RENEGOCIAÇÃO

Cliente solicitou renegociação da fatura, por não conseguir dentro pagar no prazo, informado a cliente que não é possível.`,



"Reenvio de Fatura" : d => `${d.protocolo}

Cliente entrou em contato solicitando o reenvio de fatura.

Feito o Reenvio de acordo com a solicitação do cliente.`,



"Reenvio de SimCard" : d => `${d.protocolo}

REENVIO DE SIMCARD

Cliente entrou em contato informando que seu chip ainda não chegou, sendo assim foi solicitado o reenvio de SimCard no Simetra.

Número é portabilidade: Sim / Não

Número Reenviado: 

Número de protocolo SIMETRA:`,



"Ativação de Chip": d => `${d.protocolo}

ATIVAÇÃO DE CHIP

Cliente solicita ativação do número abaixo

Número ativado:`,



"Configuração APN": d => `${d.protocolo}

Cliente entrou em contato informando que seu chip, não estava funcionando a internet móvel, feito configuração APN de acordo com o modelo do celular

Fez habilitação do roaming de dados: Sim / Não

Habilitou 5G/ LTE preferencial: Sim / Não

Tinha cobertura na rede: Sim / Não

Configuração funcionou: Sim / Não`,



"Ativação SVA": d => `${d.protocolo}

ATIVAÇÃO SVA 

Cliente entrou em contato solicitando a ativação do benefício que contém em seu plano.

Benefício ativo: ( Colocar benefício ativo )

Benefício com indisponibilidade: Sim / Não`,



"SLA - Fora do Prazo": d => `${d.protocolo}

SLA - Fora do Prazo

Cliente entrou em contato informando sobre o técnico não ter ido, informado ao cliente sobre ser necessário fazer o reagendamento

Está sendo recorrente: Sim / Não

Foi reagendado: Sim / Não`,


"SLA - Dentro do Prazo": d => `${d.protocolo}

SLA - Dentro do Prazo

Cliente entrou em contato solicitando informações sobre a visita técnica, veirifica e está dentro do prazo de ocorrer.`,



"Instalação Mesh": d => `${d.protocolo}

INSTALAÇÃO REDE MESH

Cliente solicitou contratação de Rede Mesh.

Solicitante: ${d.nome}

Telefone de contato: ${d.telefone}

------------------------------------------------------------

Endereço: ${d.endereco} ( verificar complemento do endereço )`,



"Upgrade Compulsório": d => `${d.protocolo}

TROCA DE EQUIPAMENTO PARA WIFI 6

Cliente solicitou que fosse feito a troca do equipamento para WIFI 6, verificado e plano está de acordo com a tecnologio solicitada.

Solicitante: ${d.nome}

Telefone de contato: ${d.telefone}

------------------------------------------------------------

Endereço: ${d.endereco} ( verificar complemento do endereço )`,



"Serasa": d => `${d.protocolo}

Cliente informou que seu nome está no Serasa.

Cliente está com pendência financeira: Sim / Não

Foi necessário solicitar a retirada do Serasa: Sim / Não.`,



"Alteração dos Dados Cadastrais": d => `${d.protocolo}

Cliente entrou em contato solicitando a alteração dos dados cadastrais.

Era o titular na linha: Sim / Não
------------------------------------------------------------

Sendo alterado com sucesso.`,



"Debito Automatico": d => `${d.protocolo}

Cliente com dúvidas sobre o débito automático.

Explicado sobre como funciona durante a ligação.`,


"Cancelamento da Portabilidade ": d => `${d.protocolo}

Cliente entrou em contato solicitando o cancelamento do chip, e contém portabilidade

Número já foi portado para outra operadora: Sim / Não`,



"Duvidas Sobre Portabilidade": d => `${d.protocolo}

Cliente entrou em contato com dúvidas sobre como funciona a portabilidade.

Explicado as informações para o cliente em linha.`,



"Solicitação de Portabilidade": d => `${d.protocolo}

Cliente entrou em contato solicitando portabilidade.

Número da portabilidade registrado: (Colaborador deve substituir essa parte pelo número solicitado)`,



"Portabilidade Não Realizada": d => `${d.protocolo}

PORTABILIDADE NÃO REALIZADA

Cliente entrou em contato informando que não foi migrado o número, verificado e portabilidade já estava cancelada, feito processo para habilitar a portabilidade novamente.

Número da Portabilidade:`,


};

