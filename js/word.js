const frases = [
  '"Silêncio e o refúgio das mentes produtivas."',
  "Se seu dia está curto, acorde mais cedo. Se está rápido, desacelere. Se está menos produtivo, gerencie sua energia",
  "A produtividade do trabalho não é responsabilidade do trabalhador mas do gestor.",
  "Nada acontece por acaso, por isso, lutem prol dos seus sonhos: produtividade é fruto de trabalho árduo.",
  '"A questão essencial não é "o quanto acusado você está", mas sim "com o que você está ocupado".',
  "O papel do líder é construir equipes produtivas para que a felicidade decorrente da felicidade contribua para a felicidade pessoal.",
  "Você só chega na grande meta a longo prazo se executar diariamente as pequenas metas diárias.",
  "As pessoas que discordam são as mais construtivas da equepe, mas não são as mais produtivas. ",
  "Em tudo que for fazer na vida, dedique-se por inteiro. Envolva-se e seja envolvido. Emprenhe-se em dar sempre o seu melhor, nunca menos do que isso.",
  "A única coisa que separa você do seu sucesso, são as desculpas que você dá para não fazer as coisas.",
  "Quem não sabe trabalhar em equipe e se relacionar com a hierarquia, não sabe viver em uma democracia. ",
  "Não espere ter pessoas pra fazer alguma coisa, o mundo é movido por pessoas ocupadas. Os desocupados não participam das grandes mudanças do mundo.",
  "Se for importante pra você, vai encontrar uma maneira. Se não, vai encontrar uma desculpa.",
  "As coisas fáceis, simples e grátis, também tem seu preço",
  "Querer algo não é o suficiente para conquistá-lo. É necessário desejo e comprometimento para isso.",
  "O tempo não perdoa quem não sabe trabalhar com ele.",
  "Se você ainda não fracassou na sua carreira, sinal que ainda não arriscou o suficiente.",
  "Foque em seus resultados, pois eles serão o indicador do seu sucesso.",
  "Jamais comece um dia sem antes de tê-lo terminado no papel.",
  "Ocupe sua mente com pensamentos positivos e produtivos e seus passos trilharam em busca de novas realizações",
  "o trabalho se expande de modo a preencher o tempo disponível para a sua realização. Quanto mais tempo, mais importante e exigente o trabalho parece. ",
  '"Os que são loucos o suficiente para pensar que podem mudar o mundo, são os que realmente o fazem." Steve Jobs.',
  '"Nenhum problema pode ser resolvido pelo mesmo estado de consciência que o criou." - Albert Einstein',
  "Você queira ou não. Seus amigos influenciam em você. Você é a média das 5 pessoas com quem fala",
  "Resultados falam que mais que mil palavras",
  '"Mire na lua. Mesmo que você erre cairá entre as estrelas." - Norman Vincent Peale',
  "Trabalhe como se Deus não existisse, e tenha fé como não precisasse trabalhar",
  '"Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam." - Thomas Edison',
  '"Se eu tivesse apenas uma hora para cortar uma árvore, eu usaria os primeiros quarenta e cinco minutos afiando meu machado." - Abraham Lincoln'
  
];
// SCRIPT PARA APRESENTAR FRASES DIÁRIAS 
//const hoje = new Date().getDate();
//document.getElementById("frase").textContent = frases[hoje % frases.length];

// SCRIPT PARA APRESENTAR FRASES ALEATÓRIAS TODA VEZ QUE CARREGA A PÁGINA
const numero = Math.floor(Math.random() * 28);
document.getElementById("frase").textContent = frases[numero]