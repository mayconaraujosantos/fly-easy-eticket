# Airline reservation scraper

> ## Caso de sucesso

1. **Sistema** raspa informacoes sobre o itinerario
2. **Sistema** carrega os dados para serem verificado e confirmado junto à companhia area durante o check-in
3. **Sistema** gerencia todas as informacoes atualizadas sobre
   o **voo**, **passagens** e servicos

> ## Exception - Numero de compra ou codigo de reserva e sobrenome

1. **Sistema** retorna um erro caso o codigo nao exista
2. **Sistema** valida o codigo da reserva ou numero do bilhete
3. **Sistema** valida se o sobrenome digitado seja o mesmo da compra da passagem.
4. **Sistema** valida se o local de ida e partida existe, caso a passagem seja do VOEGOL, validar com a flag_voe_gol
