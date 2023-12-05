#Gerencia&Confi

Para executar é necessário baixar as bibliotecas react-native-vector-icons e react-native-snap-carousel pois os icones foram retirados delas.

Este código é um exemplo de um aplicativo para Smartphone feito via React Native que apresenta
 uma lista de filmes e permite que o usuário interaja com os mesmo.
O componente app é a raiz do aplicativo e possui um estado que armazena uma lista de objetos que
 representam cada filme. Esses itens têm título, descrição, ano de lançamento e um link para a imagem do pôster do filme.
O componente ScrollView é usado para permitir que o usuário role a lista de filmes quando a lista de filmes for maior que a tela. 
O componente ImageBackground é usado para exibir uma imagem de fundo, que é a imagem do pôster do filme selecionado. 
O componente carrossel é usado para exibir uma lista de filmes em formato carrossel. Cada item do carrossel é representado
por um componente de exibição que contém uma imagem de um pôster de filme, um título de filme e um ícone de reprodução para indicar que o filme pode ser reproduzido.
O estado de plano de fundo é usado para armazenar o link da imagem do pôster do filme selecionado no carrossel e é usado para exibir a imagem de plano de fundo.
O estado activeIndex é usado para armazenar o índice do filme selecionado no carrossel e é usado para exibir informações adicionais sobre o filme selecionado.
O componente _renderItem é uma função passada como parâmetro para o Carrossel responsável por renderizar cada item do carrossel. 
Esta função recebe como parâmetros um objeto item representando o filme e um índice para a posição do item no carrossel.
Um componente TextInput é usado para permitir que o usuário procure um filme específico na lista de filmes.
O componente TouchableOpacity é usado para permitir que o usuário clique no ícone Pesquisar e no ícone Fila (adicionado à lista de filmes para assistir posteriormente).
Esse código também usa os componentes StyleSheet, Text e Icon do React Native para formatar e exibir texto e ícones em seu aplicativo.
A função _renderItem é passada para o componente Carousel e renderiza cada item na lista de filmes. Quando o usuário seleciona um filme no carrossel, a função onSnapToItem é acionada, que atualiza o estado background e activeIndex.






Nome: Breno Vinicius
Matricula: 01566443

Nome: Willams Aldson
Matricula: 01538850

Nome: Gabriel Diniz
Matricula: 01519872

Nome: Gabriel Cavalcante
Matricula: 01561346

Nome: Jair Gomes
Matricula: 01363334
