//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 맞추면 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!!
//랜덤번호가 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다(버튼 클릭 불가)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//이미 입력한 숫자를 또 입력하면, 알려준다, 기뢰를 깎지 않는다. 

let computerNum =0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-Input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click",play);

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
    let userValue=userInput.value;
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!"
    } else if(userValue > computerNum){
        resultArea.textContent = "Down!!!"
    } else {
        resultArea.textContent = "정답입니다!!!"
    }
}
pickRandomNum();