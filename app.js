// Project Data
const altGal = {
    'id' : 'project-altgal',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/altgal_1.png',
        'width' : '420px',
        'height' : '595px'
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/altgal_2.jpeg',
        'width' : '554px',
        'height' : '373px'
    },{
        'imgIndex' : 3,
        'src' : 'src/img/project_source/altgal_3.jpeg',
        'width' : '420px',
        'height' : '595px'
    }],
    'index' : '1 Track (Ambient)',
    'description' : '대안공간루프 (AltGalLoop)에서 진행했던 <간결한 생각들 : 생태 - 젠더 - 공산> 전시의 음악으로 참여했습니다. <br>전시는 앞으로의 세계에 대한 여러 음악가들의 의견을 담은 작품들을 컬렉팅한 후, 시민들이 그 음악들을 들으며 갤러리 근방을 돌아다니며 감상하는 과정을 통해 전시의 일부로 참여하게끔 진행하였습니다. <br>저는 앰비언트 트랙 <침잠을 위한 시퀀스 (Sequence for Sinking)>으로 전시에 참여하여, 혼란스러운 세계에서 단단한 논리를 가지고 나아가자는 메세지를 전하고자 했습니다.'
}


const projectList = [altGal]
// DOM Selectors

const chatbotCursor = document.getElementById('chatbot-cursor');
const chatbotDialogueWrapper = document.getElementById('chatbot-dialogue-wrapper');
const introSection = document.getElementById('intro-section');
const cursor = document.getElementById('cursor-section')

const headerUp = document.getElementById('header-up-btn')
const headerDown = document.getElementById('header-down-btn')

const resAndIntroSec = document.getElementById('resume-and-introduction-section')
const resumeSection = document.getElementById('resume-section')
const introductionSection = document.getElementById('introduction-section');
const marker = document.getElementById('marker');
const resumeTitle = document.getElementById('resume-title-wrapper');
const sectionsWrapper = document.getElementById('sections-wrapper')
const resumeHeaderSection = document.getElementById('resume-header-section')
const introHeaderSection = document.getElementById('introduction-header-section')
// const resumeImg = document.getElementById('resume-img')
const resumeContentsWrapper = document.getElementById('contents-wrapper');
const resumeCategoryTitle = document.getElementById('resume-title');
// const resumeDescription = document.getElementById('resume-description');
// const resumeDescWrapper = document.getElementById('resume-desc-wrapper')

const boxes = document.querySelectorAll('.box');

const resumeArrow = document.getElementById('resume-arrow-wrapper')

const portSec = document.getElementById('portfolio-section')
const projectDescWrapper = document.getElementById('project-desc-wrapper')
const dropSentence = document.getElementById('drop-sentence')
const portfolioContentsWrapper = document.getElementById('portfolio-contents-wrapper')
const projects = document.querySelectorAll('.single-project-wrapper');
const projectSlidingWrapper = document.getElementById('projects-sliding-wrapper');
const projectContentsWrapper = document.getElementById('project-desc-contents-wrapper');
const projectDescDetailBtn = document.getElementById('project-desc-detail-btn');
const projectDescInfoWrapper = document.getElementById('project-desc-info-wrapper');

const projectDescription = document.getElementById('project-description')
const projectIndex = document.getElementById('project-index');


const projectDescMediaWrapper = document.getElementById('project-desc-media-wrapper');

const projectSlidingWrapperDom = projectSlidingWrapper.getBoundingClientRect();
const projectDescRect = projectDescWrapper.getBoundingClientRect();

// Matter Js & Canvas

function resumeContentsInit(){
    const contentsWrapperBox = resumeContentsWrapper.getBoundingClientRect()

    const cw = contentsWrapperBox.width
    const ch = 800
    
    
    
    let engine = Matter.Engine.create();
    
    const box1 = {
        w: 140,
        h: 80,
        body: Matter.Bodies.circle(cw/2, 0, 125),
        elem: document.querySelector("#box-name"),
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - this.h / 2}px`;
          this.elem.style.left = `${x - this.w / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
    };
    const box2 = {
        w: 140,
        h: 80,
        body: Matter.Bodies.circle(cw/2, 0, 125),
        elem: document.querySelector("#box-birthday"),
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - this.h / 2}px`;
          this.elem.style.left = `${x - this.w / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
    };
    const box3 = {
        w: 140,
        h: 80,
        body: Matter.Bodies.circle(cw/2, 0, 125),
        elem: document.querySelector("#box-school"),
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - this.h / 2}px`;
          this.elem.style.left = `${x - this.w / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
    };
    const box4 = {
        w: 140,
        h: 80,
        body: Matter.Bodies.circle(cw/2, 0, 125),
        elem: document.querySelector("#box-contact"),
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - this.h / 2}px`;
          this.elem.style.left = `${x - this.w / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
    };
    const box5 = {
        w: 140,
        h: 80,
        body: Matter.Bodies.circle(cw/2, 0, 125),
        elem: document.querySelector("#box-area"),
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - this.h / 2}px`;
          this.elem.style.left = `${x - this.w / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
    };
    
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
        element : document.querySelector('#contents-wrapper')
    })
    
    const ground = Matter.Bodies.rectangle(cw/2, ch, cw, 200, {isStatic : true});
    const wallLeft = Matter.Bodies.rectangle(0, ch, 1, 3000, {isStatic : true});
    const wallRight = Matter.Bodies.rectangle(cw-100, ch, 1, 3000, {isStatic : true});
    
    box1.body.restitution = 1;
    box2.body.restitution = 0.8;
    box3.body.restitution = 0.9;
    box4.body.restitution = 0.9;
    box5.body.restitution = 0.9;
    
    Matter.Composite.add(
        engine.world, [box1.body,box2.body, box3.body, box4.body,box5.body, ground,wallLeft, wallRight, mouseConstraint]
    );
    
    (function rerender() {
        box1.render();
        box2.render();
        box3.render();
        box4.render();
        box5.render();
        Matter.Engine.update(engine);
        requestAnimationFrame(rerender);
    })();

}


// Chatbot's words

let chatbotText1 = `안녕하세요 일상의 실천 여러분! \n인사드리게 되어 반갑습니다 :) \n저는 프론트엔드 개발을 하고 있는 신지웅입니다.\n 일상의 실천의 인턴쉽 프로그램에 지원하고자 이 웹사이트를 제작하게 되었습니다.\n아래쪽의 화살표 버튼을 통해 페이지를 이동하실 수 있습니다!\n재미있게 봐주세요!`;

// EVENT LISTENERS

// PART 1. INTRO
let screens = [introSection, resAndIntroSec, portSec]
let index = 0;

headerUp.addEventListener('click', ()=>{
    // index++;
    
    if(index-- <= 0){
        index = 0;
    }
    screens[index].scrollIntoView({behavior:"smooth"})
    // introSection.scrollIntoView({behavior:"smooth"})
})

headerDown.addEventListener('click', ()=>{
    // index--;
    if(index++ >= screens.length-1){
        index = screens.length-1
    }
    screens[index].scrollIntoView({behavior:"smooth"})
})
window.addEventListener('mousemove', (e)=>{
    cursor.style.top = `${e.pageY}px`
    cursor.style.left = `${e.pageX}px`
})

window.addEventListener('click', ()=>{
    // cursor.style.animation = 'bigAndSmall 0.5s cubic-bezier(0,.77,.5,.99)'
})
window.addEventListener('animationend', ()=>{
    cursor.style.animation = 'none'
})

// PART 2. RESUME & INTRODUCTION

resAndIntroSec.addEventListener('mousemove', (e)=>{
    const pageRect = resAndIntroSec.getBoundingClientRect();
    // console.log(pageRect.width)
    if(e.clientX > 0 && e.clientX < pageRect.width/2){
        
        marker.style.left = '37.5%';
    }else if(e.clientX > pageRect.width/2 && e.clientX < pageRect.width){
        
        marker.style.left = '62.5%';
    }
})


resumeHeaderSection.addEventListener('click', async ()=>{
    marker.style.display = 'none'
    resumeArrow.children[0].setAttribute('src', './src/img/buttons/rightBtn.png')
    sectionsWrapper.classList.remove('section-initial')
    sectionsWrapper.classList.add('section-resume')
    resumeArrow.style.opacity = '1'
    resumeHeaderSection.style.backgroundColor = 'rgb(0, 204, 0)'
    resumeContentsInit();
})
resumeSection.addEventListener('mouseenter', ()=>{
    resumeHeaderSection.style.backgroundColor = 'rgb(0, 204, 0)'
})
resumeSection.addEventListener('mouseleave', ()=>{
    resumeHeaderSection.style.backgroundColor = 'white'
})
resumeArrow.addEventListener('click', async ()=>{
    if(sectionsWrapper.classList.contains('section-resume')){
        sectionsWrapper.classList.replace('section-resume', 'section-initial')
    }else if(sectionsWrapper.classList.contains('section-intro')){
        sectionsWrapper.classList.replace('section-intro', 'section-initial')
    }
    marker.style.display = 'block'
    // sectionsWrapper.classList.add('section-initial')
    resumeArrow.style.opacity = '0';
    introHeaderSection.style.backgroundColor = 'white';
    resumeHeaderSection.style.backgroundColor = 'white'
})
introductionSection.addEventListener('click', async ()=>{
    marker.style.display = 'none'
    console.log(resumeArrow.children[0])
    resumeArrow.children[0].setAttribute('src', './src/img/buttons/leftBtn.png')
    sectionsWrapper.classList.remove('section-initial')
    sectionsWrapper.classList.add('section-intro')
    resumeArrow.style.opacity = '1'
    introHeaderSection.style.backgroundColor = 'rgb(255, 255, 0)';
})
introductionSection.addEventListener('mouseenter', ()=>{
    introHeaderSection.style.backgroundColor = 'rgb(255, 255, 0)'
})
introductionSection.addEventListener('mouseleave', ()=>{
    introHeaderSection.style.backgroundColor = 'white'
})

boxes.forEach((e) => {
    e.addEventListener('mouseenter', ()=>{
        resumeHeaderSection.style.backgroundColor = 'rgb(0, 204, 0)'
        if(e.id == 'box-name'){
            resumeCategoryTitle.innerHTML = '신지웅 <br>Jiwoong Shinn'
        }else if(e.id == 'box-school'){
            resumeCategoryTitle.innerHTML = '서울과학기술대학교 컴퓨터공학과 학사 <br>(2023.01 졸업)'
        }else if(e.id == 'box-contact'){
            resumeCategoryTitle.innerHTML = 'email. shinnjiwoong@gmail.com <br>tel. 010.8980.5434'
        }else if(e.id == 'box-birthday'){
            resumeCategoryTitle.innerHTML = '1996.11.08'
        }else if(e.id == 'box-area'){
            resumeCategoryTitle.innerHTML = '서울시 서초구 거주'
        }
    })
    e.addEventListener('mouseleave', ()=>{
        resumeCategoryTitle.innerHTML = '인적사항 (Personal Info.)'
        resumeHeaderSection.style.backgroundColor = 'white'
    })
})


// PROJECT

function initProject(index){
    for(let i = 0; i < projects.length; i++){
        if(i == index){
            projects[i].children[1].style.transform = 'rotate(45deg)'
        }else{
            projects[i].children[1].style.transform = 'rotate(0deg)'
        }
    }
}

function showProject(id){
    if(projectList[0].id == id){
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        const img3 = document.createElement('img');

        img1.classList.add('project-img');
        img1.setAttribute('src', projectList[0].img_source[0].src);
        img1.style.width = projectList[0].img_source[0].width
        img1.style.height = projectList[0].img_source[0].height

        img2.classList.add('project-img');
        img2.setAttribute('src', projectList[0].img_source[1].src);
        img2.style.width = projectList[0].img_source[1].width
        img2.style.height = projectList[0].img_source[1].height

        img3.classList.add('project-img');
        img3.setAttribute('src', projectList[0].img_source[2].src);
        img3.style.width = projectList[0].img_source[2].width
        img3.style.height = projectList[0].img_source[2].height

        projectDescription.innerHTML = projectList[0].description
        projectIndex.innerHTML = projectList[0].index

        projectDescMediaWrapper.append(img1, img2, img3)

    }
}

projects.forEach((dom, index) => {
    let child = dom.children[0]
    const detailBtn = dom.querySelector('.project-detail-btn')

    let isPress = false,   // 마우스를 눌렀을 때
    prevPosX = 0,      // 이전에 위치한 X값
    prevPosY = 0;      // 이전에 위치한 Y값

    // projectPos(dom)

    // portfolioContentsWrapper.onmousemove = move;

    portfolioContentsWrapper.addEventListener('mousemove', (e)=>{
        move(dom, e)
    })
    dom.addEventListener('mousedown', (e)=>{
        console.log(dom)
        start(dom, e)
    })
    dom.addEventListener('mouseup', (e)=>{
        end(dom)

        if(e.clientX > projectDescRect.x){
            projectContentsWrapper.style.opacity = '1';
            detailBtn.style.transform = 'rotate(45deg)'
            showProject(child.id);
            initProject(index);
        }else{
            // projectDescWrapper.style.backgroundColor = 'white'
            projectContentsWrapper.style.opacity = '0';
        }
    })
    dom.addEventListener('mouseenter', ()=>{
        // dom.style.backgroundColor ='rgb(255,255,0)';
    })
    dom.addEventListener('mouseleave', ()=>{
        // dom.style.backgroundColor ='none';
    })
    
    function start(dom, e) {
        dom.style.zIndex = '100'
        // dom.style.transform = 'rotate(45deg)'
        dom.style.position = 'absolute'

        dom.style.border = 'solid 1px white'
        prevPosX = e.clientX;
        prevPosY = e.clientY;
        dom.style.position = 'absolute'
        dom.style.filter = 'drop-shadow(0px 0px 10px #000)'
        dom.style.backgroundColor = 'rgb(255,255,0))'
        isPress = true;
        dropSentence.style.opacity = '1';
    }
    // mousemove
    function move(dom,e) {
        if (!isPress) {
          return;
        }
        // 이전 좌표와 현재 좌표 차이값
        const posX = prevPosX - e.clientX; 
        const posY = prevPosY - e.clientY; 
        // 현재 좌표가 이전 좌표로 바뀜
        prevPosX = e.clientX; 
        prevPosY = e.clientY; 
        // left, top으로 이동
        dom.style.left = (dom.offsetLeft - posX) + "px";
        dom.style.top = (dom.offsetTop - posY) + "px";
    }
    // mouseup
    function end(dom) {
        dom.style.position = 'initial'
        dom.style.left = 'initial';
        dom.style.top = 'initial';
        dom.style.filter = 'none'
        // dom.style.backgroundColor = 'white'
        dom.style.borderLeft = 'none'
        dom.style.borderRight = 'none'
        dom.style.borderBottom = 'solid 1px white'
        dom.style.borderTop = 'none'
        
        dropSentence.style.opacity = '0';
        // dom.children[0].style.color = 'black'
        
        isPress = false;
    }

})

projectDescDetailBtn.addEventListener('click', ()=>{
    projectDescInfoWrapper.classList.toggle('project-desc-show')

    projectDescDetailBtn.classList.toggle('detailBtnRotate')
})


// INTRO TYPING

async function typing(div, text) {
    // 각 글자를 찍어내는 인덱스
    const pause = 200

    for(let i = 0; i < text.length; i++){
        setTimeout(()=>{
            if(text[i] == '\n'){
                div.innerHTML += '<br>'
            }else{
                div.innerHTML += text[i];
            }
        }, pause*i);
        
    }
    console.log('done!')
}
  

const showDialogue = async (dialogue) => {
    let textDiv = document.createElement('p');
    textDiv.id = 'chatbot-dialogue';
    chatbotDialogueWrapper.insertBefore(textDiv, chatbotCursor);

    // typing(textDiv, dialogue);
    const pause = 80

    for(let i = 0; i < dialogue.length; i++){
        setTimeout(()=>{
            if(dialogue[i] == '\n'){
                textDiv.innerHTML += '<br>'
            }else{
                textDiv.innerHTML += dialogue[i];
            }
        }, pause*i);
        
    }

    setTimeout(()=>{
        // resumeWrapper.scrollIntoView({behavior:"smooth"})
        let chatbotCursorDiv = document.createElement('p');
        chatbotCursorDiv.id = 'chatbot-cursor';
        chatbotCursorDiv.innerText = '|'
        textDiv.append(chatbotCursorDiv);
        setInterval(()=>{
            if(chatbotCursorDiv.classList.contains('cursor-on')){
                chatbotCursorDiv.classList.remove('cursor-on');
            }else{
                chatbotCursorDiv.classList.add('cursor-on');
            }
        }, 800)
    }, pause*(dialogue.length + 1))

}

showDialogue(chatbotText1)

let bgColors = ['#FEEF8A', '#032CA6', '#04D976', '#E4E9EF', '#F26B6B']

