document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var quotes = {
      "- Я хочу любить-": '"Пусть земля бежит в никуда Пусть меня повяжет ее красота Пусть время летит, пусть оно уйдет вновь Я хочу любить, как она поет."',
      "Психопатия ": '"Люди окаменели, колени до дыр стирая В молитвах искали подвох Плевали на Бога, не запоминая тепло Что дарила когда-то любовь."',
      "Психопатия. ": '"Нам не нужны самоцветы, золото тоже, поверь Достаток – иллюзия в целом. Это – закрытая дверь."',
      "Колизей": '"Время заберёт всё, что дорого тебе, Куда бы не бежал ты, кролик."',
      "Колизей.": '"Наш мир — Колизей, Для демонов, ангелов, друзей, Колизей для злого и хорошего, для всех."',
      "Косандра": '"Все разъехались прочь, не горят огни, Предстань в роли игривой падры. Проведу с тобой ночь, Я — пленник Косандры."',
      "Люби меня": '"Мой город-капкан, и я в него попал. Остаться человеком здесь шансов так мало."',
      "9 грамм": '"Время, верни меня туда, где беззаботными мы были. Дай мне насладиться, Где улыбок непочатый край."',
      "Люби меня.": '"Под чувством любовь ей откроются все двери, По играм все её давным давно хотели."',
      "Бэйба судьба": '"Верю в тебя бэйба-судьба. Только ты лишь знаешь, куда мы дули и куда дули ветра."',
      "При своём": '"Я останусь при своём, при повёрнутом уме."',
      "Настырный": '"Раз пришёл в этот мир, так и живи с миром."',
      "Вера": '"Есть место как для хорошего, так и для плохого."',
      "Я хочу любить....": '"Пусть земля бежит в никуда Пусть меня повяжет ее красота Пусть время летит, пусть оно уйдет вновь Я хочу любить, как она поет."',
      "Нирвана": '"И ты уже не та, с кем мне по кайфу делать искры."',
      "Дама": '"Но я готов принять все боли, перегрузы в голове Признаю, что в этом мире меня тянет лишь к тебе."',
      "Тамада": '"Солнце погасло и пропала тень, уснули города."',
      "": '"Тут моя жизнь и я ей окрылён."',
      "Дорогая": '"Мама, залечи мои открытые раны."',
      "Санавабич": '"Все мы верим в чудеса! Моя воля — я бы сам их творил и раздавал бесплатно."',
      "Listen to Your Heart": '"Стоит ли винить кого, а стоит ли вникать? Мои мысли — скакуны, и я готов их отпускать."',
      "Заплаканная": '"Я навсегда буду предан тебе»,-говорил тихо снег холодной земле."',
      "Фея": '"Мы же понимали друг друга без слов. Это ли не любовь."',
      "Yamakasi": '"Красота этого города горела неистово, обжигала сводками новостей."',
      "Нет Войне": '"Не убивай в себе человека. Такими темпами, земля не протянет и века."',
      "Лабиринты......": '"Я прячу мысли под новый плюс."',
      "Заплаканная.": '"Такая картина, мысли воедино. Заплаканная моя любимая интрига."',
      "Самая...": '"Свобода — это фантом, там нету тепла для меня без тебя."',
      "Be My Sky..": '"Вулкан и всюду таяли льды. Я не перепутал Вселенной коды."',
      "Люби меня......": '"И на виду ваших глаз, я раскрываю ноты фраз."',
      "All the Time.": '"Не вини себя, иначе вылезет боком."',
      "Половина моя..": '"Я сна не вижу, если тебя вдруг рядом нет."',
      "God Damn...": '"На небе переливы, под ногами пыль Мои «Звёздные Войны» — мой мир."',
      "Be my sky...": '"Наступит ночь, а меня встретит бесконечная луна."',
      "Нутро.": '"И эта ненависть заставит вспомнить, как ты пал."',
      "Психопатия....": '"Останки былых впечатлений пытались сдержать мою жизнь на плаву."',
      "Люби меня............": '"Верю в красочный мир, где мы непобедимы."',
      "Don’t cry": '"Рисовать схемы, обгонять время Пламя не потушит ни один демон."',
      "Половина моя": '"Половина моя, я дарю тебе всего себя и этой ночью мы с тобой сгорали дотла."',
      "По пятам": '"Мне нечем жить, если тебя нет рядом."',
      "Best Days": '"Небо искрится, к звездам давай! ."',
      "Санавабич.": '"Убережёт господь или покинет ангел. Мне даже дождь х*й потушит мой горящий факел!."',
      "Look at the Scars": '"Потопали в ритм так не спеша Тут размытая память, где нет тебя."',
    };
  
    // grab all the keys in the dictionary (authors) and store in an array
    var authors = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]
  
// const div = document.createElement('div');
// div.id = 'myDiv';
// div.className = 'myDivClassName';

// div.innerText = quote;


    document.querySelector("#quote").appendChild(div);
    document.querySelector("#author").textContent = author;
  
  }
  