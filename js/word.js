const frases = [
  '"Nunca desista de seus sonhos"',
  "Acredite em você mesmo",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos",
  "A vida é uma jornada, não um destino - Tal pessoa",
  '"O sucesso é a soma de pequenos esforços repetidos dia após dia" - tal pessoa',
  "A vida é 10% do que acontece com você e 90% como você reage a isso",
  "A felicidade não é algo feito. Vem das suas próprias ações",
  "Seja a mudança que você deseja ver no mundo"
];

const hoje = new Date().getDate();
document.getElementById("frase").textContent = frases[hoje % frases.length];
