function openSurprise() {

    const welcome = document.getElementById("welcome");
    const birthday = document.getElementById("birthday");

    welcome.style.animation = "pageEnter 0.6s ease reverse";

    setTimeout(() => {

        welcome.classList.add("hidden");

        birthday.classList.remove("hidden");

        birthday.scrollIntoView({
            behavior: "smooth"
        });

        createConfetti();

    }, 500);
}


/* Secret Surprise */

function secretSurprise() {

    const secret =
        document.getElementById("secret");

    secret.classList.remove("hidden");

    createConfetti();

}


/* Confetti */

function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "💗",
        "💖",
        "💕",
        "✨",
        "🌸",
        "🎂"
    ];

    for (let i = 0; i < 60; i++) {

        const piece =
            document.createElement("div");

        piece.innerHTML =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-40px";

        piece.style.fontSize =
            15 + Math.random() * 20 + "px";

        piece.style.zIndex = "100";

        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);


        const duration =
            2 + Math.random() * 3;

        const rotation =
            360 + Math.random() * 720;


        piece.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${rotation}deg)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(() => {

            piece.remove();

        }, duration * 1000);

    }
}