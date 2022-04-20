let secretNumber = Math.trunc(random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const inputNumber = Number(document.querySelector('.inputNumber').value);

    //未入力の時
    if(!inputNumber){
        document.querySelector('.message').textContent = '数字を入力してね！';
    }

    //正解の時
    else if(inputNumber === secretNumber){
        document.querySelector('.message').textContent = '正解!!';
        document.querySelector('secretNumber').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
    }

    //入力数字が正解より大きい
    else if(inputNumber > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'もっと小さいよ。';
            score--;
            document.querySelector('score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'ゲームオーバー';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.body').style.backgroundColor = '#DC3544';
        }
    }

    //入力数字が正解より小さい
    else if(inputNumber < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'もっと大きいよ。';
            score--;
            document.querySelector('score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'ゲームオーバー';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.body').style.backgroundColor = '#DC3544';
        }
    }
     });

document.querySelector('.reset').addEventListener('click', function(){
 //スコアのリセット
  score =20;
 document.querySelector('.score').textContent = score;

 //シークレットナンバーのリセット
 secretNumber = Math.trunc(Math.random()*20)+1;
 document.querySelector('.secretNumber').textContent = '?';

 //メッセージのリセット
 document.querySelector('.message').textContent = '数字は何だろう？？';

 //入力欄の
                    document.querySelector('.inputNumber').value = '';

 //背景色の
 document.querySelector('.body').style.backgroundColor = '#222';
})  

     
document.querySelector('.click')