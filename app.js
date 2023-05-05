// Project Data
let posterSizeWidth = 420;
let posterSizeHeight = 595;
let albumSizeWidth = 400;
let albumSizeHeight = 400;
let wideScreenWidth = 554;
let wideScreenHeight = 373;
let wideScreenWidthWider = 560;
let wideScreenHeightWider = 450;
let videoWidth = 854;
let videoHeight = 480;
let logoSquareWidth = 500;
let logoSquareHeight = 500;


const altGal = {
    'id' : 'project-altgal',
    'title' : '&lt;간결한 생각들 : 생태 - 젠더 - 공산&gt;',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/altgal_3.jpeg',
        'width' : `${posterSizeWidth}px`,
        'height' : `${posterSizeHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/altgal_1.png',
        'width' : `${posterSizeWidth}px`,
        'height' : `${posterSizeHeight}px`
    },{
        'imgIndex' : 3,
        'src' : 'src/img/project_source/altgal_2.jpeg',
        'width' : `${wideScreenWidth}px`,
        'height' : `${wideScreenHeight}px`
    }],
    'video' : null,
    'index' : '1 Song (Ambient), 2021',
    'description' : "2021년 대안공간루프 (AltGalLoop)에서 진행했던 <간결한 생각들 : 생태 - 젠더 - 공산> 전시의 음악으로 참여했습니다. <br>전시를 보는 시민들은, 권병준 작가가 제작한 헤드폰을 통해 '도래해 마땅한 사회의 모습'에 대한 고민이 담긴 여러 음악가의 곡들을 들으며 홍대를 걷는 활동을 진행했습니다.<br>저는 앰비언트 트랙 <침잠을 위한 시퀀스 (A Sequence for Sinking)>으로 전시에 참여하여, 혼란스러운 세계에서 내면으로 침잠하여 단단한 논리를 가지고 나아가자는 메세지를 전하고자 했습니다.",
    'link' : {
        'src' : 'https://soundcloud.com/montikayoti/a-sequence-for-sinking?si=7e57776a032a4334ba0edf052a0c5e02&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'name' : '들어보기'
    },
    'themeColor' : {
        'bg' : '#07C4D9',
        'contents' : 'black'
        }
}

const kang = {
    'id' : 'project-kang',
    'title' : '<옆복도 괴물군> 사운드트랙',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/kang_1.png',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/kang_2.png',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'imgIndex' : 3,
        'src' : 'src/img/project_source/kang_3.png',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'imgIndex' : 4,
        'src' : 'src/img/project_source/kang_4.png',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    }],
    'video' : null,
    'index' : 'Soundtrack, 2023',
    'description' : "<옆복도 괴물군>은 김동연 감독의 2023년 단편 영화입니다. <br>학교에 서식하는 괴물 '캉', 그리고 그것과 친구가 되려는 괴물 연구 동아리장 '승찬'과 학교 경비원 사이에서 벌어지는 이야기를 담은 작품입니다. <br>저는 이 작품의 사운드트랙을 작업하여, 영화가 주는 엉뚱하고 몽환적인 분위기를 재즈 장르를 기반으로 한 음악으로 표현했습니다.",
    'themeColor' : {
        'bg' : '#021F59',
        'contents' : 'white'
        }
}
const reservoir = {
    'id' : 'project-reservoir',
    'title' : 'Reservoir Dogs Mix',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/reservoir_1.png',
        'width' : `${albumSizeWidth}px`,
        'height' : `${albumSizeHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/dj_img.jpeg',
        'width' : `${posterSizeWidth-50}px`,
        'height' : `${posterSizeHeight -100}px`
    }],
    'video' : null,
    'index' : 'Mixset, Cover Design, 2022',
    'description' : "Reservoir Dogs 믹스셋은 홍대에 위치한 주점 '저수지'의 오프닝 행사를 위해 제작한 믹스셋입니다. <br>'저수지'는 '낚시'라는 테마를 가지고 있습니다. <br>믹스셋은 부드러우면서도 리듬감을 느낄 수 있는 곡들을 선별하여 행사에 맞는 분위기를 연출하였고, '낚시'라는 키워드에 중점을 두어 커버 아트워크를 디자인했습니다.",
    'link' : {
        'src' : 'https://soundcloud.com/montikayoti/reservoir_dogs_mixmp3?in=montikayoti/sets/mix&si=38d19a321fc0423890940e1e057de37c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'name' : '들어보기'
    },
    'themeColor' : {
        'bg' : 'white',
        'contents' : 'black'
        }
}
const underfoot = {
    'id' : 'project-underfoot',
    'title' : 'UNDERFOOT 웹사이트',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/UNDERFOOT_1.png',
        'width' : `${logoSquareWidth}px`,
        'height' : `${logoSquareHeight}px`
    }],
    'video' : [{
        'src' : 'src/project_vid/underfoot_vid_1.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'src' : 'src/project_vid/underfoot_vid_2.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'src' : 'src/project_vid/underfoot_vid_3.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    }],
    'index' : 'Website Development, Logo Design, 2023',
    'description' : "UNDERFOOT은 서울을 기반으로 활동하는 예술인 집단입니다. <br>'우리의 발 아래에 있는 -'이란 뜻의 Underfoot은 음지에 존재하는 다양한 문화들을 상징합니다.<br>'발 밑에 존재한다'는 데에서 착안하여, 웹사이트에 하강 스크롤링을 기반으로 한 애니메이션을 구현하고, 로고 디자인에서 또한 내려다보는 느낌을 표현했습니다.",
    'link' : {
        'src' : 'https://www.underfoot.place/',
        'name' : 'www.underfoot.place'
    },
    'themeColor' : {
        'bg' : 'rgb(0, 10, 255)',
        'contents' : 'rgb(255, 255, 255)'
        }
}

const casper = {
    'id' : 'project-casper',
    'title' : "HYUNDAI CASPER x Kasina",
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/casper_1.jpeg',
        'width' : `${wideScreenWidth}px`,
        'height' : `${wideScreenHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/casper_2.jpeg',
        'width' : `${albumSizeWidth}px`,
        'height' : `${albumSizeHeight}px`
    }],
    'video' : [{
        'src' : 'src/project_vid/KASINAxCASPER.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    }],
    'index' : '1 Song, 2022',
    'description' : "2022년도에 진행된 현대자동차의 캐스퍼 모델과 국내 스트릿 기반의 편집샵 KASINA와의 협업 라인은 'Urban Rally'라는 키워드를 중점으로 진행되었습니다. <br>저는 도심을 계속해서 달리는 랠리카의 이미지를 루핑되는 드럼 앤 베이스를 기반으로 표현했습니다.",
    'link' : {
        'src' : 'https://www.instagram.com/p/Cga69vaA7Lx/',
        'name' : 'Instagram'
    },
    'themeColor' : {
        'bg' : '#F2F2F2',
        'contents' : 'black'
        }
}

const shia = {
    'id' : 'project-shia',
    'title' : "샤이아를 화나게 하지 말라 (Don't Piss Shia Off)",
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/shia_1.png',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    }],
    'video' : [{
        'src' : 'src/project_vid/shia_vid_1.mp4',
        'width' : `${logoSquareWidth}px`,
        'height' : `${logoSquareHeight}px`
    },{
        'src' : 'src/project_vid/shia_vid_2.mp4',
        'width' : `${logoSquareWidth}px`,
        'height' : `${logoSquareHeight}px`
    },{
        'src' : 'src/project_vid/shia_vid_3.mp4',
        'width' : `${logoSquareWidth}px`,
        'height' : `${logoSquareHeight}px`
    }],
    'index' : 'Website Development, 2023',
    'description' : "샤이아를 화나게 하지 말라 (Don't Piss Shia Off)는 '빛바랜 아이디어들'이라는 키워드에서 출발하여 작업했습니다. <br>계속되는 자기의심과 불확실한 미래에 대한 두려움으로 항상 미뤄왔던, 번뜩이는 아이디어들을 지금 당장 실행하자는 메세지를 전달하고자 했습니다. <br>전세계적인 밈이 된 샤이아 라보프의 일명 'Do It!'영상에서 그는 '그만 미루고 지금 당장 꿈을 위한 무언가를 하라'는 메세지를 분노하며 전달하고 있습니다. <br>저는 이 영상에서 아이디어를 얻어서 샤이아 라보프가 소리치는 모습과 음성을 웹사이트에서 표현하고, 분노의 감정을 canvas.js를 활용하여 표현했습니다.",
    'link' : {
        'src' : 'https://shinnjiwoong.github.io/DONOTPISSOFFSHIA/',
        'name' : 'www.DONOTPISSSHIAOFF.com'
    },
    'themeColor' : {
        'bg' : 'rgb(0, 0, 0)',
        'contents' : 'rgb(255, 255, 255)'
        }
}

const sjw = {
    'id' : 'project-shinnjiwoong',
    'title' : "포트폴리오 웹사이트",
    'img_source' : null,
    'video' : [{
        'src' : 'src/project_vid/SJW_vid_1.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'src' : 'src/project_vid/SJW_vid_2.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    }],
    'index' : 'Website Development, 2023',
    'description' : '2019년부터 2023년까지 작업했던 모든 프로젝트들을 모아둔 포트폴리오 웹사이트입니다. <br>화면을 4개의 구역으로 나누어서 다양한 분야에서의 작업물들을 동시다발적으로 표현했습니다. <br>클릭할 때마다 무작위로 변하는 색감과 직접 제작한 음악을 재생함으로서 웹사이트를 둘러보는 동안의 재미를 더했습니다.',
    'link' : {
        'src' : 'https://www.shinnjiwoong.com/',
        'name' : 'www.shinnjiwoong.com'
    },
    'themeColor' : {
        'bg' : 'rgb(185, 185, 185)',
        'contents' : 'rgb(0, 0, 0)'
        }
}

const picit = {
    'id' : 'project-picit',
    'title' : "PICIT!",
    'img_source' : null,
    'video' : [{
        'src' : 'src/project_vid/picit_vid_1.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'src' : 'src/project_vid/picit_vid_2.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    },{
        'src' : 'src/project_vid/picit_vid_3.mp4',
        'width' : `${videoWidth}px`,
        'height' : `${videoHeight}px`
    }],
    'index' : 'Website Development, 2022',
    'description' : 'PICIT!은 영단어 학습을 도와주는 웹사이트입니다. <br>사용자가 웹사이트에 영어 원서 이미지를 업로드하면, 문서 내의 유의미한 영단어를 찾아 뜻하는 바를 보여주고, 사용자가 모르는 단어를 골라서 이메일로 공유할 수 있게 구현하였습니다. <br>광학 문자인식 기술 (Optical Character Recognition, OCR)과 자연어처리 기술 (Natural Language Processing, NLP) 및 웹 크롤링 기술을 결합하여 구현하였습니다. <br><br>*서울과학기술대학교의 졸업작품으로 제출하였습니다.',
    'themeColor' : {
        'bg' : '#05F228',
        'contents' : 'black'
        }
}

const umm1 = {
    'id' : 'project-umm',
    'title' : 'Umm Vol.1 (꽃내음 Vol.1)',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/umm_1.png',
        'width' : `${albumSizeWidth}px`,
        'height' : `${albumSizeHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/umm_2.png',
        'width' : `${albumSizeWidth}px`,
        'height' : `${albumSizeHeight}px`
    }],
    'index' : 'Mixset, Cover Design, 2022',
    'description' : "꽃내음 Vol.1은 '봄'을 떠올릴 수 있는 음악들을 선별하여 제작한 믹스셋입니다. <br>봄이라는 계절감이 주는 부드러우면서 향기로운 분위기를 표현할 수 있는 색감과 바이닐의 디자인 형식을 결합하여 시각적으로 표현했습니다.",
    'link' : {
        'src' : 'https://soundcloud.com/montikayoti/umm-vol1?in=montikayoti/sets/mix&si=e4814702263c4469aed3a674c49e4903&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'name' : '들어보기'
    },
    'themeColor' : {
        'bg' : '#F2E399',
        'contents' : 'black'
        }
}

const mindcraft = {
    'id' : 'project-mindcraft',
    'title' : 'Mindcraft',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/MINDCRAFT_1.jpeg',
        'width' : `${albumSizeWidth}px`,
        'height' : `${albumSizeHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/MINDCRAFT_2.png',
        'width' : `${videoWidth-100}px`,
        'height' : `${videoHeight}px`
    }],
    'index' : '6 Songs, 2019',
    'description' : "MINDCRAFT는 6곡의 음악이 담긴 EP입니다. <br>물질적인 세계를 살아가면서 다가오는 많은 욕망에 대해 어떻게 대처하면서 삶을 살아가야할지에 대한 고민을 통해 나온 생각들을 표현하고자 했습니다. <br>각 트랙의 제목은 이러한 고민의 결과를 함축적으로 담고 있으며, 주제의식에 맞게 음악을 표현했습니다.",
    'link' : {
        'src' : 'https://soundcloud.com/montikayoti/sets/mindcraft?si=22177b833fb5459e9acc77d71be65585&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'name' : '들어보기'
    },
    'themeColor' : {
        'bg' : 'white',
        'contents' : 'black'
        }
}

const kaffe = {
    'id' : 'project-kaffe',
    'title' : 'KASINA Kaffe',
    'img_source' : [{
        'imgIndex' : 1,
        'src' : 'src/img/project_source/wav-kaffe-1.png',
        'width' : `${albumSizeWidth}px`,
        'height' : `${albumSizeHeight}px`
    },{
        'imgIndex' : 2,
        'src' : 'src/img/project_source/kaffe_1.jpeg',
        'width' : `${posterSizeWidth}px`,
        'height' : `${posterSizeHeight}px`
    },{
        'imgIndex' : 3,
        'src' : 'src/img/project_source/kaffe_2.jpeg',
        'width' : `${posterSizeWidth}px`,
        'height' : `${posterSizeHeight}px`
    },{
        'imgIndex' : 4,
        'src' : 'src/img/project_source/kaffe_3.jpeg',
        'width' : `${posterSizeWidth}px`,
        'height' : `${posterSizeHeight}px`
    }],
    'index' : '1 Song, 2022',
    'description' : "KASINA Kaffe는 신사동에 위치한 카시나의 카페테리아 브랜드입니다. <br>새로운 오픈을 맞이한 이벤트의 커머셜 음악을 작업하여 카페가 추구하는 세련되면서도 따듯한 이미지를 음악적으로 구현하고자 하였습니다.",
    'themeColor' : {
        'bg' : '#F2AEAE',
        'contents' : 'black'
        }
}


const projectList = [altGal, umm1, mindcraft, underfoot, shia, casper, kang, sjw, picit, reservoir, kaffe]



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
const introductionCategoryTitle = document.getElementById('introduction-title')
// const resumeDescription = document.getElementById('resume-description');
// const resumeDescWrapper = document.getElementById('resume-desc-wrapper')

const introContentsTitles = document.querySelectorAll('.introduction-title-wrapper');
const introductionBG = document.getElementById('introduction-header-bg')
const detailBtn = document.querySelectorAll('.introduction-detail-btn-wrapper')
const headerNotice = document.querySelectorAll('.header-notice-btn');

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
const projectFilters = document.querySelectorAll('.project-filter')
const projectYearFilters = document.querySelectorAll('.project-year-filter')
const projectDescription = document.getElementById('project-description')
const projectIndex = document.getElementById('project-index');
const projectTitle = document.getElementById('project-desc-title');
const projectLink = document.getElementById('project-link')


const projectDescMediaWrapper = document.getElementById('project-desc-media-wrapper');


const projectSlidingWrapperDom = projectSlidingWrapper.getBoundingClientRect();
const projectDescRect = projectDescWrapper.getBoundingClientRect();

const colors = ['#01956e', '#99b5fb', '#ffed3b', '#eda488', '#0047f5', '#54c2cc', '#b0dce0', '#fe601e', '#b9a800', '#d8b5a8', '#FEC8DF', '#07A3FF', '#F5FF03', '#DBFFFF', '#F5DC11'];

// Matter Js & Canvas

function resumeContentsInit(){
    const contentsWrapperBox = resumeContentsWrapper.getBoundingClientRect()

    const cw = contentsWrapperBox.width
    const ch = contentsWrapperBox.height
    
    
    
    let engine = Matter.Engine.create();
    
    const box1 = {
        w: 140,
        h: 80,
        body: Matter.Bodies.circle(cw/2-100, -10, 125),
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
        body: Matter.Bodies.circle(cw/2-50, -50, 125),
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
        body: Matter.Bodies.rectangle(cw/2-50, -100, 230, 230),
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
        body: Matter.Bodies.rectangle(cw/2, 0, 230, 230),
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
        body: Matter.Bodies.circle(cw/2, -80, 125),
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
    const wallLeft = Matter.Bodies.rectangle(0-60, ch, 1, 3000, {isStatic : true});
    const wallRight = Matter.Bodies.rectangle(cw-60, ch, 1, 3000, {isStatic : true});
    
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

let chatbotText1 = `안녕하세요 일상의 실천 여러분! \n저는 프론트엔드 개발을 하고 있는 신지웅입니다.\n 일상의 실천의 인턴쉽 프로그램에 지원하고자 이 웹사이트를 제작하게 되었습니다.\n하단의 화살표 버튼을 통해 사이트를 둘러봐주세요!`;

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


const popups = document.querySelectorAll('.popup-wrapper');
const popupDelete = document.querySelectorAll('.popup-delete');
const popupTextWrapper = document.querySelectorAll('.popup-text-wrapper');

popupDelete.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const parent = btn.parentElement.parentElement.parentElement

        parent.style.display = 'none'
    })
})

let popupIndex = 0;

window.addEventListener('load',()=>{
    introSection.scrollIntoView({behavior:'smooth'})
    popups.forEach((dom, index) => {
        setTimeout(()=>{
            dom.style.opacity = '1';
            // popupTextWrapper[index].classList.add('popup-show')
        }, 500 * ++popupIndex)
    })
})

popups.forEach((dom, index) => {
    const color = Math.floor(Math.random() * colors.length)
    dom.style.backgroundColor = colors[color]


    let isPress = false,   // 마우스를 눌렀을 때
    prevPosX = 0,      // 이전에 위치한 X값
    prevPosY = 0;      // 이전에 위치한 Y값

    introSection.addEventListener('mousemove', (e)=>{
        move(dom, e)
    })
    dom.addEventListener('mousedown', (e)=>{
        for(let i = 0 ; i < popups.length; i++){
            if(i == index){
                popups[i].style.zIndex = '100'
            }else{
                popups[i].style.zIndex = '0'
            }
        }
        // dom.style.zIndex = '100'

        console.log(dom)
        start(dom, e)
    })
    dom.addEventListener('mouseup', (e)=>{
        // dom.style.zIndex = '0'
        end(dom)
    })
    
    function start(dom, e) {
        prevPosX = e.clientX;
        prevPosY = e.clientY;

        isPress = true;
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
        
        isPress = false;
    }
})

setInterval(()=>{
    popups.forEach(dom => {
        const color = Math.floor(Math.random() * colors.length)
        dom.style.backgroundColor = colors[color]
    })
}, 10000)

// PART 2. RESUME & INTRODUCTION

let resumeSectionColor = 'rgb(255, 153, 0)'
let introductionSectionColor = 'rgb(0, 102, 255)'

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
    headerNotice.forEach((e) => {
        e.style.opacity = '0'
    })
    marker.style.display = 'none'
    resumeArrow.children[0].setAttribute('src', './src/img/buttons/rightBtn.png')
    sectionsWrapper.classList.remove('section-initial')
    sectionsWrapper.classList.add('section-resume')
    resumeArrow.style.opacity = '1'
    resumeHeaderSection.style.backgroundColor = 'white'
    resumeContentsInit();
})

resumeArrow.addEventListener('click', async ()=>{
    headerNotice.forEach((e) => {
        e.style.opacity = '1'
    })
    if(sectionsWrapper.classList.contains('section-resume')){
        sectionsWrapper.classList.replace('section-resume', 'section-initial')
    }else if(sectionsWrapper.classList.contains('section-intro')){
        sectionsWrapper.classList.replace('section-intro', 'section-initial')
    }
    // marker.style.display = 'block'
    // sectionsWrapper.classList.add('section-initial')
    resumeArrow.style.opacity = '0';
    // introHeaderSection.style.backgroundColor = 'rgb(255, 255, 255)';
    // resumeHeaderSection.style.backgroundColor = 'rgb(255, 255, 255)'
})
introductionSection.addEventListener('click', async ()=>{
    headerNotice.forEach((e) => {
        e.style.opacity = '0'
    })
    marker.style.display = 'none'
    console.log(resumeArrow.children[0])
    resumeArrow.children[0].setAttribute('src', './src/img/buttons/leftBtn.png')
    sectionsWrapper.classList.remove('section-initial')
    sectionsWrapper.classList.add('section-intro')
    resumeArrow.style.opacity = '1'
    introHeaderSection.style.backgroundColor = 'rgb(255, 255, 255)';
    // introductionCategoryTitle.style.top = '0%'
    // introductionCategoryTitle.style.left = '0%'
    // introductionCategoryTitle.style.transform = 'none'
})




resumeSection.addEventListener('mouseenter', ()=>{
    const color = Math.floor(Math.random()*colors.length)
    resumeHeaderSection.style.backgroundColor = colors[color]
    // resumeCategoryTitle.style.color = 'white'
})
resumeSection.addEventListener('mouseleave', ()=>{
    resumeHeaderSection.style.backgroundColor = 'rgb(255, 255, 255)'
    // resumeCategoryTitle.style.color = 'initial'
})

introductionSection.addEventListener('mouseenter', ()=>{
    const color = Math.floor(Math.random() * colors.length)
    introHeaderSection.style.backgroundColor = colors[color]
    // introHeaderSection.style.backgroundColor = introductionSectionColor
    // introductionCategoryTitle.style.color = 'white'
})
introductionSection.addEventListener('mouseleave', ()=>{
    introHeaderSection.style.backgroundColor = 'rgb(255, 255, 255)'
    // introductionCategoryTitle.style.color = 'initial'
})

boxes.forEach((e) => {
    
    e.addEventListener('mouseenter', ()=>{
        // resumeHeaderSection.style.backgroundColor = resumeSectionColor
        e.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
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
        resumeCategoryTitle.innerHTML = '인적사항'
        // resumeHeaderSection.style.backgroundColor = 'rgb(255, 255, 255)'
        // resumeCategoryTitle.style.color = 'initial'
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

function appendImg(project, index){
    console.log('called!')

    const img = document.createElement('img');

    img.setAttribute('src', project.img_source[index].src)
    img.style.width = project.img_source[index].width
    img.style.height = project.img_source[index].height
    img.classList.add('project-img')

    img.addEventListener('load', ()=>{
        setTimeout(()=>{
            img.style.opacity = '1';
        }, 200)
    })

    projectDescMediaWrapper.append(img)
}

function appendVideo(project, index){
    const videoInfo = project.video[index];
    const videoEl = document.createElement('video');


    videoEl.setAttribute('src', videoInfo.src);
    videoEl.setAttribute('loop', '');
    videoEl.setAttribute('autoplay', '');
    videoEl.muted = 'true'; 
    videoEl.classList.add('project-video')
    videoEl.style.width = videoInfo.width;
    videoEl.style.height = videoInfo.height;

    videoEl.addEventListener('loadedmetadata', ()=>{
        setTimeout(()=>{
            videoEl.style.opacity = '1';
        }, 200)
        
    })

    projectDescMediaWrapper.append(videoEl);
}

function showProject(id){
    for(let i = 0; i < projectList.length; i++){

        if(projectList[i].id == id){
            // 프로젝트 이전 정보 초기화

            if(projectList[i].themeColor){
                portSec.style.setProperty('--port-bg-color', colors[Math.floor(Math.random()*colors.length)]);
                portSec.style.setProperty('--port-contents-color', 'black');
            }else{
                portSec.style.setProperty('--port-bg-color', 'rgb(255, 255, 255)');
                portSec.style.setProperty('--port-contents-color', 'rgb(0, 0, 0)');
            }
            projectDescMediaWrapper.innerHTML = '';
            projectDescription.innerHTML = '';
            projectIndex.innerHTML = '';
            projectTitle.innerHTML = '';
            projectLink.setAttribute('href', '')
            projectLink.innerHTML = '';


            if(projectList[i].video){
                for(let j = 0; j < projectList[i].video.length; j++){
                    appendVideo(projectList[i], j)
                }
            }
            if(projectList[i].img_source){
                for(let j = 0; j < projectList[i].img_source.length; j++){
                    appendImg(projectList[i], j);
                }
            }
            projectDescription.innerHTML = projectList[i].description
            projectIndex.innerHTML = projectList[i].index
            projectTitle.innerHTML = projectList[i].title

            if(projectList[i].link){
                projectLink.setAttribute('href', projectList[i].link.src);
                projectLink.innerHTML = projectList[i].link.name
            }
        }
    }
    
}

projects.forEach((dom, index) => {
    let child = dom.children[0]
    const detailBtn = dom.querySelector('.project-detail-btn')



    // projectPos(dom)

    // portfolioContentsWrapper.onmousemove = move;

    dom.addEventListener('click', ()=>{
        dropSentence.style.opacity = '0';
        projectDescInfoWrapper.classList.remove('project-desc-show')
        projectDescDetailBtn.classList.remove('detailBtnRotate')
        projectContentsWrapper.style.opacity = '1';
        detailBtn.style.transform = 'rotate(45deg)'
        showProject(child.id);
        initProject(index);
    })

    dom.addEventListener('mouseenter', ()=>{
        dom.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]
    })
    dom.addEventListener('mouseleave', ()=>{
        dom.style.backgroundColor = 'white'
    })
    

})

projectDescDetailBtn.addEventListener('click', ()=>{
    projectDescInfoWrapper.classList.toggle('project-desc-show')
    projectDescDetailBtn.classList.toggle('detailBtnRotate')
})

function selectFilter(arr, id){
    let length = arr.length;

    for(let i = 0; i < length; i++){
        if(arr[i].id == id){
            arr[i].classList.add('filter-selected')
        }else{
            arr[i].classList.remove('filter-selected')
        }
    }
}

function filterOut(scope, year){
    projects.forEach(p => {
        const projectTarget = p.children[0]

        if(projectTarget.classList.contains(scope) && projectTarget.classList.contains(year)){
            p.classList.remove('project-hide')
        }else{
            p.classList.add('project-hide')
        }
    })
}

let scopeFilter = 'all'
let yearFilter = 'all'

projectFilters.forEach(filter => {
    filter.addEventListener('click', (e)=>{
        const id = e.target.id;
        const indexTarget = id.substr(8);
        // let length = projectFilters.length;

        // for(let i = 0; i < length; i++){
        //     if(projectFilters[i].id == id){
        //         projectFilters[i].classList.add('filter-selected')
        //     }else{
        //         projectFilters[i].classList.remove('filter-selected')
        //     }
        // }

        scopeFilter = indexTarget;

        selectFilter(projectFilters, id);

        filterOut(scopeFilter, yearFilter)

        // projects.forEach(p => {
        //     const projectTarget = p.children[0]

        //     if(projectTarget.classList.contains(indexTarget)){
        //         p.classList.remove('project-hide')
        //     }else{
        //         p.classList.add('project-hide')
        //     }
        // })
    })
})

projectYearFilters.forEach((filter, index) => {
    filter.addEventListener('click', (e)=>{
        const id = e.target.id
        const indexTarget = id.substr(13);

        selectFilter(projectYearFilters, id);

        yearFilter = indexTarget;

        filterOut(scopeFilter, yearFilter);

        // projects.forEach(p => {
        //     const projectTarget = p.children[0]

        //     if(projectTarget.classList.contains(indexTarget)){
        //         p.classList.remove('project-hide')
        //     }else{
        //         p.classList.add('project-hide')
        //     }
        // })
    })
})

// INTRODUCTION

introContentsTitles.forEach((wrapper, index) => {
    const title = wrapper.children[0]
    wrapper.addEventListener('mouseenter', ()=>{
        introductionBG.style.display = 'block'
        
        if(title.id == 'grow'){
            introductionBG.style.animation = 'growAnimation 1.5s cubic-bezier(.75,0,.3,1)  infinite'
            introductionBG.style.backgroundColor = '#01956e'
        }else if(title.id == 'expand'){
            introductionBG.style.animation = 'expandAnimation 1.5s cubic-bezier(.75,0,.3,1)  infinite'
            introductionBG.style.backgroundColor = '#99b5fb'
        }else{
            introductionBG.style.animation = 'createAnimation 2s cubic-bezier(.75,0,.3,1)  infinite alternate'
            introductionBG.style.backgroundColor = '#eda488'
        }
    })

    wrapper.addEventListener('mouseleave', ()=>{
        introductionBG.style.animation = 'none'
        introductionBG.style.display = 'none'
    })

    wrapper.addEventListener('click', ()=>{
        let wrapperParent = wrapper.parentElement;
        

        detailBtn[index].classList.toggle('detailBtnRotate');
        title.classList.toggle('introduction-contents-title-selected');
        wrapperParent.classList.toggle('introduction-text-show');
    })
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

// showDialogue(chatbotText1)

