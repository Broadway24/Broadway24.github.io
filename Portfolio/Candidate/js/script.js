let doc = document,
	overlay = 		doc.querySelector('.overlay'),
	main = 			doc.querySelector('.main'),
	custom = 		doc.querySelector('.custom'),
	customBlocks = 	doc.querySelectorAll("div.custom > div");

let popupBtn = 		doc.getElementById('popup-btn'),
	readyBtn = 		doc.getElementById('ready'),
	resetBtn = 		doc.getElementById('reset'),
	votingBtn = 	doc.getElementById('voting'),
	crimeBtn = 		doc.getElementById('crime');

let main_cards = 	doc.getElementsByClassName('main-cards'),
	main_cards_item = doc.getElementsByClassName('main-cards-item'),
	card_1 = 		doc.getElementsByClassName('main-cards-item')[0],
	// card_3 = 	doc.getElementsByClassName('main-cards').lastChild,
	result_count = 	doc.getElementsByClassName('result-count'),
	progress_bar = 	doc.getElementsByClassName('progress-bar');

	

popupBtn.addEventListener('click', function() {
	overlay.style.display = "none";
	main.style.display = "none";
	custom.style.display = "flex";

	for (let i = 0; i < customBlocks.length; i++) {
	    customBlocks[i].style.display = "block";
	    // document.getElementsByClassName('main-cards-item')[i].classList.remove("main-cards-item-active");
	}

	let card_2 = card_1.cloneNode(true);
	card_1.parentNode.insertBefore(card_2, card_1.nextSibling);

	main_cards_item[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-5.png)";

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

readyBtn.addEventListener('click', function() {

	let nameValue = name.value,
		ageValue = age.value,
		bioValue = bio.value;

	if (
		(typeof(nameValue)) === 'string' && nameValue.length < 40 && nameValue != '' && /^[а-яА-ЯёЁ. ]+$/.test(nameValue) == true
		&& 	!isNaN(parseFloat(ageValue)) && ageValue >= 18
		&&  (typeof(bioValue)) === 'string'  && bioValue.length < 100 && bioValue != ''
		// && 	views.value != ''
		// 
		) {
			overlay.style.display = "none";
			main.style.display = "none";
			custom.style.display = "none";
			main.style.display = "block";
				
			let card_new = doc.getElementsByClassName('main-cards-item')[1];
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundSize = 'contain';

			if (views.selectedIndex == 0) {
				card_new.querySelector('.views').textContent = views[1].value;
			} else {
				card_new.querySelector('.views').textContent = views.value;
			}

			

			card_new.querySelector('.name').textContent = name.value;
			
			if (ageValue % 10 == 1) {
				card_new.querySelector('.age').textContent = age.value + ' год';
			}  else if (ageValue % 10 > 1 && ageValue % 10 < 5) {
				card_new.querySelector('.age').textContent = age.value + ' года';
			} else {
				card_new.querySelector('.age').textContent = age.value + ' лет';
			}
			
			card_new.querySelector('.bio').textContent = bio.value;

			reset();

	} else if (nameValue.length > 40 || nameValue == '' || /^[а-яА-ЯёЁ. ]+$/.test(name) == false) {
			alert('Некорректное значение имени\n\nВедите ФИО по кирилицей');
			name.value = '';

	} else if (isNaN(parseFloat(ageValue)) || !isFinite(ageValue) || ageValue < 18) {
		alert('Возраст должен быть боль 18 лет');
		age.value = '';

	} else if ((typeof(bioValue)) !== 'string' || bioValue.length > 100 || bioValue == '') {
		alert('Заполниет биографию');

	} else if  (views.selectedIndex = 0) {
		alert('Выберите политические взгляды');
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
	personEasy.style.backgroundImage = "url(../img/construct-5.png)";
    preview.style.backgroundImage = "url(../img/construct-5.png)";
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
		
votingBtn.addEventListener('click', function() {

	let n1 = Math.ceil(Math.random()*99),
   		n2 = Math.ceil(Math.random()*(100-n1)),
   		n3 = 100 - n1 - n2,
   		arr = [n1, n2, n3],
   		max = arr[0],
   		id = 0;
   		
		for (i = 0; i < arr.length; ++i) {
		    result_count[i].textContent = arr[i] + '%';
			progress_bar[i].style.height = arr[i] + '%';			
		}
/*
		
		    if (arr[i] > max) {
		    	max = arr[i];
		    	id = i;
		    	main_cards_item[id].classList.add("main-cards-item-active");
		    	if (i != id){
		    		for (i = 0; i < arr.length; ++i) {
		    			main_cards_item[i].classList.remove("main-cards-item-active");
		    		}
		    	}
		    } 


		}*/
});

// Кнопка "Вмешаться в выборы"

crimeBtn.addEventListener('click', function() {

	let n1 = Math.ceil(Math.random()*99) - 12,
   		n2 = Math.ceil(Math.random()*(100-n1)) + 25,
   		n3 = 100 - n1 - n2 - 13,
   		arr = [n1, n2, n3],
   		max = arr[0],
   		id = 0;
/*
   		 if (arr[0] < 0) {
   		 	arr[2] += Math.abs(arr[0]);

   		 } else if (arr[2] < 0) {
   		 	arr[0] += Math.abs(arr[2]);
   		 }
   		*/
   		for (i = 0; i < arr.length; ++i) {
		    result_count[i].textContent = arr[i] + '%';
			progress_bar[i].style.height = arr[i] + '%';			
		}

	});



function checkSex() {
	let n = 1;
	for (let i = 0; i < sex.length; i++) {
		if (sex[0].checked) {
			personEasy.style.backgroundImage = "url(../img/construct-5.png)";
        	preview.style.backgroundImage = "url(../img/construct-5.png)";
		 	maleStyle ();
		 	sex[i].addEventListener('change', function () {
			
				if (sex[0].checked) {
					n = n + 4;
					maleStyle ();
					personEasy.style.backgroundImage = "url(../img/construct-"+n+".png)";
		        	preview.style.backgroundImage = "url(../img/construct-"+n+".png)";
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.sex').textContent = sex[0].value;
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-"+n+".png)";
				} else {
					n = 1;
					femaleStyle ();
					personEasy.style.backgroundImage = "url(../img/construct-"+n+".png)";
		        	preview.style.backgroundImage = "url(../img/construct-"+n+".png)";
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.sex').textContent = sex[1].value;
		        	document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-"+n+".png)";
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
			personEasy.style.backgroundImage = "url(../img/construct-"+femaleNum+".png)";
			preview.style.backgroundImage = "url(../img/construct-"+femaleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-"+femaleNum+".png)";
	});

	prev.addEventListener('click', function() {
			femaleNum--;
			if (femaleNum < 1) { femaleNum = femaleMaxNum; }
			personEasy.style.backgroundImage = "url(../img/construct-"+femaleNum+".png)";
			preview.style.backgroundImage = "url(../img/construct-"+femaleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-"+femaleNum+".png)";

	});	
};

function maleStyle () {

	let	maleNum = 5,
		maleMaxNum = 8;

	next.addEventListener('click', function() {
			maleNum++;
			if (maleNum > maleMaxNum) { maleNum = 5; }
			personEasy.style.backgroundImage = "url(../img/construct-"+maleNum+".png)";
			preview.style.backgroundImage = "url(../img/construct-"+maleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-"+maleNum+".png)";

	});

	prev.addEventListener('click', function() {
			maleNum--;
			if (maleNum < 5) { maleNum = maleMaxNum; }
			personEasy.style.backgroundImage = "url(../img/construct-"+maleNum+".png)";
			preview.style.backgroundImage = "url(../img/construct-"+maleNum+".png)";
			document.getElementsByClassName('main-cards-item')[1].querySelector('.photo-1').style.backgroundImage = "url(../img/construct-"+maleNum+".png)";

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