// JavaScript Document
function doAction(){
			let kazu =20;
			let min =1;
			let max =3;
			
			alert("ゲームを開始します。石の数は20個、交代で1〜3個石を取り、最後の一つをとった方が負けです。\n残りの石の数" + kazu);
			
			
	while(true){
				let n = window.prompt(
								"残りの石の数:" + kazu + "\nいくつ取りますか？(" + min + "~" + max + ")");
				if(n<1) n=min;
				if(n>3) n=max;
				kazu = kazu-n;
				if(kazu<0) kazu=0;
				alert("あなたは"+n+"個取りました。\n残りの石の数:"+ kazu);
				if(kazu==0){alert("残念。あなたの負けです。");
				break;
										}
				
				let n2 = (kazu-1)%(min+max);
				if(n2<1) n2 =min;
				if(n2>3) n2 =max;
				kazu=kazu-n2;
				if(kazu<0) kazu=0;
				alert("私は"+n2+"個取りました。\n残りの石の数:"+ kazu);
				if(kazu==0){alert("おめでとう！あなたの勝ちです！");
				break;
									}
							}
}