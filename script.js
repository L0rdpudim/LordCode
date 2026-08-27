const courses = {
    html: {
        title: "HTML",
        description: "Aprenda HTML do básico ao avançado."
    },

    css: {
        title: "CSS",
        description: "Aprenda a criar interfaces modernas e responsivas."
    },

    javascript: {
        title: "JavaScript",
        description: "Aprenda lógica, interatividade e programação web."
    },

    c: {
        title: "C",
        description: "Aprenda lógica de programação e fundamentos da linguagem C."
    }
};

const codeExamples = [
    {
        language: "HTML",
        theme: "code-html",
        code: `<span class="code-tag">&lt;!DOCTYPE</span> <span class="code-directive">html</span><span class="code-tag">&gt;</span>
                <span class="code-tag">&lt;html&gt;</span>
                    <span class="code-tag">&lt;body&gt;</span>
                        <span class="code-tag">&lt;h1&gt;</span><span class="code-text">Hello World!</span><span class="code-tag">&lt;/h1&gt;</span>
                    <span class="code-tag">&lt;/body&gt;</span>
                <span class="code-tag">&lt;/html&gt;</span>`
    },

    {
        language: "CSS",
        theme: "code-css",
        code: `<span class="code-selector">body</span> <span class="code-punctuation">{</span>
                <span class="code-property">background</span><span class="code-punctuation">:</span> <span class="code-value">#0b1020</span><span class="code-punctuation">;</span>
                <span class="code-property">color</span><span class="code-punctuation">:</span> <span class="code-value">white</span><span class="code-punctuation">;</span>
            <span class="code-punctuation">}</span>`
    },

    {
        language: "JavaScript",
        theme: "code-javascript",
        code: `<span class="code-keyword">console</span><span class="code-operator">.</span><span class="code-function">log</span><span class="code-operator">(</span><span class="code-string">"Hello World!"</span><span class="code-operator">)</span><span class="code-operator">;</span>`
    },

    {
        language: "C",
        theme: "code-c",
        code: `<span class="code-keyword">#include</span> <span class="code-text">&lt;stdio.h&gt;</span>

                <span class="code-keyword">int</span> main() {
                    <span class="code-function">printf</span>(<span class="code-string">"Hello World!"</span>);
                    <span class="code-keyword">return</span> 0;
                }`
    },

    {
        language: "Java",
        theme: "code-java",

        code: [
            `<span class="code-keyword">public class</span> <span class="code-class">Main</span> {`,
            `    <span class="code-keyword">public static void</span> main(String[] args) {`,
            `        System.out.println(<span class="code-string">"Hello World!"</span>);`,
            `    }`,
            `}`
        ].join("\n")
    }


];

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

let currentCode = 0;
let currentCourse = null;
let selectedAnswer = null;
let courseProgress = 0;


// ==============================
// CÓDIGO DO HERO
// ==============================

function showCode() {
    const item = codeExamples[currentCode];
    const code = $("#codeExample");

    code.style.opacity = 0;

    setTimeout(() => {
        code.className = item.theme;

        $("#codeLanguage").className =
            `code-language ${item.theme}`;

        $("#codeLanguage").textContent =
            item.language;

        code.innerHTML = item.code;
        code.style.opacity = 1;
    }, 250);

    currentCode =
        (currentCode + 1) % codeExamples.length;
}


// ==============================
// NAVEGAÇÃO
// ==============================

function goHome() {
    $("#courseSite").style.display = "none";
    $("#mainSite").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToCourses() {
    $("#cursos").scrollIntoView({
        behavior: "smooth"
    });
}


// ==============================
// CURSOS
// ==============================

function openCourse(course) {
    currentCourse = course;

    const data = courses[course];

    $("#courseTitle").textContent = data.title;
    $("#courseDescription").textContent = data.description;

    $("#mainSite").style.display = "none";
    $("#courseSite").style.display = "block";

    $("#coursePage").style.display = "block";
    $("#lessonPage").style.display = "none";

    resetAnswer();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function startLesson(index) {
    const lesson =
        $(".lesson[data-lesson='" + index + "']");

    if (!lesson) return;

    const title =
        lesson.querySelector("h3").textContent;

    $("#lessonLabel").textContent =
        `AULA ${String(index + 1).padStart(2, "0")}`;

    $("#lessonTitle").textContent = title;

    $("#coursePage").style.display = "none";
    $("#lessonPage").style.display = "block";

    resetAnswer();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function backToCourses() {
    $("#courseSite").style.display = "none";
    $("#mainSite").style.display = "block";

    $("#cursos").scrollIntoView({
        behavior: "smooth"
    });
}

function backToCourse() {
    $("#lessonPage").style.display = "none";
    $("#coursePage").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==============================
// PROGRESSO
// ==============================

function completeLesson() {
    courseProgress =
        Math.max(courseProgress, 25);

    $("#bigProgress").style.width =
        `${courseProgress}%`;

    $("#overallProgress").textContent =
        `${courseProgress}%`;
}


// ==============================
// EXERCÍCIO
// ==============================

function resetAnswer() {
    selectedAnswer = null;

    $$(".answer-option").forEach(button => {
        button.classList.remove("selected");
    });

    $("#answerResult").textContent = "";
    $("#answerResult").className =
        "answer-result";
}


// ==============================
// NAVBAR
// ==============================

$$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        $$(".nav-link").forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

const observer =
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            $$(".nav-link").forEach(link => {
                link.classList.toggle(
                    "active",
                    link.dataset.section === entry.target.id
                );
            });
        });
    }, {
        threshold: 0.45
    });

$$(".page-section").forEach(section => {
    observer.observe(section);
});


// ==============================
// EVENTOS
// ==============================

$("#homeLink").addEventListener(
    "click",
    goHome
);

$("#loginBtn").addEventListener(
    "click",
    event => {
        event.preventDefault();

        alert(
            "A área de login ainda está em desenvolvimento."
        );
    }
);

$("#startBtn").addEventListener(
    "click",
    scrollToCourses
);

$("#backCourses").addEventListener(
    "click",
    backToCourses
);

$("#backCourse").addEventListener(
    "click",
    backToCourse
);

$("#completeLesson").addEventListener(
    "click",
    completeLesson
);


// ==============================
// CARDS DE CURSO
// ==============================

$$(".course-card").forEach(card => {
    card.addEventListener("click", () => {
        openCourse(card.dataset.course);
    });
});


// ==============================
// AULAS
// ==============================

$$(".lesson").forEach(lesson => {
    lesson.addEventListener("click", () => {
        startLesson(
            Number(lesson.dataset.lesson)
        );
    });
});


// ==============================
// RESPOSTAS
// ==============================

$$(".answer-option").forEach(button => {
    button.addEventListener("click", () => {

        $$(".answer-option").forEach(item => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");
        selectedAnswer = button;

        $("#answerResult").textContent = "";
        $("#answerResult").className =
            "answer-result";
    });
});

$("#sendAnswer").addEventListener(
    "click",
    () => {
        const result = $("#answerResult");

        if (!selectedAnswer) {
            result.textContent =
                "Escolha uma resposta antes de enviar.";

            result.className =
                "answer-result warning";

            return;
        }

        const correct =
            selectedAnswer.dataset.correct === "true";

        result.textContent = correct
            ? "Resposta correta! Muito bem."
            : "Resposta incorreta. Tente novamente.";

        result.className =
            `answer-result ${
                correct ? "correct" : "incorrect"
            }`;
    }
);


// ==============================
// INICIALIZAÇÃO
// ==============================

showCode();

setInterval(showCode, 3500);