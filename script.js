function noButton() {
    const noMessages = [
        "Niye hayır diyonnn",
        "Kırma beni he de be gülüm",
        "Kızmaya başlıyorum",
        "Bak lojmanı basıp aşkımmmm diye bağırırım",
        "Maçoyum diyorum arızayım diyorum",
        "Nolur desem ?",
        "Biricik karım desem de mi hayır?",
        "Bak bi daha evine bırakmam!! (gerçek)",
        "Hayırına hayırdır",
        "Hayırsa bi tabak da bize ayır",
        "Benden mi gocunuon be gel be özlemişsindir sen beni",
        "Tm artık evete bas selenim (daha prolaşamadık)"
    ];
    const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
    document.querySelector('h1').innerText = randomMessage;

    const yesButton = document.getElementById('yesButton');
    yesButton.style.width = `${yesButton.offsetWidth + 10}px`;

    if (randomMessage === "Tm artık evete bas selenim (daha prolaşamadık)") {
        document.getElementById('sally.jpg').classList.remove('hidden');
        document.getElementById('fireworks').classList.add('active');
    }
}

function yesButton() {
    document.querySelector('h1').innerText = "KAÇOVVVV :) :)";
    document.getElementById('yesButton').remove();
    document.getElementById('noButton').remove();
}
