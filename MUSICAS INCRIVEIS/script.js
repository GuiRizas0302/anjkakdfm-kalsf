let answers = [];
let currentQuestion = 1;

function selectAnswer(question, answer) {
    answers[question - 1] = answer;
    nextQuestion();
}

function nextQuestion() {
    const questionnaire = document.getElementById("questionnaire");

    // Atualizar para a próxima pergunta
    if (currentQuestion === 1) {
        questionnaire.innerHTML = `
            <div class="question">
                <h3>Qual gênero musical você mais gosta?</h3>
                <button class="option" onclick="selectAnswer(2, 'Rock')">Rock</button>
                <button class="option" onclick="selectAnswer(2, 'Pop')">Pop</button>
                <button class="option" onclick="selectAnswer(2, 'Eletrônica')">Eletrônica</button>
                <button class="option" onclick="selectAnswer(2, 'Sertanejo')">Sertanejo</button>
            </div>
        `;
        currentQuestion++;
    } else if (currentQuestion === 2) {
        questionnaire.innerHTML = `
            <div class="question">
                <h3>Você prefere uma música mais agitada ou calma?</h3>
                <button class="option" onclick="selectAnswer(3, 'Agitada')">Agitada</button>
                <button class="option" onclick="selectAnswer(3, 'Calma')">Calma</button>
            </div>
        `;
        currentQuestion++;
    } else {
        showRecommendation();
    }
}

function showRecommendation() {
    const resultDiv = document.getElementById("result");
    const songRecommendation = document.getElementById("songRecommendation");
    const bandRecommendation = document.getElementById("bandRecommendation");

    let song = "";
    let band = "";

    // Lógica para recomendar com base nas respostas
    if (answers[0] === 'Feliz' && answers[1] === 'Rock' && answers[2] === 'Agitada') {
        song = "Don't Stop Me Now - Queen";
        band = "Queen";
    } else if (answers[0] === 'Triste' && answers[1] === 'Pop' && answers[2] === 'Calma') {
        song = "Someone Like You - Adele";
        band = "Adele";
    } else if (answers[0] === 'Relaxado' && answers[1] === 'Eletrônica' && answers[2] === 'Calma') {
        song = "Sunset Lover - Petit Biscuit";
        band = "Petit Biscuit";
    } else if (answers[0] === 'Energético' && answers[1] === 'Rock' && answers[2] === 'Agitada') {
        song = "Enter Sandman - Metallica"
        band = "Metallica" ;
    } else {
        song = "Música aleatória";
        band = "Banda aleatória";
    }

    // Mostrar recomendação
    songRecommendation.textContent = Música = (song);
    bandRecommendation.textContent = Banda = (band)
    // Ocultar questionário e mostrar o resultado
    document.getElementById("questionnaire").style.display = "none";
    resultDiv.classList.remove("hidden");
}