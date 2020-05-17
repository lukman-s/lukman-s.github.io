const pagesAnswer = {
    page1: 'b',
    page2: 'c',
    page3: 'c',
    page4: 'a',
    page5: 'c'
};


const pages = {
    page2: `<div class="q">
        <h2>Question Two: <br></h2>
    <p>		
        Durand Cup is associated with the game of...</p>
    </div>
    
        <div class="box a">
            <p>	<span class="options">A :</span> Hockey </p>
        </div>
    
        <div class="box b">
            <p> <span class="options">B :</span> Basket ball</p>
        </div>
    
        <div class="box c">
            <p><span class="options">C :</span> Football</p>
        </div>
    
        <div class="box d">
            <p><span class="options">D :</span> None of the above</p>
        </div>`,

    page3: `<div class="q">
        <h2>Question Three: <br></h2>
    <p>Epsom (England) is the place associated with...</p>
    </div>
    
        <div class="box a">
            <p>	<span class="options">A :</span> Football</p>
        </div>
    
        <div class="box b">
            <p> <span class="options">B :</span> Sorcery</p>
        </div>
    
        <div class="box c">
            <p><span class="options">C :</span> Horse Racing</p>
        </div>
    
        <div class="box d">
            <p><span class="options">D :</span> None of the above</p>
        </div>`,

    page4: `<div class="q">
        <h2>Question Four: <br></h2>
    <p> The fastest shorthand writer was...</p>
    </div>
    
        <div class="box a">
            <p>	<span class="options">A :</span> Dr. G. D. Bisht</p>
        </div>
    
        <div class="box b">
            <p> <span class="options">B :</span> J.M. Tagore</p>
        </div>
    
        <div class="box c">
            <p><span class="options">C :</span> J.R.D. Tata</p>
        </div>
    
        <div class="box d">
            <p><span class="options">D :</span> Khudada Khan</p>
        </div>`,

    page5: `<div class="q">
        <h2>Question Five: <br></h2>
    <p> The first China War was fought between...</p>
    </div>
    
        <div class="box a">
            <p>	<span class="options">A :</span> China and Egypt</p>
        </div>
    
        <div class="box b">
            <p> <span class="options">B :</span> China and France</p>
        </div>
    
        <div class="box c">
            <p><span class="options">C :</span> China and Britain</p>
        </div>
    
        <div class="box d">
            <p><span class="options">D :</span> China and Greek</p>
        </div>`,
}; 





let clicked = false;
let rightAns = 0;
let wrongAns = 0;
let score = 0;
let PageNum = 1;


const btnHover = () => {
    document.querySelector('button').classList.add('btnHover');

    setTimeout(() => {
        document.querySelector('button').classList.remove('btnHover')
    }, 2200);

};


const processQuestion = () => {
    let rightOption = pagesAnswer[`page${PageNum}`];
    for (let i = 0; i < 4; i++) {
        document.querySelectorAll('.box')[i].addEventListener('click', (e) => {
            if (e.target.classList.contains(rightOption)) {
                e.target.classList.add('right');
                score++;
                rightAns++;
                document.querySelector('.rightAns').textContent = rightAns;
                document.querySelector('.point').textContent = score;
            } else {
                e.target.classList.add('wrong');
                document.querySelector(`.${rightOption}`).classList.add('right');
                wrongAns++;
                document.querySelector('.wrongAns').textContent = wrongAns;
            }
            clicked = true;
            document.querySelector(`#qbox`).style.pointerEvents='none';
            setTimeout(() => { btnHover() }, 900);
        });
    };            
};

const nextPage = () => {
    processQuestion();
    document.querySelector('button').addEventListener('click', () => {
        setTimeout(() => {
            let container = document.querySelector(`#qbox`);
            container.innerHTML = pages[`page${++PageNum}`];

        }, 300);

         document.querySelector(`#qbox`).style.pointerEvents='auto';
    });
};


nextPage();






