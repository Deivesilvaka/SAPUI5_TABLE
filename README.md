# SAPUI5_TABLE
Tabela em SAPUI5 que exibe dados de usuários de uma api placeholder.

# CÓDIGO NA MASTER

SAPUI5 não é um framework para quem quer fazer um sistema web dinamico, muito menos se você quiser que ele possua código legível e com poucas linhas de código!

Porém, tentei utilizar um pouco do meu conheceimento em javascript para explicar uma forma mais avançada e MUITO mais prática, para se desenvolver aplicações em sapui5.

# O INICIO DE TUDO

SAPUI5 Espera que você passe o resto da sua vida usando classes que estão dentro de objetos, que estão dentro de outros objetos, que estão dentro de outros objetos e por ai vai.

utilizando as práticas de desestruturação. Fiz uma expécie de """"METODO DE IMPORTAÇÃO"""" para que ao invés de eu precisar sempre escrever "new sap.ui.model.json.JSONModel()", eu escrevo apenas uma vez, e consigo utilizar quantas vezes eu quiser somente com "new JSONModel()". E isso diminui demais o tempo de desenvolvimento.

# MAP É SEU MELHOR AMIGO!

Repetir código é um pecado terrível no desenvolvimento, sendo assim. Para coisas repetitivas, como por exemplo, adicionar as colunas do header. Eu usei o map com um array de textos que eu quero que estejam nas primeiras colunas. Dessa forma, conseguimos mais agilidade e menos repetição de código para criar as tabelas, e como o map retorna mais um array que é a versão modificada do array initial, usei um segundo map para adicionar as colunas na tabela ( provavelmente todos já devem fazer dessa forma ( ou muito parecida ) ).


# MAP É SEU MELHOR AMIGO! PT2.

Para a fazer o bind na tabela, o map, mais uma vez salva nossas almas. Com a função keys() que esta na classe Object, mandei de uma vez a constante que esta o json dos dados que veio da api. O resultado foi um array conteno o que ? Isso mesmo meu lindo! Um array!

Mas não um array qualquer, mas sim um array contendo as chaves que precisamos usar para dizer que parâmetro do json queremos usar para dizer no Model o valor que vai na célula.

Usando o map mais uma vez, fui criando os textos que vão para o Model, e no final, fiz o bind com esse novo array retornado. Já que o atributo "content" pode receber um objeto ou um array de objetos, mandei a constante de uma vez. E o resultado, é a nossa tabela, completa e lindona.

linkedin: https://www.linkedin.com/in/luiz-davi-301b2b183/

