/* =========================
   CURSOS
========================= */

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


/* =========================
   CÓDIGOS DO HERO
========================= */

const codeExamples = [

    {
        language: "HTML",
        theme: "code-html",

        code: `<span class="code-tag">&lt;!DOCTYPE html&gt;</span>
<span class="code-tag">&lt;html&gt;</span>

    <span class="code-tag">&lt;body&gt;</span>

        <span class="code-tag">&lt;h1&gt;</span>
            <span class="code-text">Hello World!</span>
        <span class="code-tag">&lt;/h1&gt;</span>

    <span class="code-tag">&lt;/body&gt;</span>

<span class="code-tag">&lt;/html&gt;</span>`
    },


    {
        language: "CSS",
        theme: "code-css",

        code: `<span class="code-selector">body</span> {

    <span class="code-property">background</span>:
        <span class="code-value">#0b1020</span>;

    <span class="code-property">color</span>:
        <span class="code-value">white</span>;

}`
    },


    {
        language: "JavaScript",
        theme: "code-javascript",

        code: `<span class="code-keyword">console</span>.
<span class="code-function">log</span>(

    <span class="code-string">"Hello World!"</span>

);`
    },


    {
        language: "C",
        theme: "code-c",

        code: `<span class="code-keyword">#include</span>
<span class="code-text">&lt;stdio.h&gt;</span>

<span class="code-keyword">int</span> main() {

    <span class="code-function">printf</span>(
        <span class="code-string">"Hello World!"</span>
    );

    <span class="code-keyword">return</span> 0;
}`
    },


    {
        language: "Java",
        theme: "code-java",

        code: `<span class="code-keyword">public class</span>
<span class="code-class">Main</span> {

    <span class="code-keyword">public static void</span>
    main(String[] args) {

        System.out.println(
            <span class="code-string">"Hello World!"</span>
        );

    }
}`
    }

];


let currentCode = 0;


/* =========================
   TROCAR CÓDIGO
========================= */

function changeCodeExample() {

    const code = codeExamples[currentCode];

    const codeElement =
        document.getElementById("codeExample");

    const languageElement =
        document.getElementById("codeLanguage");


    codeElement.style.opacity = "0";


    setTimeout(() => {

        codeElement.className =
            code.theme;

        languageElement.className =
            `code-language ${code.theme}`;

        languageElement.textContent =
            code.language;

        codeElement.innerHTML =
            code.code;

        codeElement.style.opacity =
            "1";

    }, 250);


    currentCode++;

    if (currentCode >= codeExamples.length) {
        currentCode = 0;
    }

}


/* =========================
   NAVBAR / SEÇÕES
========================= */

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll(".page-section");


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const currentId =
                    entry.target.id;


                navLinks.forEach(link => {

                    link.classList.remove("active");


                    if (
                        link.dataset.section ===
                        currentId
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {
            threshold: 0.45
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/*
    Clique na navbar.

    Em "Início", "Cursos" e "Sobre nós",
    o comportamento normal da âncora continua funcionando.
*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });


        link.classList.add("active");

    });

});


/* =========================
   VOLTAR PARA A HOME
========================= */

function goHome() {

    const mainSite =
        document.getElementById("mainSite");

    const courseSite =
        document.getElementById("courseSite");


    courseSite.style.display =
        "none";

    mainSite.style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    navLinks.forEach(link => {

        link.classList.remove("active");

    });


    document
        .querySelector(
            '.nav-link[data-section="inicio"]'
        )
        .classList.add("active");

}


/* =========================
   CURSO ATUAL
========================= */

let currentCourse = null;


/* =========================
   ABRIR CURSO
========================= */

function openCourse(course) {

    currentCourse = course;

    const data =
        courses[course];


    document.getElementById(
        "courseTitle"
    ).textContent =
        data.title;


    document.getElementById(
        "courseDescription"
    ).textContent =
        data.description;


    /*
        Esconde completamente
        a página principal.
    */

    document.getElementById(
        "mainSite"
    ).style.display =
        "none";


    /*
        Mostra somente a área
        do curso.
    */

    document.getElementById(
        "courseSite"
    ).style.display =
        "block";


    document.getElementById(
        "lessonPage"
    ).style.display =
        "none";


    document.getElementById(
        "coursePage"
    ).style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   VOLTAR PARA CURSOS
========================= */

function backToCourses() {

    document.getElementById(
        "courseSite"
    ).style.display =
        "none";


    document.getElementById(
        "mainSite"
    ).style.display =
        "block";


    const coursesSection =
        document.getElementById("cursos");


    setTimeout(() => {

        coursesSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);


    navLinks.forEach(link => {

        link.classList.remove("active");

    });


    document
        .querySelector(
            '.nav-link[data-section="cursos"]'
        )
        .classList.add("active");

}


/* =========================
   ABRIR AULA
========================= */

function startLesson(index) {

    document.getElementById(
        "coursePage"
    ).style.display =
        "none";


    document.getElementById(
        "lessonPage"
    ).style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   VOLTAR PARA TRILHA
========================= */

function backToCourse() {

    document.getElementById(
        "lessonPage"
    ).style.display =
        "none";


    document.getElementById(
        "coursePage"
    ).style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   SCROLL PARA CURSOS
========================= */

function scrollToCourses() {

    document.getElementById(
        "cursos"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   RESPOSTA DO EXERCÍCIO
========================= */

let selectedAnswer = null;


function selectAnswer(button) {

    const options =
        document.querySelectorAll(
            ".answer-option"
        );


    options.forEach(option => {

        option.classList.remove(
            "selected"
        );

    });


    button.classList.add(
        "selected"
    );


    selectedAnswer = button;


    const result =
        document.getElementById(
            "answerResult"
        );


    result.textContent = "";

    result.className =
        "answer-result";

}


/* =========================
   ENVIAR RESPOSTA
========================= */

function sendAnswer() {

    const result =
        document.getElementById(
            "answerResult"
        );


    if (!selectedAnswer) {

        result.textContent =
            "Escolha uma resposta antes de enviar.";

        result.className =
            "answer-result warning";

        return;
    }


    const isCorrect =
        selectedAnswer.dataset.correct ===
        "true";


    if (isCorrect) {

        result.textContent =
            "Resposta correta! Muito bem.";

        result.className =
            "answer-result correct";

    } else {

        result.textContent =
            "Resposta incorreta. Tente novamente.";

        result.className =
            "answer-result incorrect";

    }

}


/* =========================
   CONCLUIR AULA
========================= */

function completeLesson() {

    const progress =
        document.getElementById(
            "bigProgress"
        );


    const progressText =
        document.getElementById(
            "overallProgress"
        );


    progress.style.width =
        "50%";


    progressText.textContent =
        "50%";

}


/* =========================
   INICIAR SITE
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        changeCodeExample();

        setInterval(
            changeCodeExample,
            3500
        );

    }
);