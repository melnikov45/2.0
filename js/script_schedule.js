var modal = document.getElementById('myModal');
var btn = document.getElementById("link-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

/*var button = document.getElementById("link-button"); 
button.addEventListener("click", () => {
	document.addEventListener('mousemove', e => {
		Object.assign(document.documentElement, {
			style: `
			--move-x: 0;
			--move-y: 0;
			`
		})
	})
});

span.addEventListener("click", () => {
	document.addEventListener('mousemove', e => {
		Object.assign(document.documentElement, {
			style: `
			--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
			--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
			`
		})
	})
});*/

var checkboxes_2 = document.querySelectorAll('input.my-checkbox_2'),
    checkall_2 = document.getElementById('checkbox_2');

for(var i=0; i<checkboxes_2.length; i++) {
    checkboxes_2[i].onclick = function() {
        var checkedCount = document.querySelectorAll('input.my-checkbox_2:checked').length;
        checkall_2.checked = checkedCount > 0;
        checkall_2.indeterminate = checkedCount > 0 && checkedCount < checkboxes_2.length;
    }
}

checkall_2.onclick = function() {
    for(var i=0; i<checkboxes_2.length; i++) {
        checkboxes_2[i].checked = this.checked;
    }
}

var checkboxes_3 = document.querySelectorAll('input.my-checkbox_3'),
    checkall_3 = document.getElementById('checkbox_3');

for(var i=0; i<checkboxes_3.length; i++) {
    checkboxes_3[i].onclick = function() {
        var checkedCount = document.querySelectorAll('input.my-checkbox_3:checked').length;
        checkall_3.checked = checkedCount > 0;
        checkall_3.indeterminate = checkedCount > 0 && checkedCount < checkboxes_3.length;
    }
}

checkall_3.onclick = function() {
    for(var i=0; i<checkboxes_3.length; i++) {
        checkboxes_3[i].checked = this.checked;
    }
}

var checkboxes_3 = document.querySelectorAll('input.my-checkbox_3'),
checkall = document.getElementById('checkbox');
checkall.onclick = function() {
    for(var i=0; i<checkboxes_3.length; i++) {
		checkboxes_2[i].checked = this.checked;
        checkboxes_3[i].checked = this.checked;
    }
}

var button = document.getElementById("link-button");
var my_checkbox_2_1 = document.getElementById("my_checkbox_2_1");  
button.addEventListener("click", () => {
    var table_2_1 = document.getElementById("part_2_1")
    	if(my_checkbox_2_1.checked) {
            table_2_1.style.display = "block";
		}
		else {
			table_2_1.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_2 = document.getElementById("my_checkbox_2_2");   
button.addEventListener("click", () => {
    var table_2_2 = document.getElementById("part_2_2")
    	if(my_checkbox_2_2.checked) {
            table_2_2.style.display = "block";
		}
		else {
			table_2_2.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_3 = document.getElementById("my_checkbox_2_3");   
button.addEventListener("click", () => {
    var table_2_3 = document.getElementById("part_2_3")
    	if(my_checkbox_2_3.checked) {
            table_2_3.style.display = "block";
		}
		else {
			table_2_3.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_4 = document.getElementById("my_checkbox_2_4");   
button.addEventListener("click", () => {
    var table_2_4 = document.getElementById("part_2_4")
    	if(my_checkbox_2_4.checked) {
            table_2_4.style.display = "block";
		}
		else {
			table_2_4.style.display = "none";
		}
} 
);

var button = document.getElementById("link-button"); 
var my_checkbox_2_5 = document.getElementById("my_checkbox_2_5");   
button.addEventListener("click", () => {
    var table_2_5 = document.getElementById("part_2_5")
    	if(my_checkbox_2_5.checked) {
            table_2_5.style.display = "block";
		}
		else {
			table_2_5.style.display = "none";
		}
} 
);



//скрип нажатия на ячейки
var tds = document.querySelectorAll('td');
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementsByClassName("close2")[0];
for (var i = 0; i < tds.length; i++) {
		tds[i].onclick = function() { 
			modal2.style.display = "block";
		}
		
		span2.onclick = function() {
			modal2.style.display = "none";
		}
			
		
		/*var input = document.createElement('input');
		input.value = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(input);
		
		var td = this;
		input.addEventListener('blur', function() {
			td.innerHTML = this.value;
			td.addEventListener('click', func);
		});
		
		this.removeEventListener('click', func);*/
	};



	function autocomplete(inp, arr) {
		/*функция автозаполнения принимает два аргумента,
		  элемент текстового поля и массив возможных значений автозаполнения:*/
		var currentFocus;
		/*выполните функцию, когда кто-то пишет в текстовом поле:*/
		inp.addEventListener("input", function(e) {
			var a, b, i, val = this.value;
			/*закройте все уже открытые списки значений автозаполнения*/
			closeAllLists();
			if (!val) { return false;}
			currentFocus = -1;
			/*создайте элемент DIV, который будет содержать элементы (значения):*/
			a = document.createElement("DIV");
			a.setAttribute("id", this.id + "autocomplete-list");
			a.setAttribute("class", "autocomplete-items");
			/*добавьте элемент DIV в качестве дочернего элемента контейнера автозаполнения:*/
			this.parentNode.appendChild(a);
			/*для каждого элемента массива...*/
			for (i = 0; i < arr.length; i++) {
			  /*проверьте, начинается ли элемент с тех же букв, что и значение текстового поля:*/
			  if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				/*создайте элемент DIV для каждого соответствующего элемента:*/
				b = document.createElement("DIV");
				/*сделайте соответствующие буквы жирными:*/
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				/*вставьте поле ввода, которое будет содержать значение текущего элемента массива:*/
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				/*выполните функцию, когда кто-то нажимает на значение элемента (DIV элемент):*/
				b.addEventListener("click", function(e) {
					/*вставьте значение для текстового поля автозаполнения:*/
					inp.value = this.getElementsByTagName("input")[0].value;
					/*закройте список значений автозаполнения,
					(или любые другие открытые списки значений автозаполнения:*/
					closeAllLists();
				});
				a.appendChild(b);
			  }
			}
		});
		/*выполнение функции нажатие клавиши на клавиатуре:*/
		inp.addEventListener("keydown", function(e) {
			var x = document.getElementById(this.id + "autocomplete-list");
			if (x) x = x.getElementsByTagName("div");
			if (e.keyCode == 40) {
			  /*Если нажата клавиша со стрелкой вниз,
				увеличьте текущую переменную фокуса:*/
			  currentFocus++;
			  /*и сделать текущий элемент более заметным:*/
			  addActive(x);
			} else if (e.keyCode == 38) { //вверх
			  /*Если нажата клавиша со стрелкой вверх,
				уменьшите текущую переменную фокуса:*/
			  currentFocus--;
			  /*и сделать текущий элемент более заметным:*/
			  addActive(x);
			} else if (e.keyCode == 13) {
			  /*Если нажата клавиша ENTER, не допускайте отправки формы,*/
			  e.preventDefault();
			  if (currentFocus > -1) {
				/*и имитировать щелчок по "активному" пункту:*/
				if (x) x[currentFocus].click();
			  }
			}
		});
		function addActive(x) {
		  /*функция для классификации элемента как " активного":*/
		  if (!x) return false;
		  /*начните с удаления "активного" класса на всех элементах:*/
		  removeActive(x);
		  if (currentFocus >= x.length) currentFocus = 0;
		  if (currentFocus < 0) currentFocus = (x.length - 1);
		  /*добавить класс "autocomplete-active":*/
		  x[currentFocus].classList.add("autocomplete-active");
		}
		function removeActive(x) {
		  /*функция для удаления класса "active" из всех элементов автозаполнения:*/
		  for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		  }
		}
		function closeAllLists(elmnt) {
		  /*закройте все списки автозаполнения в документе,
		  за исключением того, что было передано в качестве аргумента:*/
		  var x = document.getElementsByClassName("autocomplete-items");
		  for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
			  x[i].parentNode.removeChild(x[i]);
			}
		  }
		}
		/*выполните функцию, когда кто-то щелкает в документе:*/
		document.addEventListener("click", function (e) {
			closeAllLists(e.target);
		});
	  }

	  autocomplete(document.getElementById("myInput"), countries);

var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este"];