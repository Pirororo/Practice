// JavaScript Document
	'use strict'
		
		const deko = document.getElementById("deko");
				deko.addEventListener("click",function(){
						document.area1.src = "gazou/neko_good.png";
				});
		
		const mune = document.getElementById("mune");
				mune.addEventListener("click",function(){
						document.area1.src = "gazou/neko_exce.png";
				});
		const hara = document.getElementById("hara");
				hara.addEventListener("click",function(){
						document.area1.src = "gazou/neko_soso.png";
//						console.log("こんにちは"); これやると開発     ＞コンソール＞ログでこの上まで正しいかどうかわかる
				});