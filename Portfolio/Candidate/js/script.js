let doc = document,
	overlay = 		doc.querySelector('.overlay'),
	main = 			doc.querySelector('.main'),
	custom = 		doc.querySelector('.custom'),
	customBlocks = 	doc.querySelectorAll("div.custom > div");

let popupBtn = 		doc.getElementById('popup-btn'),
	readyBtn = 		doc.getElementById('ready'),
	resetBtn = 		doc.getElementById('reset'),
	votingBtn = 	doc.getElementById('voting'),
	crimeBtn = 		doc.getElementById('crime'),
	mainBtn = 		doc.getElementsByClassName('main-buttons');

let main_cards = 	doc.getElementsByClassName('main-cards'),
	main_cards_item = doc.getElementsByClassName('main-cards-item'),
	card_1 = 		doc.getElementsByClassName('main-cards-item')[0],
	result_count = 	doc.getElementsByClassName('result-count'),
	progress_bar = 	doc.getElementsByClassName('progress-bar');

	

popupBtn.addEventListener('click', function() {
	overlay.style.display = "none";
	main.style.display = "none";
	custom.style.display = "flex";

	for (let i = 0; i < customBlocks.length; i++) {
	    customBlocks[i].style.display = "block";
	}

	var card_new = card_1.cloneNode(true);
	card_1.parentNode.insertBefore(card_new, card_1.nextSibling);

	main_cards_item[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-5.png)";
	main_cards_item[1].querySelector('.photo-1').style.backgroundSize = 'contain';
	reset();
});

let name = 			doc.getElementById('name'),
	age = 			doc.getElementById('age'),
	sex = 			doc.getElementsByName('sex'),
	views = 		doc.getElementById('select'),
	bio = 			doc.getElementById('bio'),
	ready = 		doc.getElementById('ready'),
	preview = 		doc.querySelector('.preview'),
	personEasy = 	doc.querySelector('.person-easy'),
	prev = 			doc.querySelector('.prev'),
	next = 			doc.querySelector('.next');

	name.placeholder = 'Введите ФИО кандидата';
	name.setAttribute('required', true);
	age.placeholder = 'Введите возраст кандидата';
	age.setAttribute('maxlength', '2');
	bio.placeholder = 'Заполните биографию кандидата';

let views1 = document.createElement('option');
    views.insertBefore(views1, views.firstChild);
    views1.value = '';
    views1.innerHTML = 'Политические взгляды';
    views1.selected = true;
    views1.style.display = 'none';

checkSex();  // выбор внешнего вида и пола

name.addEventListener('change', function() {
	let nameValue = name.value;
	let card_new = document.getElementsByClassName('main-cards-item')[1];
	if (nameValue.length < 40 && nameValue != '' && /^[а-яА-ЯёЁ. ]+$/.test(nameValue) == true) {
		card_new.querySelector('.name').textContent = name.value;
		} else {
			alert('Некорректное значение имени\n\nВедите ФИО по кирилицей');
					name.value = '';
		}
});

age.addEventListener('change', function() {
	let ageValue = age.value;
	let card_new = document.getElementsByClassName('main-cards-item')[1];
	if (ageValue >= 18 && ageValue != '') {
		if (ageValue % 10 == 1) {
			card_new.querySelector('.age').textContent = age.value + ' год';
		}  else if (ageValue % 10 > 1 && ageValue % 10 < 5) {
			card_new.querySelector('.age').textContent = age.value + ' года';
		} else {
			card_new.querySelector('.age').textContent = age.value + ' лет';
		}	
	} else {
		alert('Возраст должен быть боль 18 лет');
		age.value = '';
	}
});

bio.addEventListener('change', function() {
	let bioValue = bio.value;
	let card_new = document.getElementsByClassName('main-cards-item')[1];
	if ((typeof(bioValue)) === 'string'  && bioValue.length < 100 && bioValue != '') {
		card_new.querySelector('.bio').textContent = bio.value;
	} else {
		alert('Заполните биографию');
	}
});

views.addEventListener('change', function() {
	let viewsValue = views.value;
	let card_new = document.getElementsByClassName('main-cards-item')[1];
	if  (views.selectedIndex == 0) {
		alert('Выберите политические взгляды');
		} else {
			card_new.querySelector('.views').textContent = views.value;
		}
});

readyBtn.addEventListener('click', function() {

	let card_new = doc.getElementsByClassName('main-cards-item')[1];
	let nameValue = name.value,
		ageValue = age.value,
		viewsValue = views.value,
		bioValue = bio.value;

	crimeBtn.style.display = 'block';
	
	if (nameValue == '' || nameValue == '' || bioValue == '') { 
		alert('Заполните поля формы');
	} else if (views.selectedIndex == 0) {
		alert('Выберите политические взгляды');
	}	else {
			overlay.style.display = "none";
			main.style.display = "none";
			custom.style.display = "none";
			main.style.display = "block";
			reset();
		}
});



function reset(){
	
	for (let i = 0; i < main_cards_item.length; i++) {
	    result_count[i].textContent = '0%';
	    progress_bar[i].style.height = '0%';
	    main_cards_item[i].classList.remove("main-cards-item-active");
	}
	name.value = '';
	age.value = '';
	bio.value = '';
	views.value = '';
	sex[0].checked = true;
	personEasy.style.backgroundImage = "url(../Candidate/img/construct-5.png)";
    preview.style.backgroundImage = "url(../Candidate/img/construct-5.png)";
    
};

// Кнопка "Сбросить результаты"

resetBtn.addEventListener('click', function() {

	overlay.style.display = "none";
	main.style.display = "none";
	custom.style.display = "flex";

	for (let i = 0; i < customBlocks.length; i++) {
	    customBlocks[i].style.display = "block";
	}

	reset();

});

// Кнопка "Провести честное голосование"
		
votingBtn.addEventListener('click', function votingFun() {

	let arr1 = random();
   	let arr2 = arr1;	
	for (i = 0; i < arr.length; ++i) {
	    result_count[i].textContent = arr[i] + '%';
		progress_bar[i].style.height = arr[i] + '%';			
	}
	
	if (arr1[0] > arr1[1] && arr1[0] > arr1[2]) {
		main_cards_item[0].classList.add("main-cards-item-active");
		main_cards_item[1].classList.remove("main-cards-item-active");
		main_cards_item[2].classList.remove("main-cards-item-active");
	} else if (arr1[1] > arr1[0] && arr1[1] > arr1[2]) {
		main_cards_item[0].classList.remove("main-cards-item-active");
		main_cards_item[1].classList.add("main-cards-item-active");
		main_cards_item[2].classList.remove("main-cards-item-active");
	} else  {
		main_cards_item[0].classList.remove("main-cards-item-active");
		main_cards_item[1].classList.remove("main-cards-item-active");
		main_cards_item[2].classList.add("main-cards-item-active");
	}
	
// Кнопка "Вмешаться в выборы"

crimeBtn.addEventListener('click', function() {
	
	arr2[1] += 25;
	for (i = 0; i < arr2.length; ++i) {
	    result_count[i].textContent = arr2[i] + '%';
		progress_bar[i].style.height = arr2[i] + '%';			
	}
	
		if (arr2[1] >= 100 ) {
   			result_count[1].textContent = 100 + '%';
			progress_bar[1].style.height = 100 + '%';
			result_count[0].textContent = 0 + '%';
			progress_bar[0].style.height = 0 + '%';
			result_count[2].textContent = 0 + '%';
			progress_bar[2].style.height = 0 + '%';
   		}; 
	
	if (arr2[0] > arr2[1] && arr1[0] > arr2[2]) {
		main_cards_item[0].classList.add("main-cards-item-active");
		main_cards_item[1].classList.remove("main-cards-item-active");
		main_cards_item[2].classList.remove("main-cards-item-active");
	} else if (arr2[1] > arr2[0] && arr1[1] > arr2[2]) {
		main_cards_item[0].classList.remove("main-cards-item-active");
		main_cards_item[1].classList.add("main-cards-item-active");
		main_cards_item[2].classList.remove("main-cards-item-active");
	} else  {
		main_cards_item[0].classList.remove("main-cards-item-active");
		main_cards_item[1].classList.remove("main-cards-item-active");
		main_cards_item[2].classList.add("main-cards-item-active");
	};
	alert('Вы совершили противозаконное действие\nи тем самым попали под СТАТЬЮ 142.1. ФАЛЬСИФИКАЦИЯ ИТОГОВ ГОЛОСОВАНИЯ');
	arr2 = [0,0,0];
	crimeBtn.style.display = 'none';

});

});

function random() {
  let n1 = Math.ceil(Math.random()*99),
      n2 = Math.ceil(Math.random()*(100-n1)),
      n3 = 100 - n1 - n2;
      arr = [n1, n2, n3];
      return arr
};

function checkSex() {
	let n = 1;
	for (let i = 0; i < sex.length; i++) {
		if (sex[0].checked) {
			personEasy.style.backgroundImage = "url(../Candidate/img/construct-5.png)";
        	preview.style.backgroundImage = "url(../Candidate/img/construct-5.png)";
		 	maleStyle ();
		 	sex[i].addEventListener('change', function () {
			
				if (sex[0].checked) {
					n = n + 4;
					maleStyle ();
					personEasy.style.backgroundImage = "url(../Candidate/img/construct-"+n+".png)";
		        	preview.style.backgroundImage = "url(../Candidate/img/construct-"+n+".png)";
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.sex').textContent = sex[0].value;
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-"+n+".png)";
				} else {
					n = 1;
					femaleStyle ();
					personEasy.style.backgroundImage = "url(../Candidate/img/construct-"+n+".png)";
		        	preview.style.backgroundImage = "url(../Candidate/img/construct-"+n+".png)";
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.sex').textContent = sex[1].value;
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-"+n+".png)";
				}
			});	
		};
	};
};

// Слайдер внешнего вида

function femaleStyle () {

	let	femaleNum = 1,
		femaleMaxNum = 4;

	next.addEventListener('click', function() {
			femaleNum++;
			if (femaleNum > femaleMaxNum) { femaleNum = 1; }
			personEasy.style.backgroundImage = "url(../Candidate/img/construct-"+femaleNum+".png)";
			preview.style.backgroundImage = "url(../Candidate/img/construct-"+femaleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-"+femaleNum+".png)";
	});

	prev.addEventListener('click', function() {
			femaleNum--;
			if (femaleNum < 1) { femaleNum = femaleMaxNum; }
			personEasy.style.backgroundImage = "url(../Candidate/img/construct-"+femaleNum+".png)";
			preview.style.backgroundImage = "url(../Candidate/img/construct-"+femaleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-"+femaleNum+".png)";

	});	
};

function maleStyle () {

	let	maleNum = 5,
		maleMaxNum = 8;

	next.addEventListener('click', function() {
			maleNum++;
			if (maleNum > maleMaxNum) { maleNum = 5; }
			personEasy.style.backgroundImage = "url(../Candidate/img/construct-"+maleNum+".png)";
			preview.style.backgroundImage = "url(../Candidate/img/construct-"+maleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-"+maleNum+".png)";

	});

	prev.addEventListener('click', function() {
			maleNum--;
			if (maleNum < 5) { maleNum = maleMaxNum; }
			personEasy.style.backgroundImage = "url(../Candidate/img/construct-"+maleNum+".png)";
			preview.style.backgroundImage = "url(../Candidate/img/construct-"+maleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../Candidate/img/construct-"+maleNum+".png)";

	});	
	
};

age.onkeypress = function(e) {
  e = e || event;

  if (e.ctrlKey || e.altKey || e.metaKey) return;

  var chr = getChar(e);

  if (chr == null) return;

  if (chr < '0' || chr > '9') {
    return false;
  }
}

function getChar(event) {
  if (event.which == null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode) 
  }

  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which)
  }

  return null; 
}
