var minSize = '0px';
var bigText = document.getElementById('bigText');
var textInput = document.getElementById('textInput');
showText(
	textInput,
	bigText,
	'calc((100vw - 4rem) / ' + textInput.value.length + ')'
);

function showText(text, element, fontSize) {
	if (/\d{1,3}px/.test(fontSize)) minSize = fontSize;
	element.style.fontSize = 'clamp(' + minSize + ',' + fontSize + ', 500px)';

	var characterArr = text.split('');

	element.innerHTML = '';
	for (i = 0; i < characterArr.length; i++) {
		element.innerHTML +=
			"<div class='wrapper'><span class='character'>" +
			characterArr[i] +
			'</span></div>';
	}
}
function editProperty(element) {
	var property = element.getAttribute('data-property');
	if (property == 'bold') {
		bigText.style.fontWeight =
			bigText.style.fontWeight == '400' ? '800' : '400';
        if (element.style.backgroundColor == 'rgba(10, 10, 10, 0)') {
            element.style.backgroundColor = 'rgb(10, 10, 10)';
        } else {
            element.style.backgroundColor = 'rgba(10, 10, 10, 0)';
        }
	} else if (property == 'italic') {
		bigText.style.fontStyle =
			bigText.style.fontStyle == 'normal' ? 'italic' : 'normal';
        if (element.style.backgroundColor == 'rgba(10, 10, 10, 0)') {
			element.style.backgroundColor = 'rgb(10, 10, 10)';
		} else {
			element.style.backgroundColor = 'rgba(10, 10, 10, 0)';
		}
	} else if (property == 'underline') {
		bigText.style.textDecoration =
			bigText.style.textDecoration == 'none' ? 'underline' : 'none';
        if (element.style.backgroundColor == 'rgba(10, 10, 10, 0)') {
			element.style.backgroundColor = 'rgb(10, 10, 10)';
		} else {
			element.style.backgroundColor = 'rgba(10, 10, 10, 0)';
		}
	} else if (property == 'family') bigText.style.fontFamily = element.value;
	else alert('Invalid or no property specified.');
}
