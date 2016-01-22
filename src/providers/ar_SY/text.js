var first_letter_up = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var provider = {
	words_list: [
    "هذا",
    "النص",
    "هو",
    "مثال",
    "لنص",
    "يمكن",
    "أن",
    "يستبدل",
    "في",
    "نفس",
    "المساحة،",
    "لقد",
    "تم",
    "توليد",
    "هذا",
    "النص",
    "من",
    "مولد",
    "النص",
    "العربى،",
    "حيث",
    "يمكنك",
    "أن",
    "تولد",
    "مثل",
    "هذا",
    "النص",
    "أو",
    "العديد",
    "من",
    "النصوص",
    "الأخرى",
    "إضافة",
    "إلى",
    "زيادة",
    "عدد",
    "الحروف",
    "التى",
    "يولدها",
    "التطبيق،",
    "إذا",
    "كنت",
    "تحتاج",
    "إلى",
    "عدد",
    "أكبر",
    "من",
    "الفقرات",
    "يتيح",
    "لك",
    "مولد",
    "النص",
    "العربى",
    "زيادة",
    "عدد",
    "الفقرات",
    "كما",
    "تريد،",
    "النص",
    "لن",
    "يبدو",
    "مقسما",
    "ولا",
    "يحوي",
    "أخطاء",
    "لغوية،",
    "مولد",
    "النص",
    "العربى",
    "مفيد",
    "لمصممي",
    "المواقع",
    "على",
    "وجه",
    "الخصوص،",
    "حيث",
    "يحتاج",
    "العميل",
    "فى",
    "كثير",
    "من",
    "الأحيان",
    "أن",
    "يطلع",
    "على",
    "صورة",
    "حقيقية",
    "لتصميم",
    "الموقع،",
    "ومن",
    "هنا",
    "وجب",
    "على",
    "المصمم",
    "أن",
    "يضع",
    "نصوصا",
    "مؤقتة",
    "على",
    "التصميم",
    "ليظهر",
    "للعميل",
    "الشكل",
    "كاملاً،دور",
    "مولد",
    "النص",
    "العربى",
    "أن",
    "يوفر",
    "على",
    "المصمم",
    "عناء",
    "البحث",
    "عن",
    "نص",
    "بديل",
    "لا",
    "علاقة",
    "له",
    "بالموضوع",
    "الذى",
    "يتحدث",
    "عنه",
    "التصميم",
    "فيظهر",
    "بشكل",
    "لا",
    "يليق،",
    "هذا",
    "النص",
    "يمكن",
    "أن",
    "يتم",
    "تركيبه",
    "على",
    "أي",
    "تصميم",
    "دون",
    "مشكلة",
    "فلن",
    "يبدو",
    "وكأنه",
    "نص",
    "منسوخ،",
    "غير",
    "منظم،",
    "غير",
    "منسق،",
    "أو",
    "حتى",
    "غير",
    "مفهوم.",
    "لأنه",
    "مازال",
    "نصاً",
    "بديلاً",
    "ومؤقتاً."
  ],

	letters: 'ابتثجحخدذرزسشصضطظعغفقكلمنهويأءئؤ',

	title: function() {
		return first_letter_up(this.words(this.integer(2, 3)));
	},

	sentence: function() {
		return first_letter_up(this.words(this.integer(3, 10))) + '.';
	},

	text: function() {
		return this.sentences(this.integer(3, 6));
	},

	description: function() {
		return this.sentences(this.integer(2, 5));
	},

	short_description: function() {
		return this.sentence;
	},

	string: function() {
		return this.words();
	},

	sentences: function(n) {
		n = n || 3;

		var result = [];
		for (var i = 0; i < n; ++i) {
			result.push(this.sentence);
		}

		return result.join(' ');
	},

	word: function() {
		return this.random_element(this.words_list);
	},

	words: function(n) {
		return this.array_of_words(n).join(' ');
	},

	array_of_words: function(n) {
		n = n || 7;
		var result = [];

		for (var i = 0; i < n; ++i) {
			result.push(this.word);
		}

		return result;
	},

	letter: function() {
		return this.random_element(this.letters);
	}
};

module.exports = provider;