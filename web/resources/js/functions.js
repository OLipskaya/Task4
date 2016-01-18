
Name = {
    INPUT1: "inputline",
    INPUT2: "result1",
    INPUT3: "result2"
}

function reverse (str) {
    str = str.split('').reverse().join('');
    document.getElementById(Name.INPUT3).value = str;
}

function convert() {
    var str = document.getElementById(Name.INPUT1).value;
    var space = '';
    var space1 = ' ';
    var link = '';
    var transl = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh', 'ъ': space,
        'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
    }

    if (str != "") str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        if (/[а-яё]/.test(str.charAt(i))) {
            link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))) {
            link += str.charAt(i);
        } else {
            if (link.slice(-1) !== space1) link += space1;
        }
    }
    document.getElementById(Name.INPUT2).value = link;
    if(link != "") reverse(link);
}