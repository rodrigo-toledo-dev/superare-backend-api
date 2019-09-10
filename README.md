## Instructions for development

- Always create issues/short-description-of-problem branchs
- For deployment use merge requests for master branch


Cadastro de usuário -> Nivel ( admin, mantenedor )

Cadastro de servidores -> Fields ( Nome do cliente, IP do servidor, status(ativo/inativo) e mantenedor_id )

Notificação -> Conditional ( Se um servidor parar de responder é necessário disparar um e-mail para o mantenedor )

CRON Precisamos de uma rotina para pingar os ips dos servidores e se algum parar de responder você deve acessar o metodo de notificação