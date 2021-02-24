## TODO

- solicitar definições do browserlist com Brunão
- documentar variáveis sass font-weight


## IMPORTANTE

- verificar o que o arquivo framework.ts faz exatamente (entendemos o principio, mas não temos conhecimento profundo de como exatamente a auto referencia de interfaces funciona no ts)
- Achamos que no framework.ts não exista a necessidade da property delegate que implementa a interface Framework Delegate, porém, não temos provas praticas ainda, será necessario debuggar, para entender QUANDO esse delegate é passado de fato, e se ele é passado undefined sempre, se ele for passado undefined sempre temos que limar essa property e suas dependencias. ACHAMOS QUE NÃO HÁ NECESSIDADE DO DELEGATE (DA LINHA 14 A 19)
- revisitar os arquivos focusable.ts, theme.ts e activatable.ts para verificar e validar se há necessidade da criação de testes de unidade.


