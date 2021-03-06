const quotes = [
  {
    id: 0,
    author: "Abraham Lincoln",
    text: "A house divided against itself cannot stand."
  },
  {
    id: 1,
    author: "Abraham Lincoln",
    text: "Important principles may, and must, be inflexible."
  },
  {
    id: 2,
    author: "Abraham Lincoln",
    text: "I destroy my enemies when I make them my friends."
  },
  {
    id: 3,
    author: "Abraham Lincoln",
    text:
      "You have to do your own growing no matter how tall your grandfather was."
  },
  {
    id: 4,
    author: "Abraham Lincoln",
    text: "Most people are about as happy as they make up their minds to be"
  },
  {
    id: 5,
    author: "Abraham Lincoln",
    text: "Most folks are about as happy as they make up their minds to be."
  },
  {
    id: 6,
    author: "Abraham Lincoln",
    text:
      "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
  },
  {
    id: 7,
    author: "Abraham Lincoln",
    text:
      "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run."
  },
  {
    id: 8,
    author: "Abraham Lincoln",
    text:
      "The best thing about the future is that it only comes one day at a time."
  },
  {
    id: 9,
    text: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
    source: "https://www.goodreads.com/quotes/328848",
    tags: "future, prediction, create, creation, life"
  },
  {
    id: 10,
    author: "Abraham Lincoln",
    text:
      "Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing."
  },
  {
    id: 11,
    author: "Abraham Lincoln",
    text: "As our case is new, we must think and act anew."
  },
  {
    id: 12,
    author: "Abraham Lincoln",
    text: "Be sure you put your feet in the right place, then stand firm."
  },
  {
    id: 13,
    author: "Abraham Lincoln",
    text:
      "Always bear in mind that your own resolution to succeed is more important than any one thing."
  },
  {
    id: 14,
    author: "Abraham Lincoln",
    text: "I walk slowly, but I never walk backward."
  },
  {
    id: 15,
    author: "Abraham Lincoln",
    text: "Truth is generally the best vindication against slander."
  },
  {
    id: 16,
    author: "Abraham Lincoln",
    text: "Most folks are as happy as they make up their minds to be."
  },
  {
    id: 17,
    author: "Abraham Lincoln",
    text: "I will prepare and some day my chance will come."
  },
  {
    id: 18,
    author: "Abraham Maslow",
    text:
      "What is necessary to change a person is to change his awareness of himself."
  },
  {
    id: 19,
    author: "Aesop",
    text: "No act of kindness, no matter how small, is ever wasted."
  },
  {
    id: 20,
    author: "Ajahn Chah",
    text:
      "If you let go a little, you will have a little peace. If you let go a lot, you will have a lot of peace."
  },
  {
    id: 21,
    author: "Alan Watts",
    text:
      "No valid plans for the future can be made by those who have no capacity for living now."
  },
  {
    id: 22,
    author: "Albert Camus",
    text: "Autumn is a second spring when every leaf is a flower."
  },
  {
    id: 23,
    author: "Albert Camus",
    text:
      "In the depth of winter, I finally learned that there was within me an invincible summer."
  },
  {
    id: 24,
    author: "Albert Einstein",
    text: "God always takes the simplest way."
  },
  {
    id: 25,
    author: "Albert Einstein",
    text: "Learn from yesterday, live for today, hope for tomorrow."
  },
  {
    id: 26,
    author: "Albert Einstein",
    text: "The only real valuable thing is intuition."
  },
  {
    id: 27,
    author: "Albert Einstein",
    text: "Once we accept our limits, we go beyond them."
  },
  {
    id: 28,
    author: "Albert Einstein",
    text:
      "Life is like riding a bicycle. To keep your balance you must keep moving."
  },
  {
    id: 29,
    author: "Albert Einstein",
    text:
      "Feeling and longing are the motive forces behind all human endeavor and human creations."
  },
  {
    id: 30,
    author: "Albert Einstein",
    text:
      "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind."
  },
  {
    id: 31,
    author: "Albert Einstein",
    text:
      "Try not to become a man of success, but rather try to become a man of value."
  },
  {
    id: 32,
    author: "Albert Einstein",
    text: "When the solution is simple, God is answering."
  },
  {
    id: 33,
    author: "Albert Einstein",
    text: "A man should look for what is, and not for what he thinks should be."
  },
  {
    id: 34,
    author: "Albert Einstein",
    text:
      "Imagination is more important than knowledge. For while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create."
  },
  {
    id: 35,
    author: "Albert Einstein",
    text:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut."
  },
  {
    id: 36,
    author: "Albert Einstein",
    text: "Reality is merely an illusion, albeit a very persistent one."
  },
  {
    id: 37,
    author: "Albert Einstein",
    text:
      "Peace cannot be kept by force. It can only be achieved by understanding."
  },
  {
    id: 38,
    author: "Albert Einstein",
    text:
      "We cannot solve our problems with the same thinking we used when we created them."
  },
  {
    id: 39,
    author: "Albert Einstein",
    text: "If you can't explain it simply, you don't understand it well enough."
  },
  {
    id: 40,
    author: "Albert Einstein",
    source: "https://www.goodreads.com/quotes/38836",
    tags: "imagination, creativity, inspiration",
    text:
      "Imagination is everything. It is the preview of life's coming attractions."
  },
  {
    id: 41,
    author: "Albert Einstein",
    source: "https://www.goodreads.com/quotes/297929",
    tags: "imagination, creativity, intelligence",
    text: "The true sign of intelligence is not knowledge but imagination."
  },
  {
    id: 42,
    author: "Albert Einstein",
    text: "In the middle of every difficulty lies opportunity."
  },
  {
    id: 43,
    author: "Albert Einstein",
    text:
      "Setting an example is not the main means of influencing another, it is the only means."
  },
  {
    id: 44,
    author: "Albert Einstein",
    text:
      "Logic will get you from A to B. Imagination will take you everywhere."
  },
  {
    id: 45,
    author: "Albert Einstein",
    text: "Great ideas often receive violent opposition from mediocre minds."
  },
  {
    id: 46,
    author: "Albert Einstein",
    text:
      "Anyone who doesn't take truth seriously in small matters cannot be trusted in large ones either."
  },
  {
    id: 47,
    author: "Albert Einstein",
    text:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
  },
  {
    id: 48,
    author: "Albert Einstein",
    text:
      "One may say the eternal mystery of the world is its comprehensibility."
  },
  {
    id: 49,
    author: "Albert Einstein",
    text: "A person who never made a mistake never tried anything new."
  },
  {
    id: 50,
    author: "Albert Einstein",
    source: "https://www.goodreads.com/quotes/11458",
    tags: "talent, curious, curiosity, passion",
    text: "I have no special talent. I am only passionately curious."
  },
  {
    id: 51,
    author: "Albert Gray",
    text:
      "Winners have simply formed the habit of doing things losers don't like to do."
  },
  {
    id: 52,
    author: "Albert Schweitzer",
    text: "Do something wonderful, people may imitate it."
  },
  {
    id: 53,
    author: "Albert Schweitzer",
    text:
      "We should all be thankful for those people who rekindle the inner spirit."
  },
  {
    id: 54,
    author: "Albert Schweitzer",
    text:
      "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity."
  },
  {
    id: 55,
    author: "Albert Schweitzer",
    text: "Wherever a man turns he can find someone who needs him."
  },
  {
    id: 56,
    author: "Albert Schweitzer",
    text:
      "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate."
  },
  {
    id: 57,
    author: "Albert Schweitzer",
    text:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
  },
  {
    id: 58,
    author: "Albert Schweitzer",
    text:
      "An optimist is a person who sees a green light everywhere, while the pessimist sees only the red spotlight... The truly wise person is colour-blind."
  },
  {
    id: 59,
    author: "Albert Schweitzer",
    text:
      "Never say there is nothing beautiful in the world any more. There is always something to make you wonder in the shape of a tree, the trembling of a leaf."
  },
  {
    id: 60,
    author: "Aldous Huxley",
    text:
      "There is only one corner of the universe you can be certain of improving, and that's your own self."
  },
  {
    id: 61,
    author: "Aldous Huxley",
    text:
      "Experience is not what happens to a man. It is what a man does with what happens to him."
  },
  {
    id: 62,
    author: "Alexander Pope",
    text: "Do good by stealth, and blush to find it fame."
  },
  {
    id: 63,
    author: "Alexander Pope",
    text:
      "Blessed is the man who expects nothing, for he shall never be disappointed."
  },
  {
    id: 64,
    author: "Alexander the Great",
    text: "There is nothing impossible to him who will try."
  },
  {
    id: 65,
    author: "Alexis Carrel",
    text:
      "All great men are gifted with intuition. They know without reasoning or analysis, what they need to know."
  },
  {
    id: 66,
    author: "Alfred Adler",
    text:
      "Trust only movement. Life happens at the level of events, not of words. Trust movement."
  },
  {
    id: 67,
    author: "Alfred Korzybski",
    text:
      "There are two ways to slide easily through life: to believe everything or to doubt everything; both ways save us from thinking."
  },
  {
    id: 68,
    author: "Alfred Painter",
    text: "Saying thank you is more than good manners. It is good spirituality."
  },
  {
    id: 69,
    author: "Alfred Sheinwold",
    text:
      "Learn all you can from the mistakes of others. You won't have time to make them all yourself."
  },
  {
    id: 70,
    author: "Alfred Tennyson",
    text:
      "The happiness of a man in this life does not consist in the absence but in the mastery of his passions."
  },
  {
    id: 71,
    author: "Alfred Whitehead",
    text:
      "The art of progress is to preserve order amid change, and to preserve change amid order."
  },
  {
    id: 72,
    author: "Alice Walker",
    text:
      "No person is your friend who demands your silence, or denies your right to grow."
  },
  {
    id: 73,
    author: "Alphonse Karr",
    text:
      "Some people are always grumbling because roses have thorns; I am thankful that thorns have roses."
  },
  {
    id: 74,
    author: "Ambrose Bierce",
    text:
      "Speak when you are angry and you will make the best speech you will ever regret."
  },
  {
    id: 75,
    author: "Amelia Earhart",
    text:
      "Never do things others can do and will do, if there are things others cannot do or will not do."
  },
  {
    id: 76,
    author: "American proverb",
    text: "From little acorns mighty oaks do grow."
  },
  {
    id: 77,
    author: "Amiel",
    text:
      "Without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark."
  },
  {
    id: 78,
    author: "Amy Bloom",
    text:
      "Love at first sight is easy to understand; its when two people have been looking at each other for a lifetime that it becomes a miracle."
  },
  {
    id: 79,
    author: "Amy Tan",
    text:
      "I am like a falling star who has finally found her place next to another in a lovely constellation, where we will sparkle in the heavens forever."
  },
  {
    id: 80,
    author: "Anais Nin",
    text: "Life shrinks or expands in proportion to one's courage."
  },
  {
    id: 81,
    author: "Anais Nin",
    text:
      "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery."
  },
  {
    id: 82,
    author: "Anais Nin",
    text:
      "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living."
  },
  {
    id: 83,
    author: "Anais Nin",
    text:
      "The personal life deeply lived always expands into truths beyond itself."
  },
  {
    id: 84,
    author: "Anais Nin",
    text:
      "Age does not protect you from love. But love, to some extent, protects you from age."
  },
  {
    id: 85,
    author: "Anais Nin",
    text:
      "The dream was always running ahead of me. To catch up, to live for a moment in unison with it, that was the miracle."
  },
  {
    id: 86,
    author: "Anais Nin",
    text:
      "There is not one big cosmic meaning for all, there is only the meaning we each give to our life."
  },
  {
    id: 87,
    author: "Anatole France",
    text: "To accomplish great things, we must dream as well as act."
  },
  {
    id: 88,
    author: "Anatole France",
    text:
      "To accomplish great things, we must not only act, but also dream; not only plan, but also believe."
  },
  {
    id: 89,
    author: "Anatole France",
    text: "It is better to understand a little than to misunderstand a lot."
  },
  {
    id: 90,
    author: "Anatole France",
    text:
      "You learn to speak by speaking, to study by studying, to run by running, to work by working; in just the same way, you learn to love by loving."
  },
  {
    id: 91,
    author: "Andre Gide",
    text:
      "One does not discover new lands without consenting to lose sight of the shore for a very long time."
  },
  {
    id: 92,
    author: "Andre Gide",
    text:
      "The most decisive actions of our life... are most often unconsidered actions."
  },
  {
    id: 93,
    author: "Andrew Gide",
    text:
      "The most decisive actions of our life... are most often unconsidered actions."
  },
  {
    id: 94,
    author: "Andy Rooney",
    text: "If you smile when no one else is around, you really mean it."
  },
  {
    id: 95,
    author: "Andy Warhol",
    text:
      "They say that time changes things, but you actually have to change them yourself."
  },
  {
    id: 96,
    author: "Angela Schwindt",
    text:
      "While we try to teach our children all about life, our children teach us what life is all about."
  },
  {
    id: 97,
    author: "Anna Pavlova",
    text: "To follow, without halt, one aim: There is the secret of success."
  },
  {
    id: 98,
    author: "Anne Bradstreet",
    text:
      "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome."
  },
  {
    id: 99,
    author: "Anne Bronte",
    text:
      "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise."
  },
  {
    id: 100,
    author: "Anne Frank",
    text:
      "We all live with the objective of being happy; our lives are all different and yet the same."
  },
  {
    id: 101,
    author: "Anne Frank",
    text:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world."
  },
  {
    id: 102,
    author: "Anne Frank",
    text: "No one has ever become poor by giving."
  },
  {
    id: 103,
    author: "Anne Frank",
    text:
      "Parents can only give good advice or put them on the right paths, but the final forming of a persons character lies in their own hands."
  },
  {
    id: 104,
    author: "Anne Lamott",
    text: "Joy is the best makeup."
  },
  {
    id: 105,
    author: "Anne Lindbergh",
    text:
      "If one is estranged from oneself, then one is estranged from others too. If one is out of touch with oneself, then one cannot touch others."
  },
  {
    id: 106,
    author: "Anne Schaef",
    text: "Life is a process. We are a process. The universe is a process."
  },
  {
    id: 107,
    author: "Anne Wilson Schaef",
    text: "Trusting our intuition often saves us from disaster."
  },
  {
    id: 108,
    author: "Annie Dillard",
    text: "How we spend our days is, of course, how we spend our lives.",
    source: "https://www.goodreads.com/quotes/530337",
    tags: "passion, try, live"
  },
  {
    id: 109,
    author: "Anthony D'Angelo",
    text:
      "Listen to your intuition. It will tell you everything you need to know."
  },
  {
    id: 110,
    author: "Anthony Robbins",
    text:
      "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more"
  },
  {
    id: 111,
    author: "Anthony Robbins",
    text: "The path to success is to take massive, determined action."
  },
  {
    id: 112,
    author: "Anthony Robbins",
    text:
      "To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others."
  },
  {
    id: 113,
    author: "Antoine de Saint-Exupery",
    text:
      "It is only with the heart that one can see rightly, what is essential is invisible to the eye."
  },
  {
    id: 114,
    author: "Antoine de Saint-Exupery",
    text: "I know but one freedom and that is the freedom of the mind."
  },
  {
    id: 115,
    author: "Antoine de Saint-Exupery",
    text:
      "Love does not consist of gazing at each other, but in looking together in the same direction."
  },
  {
    id: 116,
    author: "Arie de Gues",
    text:
      "Your ability to learn faster than your competition is your only sustainable competitive advantage."
  },
  {
    id: 117,
    author: "Aristotle",
    text: "Well begun is half done."
  },
  {
    id: 118,
    author: "Aristotle",
    text: "Change in all things is sweet."
  },
  {
    id: 119,
    author: "Aristotle",
    text:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it."
  },
  {
    id: 120,
    author: "Aristotle",
    text: "Happiness depends upon ourselves."
  },
  {
    id: 121,
    author: "Aristotle",
    text: "In all things of nature there is something of the marvellous."
  },
  {
    id: 122,
    author: "Aristotle",
    text:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
  },
  {
    id: 123,
    author: "Aristotle",
    text: "Those that know, do. Those that understand, teach."
  },
  {
    id: 124,
    author: "Aristotle",
    text:
      "Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing."
  },
  {
    id: 125,
    author: "Aristotle",
    text:
      "We are what we repeatedly do. Excellence, then, is not an act but a habit."
  },
  {
    id: 126,
    author: "Aristotle",
    text:
      "Moral excellence comes about as a result of habit. We become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts."
  },
  {
    id: 127,
    author: "Aristotle",
    text: "The energy of the mind is the essence of life."
  },
  {
    id: 128,
    author: "Aristotle",
    text:
      "If one way be better than another, that you may be sure is natures way."
  },
  {
    id: 129,
    author: "Arthur Conan Doyle",
    text:
      "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth."
  },
  {
    id: 130,
    author: "Arthur Conan Doyle",
    text:
      "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius."
  },
  {
    id: 131,
    author: "Arthur Rubinstein",
    text:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings."
  },
  {
    id: 132,
    author: "Arthur Schopenhauer",
    text:
      "Every man takes the limits of his own field of vision for the limits of the world."
  },
  {
    id: 133,
    author: "Audre Lorde",
    text:
      "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."
  },
  {
    id: 134,
    author: "Augustinus Sanctus",
    text: "The world is a book, and those who do not travel read only a page."
  },
  {
    id: 135,
    author: "Babatunde Olatunji",
    text:
      "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift. That is why we call it the present."
  },
  {
    id: 136,
    author: "Babe Ruth",
    text: "Yesterdays home runs don't win today's games."
  },
  {
    id: 137,
    author: "Baltasar Gracian",
    text: "Without courage, wisdom bears no fruit."
  },
  {
    id: 138,
    author: "Barack Obama",
    text:
      "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress."
  },
  {
    id: 139,
    author: "Barack Obama",
    text:
      "Focusing your life solely on making a buck shows a poverty of ambition. It asks too little of yourself. And it will leave you unfulfilled."
  },
  {
    id: 140,
    author: "Barack Obama",
    text:
      "Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek."
  },
  {
    id: 141,
    author: "Barbara Baron",
    text:
      "Don't wait for your feelings to change to take the action. Take the action and your feelings will change."
  },
  {
    id: 142,
    author: "Barbara De Angelis",
    text:
      "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity."
  },
  {
    id: 143,
    author: "Ben Stein",
    text:
      "The first step to getting the things you want out of life is this: decide what you want."
  },
  {
    id: 144,
    author: "Ben Sweetland",
    text:
      "We cannot hold a torch to light another's path without brightening our own."
  },
  {
    id: 145,
    author: "Benjamin Disraeli",
    text: "The secret of success is constancy to purpose."
  },
  {
    id: 146,
    author: "Benjamin Disraeli",
    text:
      "Action may not always bring happiness; but there is no happiness without action."
  },
  {
    id: 147,
    author: "Benjamin Disraeli",
    text:
      "Through perseverance many people win success out of what seemed destined to be certain failure."
  },
  {
    id: 148,
    author: "Benjamin Disraeli",
    text:
      "Never apologize for showing feelings. When you do so, you apologize for the truth."
  },
  {
    id: 149,
    author: "Benjamin Disraeli",
    text:
      "One secret of success in life is for a man to be ready for his opportunity when it comes."
  },
  {
    id: 150,
    author: "Benjamin Disraeli",
    text:
      "The greatest good you can do for another is not just to share your riches but to reveal to him his own."
  },
  {
    id: 151,
    author: "Benjamin Disraeli",
    text:
      "The greatest good you can do for another is not just share your riches, but reveal to them their own."
  },
  {
    id: 152,
    author: "Benjamin Disraeli",
    text: "Ignorance never settle a question."
  },
  {
    id: 153,
    author: "Benjamin Disraeli",
    text:
      "Action may not always bring happiness, but there is no happiness without action."
  },
  {
    id: 154,
    author: "Benjamin Disraeli",
    text:
      "Never apologize for showing feeling. When you do so, you apologize for truth."
  },
  {
    id: 155,
    author: "Benjamin Disraeli",
    text: "We make our own fortunes and we call them fate."
  },
  {
    id: 156,
    author: "Benjamin Franklin",
    text: "Well done is better than well said."
  },
  {
    id: 157,
    author: "Benjamin Franklin",
    text: "One today is worth two tomorrows."
  },
  {
    id: 158,
    author: "Benjamin Franklin",
    text: "There never was a good knife made of bad steel."
  },
  {
    id: 159,
    author: "Benjamin Franklin",
    text: "Watch the little things; a small leak will sink a great ship."
  },
  {
    id: 160,
    author: "Benjamin Franklin",
    text: "Experience keeps a dear school, but fools will learn in no other."
  },
  {
    id: 161,
    author: "Benjamin Haydon",
    text:
      "There surely is in human nature an inherent propensity to extract all the good out of all the evil."
  },
  {
    id: 162,
    author: "Benjamin Spock",
    text: "Trust yourself. You know more than you think you do."
  },
  {
    id: 163,
    author: "Bernadette Devlin",
    text: "Yesterday I dared to struggle. Today I dare to win."
  },
  {
    id: 164,
    author: "Bernard Shaw",
    text: "Life isn't about finding yourself. Life is about creating yourself."
  },
  {
    id: 165,
    author: "Bernard Shaw",
    text:
      "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing."
  },
  {
    id: 166,
    author: "Bernard Shaw",
    text:
      "I am of the opinion that my life belongs to the community, and as long as I live it is my privilege to do for it whatever I can."
  },
  {
    id: 167,
    author: "Bernard Shaw",
    text:
      "We don't stop playing because we grow old; we grow old because we stop playing."
  },
  {
    id: 168,
    author: "Bernard Shaw",
    source: "https://www.goodreads.com/quotes/8727",
    tags: "meaning, creativity",
    text: "Life isn't about finding yourself. Life is about creating yourself."
  },
  {
    id: 169,
    author: "Bernice Reagon",
    text:
      "Life's challenges are not supposed to paralyse you, they're supposed to help you discover who you are."
  },
  {
    id: 170,
    author: "Bernice Reagon",
    text:
      "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are."
  },
  {
    id: 171,
    author: "Bertrand Russell",
    text:
      "The happiness that is genuinely satisfying is accompanied by the fullest exercise of our faculties and the fullest realization of the world in which we live."
  },
  {
    id: 172,
    author: "Betty Friedan",
    text:
      "It is easier to live through someone else than to become complete yourself."
  },
  {
    id: 173,
    author: "Billie Armstrong",
    text: "Our passion is our strength."
  },
  {
    id: 174,
    author: "Billy Wilder",
    text:
      "Trust your own instinct. Your mistakes might as well be your own, instead of someone elses."
  },
  {
    id: 175,
    author: "Bishop Desmond Tutu",
    text: "We must not allow ourselves to become like the system we oppose."
  },
  {
    id: 176,
    author: "Blaise Pascal",
    text: "The heart has its reasons which reason knows not of."
  },
  {
    id: 177,
    author: "Blaise Pascal",
    text: "Kind words do not cost much. Yet they accomplish much."
  },
  {
    id: 178,
    author: "Blaise Pascal",
    text:
      "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed."
  },
  {
    id: 179,
    author: "Blaise Pascal",
    text:
      "Imagination disposes of everything; it creates beauty, justice, and happiness, which are everything in this world."
  },
  {
    id: 180,
    author: "Blaise Pascal",
    text:
      "The least movement is of importance to all nature. The entire ocean is affected by a pebble."
  },
  {
    id: 181,
    author: "Blaise Pascal",
    text: "We are all something, but none of us are everything."
  },
  {
    id: 182,
    author: "Blaise Pascal",
    text: "We know the truth, not only by the reason, but by the heart."
  },
  {
    id: 183,
    author: "Blaise Pascal",
    text:
      "We must learn our limits. We are all something, but none of us are everything."
  },
  {
    id: 184,
    author: "Bo Jackson",
    text: "Set your goals high, and don't stop till you get there."
  },
  {
    id: 185,
    author: "Bob Newhart",
    text: "All I can say about life is, Oh God, enjoy it!"
  },
  {
    id: 186,
    author: "Bodhidharma",
    text: "All know the way; few actually walk it."
  },
  {
    id: 187,
    author: "Booker Washington",
    text: "Excellence is to do a common thing in an uncommon way."
  },
  {
    id: 188,
    author: "Booker Washington",
    text:
      "The world cares very little about what a man or woman knows; it is what a man or woman is able to do that counts."
  },
  {
    id: 189,
    author: "Brendan Francis",
    text:
      "No yesterdays are ever wasted for those who give themselves to today."
  },
  {
    id: 190,
    author: "Brian Tracy",
    text: "Goals are the fuel in the furnace of achievement."
  },
  {
    id: 191,
    author: "Brian Tracy",
    text:
      "Whatever we expect with confidence becomes our own self-fulfilling prophecy."
  },
  {
    id: 192,
    author: "Brian Tracy",
    text:
      "You can only grow if you're willing to feel awkward and uncomfortable when you try something new."
  },
  {
    id: 193,
    author: "Brian Tracy",
    text:
      "There is never enough time to do everything, but there is always enough time to do the most important thing."
  },
  {
    id: 194,
    text:
      "You have within you, right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
    source: "https://www.goodreads.com/quotes/28134",
    tags: "future, inner power"
  },
  {
    id: 195,
    author: "Bruce Garrabrandt",
    text:
      "Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.",
    source:
      "https://www.google.com/search?q=Bruce+Garrabrandt+Creativity+doesn%27t+wait",
    tags: "creativity, creative, perfect, waiting, ordinary"
  },
  {
    id: 196,
    author: "Bruce Lee",
    text:
      "If you spend too much time thinking about a thing, you'll never get it done."
  },
  {
    id: 197,
    author: "Bruce Lee",
    text:
      "A wise man can learn more from a foolish question than a fool can learn from a wise answer."
  },
  {
    id: 198,
    author: "Bruce Lee",
    text:
      "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind."
  },
  {
    id: 199,
    author: "Bruce Lee",
    text:
      "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it."
  },
  {
    id: 200,
    author: "Bruce Lee",
    text:
      "Take no thought of who is right or wrong or who is better than. Be not for or against."
  },
  {
    id: 201,
    author: "Bruce Lee",
    text:
      "Take things as they are. Punch when you have to punch. Kick when you have to kick."
  },
  {
    id: 202,
    author: "Bruce Lee",
    text:
      "I'm not in this world to live up to your expectations and you're not in this world to live up to mine."
  },
  {
    id: 203,
    author: "Bruce Lee",
    text: "To know oneself is to study oneself in action with another person."
  },
  {
    id: 204,
    author: "Bruce Lee",
    text: "As you think, so shall you become."
  },
  {
    id: 205,
    author: "Bruce Lee",
    text:
      "Mistakes are always forgivable, if one has the courage to admit them."
  },
  {
    id: 206,
    author: "Bruce Lee",
    text:
      "If you love life, don't waste time, for time is what life is made up of."
  },
  {
    id: 207,
    author: "Bruce Lee",
    text:
      "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns."
  },
  {
    id: 208,
    author: "Bruce Lee",
    text: "The less effort, the faster and more powerful you will be."
  },
  {
    id: 209,
    author: "Bruce Lee",
    text: "To hell with circumstances; I create opportunities."
  },
  {
    id: 210,
    author: "Bruce Lee",
    text:
      "Im not in this world to live up to your expectations and you're not in this world to live up to mine."
  },
  {
    id: 211,
    author: "Bruce Lee",
    source: "https://www.goodreads.com/quotes/302319",
    tags: "knowledge, action",
    text:
      "Knowing is not enough, we must apply. Willing is not enough, we must do."
  },
  {
    id: 212,
    author: "Buckminster Fuller",
    text:
      "There is nothing in a caterpillar that tells you it's going to be a butterfly."
  },
  {
    id: 213,
    author: "Buckminster Fuller",
    source: "https://www.goodreads.com/quotes/13119",
    tags: "future, progress, reality, new",
    text:
      "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete"
  },
  {
    id: 214,
    author: "Buddha",
    text: "Peace comes from within. Do not seek it without."
  },
  {
    id: 215,
    author: "Buddha",
    text: "Work out your own salvation. Do not depend on others."
  },
  {
    id: 216,
    author: "Buddha",
    text: "He is able who thinks he is able."
  },
  {
    id: 217,
    author: "Buddha",
    text: "Those who are free of resentful thoughts surely find peace."
  },
  {
    id: 218,
    author: "Buddha",
    text: "What we think, we become."
  },
  {
    id: 219,
    author: "Buddha",
    text: "It is better to travel well than to arrive."
  },
  {
    id: 220,
    author: "Buddha",
    text: "The mind is everything. What you think you become."
  },
  {
    id: 221,
    author: "Buddha",
    text:
      "In separateness lies the world's great misery, in compassion lies the world's true strength."
  },
  {
    id: 222,
    author: "Buddha",
    text:
      "Happiness comes when your work and words are of benefit to yourself and others."
  },
  {
    id: 223,
    author: "Buddha",
    text:
      "Just as a candle cannot burn without fire, men cannot live without a spiritual life."
  },
  {
    id: 224,
    author: "Buddha",
    text: "If you light a lamp for somebody, it will also brighten your path."
  },
  {
    id: 225,
    author: "Buddha",
    text:
      "Your worst enemy cannot harm you as much as your own unguarded thoughts."
  },
  {
    id: 226,
    author: "Buddha",
    text: "The way is not in the sky. The way is in the heart."
  },
  {
    id: 227,
    author: "Buddha",
    text:
      "Three things cannot be long hidden: the sun, the moon, and the truth."
  },
  {
    id: 228,
    author: "Buddha",
    text:
      "You, yourself, as much as anybody in the entire universe, deserve your love and affection."
  },
  {
    id: 229,
    author: "Buddha",
    text:
      "You will not be punished for your anger, you will be punished by your anger."
  },
  {
    id: 230,
    author: "Buddha",
    text:
      "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character."
  },
  {
    id: 231,
    author: "Buddha",
    text:
      "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves."
  },
  {
    id: 232,
    author: "Buddha",
    text:
      "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind."
  },
  {
    id: 233,
    author: "Buddha",
    text:
      "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear."
  },
  {
    id: 234,
    author: "Buddha",
    text:
      "There are only two mistakes one can make along the road to truth; not going all the way, and not starting."
  },
  {
    id: 235,
    author: "Buddha",
    text:
      "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance."
  },
  {
    id: 236,
    author: "Buddha",
    text:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
  },
  {
    id: 237,
    author: "Buddha",
    text:
      "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world."
  },
  {
    id: 238,
    author: "Buddha",
    text:
      "Your work is to discover your world and then with all your heart give yourself to it."
  },
  {
    id: 239,
    author: "Buddha",
    text:
      "All that we are is the result of what we have thought. The mind is everything. What we think we become."
  },
  {
    id: 240,
    author: "Buddha",
    text: "The foot feels the foot when it feels the ground."
  },
  {
    id: 241,
    author: "Buddha",
    text:
      "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path."
  },
  {
    id: 242,
    author: "Buddha",
    text:
      "When you realize how perfect everything is you will tilt your head back and laugh at the sky."
  },
  {
    id: 243,
    author: "Buddha",
    text:
      "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared."
  },
  {
    id: 244,
    author: "Buddha",
    text:
      "He who experiences the unity of life sees his own Self in all beings, and all beings in his own Self, and looks on everything with an impartial eye."
  },
  {
    id: 245,
    author: "Buddha",
    text:
      "In the sky, there is no distinction of east and west; people create distinctions out of their own minds and then believe them to be true."
  },
  {
    id: 246,
    author: "Buddha",
    text:
      "Thousands of candles can be lit from a single, and the life of the candle will not be shortened. Happiness never decreases by being shared."
  },
  {
    id: 247,
    author: "Buddha",
    text: "Always be mindful of the kindness and not the faults of others."
  },
  {
    id: 248,
    author: "Buddha",
    text: "Better than a thousand hollow words, is one word that brings peace."
  },
  {
    id: 249,
    author: "Buddha",
    text: "A jug fills drop by drop."
  },
  {
    id: 250,
    author: "Buddha",
    text: "You only lose what you cling to."
  },
  {
    id: 251,
    author: "Buddha",
    text: "Every human being is the author of his own health or disease."
  },
  {
    id: 252,
    author: "Buddha",
    text:
      "Your body is precious. It is our vehicle for awakening. Treat it with care."
  },
  {
    id: 253,
    author: "Buddha",
    text:
      "Chaos is inherent in all compounded things. Strive on with diligence."
  },
  {
    id: 254,
    author: "Buddha",
    text: "No matter how hard the past, you can always begin again."
  },
  {
    id: 255,
    author: "Buddha",
    text:
      "Your work is to discover your work and then with all your heart to give yourself to it."
  },
  {
    id: 256,
    author: "Buddha",
    text:
      "If we could see the miracle of a single flower clearly, our whole life would change."
  },
  {
    id: 257,
    author: "Buddha",
    text: "You cannot travel the path until you have become the path itself."
  },
  {
    id: 258,
    author: "Buddha",
    text:
      "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves."
  },
  {
    id: 259,
    author: "Buddha",
    text:
      "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned."
  },
  {
    id: 260,
    author: "Buddha",
    text:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on them unless they act."
  },
  {
    id: 261,
    author: "Buddha",
    text: "Remembering a wrong is like carrying a burden on the mind."
  },
  {
    id: 262,
    author: "Buddha",
    text:
      "The only real failure in life is not to be true to the best one knows."
  },
  {
    id: 263,
    author: "Buddha",
    text:
      "However many holy words you read, However many you speak, What good will they do you If you do not act on upon them?"
  },
  {
    id: 264,
    author: "Buddha",
    text:
      "Meditation brings wisdom; lack of mediation leaves ignorance. Know well what leads you forward and what hold you back, and choose the path that leads to wisdom."
  },
  {
    id: 265,
    author: "Buddha",
    text:
      "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind."
  },
  {
    id: 266,
    author: "Buddha",
    text:
      "An idea that is developed and put into action is more important than an idea that exists only as an idea."
  },
  {
    id: 267,
    author: "Buddha",
    text:
      "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?"
  },
  {
    id: 268,
    author: "Buddha",
    text: "Better than a thousand hollow words is one word that brings peace."
  },
  {
    id: 269,
    author: "Buddha",
    text:
      "What you are is what you have been. What you will be is what you do now."
  },
  {
    id: 270,
    author: "Buddha",
    text:
      "What you are is what you have been. What you'll be is what you do now."
  },
  {
    id: 271,
    author: "Byron Pulsifer",
    text: "Fate is in your hands and no one elses"
  },
  {
    id: 272,
    author: "Byron Pulsifer",
    text: "What you give is what you get."
  },
  {
    id: 273,
    author: "Byron Pulsifer",
    text: "The best teacher is experience learned from failures."
  },
  {
    id: 274,
    author: "Byron Pulsifer",
    text: "What you fear is that which requires action to overcome."
  },
  {
    id: 275,
    author: "Byron Pulsifer",
    text: "If you cannot be silent be brilliant and thoughtful."
  },
  {
    id: 276,
    author: "Byron Pulsifer",
    text: "Someone is special only if you tell them."
  },
  {
    id: 277,
    author: "Byron Pulsifer",
    text:
      "Give thanks for the rain of life that propels us to reach new horizons."
  },
  {
    id: 278,
    author: "Byron Pulsifer",
    text:
      "Transformation doesn't take place with a vacuum; instead, it occurs when we are indirectly and directly connected to all those around us."
  },
  {
    id: 279,
    author: "Byron Pulsifer",
    text:
      "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want."
  },
  {
    id: 280,
    author: "Byron Pulsifer",
    text:
      "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough."
  },
  {
    id: 281,
    author: "Byron Pulsifer",
    text:
      "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience."
  },
  {
    id: 282,
    author: "Byron Pulsifer",
    text:
      "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind."
  },
  {
    id: 283,
    author: "Byron Pulsifer",
    text:
      "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day."
  },
  {
    id: 284,
    author: "Byron Pulsifer",
    text:
      "Sadness may be part of life but there is no need to let it dominate your entire life."
  },
  {
    id: 285,
    author: "Byron Pulsifer",
    text:
      "To give hope to someone occurs when you teach them how to use the tools to do it for themselves."
  },
  {
    id: 286,
    author: "Byron Pulsifer",
    text:
      "You can be what you want to be. You have the power within and we will help you always."
  },
  {
    id: 287,
    author: "Byron Pulsifer",
    text:
      "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to."
  },
  {
    id: 288,
    author: "Byron Pulsifer",
    text:
      "Responsibility is not inherited, it is a choice that everyone needs to make at some point in their life."
  },
  {
    id: 289,
    author: "Byron Pulsifer",
    text:
      "You can't create in a vacuum. Life gives you the material and dreams can propel new beginnings."
  },
  {
    id: 290,
    author: "Byron Pulsifer",
    text: "You can't trust without risk but neither can you live in a cocoon."
  },
  {
    id: 291,
    author: "Byron Pulsifer",
    text:
      "Look forward to spring as a time when you can start to see what nature has to offer once again."
  },
  {
    id: 292,
    author: "Byron Pulsifer",
    text:
      "Fear of failure is one attitude that will keep you at the same point in your life."
  },
  {
    id: 293,
    author: "Byron Pulsifer",
    text:
      "To be thoughtful and kind only takes a few seconds compared to the timeless hurt caused by one rude gesture."
  },
  {
    id: 294,
    author: "Byron Pulsifer",
    text:
      "If you have no respect for your own values how can you be worthy of respect from others."
  },
  {
    id: 295,
    author: "Byron Pulsifer",
    text:
      "Wishes can be your best avenue of getting what you want when you turn wishes into action. Action moves your wish to the forefront from thought to reality."
  },
  {
    id: 296,
    author: "Byron Pulsifer",
    text:
      "Adversity isn't set against you to fail; adversity is a way to build your character so that you can succeed over and over again through perseverance."
  },
  {
    id: 297,
    author: "Byron Pulsifer",
    text:
      "Truth isn't all about what actually happens but more about how what has happened is interpreted."
  },
  {
    id: 298,
    author: "Byron Pulsifer",
    text:
      "Passion creates the desire for more and action fuelled by passion creates a future."
  },
  {
    id: 299,
    author: "Byron Pulsifer",
    text: "Experience can only be gained by doing not by thinking or dreaming."
  },
  {
    id: 300,
    author: "Byron Pulsifer",
    text: "It can't be spring if your heart is filled with past failures."
  },
  {
    id: 301,
    author: "Byron Pulsifer",
    text: "I may not know everything, but everything is not known yet anyway."
  },
  {
    id: 302,
    author: "Byron Pulsifer",
    text:
      "Transformation does not start with some one else changing you; transformation is an inner self reworking of what you are now to what you will be."
  },
  {
    id: 303,
    author: "Byron Pulsifer",
    text:
      "Time is not a measure the length of a day or month or year but more a measure of what you have accomplished."
  },
  {
    id: 304,
    author: "Byron Pulsifer",
    text: "Complaining doesn't change a thing only taking action does."
  },
  {
    id: 305,
    author: "Byron Pulsifer",
    text:
      "Strength to carry on despite the odds means you have faith in your own abilities and know how."
  },
  {
    id: 306,
    author: "Byron Pulsifer",
    text: "Spring is a time for rebirth and the fulfilment of new life."
  },
  {
    id: 307,
    author: "Byron Pulsifer",
    text:
      "Respect is not something that you can ask for, buy or borrow. Respect is what you earn from each person no matter their background or status."
  },
  {
    id: 308,
    author: "Byron Pulsifer",
    text:
      "Bold is not the act of foolishness but the attribute and inner strength to act when others will not so as to move forward not backward."
  },
  {
    id: 309,
    author: "Byron Pulsifer",
    text:
      "Staying in one place is the best path to be taken over and surpassed by many."
  },
  {
    id: 310,
    author: "Byron Pulsifer",
    text:
      "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity."
  },
  {
    id: 311,
    author: "Byron Pulsifer",
    text:
      "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine."
  },
  {
    id: 312,
    author: "Byron Roberts",
    text:
      "It is not the mistake that has the most power, instead, it is learning from the mistake to advance your own attributes."
  },
  {
    id: 313,
    author: "C. Pulsifer",
    text: "When anger use your energy to do something productive."
  },
  {
    id: 314,
    author: "Cadet Maxim",
    text:
      "Risk more than others think is safe. Care more than others think is wise. Dream more than others think is practical.Expect more than others think is possible."
  },
  {
    id: 315,
    author: "Calvin Coolidge",
    text: "We cannot do everything at once, but we can do something at once."
  },
  {
    id: 316,
    author: "Calvin Coolidge",
    text: "I have never been hurt by anything I didn't say."
  },
  {
    id: 317,
    author: "Cardinal Retz",
    text: "A man who doesn't trust himself can never really trust anyone else."
  },
  {
    id: 318,
    author: "Carl Bard",
    text:
      "Though no one can go back and make a brand new start, anyone can start from not and make a brand new ending."
  },
  {
    id: 319,
    author: "Carl Jung",
    text: "Who looks outside, dreams; who looks inside, awakes."
  },
  {
    id: 320,
    author: "Carl Jung",
    text: "You are what you do, not what you say you do."
  },
  {
    id: 321,
    author: "Carl Jung",
    text:
      "The shoe that fits one person pinches another; there is no recipe for living that suits all cases."
  },
  {
    id: 322,
    author: "Carl Jung",
    text:
      "Everything that irritates us about others can lead us to an understanding about ourselves."
  },
  {
    id: 323,
    author: "Carl Jung",
    text:
      "Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens."
  },
  {
    id: 324,
    author: "Carl Jung",
    text:
      "Everything that irritates us about others can lead us to an understanding of ourselves."
  },
  {
    id: 325,
    author: "Carl Jung",
    text: "In all chaos there is a cosmos, in all disorder a secret order."
  },
  {
    id: 326,
    author: "Carl Jung",
    text:
      "Without this playing with fantasy no creative work has ever yet come to birth. The debt we owe to the play of the imagination is incalculable."
  },
  {
    id: 327,
    author: "Carl Jung",
    text:
      "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, Something is out of tune."
  },
  {
    id: 328,
    author: "Carl Jung",
    text: "Knowledge rests not upon truth alone, but upon error also."
  },
  {
    id: 329,
    author: "Carl Jung",
    text:
      "The least of things with a meaning is worth more in life than the greatest of things without it."
  },
  {
    id: 330,
    author: "Carl Jung",
    text:
      "Knowing your own darkness is the best method for dealing with the darknesses of other people."
  },
  {
    id: 331,
    author: "Carl Jung",
    text:
      "It all depends on how we look at things, and not how they are in themselves."
  },
  {
    id: 332,
    author: "Carl Jung",
    text:
      "Everything that irritates us about others can lead us to a better understanding of ourselves."
  },
  {
    id: 333,
    author: "Carl Jung",
    text:
      "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes."
  },
  {
    id: 334,
    author: "Carl Sagan",
    text:
      "Imagination will often carry us to worlds that never were. But without it we go nowhere."
  },
  {
    id: 335,
    author: "Carl Sandburg",
    text: "Nothing happens unless first we dream."
  },
  {
    id: 336,
    author: "Carla Gordon",
    text:
      "If someone in your life talked to you the way you talk to yourself, you would have left them long ago."
  },
  {
    id: 337,
    author: "Carlos Castaneda",
    text:
      "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same."
  },
  {
    id: 338,
    author: "Carlyle",
    text: "Silence is deep as Eternity, Speech is shallow as Time."
  },
  {
    id: 339,
    author: "Caroline Myss",
    text:
      "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless."
  },
  {
    id: 340,
    author: "Catherine Pulsifer",
    text:
      "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action."
  },
  {
    id: 341,
    author: "Catherine Pulsifer",
    text: "Being angry never solves anything."
  },
  {
    id: 342,
    author: "Catherine Pulsifer",
    text:
      "Rather than wishing for change, you first must be prepared to change."
  },
  {
    id: 343,
    author: "Catherine Pulsifer",
    text:
      "Our ability to achieve happiness and success depends on the strength of our wings."
  },
  {
    id: 344,
    author: "Cathy Pulsifer",
    text: "You are special, you are unique, you are the best!"
  },
  {
    id: 345,
    author: "Cavour",
    text:
      "The man who trusts men will make fewer mistakes than he who distrusts them."
  },
  {
    id: 346,
    author: "Cecil B. DeMille",
    text:
      "The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication."
  },
  {
    id: 347,
    author: "Cervantes",
    text: "Those who will play with cats must expect to be scratched."
  },
  {
    id: 348,
    author: "Cervantes",
    text: "Be slow of tongue and quick of eye."
  },
  {
    id: 349,
    author: "Chalmers",
    text:
      "The grand essentials of happiness are: something to do, something to love, and something to hope for."
  },
  {
    id: 350,
    author: "Chanakya",
    text: "A man is great by deeds, not by birth."
  },
  {
    id: 351,
    author: "Channing",
    text: "Error is discipline through which we advance."
  },
  {
    id: 352,
    author: "Channing",
    text: "Every man is a volume if you know how to read him."
  },
  {
    id: 353,
    author: "Charles A. Lindbergh",
    text:
      "Life a culmination of the past, an awareness of the present, an indication of the future beyond knowledge, the quality that gives a touch of divinity to matter."
  },
  {
    id: 354,
    author: "Charles Chesnutt",
    text: "Impossibilities are merely things which we have not yet learned."
  },
  {
    id: 355,
    author: "Charles Darwin",
    text:
      "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts."
  },
  {
    id: 356,
    author: "Charles DeLint",
    text:
      "The road leading to a goal does not separate you from the destination; it is essentially a part of it."
  },
  {
    id: 357,
    author: "Charles Dickens",
    text:
      "Don't leave a stone unturned. It's always something, to know you have done the most you could."
  },
  {
    id: 358,
    author: "Charles Dubois",
    text:
      "The important thing is this: to be able at any moment to sacrifice what we are for what we could become."
  },
  {
    id: 359,
    author: "Charles Kettering",
    text: "One fails forward toward success."
  },
  {
    id: 360,
    author: "Charles Lamb",
    text:
      "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident."
  },
  {
    id: 361,
    author: "Charles Perkhurst",
    text: "The heart has eyes which the brain knows nothing of."
  },
  {
    id: 362,
    author: "Charles R. Swindoll",
    text:
      "We are all faced with a series of great opportunities brilliantly disguised as impossible situations."
  },
  {
    id: 363,
    author: "Charles Schwab",
    text:
      "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far."
  },
  {
    id: 364,
    author: "Charles Swindoll",
    text: "Life is 10% what happens to you and 90% how you react to it."
  },
  {
    id: 365,
    author: "Charlotte Bronte",
    text:
      "Life is so constructed that an event does not, cannot, will not, match the expectation."
  },
  {
    id: 366,
    author: "Charlotte Gilman",
    text:
      "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!"
  },
  {
    id: 367,
    author: "Charlotte Perkins Gilman",
    text:
      "The first duty of a human being is to assume the right functional relationship to society more briefly, to find your real job, and do it."
  },
  {
    id: 368,
    author: "Charlotte Perkins Gilman",
    text:
      "The first duty of a human being is to assume the right functional relationship to society - more briefly, to find your real job, and do it."
  },
  {
    id: 369,
    author: "Cheng Yen",
    text:
      "Happiness does not come from having much, but from being attached to little."
  },
  {
    id: 370,
    author: "Chinese proverb",
    text: "Learning is a treasure that will follow its owner everywhere"
  },
  {
    id: 371,
    author: "Chinese proverb",
    text: "Talk doesn't cook rice."
  },
  {
    id: 372,
    author: "Chinese proverb",
    text: "Tension is who you think you should be. Relaxation is who you are."
  },
  {
    id: 373,
    author: "Chinese proverb",
    text:
      "If you are patient in one moment of anger, you will escape one hundred days of sorrow."
  },
  {
    id: 374,
    author: "Chinese proverb",
    text:
      "People who say it cannot be done should not interrupt those who are doing it."
  },
  {
    id: 375,
    author: "Chinese proverb",
    text:
      "A gem cannot be polished without friction, nor a man perfected without trials."
  },
  {
    id: 376,
    author: "Chinese proverb",
    text:
      "He who deliberates fully before taking a step will spend his entire life on one leg."
  },
  {
    id: 377,
    author: "Chinese proverb",
    text:
      "A single conversation across the table with a wise person is worth a months study of books."
  },
  {
    id: 378,
    author: "Christian Bovee",
    text: "Example has more followers than reason."
  },
  {
    id: 379,
    author: "Christopher Morley",
    text:
      "There is only one success to be able to spend your life in your own way."
  },
  {
    id: 380,
    author: "Christopher Morley",
    text:
      "There is only one success - to be able to spend your life in your own way."
  },
  {
    id: 381,
    author: "Christopher Reeve",
    text: "Once you choose hope, anythings possible."
  },
  {
    id: 382,
    author: "Chuang Tzu",
    text: "When deeds and words are in accord, the whole world is transformed."
  },
  {
    id: 383,
    author: "Chuang Tzu",
    text:
      "Flow with whatever is happening and let your mind be free. Stay centred by accepting whatever you are doing. This is the ultimate."
  },
  {
    id: 384,
    author: "Chuck Norris",
    text:
      "A lot of times people look at the negative side of what they feel they can't do. I always look on the positive side of what I can do."
  },
  {
    id: 385,
    author: "Chuck Norris",
    text:
      "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one."
  },
  {
    id: 386,
    author: "Cicero",
    text: "We must not say every mistake is a foolish one."
  },
  {
    id: 387,
    author: "Cicero",
    text:
      "Gratitude is not only the greatest of virtues, but the paren't of all the others."
  },
  {
    id: 388,
    author: "Claire Charmont",
    text: "The one who always loses, is the only person who gets the reward."
  },
  {
    id: 389,
    author: "Coco Chanel",
    text: "There are people who have money and people who are rich."
  },
  {
    id: 390,
    author: "Coco Chanel",
    text:
      "How many cares one loses when one decides not to be something but to be someone."
  },
  {
    id: 391,
    author: "Colette",
    text:
      "I love my past. I love my present. I'm not ashamed of what Ive had, and I'm not sad because I have it no longer."
  },
  {
    id: 392,
    author: "Colette",
    text:
      "I love my past. I love my present. Im not ashamed of what Ive had, and Im not sad because I have it no longer."
  },
  {
    id: 393,
    author: "Colin Powell",
    text:
      "If you are going to achieve excellence in big things, you develop the habit in little matters. Excellence is not an exception, it is a prevailing attitude."
  },
  {
    id: 394,
    author: "Confucius",
    text: "Study the past, if you would divine the future."
  },
  {
    id: 395,
    author: "Confucius",
    text: "Silence is a true friend who never betrays."
  },
  {
    id: 396,
    text: "Think of tomorrow, the past can't be mended.",
    author: "Confucius",
    source: "https://www.goodreads.com/quotes/961585",
    tags: "future, tomorrow, past"
  },
  {
    id: 397,
    author: "Confucius",
    text: "Wherever you go, go with all your heart."
  },
  {
    id: 398,
    author: "Confucius",
    text: "The more you know yourself, the more you forgive yourself."
  },
  {
    id: 399,
    author: "Confucius",
    text: "To be wrong is nothing unless you continue to remember it."
  },
  {
    id: 400,
    author: "Confucius",
    text: "The cautious seldom err."
  },
  {
    id: 401,
    author: "Confucius",
    text: "What you do not want done to yourself, do not do to others."
  },
  {
    id: 402,
    author: "Confucius",
    text:
      "Reviewing what you have learned and learning anew, you are fit to be a teacher."
  },
  {
    id: 403,
    author: "Confucius",
    text:
      "The superior man is satisfied and composed; the mean man is always full of distress."
  },
  {
    id: 404,
    author: "Confucius",
    text: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    id: 405,
    author: "Confucius",
    text:
      "To study and not think is a waste. To think and not study is dangerous."
  },
  {
    id: 406,
    author: "Confucius",
    text:
      "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability."
  },
  {
    id: 407,
    author: "Confucius",
    text:
      "Choose a job you love, and you will never have to work a day in your life."
  },
  {
    id: 408,
    author: "Confucius",
    text:
      "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself."
  },
  {
    id: 409,
    author: "Confucius",
    text:
      "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?"
  },
  {
    id: 410,
    author: "Confucius",
    text:
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps."
  },
  {
    id: 411,
    author: "Confucius",
    text:
      "I am not bothered by the fact that I am unknown. I am bothered when I do not know others."
  },
  {
    id: 412,
    author: "Confucius",
    text:
      "The superior man is modest in his speech, but exceeds in his actions."
  },
  {
    id: 413,
    author: "Confucius",
    text: "Silence is the true friend that never betrays."
  },
  {
    id: 414,
    author: "Confucius",
    text: "To be wronged is nothing unless you continue to remember it."
  },
  {
    id: 415,
    author: "Confucius",
    text:
      "They must often change, who would be constant in happiness or wisdom."
  },
  {
    id: 416,
    author: "Confucius",
    text:
      "When you see a good person, think of becoming like him. When you see someone not so good, reflect on your own weak points."
  },
  {
    id: 417,
    author: "Confucius",
    text:
      "When you meet someone better than yourself, turn your thoughts to becoming his equal. When you meet someone not as good as you are, look within and examine your own self."
  },
  {
    id: 418,
    author: "Confucius",
    text: "Everything has beauty, but not everyone sees it."
  },
  {
    id: 419,
    author: "Confucius",
    text:
      "I want you to be everything that's you, deep at the center of your being."
  },
  {
    id: 420,
    author: "Confucius",
    text:
      "The Superior Man is aware of Righteousness, the inferior man is aware of advantage."
  },
  {
    id: 421,
    author: "Confucius",
    text:
      "Fine words and an insinuating appearance are seldom associated with true virtue"
  },
  {
    id: 422,
    author: "Confucius",
    text:
      "Our greatest glory is not in never falling, but in rising every time we fall."
  },
  {
    id: 423,
    author: "Confucius",
    text: "I hear and I forget. I see and I remember. I do and I understand."
  },
  {
    id: 424,
    author: "Confucius",
    text: "Ability will never catch up with the demand for it."
  },
  {
    id: 425,
    author: "Confucius",
    text:
      "The superior man acts before he speaks, and afterwards speaks according to his action."
  },
  {
    id: 426,
    author: "Confucius",
    text:
      "Learning without reflection is a waste, reflection without learning is dangerous."
  },
  {
    id: 427,
    author: "Confucius",
    text:
      "If you look into your own heart, and you find nothing wrong there, what is there to worry about? What is there to fear?"
  },
  {
    id: 428,
    author: "Confucius",
    text:
      "Sincerity is the way of Heaven. The attainment of sincerity is the way of men."
  },
  {
    id: 429,
    author: "Confucius",
    text:
      "To give ones self earnestly to the duties due to men, and, while respecting spiritual beings, to keep aloof from them, may be called wisdom."
  },
  {
    id: 430,
    author: "Confucius",
    text:
      "He who wishes to secure the good of others, has already secured his own."
  },
  {
    id: 431,
    author: "Confucius",
    text: "Life is really simple, but we insist on making it complicated."
  },
  {
    id: 432,
    author: "Corita Kent",
    text: "Life is a succession of moments. To live each one is to succeed."
  },
  {
    id: 433,
    author: "Cullen Hightower",
    text: "When performance exceeds ambition, the overlap is called success."
  },
  {
    id: 434,
    author: "Cynthia Ozick",
    text: "To want to be what one can be is purpose in life."
  },
  {
    id: 435,
    author: "Daisaku Ikeda",
    text:
      "What matters is the value we've created in our lives, the people we've made happy and how much we've grown as people."
  },
  {
    id: 436,
    author: "Daisaku Ikeda",
    text:
      "The person who lives life fully, glowing with life's energy, is the person who lives a successful life."
  },
  {
    id: 437,
    author: "Daisaku Ikeda",
    text:
      "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances."
  },
  {
    id: 438,
    author: "Daisaku Ikeda",
    text:
      "Genuine sincerity opens people's hearts, while manipulation causes them to close."
  },
  {
    id: 439,
    author: "Daisaku Ikeda",
    text:
      "If we look at the world with a love of life, the world will reveal its beauty to us."
  },
  {
    id: 440,
    author: "Daisaku Ikeda",
    text:
      "If you lose today, win tomorrow. In this never-ending spirit of challenge is the heart of a victor."
  },
  {
    id: 441,
    author: "Dalai Lama",
    text: "Be kind whenever possible. It is always possible."
  },
  {
    id: 442,
    author: "Dalai Lama",
    text:
      "I believe that we are fundamentally the same and have the same basic potential."
  },
  {
    id: 443,
    author: "Dalai Lama",
    text:
      "Love and compassion open our own inner life, reducing stress, distrust and loneliness."
  },
  {
    id: 444,
    author: "Dalai Lama",
    text:
      "More often than not, anger is actually an indication of weakness rather than of strength."
  },
  {
    id: 445,
    author: "Dalai Lama",
    text:
      "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm."
  },
  {
    id: 446,
    author: "Dalai Lama",
    text:
      "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace."
  },
  {
    id: 447,
    author: "Dalai Lama",
    text:
      "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?"
  },
  {
    id: 448,
    author: "Dalai Lama",
    text:
      "With the realization of ones own potential and self-confidence in ones ability, one can build a better world."
  },
  {
    id: 449,
    author: "Dalai Lama",
    text:
      "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work."
  },
  {
    id: 450,
    author: "Dalai Lama",
    text:
      "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe."
  },
  {
    id: 451,
    author: "Dalai Lama",
    text:
      "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost."
  },
  {
    id: 452,
    author: "Dalai Lama",
    text:
      "With realization of ones own potential and self-confidence in ones ability, one can build a better world."
  },
  {
    id: 453,
    author: "Dalai Lama",
    text:
      "Happiness is not something ready made. It comes from your own actions."
  },
  {
    id: 454,
    author: "Dalai Lama",
    text:
      "Remember that sometimes not getting what you want is a wonderful stroke of luck."
  },
  {
    id: 455,
    author: "Dalai Lama",
    text:
      "Consider that not only do negative thoughts and emotions destroy our experience of peace, they also undermine our health."
  },
  {
    id: 456,
    author: "Dalai Lama",
    text:
      "The greatest antidote to insecurity and the sense of fear is compassion it brings one back to the basis of one's inner strength"
  },
  {
    id: 457,
    author: "Dalai Lama",
    text:
      "There is no need for temples, no need for complicated philosophies. My brain and my heart are my temples; my philosophy is kindness."
  },
  {
    id: 458,
    author: "Dalai Lama",
    text:
      "Happiness mainly comes from our own attitude, rather than from external factors."
  },
  {
    id: 459,
    author: "Dalai Lama",
    text:
      "It is difficult to achieve a spirit of genuine cooperation as long as people remain indifferent to the feelings and happiness of others."
  },
  {
    id: 460,
    author: "Dalai Lama",
    text:
      "The most important thing is transforming our minds, for a new way of thinking, a new outlook: we should strive to develop a new inner world."
  },
  {
    id: 461,
    author: "Dalai Lama",
    text:
      "Compassion and happiness are not a sign of weakness but a sign of strength."
  },
  {
    id: 462,
    author: "Dalai Lama",
    text: "See the positive side, the potential, and make an effort."
  },
  {
    id: 463,
    author: "Dalai Lama",
    text:
      "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes."
  },
  {
    id: 464,
    author: "Dalai Lama",
    text:
      "Genuine love should first be directed at oneself - if we do not love ourselves, how can we love others?"
  },
  {
    id: 465,
    author: "Dalai Lama",
    text:
      "The greatest antidote to insecurity and the sense of fear is compassion - it brings one back to the basis of one's inner strength"
  },
  {
    id: 466,
    author: "Dale Carnegie",
    text:
      "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."
  },
  {
    id: 467,
    author: "Dale Carnegie",
    text: "When fate hands us a lemon, lets try to make lemonade."
  },
  {
    id: 468,
    author: "Dale Carnegie",
    text: "Success is getting what you want. Happiness is wanting what you get."
  },
  {
    id: 469,
    author: "Dale Earnhardt",
    text:
      "The winner ain't the one with the fastest car it's the one who refuses to lose."
  },
  {
    id: 470,
    author: "Danielle Ingrum",
    text:
      "Give it all you've got because you never know if there's going to be a next time."
  },
  {
    id: 471,
    author: "Danilo Dolci",
    text:
      "It's important to know that words don't move mountains. Work, exacting work moves mountains."
  },
  {
    id: 472,
    author: "Dave Weinbaum",
    text: "The secret to a rich life is to have more beginnings than endings."
  },
  {
    id: 473,
    author: "David Bader",
    text: "Be here now. Be someplace else later. Is that so complicated?"
  },
  {
    id: 474,
    text: "Tomorrow belongs to those who can hear it coming",
    author: "David Bowie",
    source: "https://www.goodreads.com/quotes/462535",
    tags: "future, life, listen"
  },
  {
    id: 475,
    author: "David Brinkley",
    text:
      "A successful person is one who can lay a firm foundation with the bricks that others throw at him or her."
  },
  {
    id: 476,
    author: "David Eddings",
    text: "No day in which you learn something is a complete loss."
  },
  {
    id: 477,
    author: "David Jordan",
    text:
      "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it."
  },
  {
    id: 478,
    author: "David McCullough",
    text: "Real success is finding your lifework in the work that you love."
  },
  {
    id: 479,
    author: "David Rockefeller",
    text:
      "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were."
  },
  {
    id: 480,
    author: "David Seamans",
    text:
      "We cannot change our memories, but we can change their meaning and the power they have over us."
  },
  {
    id: 481,
    text: "When you make a choice, you change the future.",
    author: "Deepak Chopra",
    source: "https://www.goodreads.com/quotes/381641",
    tags: "future, choice, decision, change"
  },
  {
    id: 482,
    author: "Demosthenes",
    text: "Small opportunities are often the beginning of great enterprises."
  },
  {
    id: 483,
    author: "Denis Waitley",
    text:
      "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them."
  },
  {
    id: 484,
    author: "Denis Waitley",
    text:
      "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them."
  },
  {
    id: 485,
    author: "Denis Waitley",
    text: "You must welcome change as the rule but not as your ruler."
  },
  {
    id: 486,
    author: "Denis Waitley",
    text:
      "Happiness cannot be travelled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace and gratitude."
  },
  {
    id: 487,
    author: "Denis Waitley",
    text:
      "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown."
  },
  {
    id: 488,
    author: "Denis Waitley",
    text:
      "The only person who never makes mistakes is the person who never does anything."
  },
  {
    id: 489,
    author: "Dennis Kimbro",
    text:
      "We see things not as they are, but as we are. Our perception is shaped by our previous experiences."
  },
  {
    id: 490,
    author: "Desiderius Erasmus",
    text:
      "The fox has many tricks. The hedgehog has but one. But that is the best of all."
  },
  {
    id: 491,
    author: "Dhammapada",
    text:
      "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not."
  },
  {
    id: 492,
    author: "Dhammapada",
    text:
      "Do not give your attention to what others do or fail to do; give it to what you do or fail to do."
  },
  {
    id: 493,
    author: "Dieter F. Uchtdorf",
    text:
      "The desire to create is one of the deepest yearnings of the human soul.",
    source: "https://www.goodreads.com/quotes/8070701",
    tags: "creative, creativity, soul"
  },
  {
    id: 494,
    author: "Donald Kircher",
    text:
      "A man of ability and the desire to accomplish something can do anything."
  },
  {
    id: 495,
    author: "Donald Trump",
    text: "Everything in life is luck."
  },
  {
    id: 496,
    author: "Donald Trump",
    text:
      "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game."
  },
  {
    id: 497,
    author: "Donald Trump",
    text: "As long as your going to be thinking anyway, think big."
  },
  {
    id: 498,
    author: "Donald Trump",
    text: "You have to think anyway, so why not think big?"
  },
  {
    id: 499,
    author: "Donald Trump",
    text:
      "What separates the winners from the losers is how a person reacts to each new twist of fate."
  },
  {
    id: 500,
    author: "Donald Trump",
    text: "Sometimes by losing a battle you find a new way to win the war."
  },
  {
    id: 501,
    author: "Doris Day",
    text: "Gratitude is riches. Complaint is poverty."
  },
  {
    id: 502,
    author: "Doris Mortman",
    text:
      "Until you make peace with who you are, you will never be content with what you have."
  },
  {
    id: 503,
    author: "Doris Mortman",
    text:
      "Until you make peace with who you are, you'll never be content with what you have."
  },
  {
    id: 504,
    author: "Dorothy Thompson",
    text:
      "Fear grows in darkness; if you think theres a bogeyman around, turn on the light."
  },
  {
    id: 505,
    author: "Dorothy Thompson",
    text: "Only when we are no longer afraid do we begin to live."
  },
  {
    id: 506,
    author: "Doug Horton",
    text: "Be your own hero, it's cheaper than a movie ticket."
  },
  {
    id: 507,
    author: "Doug Larson",
    text:
      "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk."
  },
  {
    id: 508,
    author: "Douglas Adams",
    text:
      "Human beings, who are almost unique in having the ability to learn from the experience of others, are also remarkable for their apparent disinclination to do so."
  },
  {
    id: 509,
    author: "Dr. David M. Burns",
    text:
      "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life."
  },
  {
    id: 510,
    author: "Dr. Seuss",
    text: "Don't cry because it's over. Smile because it happened."
  },
  {
    id: 511,
    author: "E. E. Cummings",
    text: "It takes courage to grow up and become who you really are."
  },
  {
    id: 512,
    author: "E. M. Forster",
    text:
      "One must be fond of people and trust them if one is not to make a mess of life."
  },
  {
    id: 513,
    author: "Eckhart Tolle",
    text:
      "It is not uncommon for people to spend their whole life waiting to start living."
  },
  {
    id: 514,
    author: "Eckhart Tolle",
    text:
      "You cannot find yourself by going into the past. You can find yourself by coming into the present."
  },
  {
    id: 515,
    author: "Eckhart Tolle",
    text:
      "The past has no power to stop you from being present now. Only your grievance about the past can do that."
  },
  {
    id: 516,
    author: "Eckhart Tolle",
    text:
      "Whenever something negative happens to you, there is a deep lesson concealed within it."
  },
  {
    id: 517,
    author: "Eckhart Tolle",
    text:
      "You do not become good by trying to be good, but by finding the goodness that is already within you."
  },
  {
    id: 518,
    author: "Eckhart Tolle",
    text:
      "The greater part of human pain is unnecessary. It is self-created as long as the unobserved mind runs your life."
  },
  {
    id: 519,
    author: "Ed Cunningham",
    text:
      "Friends are those rare people who ask how we are and then wait to hear the answer."
  },
  {
    id: 520,
    author: "Eddie Cantor",
    text:
      "Slow down and enjoy life. It's not only the scenery you miss by going too fast you also miss the sense of where you are going and why."
  },
  {
    id: 521,
    author: "Eddie Cantor",
    text:
      "Slow down and enjoy life. It's not only the scenery you miss by going too fast - you also miss the sense of where you are going and why."
  },
  {
    id: 522,
    author: "Eden Phillpotts",
    text:
      "The universe is full of magical things, patiently waiting for our wits to grow sharper."
  },
  {
    id: 523,
    author: "Edgar Allan Poe",
    text:
      "Those who dream by day are cognizant of many things which escape those who dream only by night."
  },
  {
    id: 524,
    author: "Edith Södergran",
    text: "The inner fire is the most important thing mankind possesses.",
    source: "https://www.goodreads.com/quotes/11458",
    tags: "creativity, fire, passion"
  },
  {
    id: 525,
    author: "Edith Wharton",
    text: "If only wed stop trying to be happy wed have a pretty good time."
  },
  {
    id: 526,
    author: "Edmond Rostand",
    text: "A man is not old as long as he is seeking something."
  },
  {
    id: 527,
    author: "Edmund Burke",
    text:
      "Nobody made a greater mistake than he who did nothing because he could do only a little."
  },
  {
    id: 528,
    author: "Edna Millay",
    text:
      "I am glad that I paid so little attention to good advice; had I abided by it I might have been saved from some of my most valuable mistakes."
  },
  {
    id: 529,
    author: "Edward Ericson",
    text:
      "The cosmos is neither moral or immoral; only people are. He who would move the world must first move himself."
  },
  {
    id: 530,
    author: "Edward Gibbon",
    text: "The winds and waves are always on the side of the ablest navigators."
  },
  {
    id: 531,
    author: "Edward Young",
    text:
      "On every thorn, delightful wisdom grows, In every rill a sweet instruction flows."
  },
  {
    id: 532,
    author: "Edward de Bono",
    text:
      "It is better to have enough ideas for some of them to be wrong, than to be always right by having no ideas at all."
  },
  {
    id: 533,
    author: "Edwin Chapin",
    text:
      "Every action of our lives touches on some chord that will vibrate in eternity."
  },
  {
    id: 534,
    author: "Edwin Markham",
    text:
      "We have committed the Golden Rule to memory; let us now commit it to life."
  },
  {
    id: 535,
    author: "Eknath Easwaran",
    text:
      "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose."
  },
  {
    id: 536,
    author: "Elbert Hubbard",
    text: "There is no failure except in no longer trying."
  },
  {
    id: 537,
    author: "Elbert Hubbard",
    text: "To avoid criticism, do nothing, say nothing, be nothing."
  },
  {
    id: 538,
    author: "Elbert Hubbard",
    text:
      "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success."
  },
  {
    id: 539,
    author: "Elbert Hubbard",
    text:
      "A failure is a man who has blundered but is not capable of cashing in on the experience."
  },
  {
    id: 540,
    author: "Elbert Hubbard",
    text:
      "The final proof of greatness lies in being able to endure criticism without resentment."
  },
  {
    id: 541,
    author: "Elbert Hubbard",
    text:
      "The greatest mistake you can make in life is to be continually fearing you will make one."
  },
  {
    id: 542,
    author: "Eleanor Roosevelt",
    text: "No one can make you feel inferior without your consent."
  },
  {
    id: 543,
    author: "Eleanor Roosevelt",
    text: "Do one thing every day that scares you."
  },
  {
    id: 544,
    author: "Eleanor Roosevelt",
    text:
      "The future belongs to those who believe in the beauty of their dreams."
  },
  {
    id: 545,
    author: "Eleanor Roosevelt",
    text:
      "I think somehow we learn who we really are and then live with that decision."
  },
  {
    id: 546,
    author: "Eleanor Roosevelt",
    text:
      "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world."
  },
  {
    id: 547,
    author: "Eleanor Roosevelt",
    text:
      "Remember always that you not only have the right to be an individual, you have an obligation to be one."
  },
  {
    id: 548,
    author: "Eleanor Roosevelt",
    text:
      "People grow through experience if they meet life honestly and courageously. This is how character is built."
  },
  {
    id: 549,
    author: "Eleanor Roosevelt",
    text:
      "It is not fair to ask of others what you are unwilling to do yourself."
  },
  {
    id: 550,
    author: "Eleanor Roosevelt",
    text: "You must do the things you think you cannot do."
  },
  {
    id: 551,
    author: "Elisabeth Kubler-Ross",
    text:
      "I believe that we are solely responsible for our choices, and we have to accept the consequences of every deed, word, and thought throughout our lifetime."
  },
  {
    id: 552,
    author: "Elizabeth Arden",
    text:
      "I'm not interested in age. People who tell me their age are silly. You're as old as you feel."
  },
  {
    id: 553,
    author: "Elizabeth Browning",
    text: "Light tomorrow with today!"
  },
  {
    id: 554,
    author: "Elizabeth Browning",
    text:
      "Love doesn't make the world go round, love is what makes the ride worthwhile."
  },
  {
    id: 555,
    author: "Elizabeth Browning",
    text: "Whoso loves, believes the impossible."
  },
  {
    id: 556,
    author: "Elizabeth Kenny",
    text: "He who angers you conquers you."
  },
  {
    id: 557,
    author: "Elizabeth Montagu",
    text:
      "I endeavour to be wise when I cannot be merry, easy when I cannot be glad, content with what cannot be mended and patient when there is no redress."
  },
  {
    id: 558,
    author: "Ella Fitzgerald",
    text: "It isn't where you come from, it's where you're going that counts."
  },
  {
    id: 559,
    author: "Ella Wilcox",
    text:
      "The truest greatness lies in being kind, the truest wisdom in a happy mind."
  },
  {
    id: 560,
    author: "Ella Williams",
    text: "Bite off more than you can chew, then chew it."
  },
  {
    id: 561,
    author: "Ellen Gilchrist",
    text: "Don't ruin the present with the ruined past."
  },
  {
    id: 562,
    author: "Ellen Parr",
    text: "The cure for boredom is curiosity. There is no cure for curiosity."
  },
  {
    id: 563,
    author: "English proverb",
    text: "Take heed: you do not find what you do not seek."
  },
  {
    id: 564,
    author: "Epictetus",
    text: "Freedom is the right to live as we wish."
  },
  {
    id: 565,
    author: "Epictetus",
    text: "Difficulties are things that show a person what they are."
  },
  {
    id: 566,
    author: "Epictetus",
    text: "If you wish to be a writer, write."
  },
  {
    id: 567,
    author: "Epictetus",
    text:
      "Practice yourself, for heavens sake in little things, and then proceed to greater."
  },
  {
    id: 568,
    author: "Epictetus",
    text:
      "Make the best use of what is in your power, and take the rest as it happens."
  },
  {
    id: 569,
    author: "Epictetus",
    text:
      "Nature gave us one tongue and two ears so we could hear twice as much as we speak."
  },
  {
    id: 570,
    author: "Epictetus",
    text:
      "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has."
  },
  {
    id: 571,
    author: "Epictetus",
    text:
      "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will."
  },
  {
    id: 572,
    author: "Epictetus",
    text:
      "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible."
  },
  {
    id: 573,
    author: "Epictetus",
    text:
      "When you are offended at any man's fault, turn to yourself and study your own failings. Then you will forget your anger."
  },
  {
    id: 574,
    author: "Epictetus",
    text: "Know, first, who you are, and then adorn yourself accordingly."
  },
  {
    id: 575,
    author: "Epictetus",
    text:
      "Men are disturbed not by things, but by the view which they take of them."
  },
  {
    id: 576,
    author: "Epictetus",
    text:
      "We have two ears and one mouth so that we can listen twice as much as we speak."
  },
  {
    id: 577,
    author: "Epictetus",
    text:
      "Not every difficult and dangerous thing is suitable for training, but only that which is conducive to success in achieving the object of our effort."
  },
  {
    id: 578,
    author: "Epictetus",
    text: "No man is free who is not master of himself."
  },
  {
    id: 579,
    author: "Epictetus",
    text: "It's not what happens to you, but how you react to it that matters."
  },
  {
    id: 580,
    author: "Epictetus",
    text:
      "The world turns aside to let any man pass who knows where he is going."
  },
  {
    id: 581,
    author: "Epictetus",
    text:
      "First say to yourself what you would be; and then do what you have to do."
  },
  {
    id: 582,
    author: "Epictetus",
    text:
      "Keep silence for the most part, and speak only when you must, and then briefly."
  },
  {
    id: 583,
    author: "Epictetus",
    text: "It is impossible for a man to learn what he thinks he already knows."
  },
  {
    id: 584,
    author: "Epictetus",
    text:
      "One that desires to excel should endeavour in those things that are in themselves most excellent."
  },
  {
    id: 585,
    author: "Eriksson",
    text: "The greatest barrier to success is the fear of failure."
  },
  {
    id: 586,
    author: "Ernest Hemingway",
    text:
      "I like to listen. I have learned a great deal from listening carefully. Most people never listen.",
    tags: "listen, learn, learning",
    source: "https://www.goodreads.com/quotes/353013"
  },
  {
    id: 587,
    author: "Ernest Hemingway",
    text: "Never mistake motion for action.",
    tags: "action, motion, mistake",
    source: "https://www.goodreads.com/quotes/392801"
  },
  {
    id: 588,
    author: "Etty Hillesum",
    text:
      "Sometimes the most important thing in a whole day is the rest we take between two deep breaths."
  },
  {
    id: 589,
    author: "Euripides",
    text: "The wisest men follow their own direction."
  },
  {
    id: 590,
    author: "Everett Dirksen",
    text:
      "I am a man of fixed and unbending principles, the first of which is to be flexible at all times."
  },
  {
    id: 591,
    author: "Fannie Hamer",
    text:
      "There is one thing you have got to learn about our movement. Three people are better than no people."
  },
  {
    id: 592,
    author: "Felix Adler",
    text: "The truth which has made us free will in the end make us glad also."
  },
  {
    id: 593,
    author: "Flora Whittemore",
    text: "The doors we open and close each day decide the lives we live."
  },
  {
    id: 594,
    author: "Florence Nightingale",
    source: "https://www.goodreads.com/quotes/161358",
    tags: "excuse, excuses, success",
    text: "I attribute my success to this: I never gave or took an excuse."
  },
  {
    id: 595,
    author: "Forrest Church",
    text: "Do what you can. Want what you have. Be who you are."
  },
  {
    id: 596,
    author: "Forrest Gump",
    source: "https://www.rottentomatoes.com/m/forrest_gump/quotes",
    tags: "fictional, movie, life",
    text:
      "My mama always said: life is like a box of chocolate, you never know what you gonna get."
  },
  {
    id: 597,
    author: "Fran Watson",
    text: "As we risk ourselves, we grow. Each new experience is a risk."
  },
  {
    id: 598,
    author: "Frances de Sales",
    text:
      "Nothing is so strong as gentleness. Nothing is so gentle as real strength."
  },
  {
    id: 599,
    author: "Francis Bacon",
    text: "A prudent question is one half of wisdom."
  },
  {
    id: 600,
    author: "Francis Bacon",
    text: "A wise man will make more opportunities than he finds."
  },
  {
    id: 601,
    author: "Francois de La Rochefoucauld",
    text:
      "A true friend is the most precious of all possessions and the one we take the least thought about acquiring."
  },
  {
    id: 602,
    author: "Francoise de Motteville",
    text:
      "The true way to render ourselves happy is to love our work and find in it our pleasure."
  },
  {
    id: 603,
    author: "Frank Crane",
    text:
      "You may be deceived if you trust too much, but you will live in torment if you don't trust enough."
  },
  {
    id: 604,
    author: "Frank Herbert",
    text:
      "The beginning of knowledge is the discovery of something we do not understand."
  },
  {
    id: 605,
    author: "Frank Tyger",
    text: "Your future depends on many things, but mostly on you."
  },
  {
    id: 606,
    author: "Frank Tyger",
    text:
      "Learn to listen. Opportunity could be knocking at your door very softly."
  },
  {
    id: 607,
    author: "Frank Tyger",
    text: "Be a good listener. Your ears will never get you in trouble."
  },
  {
    id: 608,
    author: "Frank Wright",
    text:
      "The thing always happens that you really believe in; and the belief in a thing makes it happen."
  },
  {
    id: 609,
    author: "Frank Wright",
    text: "Respect should be earned by actions, and not acquired by years."
  },
  {
    id: 610,
    author: "Franklin D. Roosevelt",
    text:
      "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something."
  },
  {
    id: 611,
    author: "Franklin Roosevelt",
    text:
      "The only limit to our realization of tomorrow will be our doubts of today."
  },
  {
    id: 612,
    author: "Franklin Roosevelt",
    text:
      "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort."
  },
  {
    id: 613,
    author: "Franklin Roosevelt",
    text: "When you come to the end of your rope, tie a knot and hang on."
  },
  {
    id: 614,
    author: "Franz Liszt",
    text:
      "Beware of missing chances; otherwise it may be altogether too late some day."
  },
  {
    id: 615,
    author: "Frederick Douglass",
    text: "If there is no struggle, there is no progress."
  },
  {
    id: 616,
    author: "Frederick Douglass",
    text:
      "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence."
  },
  {
    id: 617,
    author: "Frederick Wilcox",
    text:
      "Progress always involves risks. You can't steal second base and keep your foot on first."
  },
  {
    id: 618,
    author: "Friedrich von Schiller",
    text: "Keep true to the dreams of thy youth."
  },
  {
    id: 619,
    author: "Friedrich von Schiller",
    text:
      "If you want to study yourself look into the hearts of other people. If you want to study other people look into your own heart."
  },
  {
    id: 620,
    author: "Friedrich von Schiller",
    text:
      "If you want to study yourself, look into the hearts of other people. If you want to study other people, look into your own heart."
  },
  {
    id: 621,
    author: "G. K. Chesterton",
    text:
      "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder."
  },
  {
    id: 622,
    author: "G. K. Chesterton",
    text:
      "I do not believe in a fate that falls on men however they act; but I do believe in a fate that falls on man unless they act."
  },
  {
    id: 623,
    author: "Gail Sheehy",
    text: "To be tested is good. The challenged life may be the best therapist."
  },
  {
    id: 624,
    author: "Galileo Galilei",
    text:
      "All truths are easy to understand once they are discovered; the point is to discover them."
  },
  {
    id: 625,
    author: "General Douglas MacArthur",
    text: "It is fatal to enter any war without the will to win it."
  },
  {
    id: 626,
    author: "Geoffrey F. Abert",
    text:
      "Prosperity depends more on wanting what you have than having what you want."
  },
  {
    id: 627,
    author: "Georg Lichtenberg",
    text:
      "Everyone is a genius at least once a year. A real genius has his original ideas closer together."
  },
  {
    id: 628,
    author: "Georg Lichtenberg",
    text:
      "I cannot say whether things will get better if we change; what I can say is they must change if they are to get better."
  },
  {
    id: 629,
    author: "George Allen",
    text:
      "People of mediocre ability sometimes achieve outstanding success because they don't know when to quit. Most men succeed because they are determined to."
  },
  {
    id: 630,
    author: "George Bernard Shaw",
    text:
      "A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing."
  },
  {
    id: 631,
    author: "George Bernard Shaw",
    text: "The possibilities are numerous once we decide to act and not react."
  },
  {
    id: 632,
    author: "George Eliot",
    text: "It is never too late to be what you might have been."
  },
  {
    id: 633,
    author: "George Eliot",
    text:
      "What do we live for, if it is not to make life less difficult for each other?"
  },
  {
    id: 634,
    author: "George Matthew Adams",
    text: "Each day can be one of triumph if you keep up your interests."
  },
  {
    id: 635,
    author: "George Orwell",
    text: "Myths which are believed in tend to become true."
  },
  {
    id: 636,
    author: "George Patton",
    text: "If a man does his best, what else is there?"
  },
  {
    id: 637,
    author: "George Patton",
    text: "Accept challenges, so that you may feel the exhilaration of victory."
  },
  {
    id: 638,
    author: "George Sand",
    text: "There is only one happiness in life, to love and be loved."
  },
  {
    id: 639,
    author: "George Santayan",
    text: "Those who cannot learn from history are doomed to repeat it."
  },
  {
    id: 640,
    author: "George Shaw",
    text: "My reputation grows with every failure."
  },
  {
    id: 641,
    author: "George Shaw",
    text:
      "The reasonable man adapts himself to the world; the unreasonable man persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man."
  },
  {
    id: 642,
    author: "George Sheehan",
    text:
      "Success means having the courage, the determination, and the will to become the person you believe you were meant to be."
  },
  {
    id: 643,
    author: "German proverb",
    text: "Silence is a fence around wisdom."
  },
  {
    id: 644,
    author: "German proverb",
    text: "Begin to weave and God will give you the thread."
  },
  {
    id: 645,
    author: "Gloria Steinem",
    text: "If the shoe doesn't fit, must we change the foot?"
  },
  {
    id: 646,
    author: "Gloria Steinem",
    text:
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning."
  },
  {
    id: 647,
    author: "Goethe",
    text: "A man sees in the world what he carries in his heart."
  },
  {
    id: 648,
    author: "Goethe",
    text: "What is not started today is never finished tomorrow."
  },
  {
    id: 649,
    author: "Goethe",
    text: "Just trust yourself, then you will know how to live."
  },
  {
    id: 650,
    author: "Goethe",
    source: "https://www.goodreads.com/quotes/6774650",
    tags: "time, effectiveness",
    text:
      "If I know how you spend your time, then I know what might become of you."
  },
  {
    id: 651,
    author: "Gordon Hinckley",
    text:
      "Our kindness may be the most persuasive argument for that which we believe."
  },
  {
    id: 652,
    author: "Gordon Hinckley",
    text:
      "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith."
  },
  {
    id: 653,
    author: "Grandma Moses",
    text: "Life is what you make of it. Always has been, always will be."
  },
  {
    id: 654,
    author: "Gustave Flaubert",
    text: "Reality does not conform to the ideal, but confirms it."
  },
  {
    id: 655,
    author: "H. Bertram Lewis",
    text:
      "The happy and efficient people in this world are those who accept trouble as a normal detail of human life and resolve to capitalize it when it comes along."
  },
  {
    id: 656,
    author: "H. Jackson Browne",
    text: "Don't be afraid to go out on a limb. That's where the fruit is."
  },
  {
    id: 657,
    author: "H. W. Arnold",
    text:
      "The worst bankrupt in the world is the person who has lost his enthusiasm."
  },
  {
    id: 658,
    author: "Haddon Robinson",
    text: "What worries you masters you."
  },
  {
    id: 659,
    author: "Hannah Arendt",
    text:
      "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible."
  },
  {
    id: 660,
    author: "Hannah More",
    text:
      "It is not so important to know everything as to appreciate what we learn."
  },
  {
    id: 661,
    author: "Hannah More",
    text:
      "Obstacles are those things you see when you take your eyes off the goal."
  },
  {
    id: 662,
    author: "Hannah Senesh",
    text:
      "One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that ones life has meaning, that one is needed in this world."
  },
  {
    id: 663,
    author: "Harold Nicolson",
    text:
      "We are all inclined to judge ourselves by our ideals; others, by their acts."
  },
  {
    id: 664,
    author: "Harriet Beecher Stowe",
    text: "All serious daring starts from within."
  },
  {
    id: 665,
    author: "Harriet Lerner",
    text:
      "Only through our connectedness to others can we really know and enhance the self. And only through working on the self can we begin to enhance our connectedness to others."
  },
  {
    id: 666,
    author: "Harriet Tubman",
    text:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."
  },
  {
    id: 667,
    author: "Harriet Woods",
    text:
      "You can stand tall without standing on someone. You can be a victor without having victims."
  },
  {
    id: 668,
    author: "Harry Banks",
    text: "For success, attitude is equally as important as ability."
  },
  {
    id: 669,
    author: "Harry Burchell Mathews",
    text:
      "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift."
  },
  {
    id: 670,
    author: "Harry Kemp",
    text:
      "The poor man is not he who is without a cent, but he who is without a dream."
  },
  {
    id: 671,
    author: "Hasidic saying",
    text:
      "Everyone should carefully observe which way his heart draws him, and then choose that way with all his strength."
  },
  {
    id: 672,
    author: "Hausa",
    text: "Give thanks for a little and you will find a lot."
  },
  {
    id: 673,
    author: "Havelock Ellis",
    text:
      "It is on our failures that we base a new and different and better success."
  },
  {
    id: 674,
    author: "Haynes Bayly",
    text: "Absence makes the heart grow fonder."
  },
  {
    id: 675,
    author: "Helen Keller",
    text: "Keep yourself to the sunshine and you cannot see the shadow."
  },
  {
    id: 676,
    author: "Helen Keller",
    text:
      "Never bend your head. Always hold it high. Look the world right in the eye."
  },
  {
    id: 677,
    author: "Helen Keller",
    text:
      "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart."
  },
  {
    id: 678,
    author: "Helen Keller",
    text:
      "We could never learn to be brave and patient if there were only joy in the world."
  },
  {
    id: 679,
    author: "Helen Keller",
    text:
      "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight."
  },
  {
    id: 680,
    author: "Helen Keller",
    text:
      "No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit."
  },
  {
    id: 681,
    author: "Helen Keller",
    text:
      "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, vision cleared, ambition inspired, and success achieved."
  },
  {
    id: 682,
    author: "Helen Keller",
    text:
      "The best and most beautiful things in the world cannot be seen, nor touched... but are felt in the heart."
  },
  {
    id: 683,
    author: "Helen Keller",
    text:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."
  },
  {
    id: 684,
    author: "Henri Amiel",
    text: "Almost everything comes from nothing."
  },
  {
    id: 685,
    author: "Henri Bergson",
    text:
      "To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly."
  },
  {
    id: 686,
    author: "Henri Bergson",
    text: "The eye sees only what the mind is prepared to comprehend."
  },
  {
    id: 687,
    author: "Henri L. Bergson",
    text: "Think like a man of action; act like a man of thought."
  },
  {
    id: 688,
    author: "Henri-Frederic Amiel",
    text:
      "So long as a person is capable of self-renewal they are a living being."
  },
  {
    id: 689,
    author: "Henri-Frederic Amiel",
    text:
      "Work while you have the light. You are responsible for the talent that has been entrusted to you."
  },
  {
    id: 690,
    author: "Henri Matisse",
    source: "https://www.goodreads.com/quotes/21433",
    tags: "creativity, courage",
    text: "Creativity takes courage."
  },
  {
    id: 691,
    author: "Henry Beecher",
    text: "Gratitude is the fairest blossom which springs from the soul."
  },
  {
    id: 692,
    author: "Henry David Thoreau",
    text: "I cannot make my days longer so I strive to make them better."
  },
  {
    id: 693,
    author: "Henry David Thoreau",
    text:
      "If one advances confidently in the direction of his dream, and endeavours to live the life which he had imagines, he will meet with a success unexpected in common hours."
  },
  {
    id: 694,
    author: "Henry David Thoreau",
    source: "https://www.brainyquote.com/quotes/henry_david_thoreau_106427",
    tags: "price, priorities, life",
    text: "The price of anything is the amount of life you exchange for it."
  },
  {
    id: 695,
    author: "Henry Ford",
    text:
      "If you think you can, you can. And if you think you can't, you're right."
  },
  {
    id: 696,
    author: "Henry Ford",
    text: "Quality means doing it right when no one is looking."
  },
  {
    id: 697,
    author: "Henry Ford",
    text:
      "Obstacles are those frightful things you see when you take your eyes off your goal."
  },
  {
    id: 698,
    author: "Henry J. Kaiser",
    text: "Trouble is only opportunity in work clothes."
  },
  {
    id: 699,
    author: "Henry James",
    text:
      "Three things in human life are important. The first is to be kind. The second is to be kind. The third is to be kind."
  },
  {
    id: 700,
    author: "Henry Longfellow",
    text:
      "He that respects himself is safe from others; he wears a coat of mail that none can pierce."
  },
  {
    id: 701,
    author: "Henry Longfellow",
    text:
      "Perseverance is a great element of success. If you only knock long enough and loud enough at the gate, you are sure to wake up somebody."
  },
  {
    id: 702,
    author: "Henry Miller",
    text:
      "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself."
  },
  {
    id: 703,
    author: "Henry Miller",
    text:
      "The moment one gives close attention to anything, it becomes a mysterious, awesome, indescribably magnificent world in itself."
  },
  {
    id: 704,
    author: "Henry Moore",
    text:
      "There is no retirement for an artist, it's your way of living so there is no end to it."
  },
  {
    id: 705,
    author: "Henry Reed",
    text:
      "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself."
  },
  {
    id: 706,
    author: "Henry Thoreau",
    text:
      "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard."
  },
  {
    id: 707,
    author: "Henry Thoreau",
    text: "Things do not change, we change."
  },
  {
    id: 708,
    author: "Henry Thoreau",
    text: "The world is but a canvas to the imagination."
  },
  {
    id: 709,
    author: "Henry Thoreau",
    text: "Things do not change; we change."
  },
  {
    id: 710,
    author: "Henry Van Dyke",
    text:
      "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars."
  },
  {
    id: 711,
    author: "Henry Ward Beecher",
    text:
      "Every artist dips his brush in his own soul, and paints his own nature into his pictures."
  },
  {
    id: 712,
    author: "Heraclitus",
    text: "All is flux; nothing stays still."
  },
  {
    id: 713,
    author: "Heraclitus",
    text:
      "You cannot step twice into the same river, for other waters are continually flowing in."
  },
  {
    id: 714,
    author: "Herbert Swope",
    text:
      "I cannot give you the formula for success, but I can give you the formula for failure: which is: Try to please everybody."
  },
  {
    id: 715,
    author: "Hermann Hesse",
    text: "If I know what love is, it is because of you."
  },
  {
    id: 716,
    author: "Holmes",
    text: "Fame usually comes to those who are thinking about something else."
  },
  {
    id: 717,
    author: "Honore de Balzac",
    text: "When you doubt your power, you give power to your doubt."
  },
  {
    id: 718,
    author: "Honore de Balzac",
    text:
      "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition."
  },
  {
    id: 719,
    author: "Horace",
    text:
      "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant."
  },
  {
    id: 720,
    author: "Horace",
    text: "Begin, be bold, and venture to be wise."
  },
  {
    id: 721,
    author: "Horace Friess",
    text:
      "All seasons are beautiful for the person who carries happiness within."
  },
  {
    id: 722,
    author: "Hugh Miller",
    text: "Problems are only opportunities with thorns on them."
  },
  {
    id: 723,
    author: "Immanuel Kant",
    text: "Science is organized knowledge. Wisdom is organized life."
  },
  {
    id: 724,
    author: "Immanuel Kant",
    text:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason."
  },
  {
    id: 725,
    author: "Indira Gandhi",
    text: "You can't shake hands with a clenched fist."
  },
  {
    id: 726,
    author: "Ingrid Bergman",
    text:
      "You must train your intuition you must trust the small voice inside you which tells you exactly what to say, what to decide."
  },
  {
    id: 727,
    author: "Ingrid Bergman",
    text:
      "You must train your intuition, you must trust the small voice inside you which tells you exactly what to say, what to decide."
  },
  {
    id: 728,
    author: "Iris Murdoch",
    text: "We can only learn to love by loving."
  },
  {
    id: 729,
    author: "Isaac Asimov",
    text:
      "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value."
  },
  {
    id: 730,
    author: "Isocrates",
    text:
      "The noblest worship is to make yourself as good and as just as you can."
  },
  {
    id: 731,
    author: "Ivy Baker Priest",
    text:
      "The world is round and the place which may seem like the end may also be the beginning."
  },
  {
    id: 732,
    text: "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
    source: "https://www.goodreads.com/quotes/396385",
    tags: "future, adversity, failure, life, foundation"
  },
  {
    id: 733,
    author: "J. Willard Marriott",
    text:
      "Good timber does not grow with ease; the stronger the wind, the stronger the trees."
  },
  {
    id: 734,
    author: "Jack Buck",
    text:
      "Things turn out best for those who make the best of the way things turn out."
  },
  {
    id: 735,
    author: "Jack Canfield",
    text: "Everything you want is on the other side of fear.",
    source: "https://www.goodreads.com/quotes/495741",
    tags: "overcome, action, try, persevere"
  },
  {
    id: 736,
    author: "Jack Dixon",
    text:
      "If you focus on results, you will never change. If you focus on change, you will get results."
  },
  {
    id: 737,
    author: "Jacob Braude",
    text:
      "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others."
  },
  {
    id: 738,
    author: "James Barrie",
    text:
      "We never understand how little we need in this world until we know the loss of it."
  },
  {
    id: 739,
    author: "James Faust",
    text:
      "If you take each challenge one step at a time, with faith in every footstep, your strength and understanding will increase."
  },
  {
    id: 740,
    author: "James Freeman Clarke",
    text:
      "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life."
  },
  {
    id: 741,
    author: "James Lowell",
    text: "A weed is no more than a flower in disguise."
  },
  {
    id: 742,
    author: "James Openheim",
    text:
      "The foolish man seeks happiness in the distance; the wise grows it under his feet."
  },
  {
    id: 743,
    author: "James Oppenheim",
    text:
      "The foolish man seeks happiness in the distance, the wise grows it under his feet."
  },
  {
    id: 744,
    author: "James Pence",
    text: "Success is determined by those whom prove the impossible, possible."
  },
  {
    id: 745,
    author: "James Yorke",
    text: "The most successful people are those who are good at plan B."
  },
  {
    id: 746,
    author: "Jamie Paolinetti",
    text:
      "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."
  },
  {
    id: 747,
    author: "Jane Addams",
    text:
      "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt."
  },
  {
    id: 748,
    author: "Jane Addams",
    text:
      "Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world."
  },
  {
    id: 749,
    author: "Jane Roberts",
    text:
      "By accepting yourself and being fully what you are, your presence can make others happy."
  },
  {
    id: 750,
    author: "Janis Joplin",
    text: "Don't compromise yourself. You are all you've got."
  },
  {
    id: 751,
    author: "Japanese proverb",
    text: "The day you decide to do it is your lucky day."
  },
  {
    id: 752,
    author: "Japanese proverb",
    text:
      "Vision without action is a daydream. Action without vision is a nightmare."
  },
  {
    id: 753,
    author: "Jason Fried",
    text: "No is easier to do. Yes is easier to say."
  },
  {
    id: 754,
    author: "Jawaharlal Nehru",
    text:
      "A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action."
  },
  {
    id: 755,
    author: "Jean Lacordaire",
    text:
      "We are the leaves of one branch, the drops of one sea, the flowers of one garden."
  },
  {
    id: 756,
    author: "Jean Lacordaire",
    text:
      "Neither genius, fame, nor love show the greatness of the soul. Only kindness can do that."
  },
  {
    id: 757,
    author: "Jean de la Bruyere",
    source: "https://www.brainyquote.com/quotes/jean_de_la_bruyere_104446",
    tags: "time, complain",
    text:
      "Those who make the worse use of their time are the first to complain of its shortness"
  },
  {
    id: 758,
    author: "Jean de la Fontaine",
    text: "Sadness flies away on the wings of time."
  },
  {
    id: 759,
    author: "Jean-Paul Sartre",
    text:
      "Man is not sum of what he has already, but rather the sum of what he does not yet have, of what he could have."
  },
  {
    id: 760,
    author: "Jean-Paul Sartre",
    text: "Freedom is what you do with what's been done to you."
  },
  {
    id: 761,
    author: "Jessamyn West",
    text:
      "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own."
  },
  {
    id: 762,
    author: "Jim Beggs",
    text:
      "Before you put on a frown, make absolutely sure there are no smiles available."
  },
  {
    id: 763,
    author: "Jim Bishop",
    text:
      "The future is an opaque mirror. Anyone who tries to look into it sees nothing but the dim outlines of an old and worried face."
  },
  {
    id: 764,
    author: "Jim Rohn",
    text: "Either you run the day or the day runs you."
  },
  {
    id: 765,
    author: "Jim Rohn",
    text:
      "Give whatever you are doing and whoever you are with the gift of your attention."
  },
  {
    id: 766,
    author: "Jim Rohn",
    text: "The more you care, the stronger you can be."
  },
  {
    id: 767,
    author: "Jim Rohn",
    text:
      "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much."
  },
  {
    id: 768,
    author: "Jimmy Dean",
    text:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination."
  },
  {
    id: 769,
    author: "Joan Didion",
    text:
      "To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect."
  },
  {
    id: 770,
    author: "Joan Didion",
    text:
      "To free us from the expectations of others, to give us back to ourselves - there lies the great, singular power of self-respect."
  },
  {
    id: 771,
    author: "Joe Namath",
    text: "If you aren't going all the way, why go at all?"
  },
  {
    id: 772,
    author: "Joe Paterno",
    text:
      "Believe deep down in your heart that you're destined to do great things."
  },
  {
    id: 773,
    author: "Johann Wolfgang von Goethe",
    text: "Difficulties increase the nearer we get to the goal."
  },
  {
    id: 774,
    author: "Johann Wolfgang von Goethe",
    text: "Great talent finds happiness in execution."
  },
  {
    id: 775,
    author: "Johann Wolfgang von Goethe",
    text: "Character develops itself in the stream of life."
  },
  {
    id: 776,
    author: "Johann Wolfgang von Goethe",
    text: "A really great talent finds its happiness in execution."
  },
  {
    id: 777,
    author: "Johann Wolfgang von Goethe",
    text: "Mountains cannot be surmounted except by winding paths."
  },
  {
    id: 778,
    author: "Johann Wolfgang von Goethe",
    text: "Knowing is not enough; we must apply!"
  },
  {
    id: 779,
    author: "Johann Wolfgang von Goethe",
    text:
      "In the end we retain from our studies only that which we practically apply."
  },
  {
    id: 780,
    author: "Johann Wolfgang von Goethe",
    text:
      "The person born with a talent they are meant to use will find their greatest happiness in using it."
  },
  {
    id: 781,
    author: "Johann Wolfgang von Goethe",
    text:
      "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not."
  },
  {
    id: 782,
    author: "Johann Wolfgang von Goethe",
    text:
      "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own."
  },
  {
    id: 783,
    author: "Johann Wolfgang von Goethe",
    text:
      "Treat people as if they were what they ought to be and you help them to become what they are capable of being."
  },
  {
    id: 784,
    author: "Johann Wolfgang von Goethe",
    text: "Correction does much, but encouragement does more."
  },
  {
    id: 785,
    author: "Johann Wolfgang von Goethe",
    text: "Kindness is the golden chain by which society is bound together."
  },
  {
    id: 786,
    author: "Johann Wolfgang von Goethe",
    text:
      "Wherever a man may happen to turn, whatever a man may undertake, he will always end up by returning to the path which nature has marked out for him."
  },
  {
    id: 787,
    author: "Johann Wolfgang von Goethe",
    text:
      "The really unhappy person is the one who leaves undone what they can do, and starts doing what they don't understand; no wonder they come to grief."
  },
  {
    id: 788,
    author: "Johann Wolfgang von Goethe",
    text:
      "Sometimes our fate resembles a fruit tree in winter. Who would think that those branches would turn green again and blossom, but we hope it, we know it."
  },
  {
    id: 789,
    author: "Johannes Gaertner",
    text:
      "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven."
  },
  {
    id: 790,
    author: "John Acosta",
    text: "You cannot have what you do not want."
  },
  {
    id: 791,
    author: "John Adams",
    text:
      "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish."
  },
  {
    id: 792,
    author: "John Astin",
    text:
      "There are things so deep and complex that only intuition can reach it in our stage of development as human beings."
  },
  {
    id: 793,
    author: "John Barrymore",
    text:
      "Happiness often sneaks in through a door you didn't know you left open."
  },
  {
    id: 794,
    author: "John Berry",
    text: "The bird of paradise alights only upon the hand that does not grasp."
  },
  {
    id: 795,
    author: "John Cleese",
    text:
      "It's easier to do trivial things that are urgent than it is to do important things that are not, like thinking. And it's also easier to do little things we know we can do than to start on big things that we’re not so sure about.",
    source: "https://www.goodreads.com/quotes/548576",
    tags: "urgent, important, trivial, thinking, "
  },
  {
    id: 796,
    author: "John De Paola",
    text:
      "Slow down and everything you are chasing will come around and catch you."
  },
  {
    id: 797,
    author: "John Dewey",
    text: "Without some goals and some efforts to reach it, no man can live."
  },
  {
    id: 798,
    author: "John Dewey",
    text:
      "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving."
  },
  {
    id: 799,
    author: "John Dewey",
    text: "Arriving at one point is the starting point to another."
  },
  {
    id: 800,
    author: "John Dewey",
    text:
      "Every great advance in science has issued from a new audacity of the imagination."
  },
  {
    id: 801,
    author: "John Dewey",
    text:
      "The self is not something ready-made, but something in continuous formation through choice of action."
  },
  {
    id: 802,
    author: "John Dryden",
    text: "Fortune befriends the bold."
  },
  {
    id: 803,
    author: "John Dryden",
    text: "A thing well said will be wit in all languages."
  },
  {
    id: 804,
    author: "John Eliot",
    text:
      "All the great performers I have worked with are fuelled by a personal dream."
  },
  {
    id: 805,
    author: "John F. Kennedy",
    text:
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."
  },
  {
    id: 806,
    author: "John Holmes",
    text:
      "Never tell a young person that anything cannot be done. God may have been waiting centuries for someone ignorant enough of the impossible to do that very thing."
  },
  {
    id: 807,
    author: "John Junor",
    text: "An ounce of emotion is equal to a ton of facts."
  },
  {
    id: 808,
    author: "John Kennedy",
    text:
      "Change is the law of life. And those who look only to the past or present are certain to miss the future."
  },
  {
    id: 809,
    author: "John Kennedy",
    text:
      "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions."
  },
  {
    id: 810,
    author: "John Lennon",
    text: "Love is the flower you've got to let grow."
  },
  {
    id: 811,
    author: "John Lennon",
    text: "Reality leaves a lot to the imagination."
  },
  {
    id: 812,
    author: "John Lennon",
    text: "Time you enjoy wasting, was not wasted."
  },
  {
    id: 813,
    author: "John Lennon",
    text: "Yeah we all shine on, like the moon, and the stars, and the sun."
  },
  {
    id: 814,
    author: "John Lennon",
    text:
      "You may say I'm a dreamer, but I'm not the only one, I hope someday you will join us, and the world will live as one."
  },
  {
    id: 815,
    author: "John Lennon",
    text: "Life is what happens while you are making other plans."
  },
  {
    id: 816,
    author: "John Lennon",
    text: "Time you enjoyed wasting was not wasted."
  },
  {
    id: 817,
    author: "John Lennon",
    text: "Life is what happens to you while you're busy making other plans."
  },
  {
    id: 818,
    author: "John Lennon",
    text:
      "You may say Im a dreamer, but Im not the only one, I hope someday you will join us, and the world will live as one."
  },
  {
    id: 819,
    author: "John Locke",
    text:
      "I have always thought the actions of men the best interpreters of their thoughts."
  },
  {
    id: 820,
    author: "John Lubbock",
    text: "A day of worry is more exhausting than a day of work."
  },
  {
    id: 821,
    author: "John Lubbock",
    text: "What we see depends mainly on what we look for."
  },
  {
    id: 822,
    author: "John Marshall",
    text:
      "To listen well is as powerful a means of communication and influence as to talk well."
  },
  {
    id: 823,
    author: "John Muir",
    text:
      "When one tugs at a single thing in nature, he finds it attached to the rest of the world."
  },
  {
    id: 824,
    author: "John Petit-Senn",
    text: "Not what we have but what we enjoy constitutes our abundance."
  },
  {
    id: 825,
    author: "John Pierrakos",
    text: "Life is movement-we breathe, we eat, we walk, we move!"
  },
  {
    id: 826,
    author: "John Powell",
    text: "The only real mistake is the one from which we learn nothing."
  },
  {
    id: 827,
    author: "John Quincy Adams",
    text:
      "If your actions inspire others to dream more, learn more, do more and become more, you are a leader."
  },
  {
    id: 828,
    author: "John Ruskin",
    text:
      "Quality is never an accident; it is always the result of intelligent effort."
  },
  {
    id: 829,
    author: "John Ruskin",
    text:
      "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather."
  },
  {
    id: 830,
    author: "John Simone",
    text:
      "If you're in a bad situation, don't worry it'll change. If you're in a good situation, don't worry it'll change."
  },
  {
    id: 831,
    author: "John Steinbeck",
    text:
      "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away."
  },
  {
    id: 832,
    author: "John Updike",
    text:
      "Dreams come true. Without that possibility, nature would not incite us to have them."
  },
  {
    id: 833,
    author: "John Wooden",
    text: "Never mistake activity for achievement."
  },
  {
    id: 834,
    author: "John Wooden",
    text:
      "You can't let praise or criticism get to you. It's a weakness to get caught up in either one."
  },
  {
    id: 835,
    author: "Jon Kabat-Zinn",
    text: "You can't stop the waves, but you can learn to surf."
  },
  {
    id: 836,
    author: "Jonas Salk",
    text: "Intuition will tell the thinking mind where to look next."
  },
  {
    id: 837,
    author: "Jonathan Kozol",
    text: "Pick battles big enough to matter, small enough to win."
  },
  {
    id: 838,
    author: "Jonathan Swift",
    text:
      "Discovery consists of seeing what everybody has seen and thinking what nobody else has thought."
  },
  {
    id: 839,
    author: "Joseph Campbell",
    text:
      "When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness."
  },
  {
    id: 840,
    author: "Joseph Campbell",
    text: "Your sacred space is where you can find yourself again and again."
  },
  {
    id: 841,
    author: "Joseph Chilton Pearce",
    text: "To live a creative life, we must lose our fear of being wrong.",
    source: "https://www.goodreads.com/quotes/30290",
    tags: "creativity, life, fear"
  },
  {
    id: 842,
    author: "Joseph Joubert",
    text: "He who has imagination without learning has wings but no feet."
  },
  {
    id: 843,
    author: "Joseph Roux",
    text:
      "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool."
  },
  {
    id: 844,
    author: "Joseph Stalin",
    text: "I believe in one thing only, the power of human will."
  },
  {
    id: 845,
    author: "Joyce Brothers",
    text:
      "Trust your hunches. They're usually based on facts filed away just below the conscious level."
  },
  {
    id: 846,
    author: "Jules Poincare",
    text:
      "It is through science that we prove, but through intuition that we discover."
  },
  {
    id: 847,
    author: "Julie Morgenstern",
    text:
      "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you."
  },
  {
    id: 848,
    author: "Julius Charles Hare",
    text:
      "Be what you are. This is the first step toward becoming better than you are."
  },
  {
    id: 849,
    author: "Kahlil Gibran",
    text:
      "A little knowledge that acts is worth infinitely more than much knowledge that is idle."
  },
  {
    id: 850,
    author: "Kahlil Gibran",
    text:
      "To understand the heart and mind of a person, look not at what he has already achieved, but at what he aspires to do."
  },
  {
    id: 851,
    author: "Kahlil Gibran",
    text: "Beauty is not in the face; beauty is a light in the heart."
  },
  {
    id: 852,
    author: "Kahlil Gibran",
    text: "We choose our joys and sorrows long before we experience them."
  },
  {
    id: 853,
    author: "Kahlil Gibran",
    text: "Be like the flower, turn your face to the sun."
  },
  {
    id: 854,
    author: "Karen Clark",
    text: "Life is change. Growth is optional. Choose wisely."
  },
  {
    id: 855,
    author: "Katherine Mansfield",
    text:
      "Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only for wallowing in."
  },
  {
    id: 856,
    author: "Kathleen Norris",
    text:
      "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable."
  },
  {
    id: 857,
    author: "Ken Robinson",
    text:
      "If you're not prepared to be wrong, you'll never come up with anything original.",
    source:
      "https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity",
    tags: "creative, creativity, original, originality, wrong, mistakes"
  },
  {
    id: 858,
    author: "Ken S. Keyes",
    text: "To be upset over what you don't have is to waste what you do have."
  },
  {
    id: 859,
    author: "Kenji Miyazawa",
    text: "We must embrace pain and burn it as fuel for our journey."
  },
  {
    id: 860,
    author: "Kenneth Patton",
    text: "We learn what we have said from those who listen to our speaking."
  },
  {
    id: 861,
    author: "Keshavan Nair",
    text:
      "With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity."
  },
  {
    id: 862,
    author: "Kin Hubbard",
    text: "You won't skid if you stay in a rut."
  },
  {
    id: 863,
    author: "Korean proverb",
    text: "If you kick a stone in anger, you'll hurt your own foot."
  },
  {
    id: 864,
    author: "Lama Yeshe",
    text: "Be gentle first with yourself if you wish to be gentle with others."
  },
  {
    id: 865,
    author: "Lama Yeshe",
    text:
      "It is never too late. Even if you are going to die tomorrow, keep yourself straight and clear and be a happy human being today."
  },
  {
    id: 866,
    author: "Lao Tzu",
    text: "Be the chief but never the lord."
  },
  {
    id: 867,
    author: "Lao Tzu",
    text: "To lead people walk behind them."
  },
  {
    id: 868,
    author: "Lao Tzu",
    text: "Doing nothing is better than being busy doing nothing."
  },
  {
    id: 869,
    author: "Lao Tzu",
    text: "Anticipate the difficult by managing the easy."
  },
  {
    id: 870,
    author: "Lao Tzu",
    text: "He who talks more is sooner exhausted."
  },
  {
    id: 871,
    author: "Lao Tzu",
    text: "He who is contented is rich."
  },
  {
    id: 872,
    author: "Lao Tzu",
    text: "The journey of a thousand miles begins with one step."
  },
  {
    id: 873,
    author: "Lao Tzu",
    text: "An ant on the move does more than a dozing ox"
  },
  {
    id: 874,
    author: "Lao Tzu",
    text:
      "If you correct your mind, the rest of your life will fall into place."
  },
  {
    id: 875,
    author: "Lao Tzu",
    text:
      "If you would take, you must first give, this is the beginning of intelligence."
  },
  {
    id: 876,
    author: "Lao Tzu",
    text:
      "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own."
  },
  {
    id: 877,
    author: "Lao Tzu",
    text:
      "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven."
  },
  {
    id: 878,
    author: "Lao Tzu",
    text:
      "At the center of your being you have the answer; you know who you are and you know what you want."
  },
  {
    id: 879,
    author: "Lao Tzu",
    text:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you."
  },
  {
    id: 880,
    author: "Lao Tzu",
    text:
      "All difficult things have their origin in that which is easy, and great things in that which is small."
  },
  {
    id: 881,
    author: "Lao Tzu",
    text:
      "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures."
  },
  {
    id: 882,
    author: "Lao Tzu",
    text:
      "When you realize there is nothing lacking, the whole world belongs to you."
  },
  {
    id: 883,
    author: "Lao Tzu",
    text:
      "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning."
  },
  {
    id: 884,
    author: "Lao Tzu",
    text: "He who conquers others is strong; He who conquers himself is mighty."
  },
  {
    id: 885,
    author: "Lao Tzu",
    text: "He who obtains has little. He who scatters has much."
  },
  {
    id: 886,
    author: "Lao Tzu",
    text: "Silence is a source of great strength."
  },
  {
    id: 887,
    author: "Lao Tzu",
    text:
      "If you do not change direction, you may end up where you are heading."
  },
  {
    id: 888,
    author: "Lao Tzu",
    text: "From wonder into wonder existence opens."
  },
  {
    id: 889,
    author: "Lao Tzu",
    text: "He who knows himself is enlightened."
  },
  {
    id: 890,
    author: "Lao Tzu",
    text: "Great acts are made up of small deeds."
  },
  {
    id: 891,
    author: "Lao Tzu",
    text:
      "Nothing is softer or more flexible than water, yet nothing can resist it."
  },
  {
    id: 892,
    author: "Lao Tzu",
    text: "When I let go of what I am, I become what I might be."
  },
  {
    id: 893,
    author: "Lao Tzu",
    text:
      "He who controls others may be powerful, but he who has mastered himself is mightier still."
  },
  {
    id: 894,
    author: "Lao Tzu",
    text: "To see things in the seed, that is genius."
  },
  {
    id: 895,
    author: "Lao Tzu",
    text:
      "The key to growth is the introduction of higher dimensions of consciousness into our awareness."
  },
  {
    id: 896,
    author: "Lao Tzu",
    text: "He who knows, does not speak. He who speaks, does not know."
  },
  {
    id: 897,
    author: "Lao Tzu",
    text:
      "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love."
  },
  {
    id: 898,
    author: "Lao Tzu",
    text:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."
  },
  {
    id: 899,
    author: "Lao Tzu",
    text: "He who knows others is wise. He who knows himself is enlightened."
  },
  {
    id: 900,
    author: "Lao Tzu",
    text:
      "One who is too insistent on his own views, finds few to agree with him."
  },
  {
    id: 901,
    author: "Lao Tzu",
    text:
      "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime."
  },
  {
    id: 902,
    author: "Lao Tzu",
    text: "He who knows that enough is enough will always have enough."
  },
  {
    id: 903,
    author: "Lao Tzu",
    text: "Music in the soul can be heard by the universe."
  },
  {
    id: 904,
    author: "Lao-Tzu",
    text:
      "All difficult things have their origin in that which is easy, and great things in that which is small."
  },
  {
    id: 905,
    author: "Laozi",
    text:
      "When you are content to be simply yourself and don't compare or compete, everybody will respect you."
  },
  {
    id: 906,
    author: "Laozi",
    text:
      "The power of intuitive understanding will protect you from harm until the end of your days."
  },
  {
    id: 907,
    author: "Larry Elder",
    text: "A goal without a plan is just a wish."
  },
  {
    id: 908,
    author: "Laura Teresa Marquez",
    text:
      "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them."
  },
  {
    id: 909,
    author: "Lauren Bacall",
    text: "Imagination is the highest kite one can fly."
  },
  {
    id: 910,
    author: "Lauren Raffo",
    text: "Sometimes the biggest act of courage is a small one."
  },
  {
    id: 911,
    author: "Laurence J. Peter",
    text:
      "There are two kinds of failures: those who thought and never did, and those who did and never thought."
  },
  {
    id: 912,
    author: "Lawrence Peter",
    text:
      "If you don't know where you are going, you will probably end up somewhere else."
  },
  {
    id: 913,
    author: "Lazurus Long",
    text: "Great is the art of beginning, but greater is the art of ending."
  },
  {
    id: 914,
    author: "Lee Mildon",
    text: "People seldom notice old clothes if you wear a big smile."
  },
  {
    id: 915,
    author: "Lee Womack",
    text:
      "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances."
  },
  {
    id: 916,
    author: "Lena Horne",
    text: "Always be smarter than the people who hire you."
  },
  {
    id: 917,
    author: "Leo Aikman",
    text:
      "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night."
  },
  {
    id: 918,
    author: "Leo Buscaglia",
    text: "Never idealize others. They will never live up to your expectations."
  },
  {
    id: 919,
    author: "Leo F. Buscaglia",
    text: "Don't smother each other. No one can grow in the shade."
  },
  {
    id: 920,
    author: "Leo Tolstoy",
    text: "The two most powerful warriors are patience and time."
  },
  {
    id: 921,
    author: "Leo Tolstoy",
    text:
      "Everyone thinks of changing the world, but no one thinks of changing himself."
  },
  {
    id: 922,
    author: "Leo Tolstoy",
    text: "We lost because we told ourselves we lost."
  },
  {
    id: 923,
    author: "Leon Blum",
    text:
      "The free man is he who does not fear to go to the end of his thought."
  },
  {
    id: 924,
    author: "Leonardo Ruiz",
    text:
      "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try."
  },
  {
    id: 925,
    author: "Leonardo da Vinci",
    text: "Who sows virtue reaps honour."
  },
  {
    id: 926,
    author: "Leonardo da Vinci",
    text: "All our knowledge has its origins in our perceptions."
  },
  {
    id: 927,
    author: "Leonardo da Vinci",
    text: "Nothing strengthens authority so much as silence."
  },
  {
    id: 928,
    author: "Leonardo da Vinci",
    text:
      "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind."
  },
  {
    id: 929,
    author: "Leonardo da Vinci",
    text: "He who is fixed to a star does not change his mind."
  },
  {
    id: 930,
    author: "Leonardo da Vinci",
    text: "Time stays long enough for anyone who will use it."
  },
  {
    id: 931,
    author: "Leonardo da Vinci",
    text:
      "In rivers, the water that you touch is the last of what has passed and the first of that which comes; so with present time."
  },
  {
    id: 932,
    author: "Leonardo da Vinci",
    text:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
  },
  {
    id: 933,
    author: "Les Brown",
    text: "Shoot for the moon. Even if you miss, you'll land among the stars."
  },
  {
    id: 934,
    author: "Lewis B. Smedes",
    text:
      "To forgive is to set a prisoner free and realize that prisoner was you."
  },
  {
    id: 935,
    author: "Lewis Cass",
    text: "People may doubt what you say, but they will believe what you do."
  },
  {
    id: 936,
    author: "Liberace",
    text: "Nobody will believe in you unless you believe in yourself."
  },
  {
    id: 937,
    author: "Lily Tomlin",
    text:
      "I always wanted to be somebody, but I should have been more specific."
  },
  {
    id: 938,
    author: "Lin-yutang",
    text:
      "I have done my best: that is about all the philosophy of living one needs."
  },
  {
    id: 939,
    author: "Linda Hogan",
    text:
      "There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story."
  },
  {
    id: 940,
    author: "Lisa Alther",
    text:
      "Thats the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along."
  },
  {
    id: 941,
    author: "Lloyd Jones",
    text:
      "Those who try to do something and fail are infinitely better than those who try nothing and succeed."
  },
  {
    id: 942,
    author: "Lord Herbert",
    text: "The shortest answer is doing."
  },
  {
    id: 943,
    author: "Lou Holtz",
    text:
      "You were not born a winner, and you were not born a loser. You are what you make yourself be."
  },
  {
    id: 944,
    author: "Lou Holtz",
    text:
      "Ability is what you're capable of doing. Motivation determines what you do.Attitude determines how well you do it."
  },
  {
    id: 945,
    author: "Lou Holtz",
    text: "I can't believe that God put us on this earth to be ordinary."
  },
  {
    id: 946,
    author: "Louis Pasteur",
    text: "Chance favors the prepared mind.",
    tags: "creativity, prepared, preparedness",
    source: "https://www.goodreads.com/quotes/9178"
  },
  {
    id: 947,
    author: "Louis Pasteur",
    text:
      "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity."
  },
  {
    id: 948,
    author: "Louisa Alcott",
    text: "I'm not afraid of storms, for I'm learning how to sail my ship."
  },
  {
    id: 949,
    author: "Louisa Alcott",
    text: "I'm not afraid of storms, for Im learning how to sail my ship."
  },
  {
    id: 950,
    author: "Louise Hay",
    text:
      "The thoughts we choose to think are the tools we use to paint the canvas of our lives."
  },
  {
    id: 951,
    author: "Lucille Ball",
    text:
      "Id rather regret the things that I have done than the things that I have not done."
  },
  {
    id: 952,
    author: "Lucille Ball",
    text:
      "I have an everyday religion that works for me. Love yourself first, and everything else falls into line."
  },
  {
    id: 953,
    author: "Luisa Sigea",
    text: "Blaze with the fire that is never extinguished."
  },
  {
    id: 954,
    author: "Lululemon",
    text:
      "Your outlook on life is a direct reflection on how much you like yourself."
  },
  {
    id: 955,
    author: "M. Scott Peck",
    text:
      "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it."
  },
  {
    id: 956,
    author: "Mabel Newcomber",
    text:
      "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement."
  },
  {
    id: 957,
    author: "Madame de Stael",
    text: "Society develops wit, but its contemplation alone forms genius."
  },
  {
    id: 958,
    author: "Madame de Stael",
    text:
      "Wit lies in recognizing the resemblance among things which differ and the difference between things which are alike."
  },
  {
    id: 959,
    author: "Mahatma Gandhi",
    text: "We must become the change we want to see."
  },
  {
    id: 960,
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    source: "https://www.goodreads.com/quotes/16418",
    tags: "action, change, world, present, future, today"
  },
  {
    id: 961,
    author: "Mahatma Gandhi",
    text:
      "Live as if you were to die tomorrow. Learn as if you were to live forever."
  },
  {
    id: 962,
    author: "Mahatma Gandhi",
    text:
      "Strength does not come from physical capacity. It comes from an indomitable will."
  },
  {
    id: 963,
    author: "Mahatma Gandhi",
    text:
      "It is the quality of our work which will please God, not the quantity."
  },
  {
    id: 964,
    author: "Mahatma Gandhi",
    text:
      "Our greatness lies not so much in being able to remake the world as being able to remake ourselves."
  },
  {
    id: 965,
    author: "Mahummad Ali",
    text:
      "To be able to give away riches is mandatory if you wish to possess them. This is the only way that you will be truly rich."
  },
  {
    id: 966,
    text:
      "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.",
    author: "Malcolm X",
    source: "https://www.goodreads.com/quotes/788",
    tags: "education, future, tomorrow, today"
  },
  {
    id: 967,
    author: "Mal Pancoast",
    text:
      "The odds of hitting your target go up dramatically when you aim at it."
  },
  {
    id: 968,
    author: "Man Ray",
    text:
      "It has never been my object to record my dreams, just to realize them."
  },
  {
    id: 969,
    author: "Manuel Puig",
    text: "I allow my intuition to lead my path."
  },
  {
    id: 970,
    author: "Maori proverb",
    text: "Turn your face toward the sun and the shadows will fall behind you."
  },
  {
    id: 971,
    author: "Marcel Proust",
    text:
      "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom."
  },
  {
    id: 972,
    author: "Marcus Aurelius",
    text: "Each day provides its own gifts."
  },
  {
    id: 973,
    author: "Marcus Aurelius",
    text: "Loss is nothing else but change,and change is Natures delight."
  },
  {
    id: 974,
    author: "Marcus Aurelius",
    text:
      "Everything that happens happens as it should, and if you observe carefully, you will find this to be so."
  },
  {
    id: 975,
    author: "Marcus Aurelius",
    text:
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking."
  },
  {
    id: 976,
    author: "Marcus Aurelius",
    text: "If it is not right do not do it; if it is not true do not say it."
  },
  {
    id: 977,
    author: "Marcus Aurelius",
    text:
      "You have power over your mind not outside events. Realize this, and you will find strength."
  },
  {
    id: 978,
    author: "Marcus Aurelius",
    text:
      "He who lives in harmony with himself lives in harmony with the universe."
  },
  {
    id: 979,
    author: "Marcus Aurelius",
    text:
      "The universe is transformation; our life is what our thoughts make it."
  },
  {
    id: 980,
    author: "Marcus Aurelius",
    text:
      "Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too."
  },
  {
    id: 981,
    author: "Marcus Aurelius",
    text:
      "When you arise in the morning, think of what a precious privilege it is to be alive to breathe, to think, to enjoy, to love."
  },
  {
    id: 982,
    author: "Marcus Aurelius",
    text:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart."
  },
  {
    id: 983,
    author: "Marcus Aurelius",
    text:
      "Everything that exists is in a manner the seed of that which will be."
  },
  {
    id: 984,
    author: "Marcus Aurelius",
    text:
      "He who lives in harmony with himself lives in harmony with the world."
  },
  {
    id: 985,
    author: "Marcus Aurelius",
    text: "Waste no more time arguing about what a good man should be. Be one."
  },
  {
    id: 986,
    author: "Marcus Aurelius",
    text:
      "There is nothing happens to any person but what was in his power to go through with."
  },
  {
    id: 987,
    author: "Marcus Aurelius",
    text:
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."
  },
  {
    id: 988,
    author: "Marcus Aurelius",
    text:
      "You have power over your mind, not outside events. Realize this, and you will find strength."
  },
  {
    id: 989,
    author: "Marcus Aurelius",
    text:
      "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love."
  },
  {
    id: 990,
    author: "Margaret Bonnano",
    text:
      "It is only possible to live happily ever after on a day to day basis."
  },
  {
    id: 991,
    author: "Margaret Cousins",
    text:
      "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary."
  },
  {
    id: 992,
    author: "Margaret Fuller",
    text: "If you have knowledge, let others light their candles in it."
  },
  {
    id: 993,
    author: "Margaret Laurence",
    text:
      "Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world."
  },
  {
    id: 994,
    author: "Margaret Mead",
    text:
      "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has."
  },
  {
    id: 995,
    author: "Margaret Runbeck",
    text:
      "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts."
  },
  {
    id: 996,
    author: "Margaret Sangster",
    text: "Self-complacency is fatal to progress."
  },
  {
    id: 997,
    author: "Margaret Smith",
    text:
      "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character."
  },
  {
    id: 998,
    author: "Margaret Wheatley",
    text:
      "We know from science that nothing in the universe exists as an isolated or independent entity."
  },
  {
    id: 999,
    author: "Marian Edelman",
    text:
      "You're not obligated to win. You're obligated to keep trying to do the best you can every day."
  },
  {
    id: 1000,
    author: "Marian Edelman",
    text: "You really can change the world if you care enough."
  },
  {
    id: 1001,
    author: "Marianne Williamson",
    text:
      "Joy is what happens to us when we allow ourselves to recognize how good things really are."
  },
  {
    id: 1002,
    author: "Marie Curie",
    text: "I never see what has been done; I only see what remains to be done."
  },
  {
    id: 1003,
    author: "Marie Curie",
    text: "Nothing in life is to be feared. It is only to be understood."
  },
  {
    id: 1004,
    author: "Marie Curie",
    text:
      "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
  },
  {
    id: 1005,
    author: "Marie Curie",
    text: "Be less curious about people and more curious about ideas."
  },
  {
    id: 1006,
    author: "Mark Twain",
    text:
      "A thing long expected takes the form of the unexpected when at last it comes."
  },
  {
    id: 1007,
    author: "Mark Twain",
    text:
      "Happiness is a Swedish sunset it is there for all, but most of us look the other way and lose it."
  },
  {
    id: 1008,
    author: "Mark Twain",
    text:
      "Always tell the truth. That way, you don't have to remember what you said."
  },
  {
    id: 1009,
    author: "Mark Twain",
    text: "When in doubt, tell the truth."
  },
  {
    id: 1010,
    author: "Mark Twain",
    text: "Whoever is happy will make others happy, too."
  },
  {
    id: 1011,
    author: "Mark Twain",
    text:
      "The exercise of an extraordinary gift is the supremest pleasure in life."
  },
  {
    id: 1012,
    author: "Mark Twain",
    text:
      "Kindness is the language which the deaf can hear and the blind can see."
  },
  {
    id: 1013,
    author: "Mark Twain",
    text:
      "There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded."
  },
  {
    id: 1014,
    author: "Mark Twain",
    text: "Wrinkles should merely indicate where smiles have been."
  },
  {
    id: 1015,
    author: "Mark Twain",
    text:
      "To get the full value of joy you must have someone to divide it with."
  },
  {
    id: 1016,
    author: "Mark Twain",
    text:
      "Happiness is a sunset - it is there for all, but most of us look the other way and lose it."
  },
  {
    id: 1017,
    author: "Marquis Vauvenargues",
    text:
      "Wicked people are always surprised to find ability in those that are good."
  },
  {
    id: 1018,
    author: "Marsha Petrie Sue",
    text: "Stay away from what might have been and look at what will be."
  },
  {
    id: 1019,
    author: "Martha Washington",
    text:
      "The greatest part of our happiness depends on our dispositions, not our circumstances."
  },
  {
    id: 1020,
    author: "Martin Fischer",
    text:
      "Knowledge is a process of piling up facts; wisdom lies in their simplification."
  },
  {
    id: 1021,
    author: "Martin Luther King, Jr.",
    text: "Love is the only force capable of transforming an enemy into friend."
  },
  {
    id: 1022,
    author: "Mary Almanac",
    text: "Who we are never changes. Who we think we are does."
  },
  {
    id: 1023,
    author: "Mary Bethune",
    text: "Without faith, nothing is possible. With it, nothing is impossible."
  },
  {
    id: 1024,
    author: "Mary Kay Ash",
    text:
      "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway."
  },
  {
    id: 1025,
    author: "Mary Kay Ash",
    text:
      "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel."
  },
  {
    id: 1026,
    author: "Mary Kay Ash",
    text:
      "For every failure, there's an alternative course of action. You just have to find it. When you come to a roadblock, take a detour."
  },
  {
    id: 1027,
    author: "Mary Morrissey",
    text:
      "You block your dream when you allow your fear to grow bigger than your faith."
  },
  {
    id: 1028,
    author: "Mary Parrish",
    text:
      "Love vanquishes time. To lovers, a moment can be eternity, eternity can be the tick of a clock."
  },
  {
    id: 1029,
    author: "Mary Pickford",
    text:
      "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose."
  },
  {
    id: 1030,
    author: "Mary Wollstonecraft",
    text: "The beginning is always today."
  },
  {
    id: 1031,
    author: "Matt Zotti",
    text:
      "Live through feeling and you will live through love. For feeling is the language of the soul, and feeling is truth."
  },
  {
    id: 1032,
    author: "Maureen Dowd",
    text:
      "The minute you settle for less than you deserve, you get even less than you settled for."
  },
  {
    id: 1033,
    author: "Max Planck",
    text:
      "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him."
  },
  {
    id: 1034,
    author: "May Sarton",
    text:
      "A garden is always a series of losses set against a few triumphs, like life itself."
  },
  {
    id: 1035,
    author: "Maya Angelou",
    text: "I believe that every person is born with talent."
  },
  {
    id: 1036,
    author: "Maya Angelou",
    text:
      "If you don't like something, change it. If you can't change it, change your attitude."
  },
  {
    id: 1037,
    author: "Maya Angelou",
    text:
      "If one is lucky, a solitary fantasy can totally transform one million realities."
  },
  {
    id: 1038,
    author: "Maya Angelou",
    text: "When you learn, teach. When you get, give."
  },
  {
    id: 1039,
    author: "Maya Angelou",
    text: "All great achievements require time."
  },
  {
    id: 1040,
    author: "Maya Angelou",
    text: "We may encounter many defeats but we must not be defeated."
  },
  {
    id: 1041,
    author: "Maya Angelou",
    text:
      "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible."
  },
  {
    id: 1042,
    author: "Maya Angelou",
    text: "Nothing will work unless you do."
  },
  {
    id: 1043,
    author: "Maya Angelou",
    text: "You can't use up creativity. The more you use, the more you have.",
    source: "https://www.goodreads.com/quotes/153929",
    tags: "curiosity, limitless"
  },
  {
    id: 1044,
    author: "Maya Lin",
    text: "To fly, we have to have resistance."
  },
  {
    id: 1045,
    author: "Melody Beattie",
    text:
      "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow."
  },
  {
    id: 1046,
    author: "Michael Burke",
    text:
      "Good instincts usually tell you what to do long before your head has figured it out."
  },
  {
    id: 1047,
    author: "Michael Jordan",
    text:
      "If you accept the expectations of others, especially negative ones, then you never will change the outcome."
  },
  {
    id: 1048,
    author: "Michael Korda",
    text: "To succeed, we must first believe that we can."
  },
  {
    id: 1049,
    author: "Michael Vance",
    text:
      "Life is not measured by the breaths you take, but by its breathtaking moments."
  },
  {
    id: 1050,
    author: "Michel de Montaigne",
    text:
      "I care not so much what I am to others as what I am to myself. I will be rich by myself, and not by borrowing."
  },
  {
    id: 1051,
    author: "Michelangelo",
    text: "Faith in oneself is the best and safest course."
  },
  {
    id: 1052,
    author: "Michelangelo",
    text: "There is no greater harm than that of time wasted."
  },
  {
    id: 1053,
    author: "Michelangelo",
    text:
      "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."
  },
  {
    id: 1054,
    author: "Michelangelo",
    source: "https://www.brainyquote.com/quotes/michelangelo_183580",
    tags: "time, waste",
    text: "There is no greater harm than that of time wasted."
  },
  {
    id: 1055,
    author: "Mike Ditka",
    text: "You're never a loser until you quit trying."
  },
  {
    id: 1056,
    author: "Mohandas Gandhi",
    text:
      "Happiness is when what you think, what you say, and what you do are in harmony."
  },
  {
    id: 1057,
    author: "Mohandas Gandhi",
    text:
      "The weak can never forgive. Forgiveness is the attribute of the strong."
  },
  {
    id: 1058,
    author: "Mohandas Gandhi",
    text: "Freedom is not worth having if it does not connote freedom to err."
  },
  {
    id: 1059,
    author: "Mohandas Gandhi",
    text:
      "Forgiveness is choosing to love. It is the first skill of self-giving love."
  },
  {
    id: 1060,
    author: "Mohandas Gandhi",
    text:
      "The difference between what we do and what we are capable of doing would suffice to solve most of the worlds problems."
  },
  {
    id: 1061,
    author: "Mohandas Gandhi",
    text: "Be the change that you want to see in the world."
  },
  {
    id: 1062,
    author: "Moliere",
    text:
      "It is not only for what we do that we are held responsible, but also for what we do not do."
  },
  {
    id: 1063,
    author: "Moncure Conway",
    text: "The best thing in every noble dream is the dreamer..."
  },
  {
    id: 1064,
    author: "Morris West",
    text:
      "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine."
  },
  {
    id: 1065,
    author: "Mortimer Adler",
    text:
      "The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live."
  },
  {
    id: 1066,
    author: "Mother Teresa",
    text:
      "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing."
  },
  {
    id: 1067,
    author: "Mother Teresa",
    text:
      "Be faithful in small things because it is in them that your strength lies."
  },
  {
    id: 1068,
    author: "Mother Teresa",
    text:
      "Let us always meet each other with smile, for the smile is the beginning of love."
  },
  {
    id: 1069,
    author: "Mother Teresa",
    text: "We shall never know all the good that a simple smile can do."
  },
  {
    id: 1070,
    author: "Mother Teresa",
    text: "If you can't feed a hundred people, then feed just one."
  },
  {
    id: 1071,
    author: "Mother Teresa",
    text: "Peace begins with a smile."
  },
  {
    id: 1072,
    author: "Mother Teresa",
    text:
      "Kind words can be short and easy to speak but their echoes are truly endless."
  },
  {
    id: 1073,
    author: "Mother Teresa",
    text: "We can do no great things, only small things with great love."
  },
  {
    id: 1074,
    author: "Mother Teresa",
    text: "Do not wait for leaders; do it alone, person to person."
  },
  {
    id: 1075,
    author: "Mother Teresa",
    text:
      "Kind words can be short and easy to speak, but their echoes are truly endless."
  },
  {
    id: 1076,
    author: "Muriel Rukeyser",
    text: "The universe is made of stories, not atoms."
  },
  {
    id: 1077,
    author: "Murray Gell-Mann",
    text: "Think how hard physics would be if particles could think."
  },
  {
    id: 1078,
    author: "Naguib Mahfouz",
    text:
      "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions."
  },
  {
    id: 1079,
    author: "Naomi Williams",
    text: "It is impossible to feel grateful and depressed in the same moment."
  },
  {
    id: 1080,
    author: "Napoleon Bonaparte",
    text: "Victory belongs to the most persevering."
  },
  {
    id: 1081,
    author: "Napoleon Bonaparte",
    text: "The truest wisdom is a resolute determination."
  },
  {
    id: 1082,
    author: "Napoleon Bonaparte",
    text: "Imagination rules the world."
  },
  {
    id: 1083,
    author: "Napoleon Bonaparte",
    text:
      "Take time to deliberate, but when the time for action has arrived, stop thinking and go in."
  },
  {
    id: 1084,
    author: "Napoleon Bonaparte",
    text:
      "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god."
  },
  {
    id: 1085,
    author: "Napoleon Bonaparte",
    text: "He who fears being conquered is sure of defeat."
  },
  {
    id: 1086,
    author: "Napoleon Bonaparte",
    text: "If you want a thing done well, do it yourself."
  },
  {
    id: 1087,
    author: "Napoleon Bonaparte",
    text: "The best cure for the body is a quiet mind."
  },
  {
    id: 1088,
    author: "Napoleon Hill",
    text: "Ideas are the beginning points of all fortunes."
  },
  {
    id: 1089,
    author: "Napoleon Hill",
    text: "Don't wait. The time will never be just right."
  },
  {
    id: 1090,
    author: "Napoleon Hill",
    text: "You give before you get."
  },
  {
    id: 1091,
    author: "Napoleon Hill",
    text: "A goal is a dream with a deadline."
  },
  {
    id: 1092,
    author: "Napoleon Hill",
    text: "You can do it if you believe you can!"
  },
  {
    id: 1093,
    author: "Napoleon Hill",
    text: "No alibi will save you from accepting the responsibility."
  },
  {
    id: 1094,
    author: "Napoleon Hill",
    text: "Happiness is found in doing, not merely possessing."
  },
  {
    id: 1095,
    author: "Napoleon Hill",
    text: "Fears are nothing more than a state of mind."
  },
  {
    id: 1096,
    author: "Napoleon Hill",
    text:
      "Most great people have attained their greatest success just one step beyond their greatest failure."
  },
  {
    id: 1097,
    author: "Napoleon Hill",
    text:
      "When your desires are strong enough you will appear to possess superhuman powers to achieve."
  },
  {
    id: 1098,
    author: "Napoleon Hill",
    text: "No man can succeed in a line of endeavor which he does not like."
  },
  {
    id: 1099,
    author: "Napoleon Hill",
    text: "If you cannot do great things, do small things in a great way."
  },
  {
    id: 1100,
    author: "Napoleon Hill",
    text:
      "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements."
  },
  {
    id: 1101,
    author: "Napoleon Hill",
    text:
      "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements."
  },
  {
    id: 1102,
    author: "Napoleon Hill",
    text:
      "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times."
  },
  {
    id: 1103,
    author: "Napoleon Hill",
    text:
      "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit."
  },
  {
    id: 1104,
    author: "Napoleon Hill",
    text:
      "All achievements, all earned riches, have their beginning in an idea."
  },
  {
    id: 1105,
    author: "Napoleon Hill",
    text:
      "You might well remember that nothing can bring you success but yourself."
  },
  {
    id: 1106,
    author: "Napoleon Hill",
    text: "Your big opportunity may be right where you are now."
  },
  {
    id: 1107,
    author: "Napoleon Hill",
    text:
      "Opportunity often comes disguised in the form of misfortune, or temporary defeat."
  },
  {
    id: 1108,
    author: "Napoleon Hill",
    text: "The ladder of success is never crowded at the top."
  },
  {
    id: 1109,
    author: "Napoleon Hill",
    text:
      "The world has the habit of making room for the man whose actions show that he knows where he is going."
  },
  {
    id: 1110,
    author: "Napoleon Hill",
    text:
      "First comes thought; then organization of that thought, into ideas and plans; then transformation of those plans into reality. The beginning, as you will observe, is in your imagination."
  },
  {
    id: 1111,
    author: "Napoleon Hill",
    text: "There are no limitations to the mind except those we acknowledge."
  },
  {
    id: 1112,
    author: "Napoleon Hill",
    text:
      "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it."
  },
  {
    id: 1113,
    author: "Nathaniel Hawthorne",
    text:
      "Happiness is as a butterfly which, when pursued, is always beyond our grasp, but which if you will sit down quietly, may alight upon you."
  },
  {
    id: 1114,
    author: "Nelson Mandela",
    text:
      "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered."
  },
  {
    id: 1115,
    author: "Nelson Mandela",
    text:
      "As we are liberated from our own fear, our presence automatically liberates others."
  },
  {
    id: 1116,
    author: "Nelson Mandela",
    text:
      "And as we let our own light shine, we unconsciously give other people permission to do the same."
  },
  {
    id: 1117,
    author: "Niccolo Machiavelli",
    text:
      "Men in general judge more from appearances than from reality. All men have eyes, but few have the gift of penetration."
  },
  {
    id: 1118,
    author: "Niels Bohr",
    text:
      "How wonderful that we have met with a paradox. Now we have some hope of making progress."
  },
  {
    id: 1119,
    author: "Nietzsche",
    text: "You need chaos in your soul to give birth to a dancing star."
  },
  {
    id: 1120,
    author: "Nikola Tesla",
    text:
      "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more."
  },
  {
    id: 1121,
    author: "Nikola Tesla",
    text:
      "Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine."
  },
  {
    id: 1122,
    author: "Nikos Kazantzakis",
    text:
      "By believing passionately in something that does not yet exist, we create it."
  },
  {
    id: 1123,
    author: "Nora Roberts",
    text:
      "If you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place."
  },
  {
    id: 1124,
    author: "Norman Cousins",
    text:
      "Never deny a diagnosis, but do deny the negative verdict that may go with it."
  },
  {
    id: 1125,
    author: "Norman Peale",
    text:
      "If you want things to be different, perhaps the answer is to become different yourself."
  },
  {
    id: 1126,
    author: "Norman Schwarzkopf",
    text:
      "The truth of the matter is that you always know the right thing to do. The hard part is doing it."
  },
  {
    id: 1127,
    author: "Og Mandino",
    text:
      "Each misfortune you encounter will carry in it the seed of tomorrows good luck."
  },
  {
    id: 1128,
    author: "Og Mandino",
    text:
      "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars."
  },
  {
    id: 1129,
    author: "Og Mandino",
    text:
      "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted."
  },
  {
    id: 1130,
    author: "Og Mandino",
    text: "Always do your best. What you plant now, you will harvest later."
  },
  {
    id: 1131,
    author: "Og Mandino",
    text: "Always seek out the seed of triumph in every adversity."
  },
  {
    id: 1132,
    author: "Og Mandino",
    text:
      "Failure will never overtake me if my determination to succeed is strong enough."
  },
  {
    id: 1133,
    author: "Old German proverb",
    text:
      "You have to take it as it happens, but you should try to make it happen the way you want to take it."
  },
  {
    id: 1134,
    author: "Oliver Holmes",
    text:
      "What lies behind us and what lies before us are small matters compared to what lies within us."
  },
  {
    id: 1135,
    author: "Oliver Holmes",
    text:
      "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve."
  },
  {
    id: 1136,
    author: "Oliver Holmes",
    text:
      "We do not quit playing because we grow old, we grow old because we quit playing."
  },
  {
    id: 1137,
    author: "Oliver Holmes",
    text: "Love is the master key that opens the gates of happiness."
  },
  {
    id: 1138,
    author: "Oprah Winfrey",
    text: "Follow your instincts. That is where true wisdom manifests itself."
  },
  {
    id: 1139,
    author: "Oprah Winfrey",
    text:
      "I don't believe in failure. It is not failure if you enjoyed the process."
  },
  {
    id: 1140,
    author: "Oprah Winfrey",
    text:
      "If you want your life to be more rewarding, you have to change the way you think."
  },
  {
    id: 1141,
    author: "Oprah Winfrey",
    text:
      "The biggest adventure you can ever take is to live the life of your dreams."
  },
  {
    id: 1142,
    author: "Oprah Winfrey",
    text:
      "Although there may be tragedy in your life, there's always a possibility to triumph. It doesn't matter who you are, where you come from. The ability to triumph begins with you. Always."
  },
  {
    id: 1143,
    author: "Oprah Winfrey",
    text:
      "With every experience, you alone are painting your own canvas, thought by thought, choice by choice."
  },
  {
    id: 1144,
    author: "Oprah Winfrey",
    text:
      "I don't believe in failure. It's not failure if you enjoyed the process."
  },
  {
    id: 1145,
    author: "Oprah Winfrey",
    text:
      "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down."
  },
  {
    id: 1146,
    author: "Oprah Winfrey",
    text: "Don't settle for a relationship that won't let you be yourself."
  },
  {
    id: 1147,
    author: "Orison Marden",
    text:
      "The Creator has not given you a longing to do that which you have no ability to do."
  },
  {
    id: 1148,
    author: "Orison Marden",
    text:
      "Most of our obstacles would melt away if, instead of cowering before them, we should make up our minds to walk boldly through them."
  },
  {
    id: 1149,
    author: "Orison Marden",
    text: "All men who have achieved great things have been great dreamers."
  },
  {
    id: 1150,
    author: "Oscar Wilde",
    text: "Experience is simply the name we give our mistakes."
  },
  {
    id: 1151,
    author: "Oscar Wilde",
    text:
      "The only thing to do with good advice is to pass it on. It is never of any use to oneself."
  },
  {
    id: 1152,
    author: "Oscar Wilde",
    text:
      "The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for."
  },
  {
    id: 1153,
    author: "Oscar Wilde",
    text:
      "The smallest act of kindness is worth more than the grandest intention."
  },
  {
    id: 1154,
    author: "Oscar Wilde",
    text: "Anybody can make history. Only a great man can write it."
  },
  {
    id: 1155,
    author: "Oscar Wilde",
    text: "Be yourself; everyone else is already taken."
  },
  {
    id: 1156,
    author: "Ovid",
    text: "The cause is hidden. The effect is visible to all."
  },
  {
    id: 1157,
    author: "Ovid",
    text: "All things change; nothing perishes."
  },
  {
    id: 1158,
    author: "Ovid",
    text:
      "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish."
  },
  {
    id: 1159,
    author: "Ovid",
    text:
      "Let your hook always be cast; in the pool where you least expect it, there will be a fish."
  },
  {
    id: 1160,
    author: "Ovid",
    text: "Take rest; a field that has rested gives a bountiful crop."
  },
  {
    id: 1161,
    author: "Paavo Nurmi",
    text:
      "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind."
  },
  {
    id: 1162,
    author: "Pablo Picasso",
    text: "Everything you can imagine is real."
  },
  {
    id: 1163,
    author: "Pablo Picasso",
    text: "Inspiration exists, but it has to find us working."
  },
  {
    id: 1164,
    author: "Pablo Picasso",
    text:
      "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law."
  },
  {
    id: 1165,
    author: "Pablo Picasso",
    text:
      "I am always doing that which I cannot do, in order that I may learn how to do it."
  },
  {
    id: 1166,
    author: "Pablo Picasso",
    text:
      "I am always doing that which I can not do, in order that I may learn how to do it."
  },
  {
    id: 1167,
    author: "Pablo Picasso",
    text: "Action is the foundational key to all success."
  },
  {
    id: 1168,
    author: "Pablo Picasso",
    text: "I begin with an idea and then it becomes something else."
  },
  {
    id: 1169,
    author: "Pablo Picasso",
    text:
      "All children are artists. The problem is how to remain an artist once he grows up."
  },
  {
    id: 1170,
    author: "Pat Riley",
    text:
      "Courage is not the absence of fear, but simply moving on with dignity despite that fear."
  },
  {
    id: 1171,
    author: "Paul Boese",
    text:
      "Forgiveness does not change the past, but it does enlarge the future."
  },
  {
    id: 1172,
    author: "Paul Cezanne",
    text: "The awareness of our own strength makes us modest."
  },
  {
    id: 1173,
    author: "Paul Graham",
    text:
      "The most dangerous way to lose time is not to spend it having fun, but to spend it doing fake work. When you spend time having fun, you know you're being self-indulgent."
  },
  {
    id: 1174,
    author: "Paul Tillich",
    text: "Decision is a risk rooted in the courage of being free."
  },
  {
    id: 1175,
    author: "Paulo Coelho",
    text: "Write your plans in pencil and give God the eraser."
  },
  {
    id: 1176,
    author: "Pearl Buck",
    text: "One faces the future with ones past."
  },
  {
    id: 1177,
    author: "Pearl Buck",
    text: "Growth itself contains the germ of happiness."
  },
  {
    id: 1178,
    author: "Pearl Buck",
    text:
      "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied."
  },
  {
    id: 1179,
    author: "Pearl Buck",
    text:
      "You cannot make yourself feel something you do not feel, but you can make yourself do right in spite of your feelings."
  },
  {
    id: 1180,
    author: "Pearl Buck",
    text:
      "The truth is always exciting. Speak it, then. Life is dull without it."
  },
  {
    id: 1181,
    author: "Pearl Buck",
    text:
      "The secret of joy in work is contained in one word excellence. To know how to do something well is to enjoy it."
  },
  {
    id: 1182,
    author: "Pearl Buck",
    text:
      "The secret of joy in work is contained in one word: excellence. To know how to do something well is to enjoy it."
  },
  {
    id: 1183,
    author: "Pema Chodron",
    text:
      "The truth you believe and cling to makes you unavailable to hear anything new."
  },
  {
    id: 1184,
    author: "Pema Chodron",
    text:
      "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless."
  },
  {
    id: 1185,
    author: "Pema Chodron",
    text:
      "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher."
  },
  {
    id: 1186,
    author: "Pema Chodron",
    text: "Nothing ever goes away until it has taught us what we need to know."
  },
  {
    id: 1187,
    author: "Pema Chodron",
    text: "The greatest obstacle to connecting with our joy is resentment."
  },
  {
    id: 1188,
    author: "Pema Chodron",
    text:
      "The future is completely open, and we are writing it moment to moment."
  },
  {
    id: 1189,
    author: "Pema Chodron",
    text:
      "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest."
  },
  {
    id: 1190,
    author: "Pema Chodron",
    text:
      "It isn't what happens to us that causes us to suffer; it's what we say to ourselves about what happens."
  },
  {
    id: 1191,
    author: "Percy Shelley",
    text: "Fear not for the future, weep not for the past."
  },
  {
    id: 1192,
    author: "Pericles",
    text: "Time is the wisest counsellor of all."
  },
  {
    id: 1193,
    author: "Peter Drucker",
    text:
      "Efficiency is doing things right; effectiveness is doing the right things."
  },
  {
    id: 1194,
    author: "Peter Drucker",
    text:
      "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action."
  },
  {
    id: 1195,
    author: "Peter Drucker",
    text:
      "There is nothing so useless as doing efficiently that which should not be done at all."
  },
  {
    id: 1196,
    author: "Peter Drucker",
    text: "The best way to predict your future is to create it."
  },
  {
    id: 1197,
    author: "Peter Drucker",
    source: "https://www.goodreads.com/quotes/784267",
    tags: "time, management",
    text: "Until we can manage time, we can manage nothing else."
  },
  {
    id: 1198,
    author: "Peter Elbow",
    text: "Meaning is not what you start with but what you end up with."
  },
  {
    id: 1199,
    author: "Philip Breedveld",
    text: "Moments of complete apathy are the best for new creations."
  },
  {
    id: 1200,
    author: "Philip Sidney",
    text: "Either I will find a way, or I will make one."
  },
  {
    id: 1201,
    author: "Pierre Abelard",
    text:
      "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth."
  },
  {
    id: 1202,
    author: "Pierre Auguste Renoir",
    text: "The pain passes, but the beauty remains."
  },
  {
    id: 1203,
    author: "Plato",
    text: "A good decision is based on knowledge and not on numbers."
  },
  {
    id: 1204,
    author: "Plato",
    text:
      "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind."
  },
  {
    id: 1205,
    author: "Plato",
    text:
      "Good actions give strength to ourselves and inspire good actions in others."
  },
  {
    id: 1206,
    author: "Plato",
    text:
      "Wise men talk because they have something to say; fools, because they have to say something."
  },
  {
    id: 1207,
    author: "Plotinus",
    text:
      "Knowledge has three degrees opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition."
  },
  {
    id: 1208,
    author: "Plutarch",
    text: "What we achieve inwardly will change outer reality."
  },
  {
    id: 1209,
    author: "Plutarch",
    text:
      "Know how to listen, and you will profit even from those who talk badly."
  },
  {
    id: 1210,
    author: "Plutarch",
    text:
      "To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future."
  },
  {
    id: 1211,
    author: "Princess Diana",
    text: "Only do what your heart tells you."
  },
  {
    id: 1212,
    author: "Publilius Syrus",
    text: "A rolling stone gathers no moss."
  },
  {
    id: 1213,
    author: "Publilius Syrus",
    text: "While we stop to think, we often miss our opportunity."
  },
  {
    id: 1214,
    author: "Publilius Syrus",
    text: "Better be ignorant of a matter than half know it."
  },
  {
    id: 1215,
    author: "Publilius Syrus",
    text: "I have often regretted my speech, never my silence."
  },
  {
    id: 1216,
    author: "Publilius Syrus",
    text: "Do not turn back when you are just at the goal."
  },
  {
    id: 1217,
    author: "Publilius Syrus",
    text: "Never promise more than you can perform."
  },
  {
    id: 1218,
    author: "Rabbi Hillel",
    text:
      "If I am not for myself, who will be for me? If I am not for others, what am I? And if not now, when?"
  },
  {
    id: 1219,
    author: "Rabindranath Tagore",
    text: "We read the world wrong and say that it deceives us."
  },
  {
    id: 1220,
    author: "Rachel Carson",
    text:
      "If facts are the seeds that later produce knowledge and wisdom, then the emotions and the impressions of the senses are the fertile soil in which the seeds must grow."
  },
  {
    id: 1221,
    author: "Ralph Blum",
    text:
      "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings."
  },
  {
    id: 1222,
    author: "Ralph Emerson",
    text: "Skill to do comes of doing."
  },
  {
    id: 1223,
    author: "Ralph Emerson",
    text: "The years teach much which the days never know."
  },
  {
    id: 1224,
    author: "Ralph Emerson",
    text: "Our distrust is very expensive."
  },
  {
    id: 1225,
    author: "Ralph Emerson",
    text: "Good luck is another name for tenacity of purpose."
  },
  {
    id: 1226,
    author: "Ralph Emerson",
    text: "Life is a progress, and not a station."
  },
  {
    id: 1227,
    author: "Ralph Emerson",
    text: "The world makes way for the man who knows where he is going."
  },
  {
    id: 1228,
    author: "Ralph Emerson",
    text:
      "Life is a succession of lessons, which must be lived to be understood."
  },
  {
    id: 1229,
    author: "Ralph Emerson",
    text:
      "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world."
  },
  {
    id: 1230,
    author: "Ralph Emerson",
    text:
      "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good."
  },
  {
    id: 1231,
    author: "Ralph Emerson",
    text:
      "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him."
  },
  {
    id: 1232,
    author: "Ralph Emerson",
    text:
      "It is one of the blessings of old friends that you can afford to be stupid with them."
  },
  {
    id: 1233,
    author: "Ralph Emerson",
    text:
      "If the stars should appear but one night every thousand years how man would marvel and adore."
  },
  {
    id: 1234,
    author: "Ralph Emerson",
    text:
      "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better."
  },
  {
    id: 1235,
    author: "Ralph Emerson",
    text:
      "Do not go where the path may lead, go instead where there is no path and leave a trail."
  },
  {
    id: 1236,
    author: "Ralph Emerson",
    text: "Self-trust is the first secret of success."
  },
  {
    id: 1237,
    author: "Ralph Emerson",
    text: "Go put your creed into the deed. Nor speak with double tongue."
  },
  {
    id: 1238,
    author: "Ralph Emerson",
    text: "We aim above the mark to hit the mark."
  },
  {
    id: 1239,
    author: "Ralph Emerson",
    text: "Nature is a mutable cloud which is always and never the same."
  },
  {
    id: 1240,
    author: "Ralph Emerson",
    text:
      "Build a better mousetrap and the world will beat a path to your door."
  },
  {
    id: 1241,
    author: "Ralph Emerson",
    text: "Nothing is at last sacred but the integrity of your own mind."
  },
  {
    id: 1242,
    author: "Ralph Emerson",
    text: "Nothing great was ever achieved without enthusiasm."
  },
  {
    id: 1243,
    author: "Ralph Emerson",
    text:
      "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him."
  },
  {
    id: 1244,
    author: "Ralph Emerson",
    text:
      "Truth, and goodness, and beauty are but different faces of the same all."
  },
  {
    id: 1245,
    author: "Ralph Emerson",
    text: "To be great is to be misunderstood."
  },
  {
    id: 1246,
    author: "Ralph Emerson",
    text: "Make the most of yourself, for that is all there is of you."
  },
  {
    id: 1247,
    author: "Ralph Emerson",
    text:
      "Everything in the universe goes by indirection. There are no straight lines."
  },
  {
    id: 1248,
    author: "Ralph Emerson",
    text: "Make the most of yourself for that is all there is of you."
  },
  {
    id: 1249,
    author: "Ralph Emerson",
    text:
      "Thought is the blossom; language the bud; action the fruit behind it."
  },
  {
    id: 1250,
    author: "Ralph Emerson",
    text:
      "We must be as courteous to a man as we are to a picture, which we are willing to give the advantage of a good light."
  },
  {
    id: 1251,
    author: "Ralph Emerson",
    text: "What is a weed? A plant whose virtues have not yet been discovered."
  },
  {
    id: 1252,
    author: "Ralph Emerson",
    text:
      "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them."
  },
  {
    id: 1253,
    author: "Ralph Emerson",
    text:
      "Good thoughts are no better than good dreams, unless they be executed."
  },
  {
    id: 1254,
    author: "Ralph Emerson",
    text: "In skating over thin ice our safety is in our speed."
  },
  {
    id: 1255,
    author: "Ralph Emerson",
    text:
      "So is cheerfulness, or a good temper, the more it is spent, the more remains."
  },
  {
    id: 1256,
    author: "Ralph Emerson",
    text:
      "Bad times have a scientific value. These are occasions a good learner would not miss."
  },
  {
    id: 1257,
    author: "Ralph Emerson",
    text: "The only way to have a friend is to be one."
  },
  {
    id: 1258,
    author: "Ralph Marston",
    text: "Excellence is not a skill. It is an attitude."
  },
  {
    id: 1259,
    author: "Ralph Marston",
    text:
      "Let go of your attachment to being right, and suddenly your mind is more open. You're able to benefit from the unique viewpoints of others, without being crippled by your own judgement."
  },
  {
    id: 1260,
    author: "Ralph Waldo Emerson",
    text: "Our strength grows out of our weaknesses."
  },
  {
    id: 1261,
    author: "Ralph Waldo Emerson",
    text:
      "It is only when the mind and character slumber that the dress can be seen."
  },
  {
    id: 1262,
    author: "Ralph Waldo Emerson",
    text:
      "Happiness is a perfume you cannot pour on others without getting a few drops on yourself."
  },
  {
    id: 1263,
    author: "Ralph Waldo Emerson",
    text:
      "A hero is no braver than an ordinary man, but he is braver five minutes longer."
  },
  {
    id: 1264,
    author: "Ralph Waldo Emerson",
    text:
      "Imagination is not a talent of some men but is the health of every man."
  },
  {
    id: 1265,
    author: "Ralph Waldo Emerson",
    text:
      "Most of the shadows of life are caused by standing in our own sunshine."
  },
  {
    id: 1266,
    author: "Ralph Waldo Emerson",
    text:
      "Do not follow where the path may lead. Go, instead, where there is no path and leave a trail."
  },
  {
    id: 1267,
    author: "Ray Bradbury",
    text:
      "Living at risk is jumping off the cliff and building your wings on the way down."
  },
  {
    id: 1268,
    author: "Remez Sasson",
    text:
      "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind."
  },
  {
    id: 1269,
    author: "Rene Descartes",
    text:
      "It is not enough to have a good mind; the main thing is to use it well."
  },
  {
    id: 1270,
    author: "Rene Descartes",
    text:
      "The greatest minds are capable of the greatest vices as well as of the greatest virtues."
  },
  {
    id: 1271,
    author: "Rene Descartes",
    text:
      "Divide each difficulty into as many parts as is feasible and necessary to resolve it."
  },
  {
    id: 1272,
    author: "Richard Bach",
    text: "Argue for your limitations, and sure enough theyre yours."
  },
  {
    id: 1273,
    author: "Richard Bach",
    text: "In order to win, you must expect to win."
  },
  {
    id: 1274,
    author: "Richard Bach",
    text: "The simplest things are often the truest."
  },
  {
    id: 1275,
    author: "Richard Bach",
    text: "To bring anything into your life, imagine that it's already there."
  },
  {
    id: 1276,
    author: "Richard Bach",
    text: "Strong beliefs win strong men, and then make them stronger."
  },
  {
    id: 1277,
    author: "Richard Bach",
    text: "Every problem has a gift for you in its hands."
  },
  {
    id: 1278,
    author: "Richard Bach",
    text: "The best way to pay for a lovely moment is to enjoy it."
  },
  {
    id: 1279,
    author: "Richard Bach",
    text:
      "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice."
  },
  {
    id: 1280,
    author: "Richard Bach",
    text:
      "You are always free to change your mind and choose a different future, or a different past."
  },
  {
    id: 1281,
    author: "Richard Bach",
    text:
      "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years."
  },
  {
    id: 1282,
    author: "Richard Bach",
    text:
      "If you love someone, set them free. If they come back they're yours; if they don't they never were."
  },
  {
    id: 1283,
    author: "Richard Bach",
    text:
      "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!"
  },
  {
    id: 1284,
    author: "Richard Bach",
    text:
      "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?"
  },
  {
    id: 1285,
    author: "Richard Bach",
    text:
      "Don't turn away from possible futures before you're certain you don't have anything to learn from them."
  },
  {
    id: 1286,
    author: "Richard Bach",
    text:
      "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly."
  },
  {
    id: 1287,
    author: "Richard Bach",
    text: "Sooner or later, those who win are those who think they can."
  },
  {
    id: 1288,
    author: "Richard Bach",
    text:
      "Happiness is the reward we get for living to the highest right we know."
  },
  {
    id: 1289,
    author: "Richard Bach",
    text: "Every gift from a friend is a wish for your happiness."
  },
  {
    id: 1290,
    author: "Richard Bach",
    text: "Learning is finding out what you already know."
  },
  {
    id: 1291,
    author: "Richard Bach",
    text:
      "Ask yourself the secret of your success. Listen to your answer, and practice it."
  },
  {
    id: 1292,
    author: "Richard Bach",
    text:
      "The meaning I picked, the one that changed my life: Overcome fear, behold wonder."
  },
  {
    id: 1293,
    author: "Richard Bach",
    text:
      "Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you."
  },
  {
    id: 1294,
    author: "Richard Bach",
    text:
      "To fly as fast as thought, you must begin by knowing that you have already arrived."
  },
  {
    id: 1295,
    author: "Richard Bach",
    text:
      "Allow the world to live as it chooses, and allow yourself to live as you choose."
  },
  {
    id: 1296,
    author: "Richard Bach",
    text: "I gave my life to become the person I am right now. Was it worth it?"
  },
  {
    id: 1297,
    author: "Richard Bach",
    text:
      "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the Master calls the butterfly."
  },
  {
    id: 1298,
    author: "Richard Bach",
    text: "Listen to what you know instead of what you fear."
  },
  {
    id: 1299,
    author: "Richard Bach",
    text:
      "What the caterpillar calls the end of the world, the master calls a butterfly."
  },
  {
    id: 1300,
    author: "Richard Bach",
    text: "You teach best what you most need to learn."
  },
  {
    id: 1301,
    author: "Richard Bach",
    text:
      "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends."
  },
  {
    id: 1302,
    author: "Richard Bach",
    text:
      "You are never given a wish without also being given the power to make it come true. You may have to work for it, however."
  },
  {
    id: 1303,
    author: "Richard Bach",
    text: "Argue for your limitations, and sure enough they're yours."
  },
  {
    id: 1304,
    author: "Richard Braunstein",
    text: "He who obtains has little. He who scatters has much."
  },
  {
    id: 1305,
    author: "Richard Evans",
    text: "The undertaking of a new action brings new strength."
  },
  {
    id: 1306,
    author: "Richard Feynman",
    source: "https://simple.wikiquote.org/wiki/Richard_Feynman",
    tags: "create, creation, understand, understanding",
    text: "What I cannot create, I do not understand."
  },
  {
    id: 1307,
    author: "Richard Garriott",
    text: "Chaos and Order are not enemies, only opposites."
  },
  {
    id: 1308,
    author: "Richard Needham",
    text:
      "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong."
  },
  {
    id: 1309,
    author: "Richard Whately",
    text:
      "Lose an hour in the morning, and you will spend all day looking for it."
  },
  {
    id: 1310,
    author: "Rita Mae Brown",
    text:
      "Creativity comes from trust. Trust your instincts. And never hope more than you work."
  },
  {
    id: 1311,
    author: "Robert Anthony",
    text:
      "Forget about all the reasons why something may not work. You only need to find one good reason why it will."
  },
  {
    id: 1312,
    author: "Robert Brault",
    text:
      "Enjoy the little things, for one day you may look back and realize they were the big things."
  },
  {
    id: 1313,
    author: "Robert C. Solomon",
    text:
      "Spirituality can be severed from both vicious sectarianism and thoughtless banalities. Spirituality, I have come to see, is nothing less than the thoughtful love of life."
  },
  {
    id: 1314,
    author: "Robert Frost",
    text: "The best way out is always through."
  },
  {
    id: 1315,
    author: "Robert Frost",
    text:
      "In three words I can sum up everything Ive learned about life: it goes on."
  },
  {
    id: 1316,
    author: "Robert Fulghum",
    text:
      "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away."
  },
  {
    id: 1317,
    author: "Robert Fulghum",
    text:
      "If you break your neck, if you have nothing to eat, if your house is on fire, then you got a problem. Everything else is inconvenience."
  },
  {
    id: 1318,
    author: "Robert Graves",
    text:
      "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer."
  },
  {
    id: 1319,
    author: "Robert Heller",
    text: "Never ignore a gut feeling, but never believe that it's enough."
  },
  {
    id: 1320,
    author: "Robert Kennedy",
    text: "Only those who dare to fail greatly can ever achieve greatly."
  },
  {
    id: 1321,
    author: "Robert Louis Stevenson",
    text:
      "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world."
  },
  {
    id: 1322,
    author: "Robert Lynd",
    text:
      "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us."
  },
  {
    id: 1323,
    author: "Robert M. Pirsig",
    text:
      "The place to improve the world is first in one's own heart and head and hands."
  },
  {
    id: 1324,
    author: "Robert McKain",
    text:
      "The reason most goals are not achieved is that we spend our time doing second things first."
  },
  {
    id: 1325,
    author: "Robert Orben",
    text: "Don't think of it as failure. Think of it as time-released success."
  },
  {
    id: 1326,
    author: "Robert Pirsig",
    text:
      "The only Zen you find on the tops of mountains is the Zen you bring up there."
  },
  {
    id: 1327,
    author: "Robert Schuller",
    text:
      "As we grow as unique persons, we learn to respect the uniqueness of others."
  },
  {
    id: 1328,
    author: "Robert Schuller",
    text:
      "Failure doesn't mean you are a failure it just means you haven't succeeded yet."
  },
  {
    id: 1329,
    author: "Robert Southey",
    text:
      "It is with words as with sunbeams. The more they are condensed, the deeper they burn."
  },
  {
    id: 1330,
    author: "Robert Stevenson",
    text:
      "Don't judge each day by the harvest you reap but by the seeds you plant."
  },
  {
    id: 1331,
    author: "Robert Stevenson",
    text:
      "To be what we are, and to become what we are capable of becoming, is the only end of life."
  },
  {
    id: 1332,
    author: "Robert Stevenson",
    text:
      "Don't judge each day by the harvest you reap but by the seeds that you plant."
  },
  {
    id: 1333,
    author: "Rodin",
    text: "Nothing is a waste of time if you use the experience wisely."
  },
  {
    id: 1334,
    author: "Rudolf Arnheim",
    text:
      "All perceiving is also thinking, all reasoning is also intuition, all observation is also invention."
  },
  {
    id: 1335,
    author: "Rumi",
    text:
      "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness."
  },
  {
    id: 1336,
    author: "Rumi",
    text:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart."
  },
  {
    id: 1337,
    author: "Rumi",
    text: "Let the beauty of what you love be what you do."
  },
  {
    id: 1338,
    author: "Rumi",
    text:
      "Let yourself be silently drawn by the stronger pull of what you really love."
  },
  {
    id: 1339,
    author: "Sai Baba",
    text:
      "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be."
  },
  {
    id: 1340,
    author: "Sai Baba",
    text: "All action results from thought, so it is thoughts that matter."
  },
  {
    id: 1341,
    author: "Saint Augustine",
    text: "Patience is the companion of wisdom."
  },
  {
    id: 1342,
    author: "Sam Keen",
    text:
      "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly."
  },
  {
    id: 1343,
    author: "Sam Levenson",
    text:
      "It's so simple to be wise. Just think of something stupid to say and then don't say it."
  },
  {
    id: 1344,
    author: "Sam Rayburn",
    text:
      "No one has a finer command of language than the person who keeps his mouth shut."
  },
  {
    id: 1345,
    author: "Samuel Johnson",
    text: "Memory is the mother of all wisdom."
  },
  {
    id: 1346,
    author: "Samuel Taylor Coleridge",
    text:
      "Imagination is the living power and prime agent of all human perception."
  },
  {
    id: 1347,
    author: "Sarah Breathnach",
    text:
      "Our deepest wishes are whispers of our authentic selves. We must learn to respect them. We must learn to listen."
  },
  {
    id: 1348,
    author: "Satchel Paige",
    text: "Don't look back. Something might be gaining on you."
  },
  {
    id: 1349,
    author: "Saul Alinsky",
    text:
      "As an organizer I start from where the world is, as it is, not as I would like it to be."
  },
  {
    id: 1350,
    author: "Seneca",
    text: "Luck is what happens when preparation meets opportunity."
  },
  {
    id: 1351,
    author: "Seneca",
    text: "No man was ever wise by chance."
  },
  {
    id: 1352,
    author: "Seneca",
    text: "The greatest remedy for anger is delay."
  },
  {
    id: 1353,
    author: "Seneca",
    text: "The mind unlearns with difficulty what it has long learned."
  },
  {
    id: 1354,
    author: "Seneca",
    text:
      "Begin at once to live and count each separate day as a separate life."
  },
  {
    id: 1355,
    author: "Seneca",
    text: "If one does not know to which port is sailing, no wind is favorable."
  },
  {
    id: 1356,
    author: "Seneca",
    text:
      "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back."
  },
  {
    id: 1357,
    author: "Seneca",
    text: "There is no great genius without some touch of madness."
  },
  {
    id: 1358,
    author: "Seneca",
    text: "Most powerful is he who has himself in his own power."
  },
  {
    id: 1359,
    author: "Seneca",
    text: "Things that were hard to bear are sweet to remember."
  },
  {
    id: 1360,
    author: "Shakti Gawain",
    text:
      "The more light you allow within you, the brighter the world you live in will be."
  },
  {
    id: 1361,
    text:
      "Courage doesn’t happen when you have all the answers. It happens when you are ready to face the questions you have been avoiding your whole life.",
    author: "Shannon L. Alder",
    source: "https://www.goodreads.com/quotes/736095",
    tags:
      "choices, courage, decisions, questions, avoid, avoiding, avoidance, procrastination"
  },
  {
    id: 1362,
    author: "Sheldon Kopp",
    text:
      "In the long run we get no more than we have been willing to risk giving."
  },
  {
    id: 1363,
    author: "Shunryu Suzuki",
    text:
      "The most important point is to accept yourself and stand on your two feet."
  },
  {
    id: 1364,
    author: "Sigmund Freud",
    text: "From error to error one discovers the entire truth."
  },
  {
    id: 1365,
    author: "Sigmund Freud",
    text:
      "The most complicated achievements of thought are possible without the assistance of consciousness."
  },
  {
    id: 1366,
    author: "Simone Weil",
    text:
      "Liberty, taking the word in its concrete sense, consists in the ability to choose."
  },
  {
    id: 1367,
    author: "Sinvyest Tan",
    text:
      "Don't frown because you never know who is falling in love with your smile."
  },
  {
    id: 1368,
    author: "Socrates",
    text: "Be as you wish to seem."
  },
  {
    id: 1369,
    author: "Socrates",
    text: "Wisdom begins in wonder."
  },
  {
    id: 1370,
    author: "Socrates",
    text:
      "The greatest way to live with honor in this world is to be what we pretend to be."
  },
  {
    id: 1371,
    author: "Socrates",
    text:
      "The greatest way to live with honour in this world is to be what we pretend to be."
  },
  {
    id: 1372,
    author: "Sogyal Rinpoche",
    text:
      "We must never forget that it is through our actions, words, and thoughts that we have a choice."
  },
  {
    id: 1373,
    author: "Sojourner Truth",
    text: "Truth is powerful and it prevails."
  },
  {
    id: 1374,
    author: "Sophia Loren",
    text:
      "There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life and the lives of people you love. When you learn to tap this source, you will truly have defeated age.",
    source: "https://www.goodreads.com/quotes/8746",
    tags: "creativity, youth, age, mind"
  },
  {
    id: 1375,
    author: "Sophocles",
    text: "Wisdom is the supreme part of happiness."
  },
  {
    id: 1376,
    author: "Sophocles",
    text: "A short saying often contains much wisdom."
  },
  {
    id: 1377,
    author: "Sophocles",
    text: "A short saying oft contains much wisdom."
  },
  {
    id: 1378,
    author: "Sophocles",
    text:
      "Men of perverse opinion do not know the excellence of what is in their hands, till some one dash it from them."
  },
  {
    id: 1379,
    author: "Sophocles",
    text:
      "Ignorant men don't know what good they hold in their hands until they've flung it away."
  },
  {
    id: 1380,
    author: "Sophocles",
    text: "Much wisdom often goes with fewer words."
  },
  {
    id: 1381,
    author: "Sophocles",
    text: "Numberless are the worlds wonders, but none more wonderful than man."
  },
  {
    id: 1382,
    text:
      "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
    source: "https://www.goodreads.com/quotes/6812",
    tags: "fictional, movie, do, try, star wars"
  },
  {
    id: 1383,
    author: "Søren Kierkegaard",
    text:
      "To dare is to lose ones footing momentarily. To not dare is to lose oneself."
  },
  {
    id: 1384,
    author: "Sri Chinmoy",
    text:
      "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest."
  },
  {
    id: 1385,
    author: "St. Augustine",
    text: "Better to have loved and lost, than to have never loved at all."
  },
  {
    id: 1386,
    author: "Stephen Covey",
    text:
      "We are not animals. We are not a product of what has happened to us in our past. We have the power of choice."
  },
  {
    id: 1387,
    author: "Stephen Kaggwa",
    text: "Try and fail, but don't fail to try."
  },
  {
    id: 1388,
    author: "Stephen Sigmund",
    text:
      "Learn wisdom from the ways of a seedling. A seedling which is never hardened off through stressful situations will never become a strong productive plant."
  },
  {
    id: 1389,
    author: "Sue Patton Thoele",
    text:
      "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand."
  },
  {
    id: 1390,
    author: "Sun Tzu",
    text: "You have to believe in yourself."
  },
  {
    id: 1391,
    author: "Sun Tzu",
    text: "Can you imagine what I would do if I could do all I can?"
  },
  {
    id: 1392,
    author: "Swedish proverb",
    text: "Worry often gives a small thing a big shadow."
  },
  {
    id: 1393,
    author: "Sydney Smith",
    text:
      "It is the greatest of all mistakes to do nothing because you can only do little do what you can."
  },
  {
    id: 1394,
    author: "Sydney Smith",
    text:
      "It is the greatest of all mistakes to do nothing because you can only do little - do what you can."
  },
  {
    id: 1395,
    author: "Sylvia Plath",
    source: "https://www.goodreads.com/quotes/358562",
    tags: "creativity, confidence, self-doubt, enemy",
    text: "The worst enemy to creativity is self-doubt."
  },
  {
    id: 1396,
    author: "Sylvia Voirol",
    text: "Rainbows apologize for angry skies."
  },
  {
    id: 1397,
    author: "Tehyi Hsieh",
    text: "Action will remove the doubts that theory cannot solve."
  },
  {
    id: 1398,
    author: "Tenzin Gyatso",
    text:
      "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else."
  },
  {
    id: 1399,
    author: "Tenzin Gyatso",
    text:
      "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace."
  },
  {
    id: 1400,
    author: "Terry Tempest Williams",
    text:
      "Creativity involves breaking out of expected patterns in order to look at things in a different way.",
    source: "https://www.goodreads.com/quotes/784313",
    tags: "creative, creativity"
  },
  {
    id: 1401,
    author: "Theodore H. White",
    text:
      "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform."
  },
  {
    id: 1402,
    author: "Theodore Roosevelt",
    text: "Keep your eyes on the stars and your feet on the ground."
  },
  {
    id: 1403,
    author: "Theodore Rubin",
    text:
      "Kindness is more important than wisdom, and the recognition of this is the beginning of wisdom."
  },
  {
    id: 1404,
    author: "Theophrastus",
    text: "Time is the most valuable thing a man can spend."
  },
  {
    id: 1405,
    author: "Thich Nhat Hanh",
    text: "Smile, breathe, and go slowly."
  },
  {
    id: 1406,
    author: "Thich Nhat Hanh",
    text: "There is no way to happiness, happiness is the way."
  },
  {
    id: 1407,
    author: "Thich Nhat Hanh",
    text: "May our hearts garden of awakening bloom with hundreds of flowers."
  },
  {
    id: 1408,
    author: "Thich Nhat Hanh",
    text:
      "To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself."
  },
  {
    id: 1409,
    author: "Thich Nhat Hanh",
    text:
      "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers."
  },
  {
    id: 1410,
    author: "Thich Nhat Hanh",
    text:
      "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy."
  },
  {
    id: 1411,
    author: "Thich Nhat Hanh",
    text:
      "By living deeply in the present moment we can understand the past better and we can prepare for a better future."
  },
  {
    id: 1412,
    author: "Thich Nhat Hanh",
    text:
      "The amount of happiness that you have depends on the amount of freedom you have in your heart."
  },
  {
    id: 1413,
    author: "Thich Nhat Hanh",
    text: "Smile, breathe and go slowly."
  },
  {
    id: 1414,
    author: "Thich Nhat Hanh",
    text:
      "If we are not fully ourselves, truly in the present moment, we miss everything."
  },
  {
    id: 1415,
    author: "Thich Nhat Hanh",
    text:
      "To be beautiful means to be yourself. You don't need to be accepted by others. You need to accept yourself."
  },
  {
    id: 1416,
    author: "Thomas Carlyle",
    text:
      "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears."
  },
  {
    id: 1417,
    author: "Thomas Carlyle",
    text:
      "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it."
  },
  {
    id: 1418,
    author: "Thomas Carlyle",
    text:
      "Do not be embarrassed by your mistakes. Nothing can teach us better than our understanding of them. This is one of the best ways of self-education."
  },
  {
    id: 1419,
    author: "Thomas Carlyle",
    text:
      "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance."
  },
  {
    id: 1420,
    author: "Thomas Dewar",
    text: "Minds are like parachutes. They only function when open."
  },
  {
    id: 1421,
    author: "Thomas Edison",
    text:
      "Genius is one percent inspiration and ninety-nine percent perspiration."
  },
  {
    id: 1422,
    author: "Thomas Edison",
    text: "If we did the things we are capable of, we would astound ourselves."
  },
  {
    id: 1423,
    author: "Thomas Edison",
    text:
      "Opportunity is missed by most because it is dressed in overalls and looks like work."
  },
  {
    id: 1424,
    author: "Thomas Edison",
    text:
      "Many of life's failures are people who did not realize how close they were to success when they gave up."
  },
  {
    id: 1425,
    author: "Thomas Edison",
    text:
      "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary."
  },
  {
    id: 1426,
    author: "Thomas Fuller",
    text: "No garden is without its weeds."
  },
  {
    id: 1427,
    author: "Thomas Fuller",
    text:
      "An invincible determination can accomplish almost anything and in this lies the great distinction between great men and little men."
  },
  {
    id: 1428,
    author: "Thomas Hardy",
    text:
      "Time changes everything except something within us which is always surprised by change."
  },
  {
    id: 1429,
    author: "Thomas Jefferson",
    text: "Never put off till tomorrow what you can do today."
  },
  {
    id: 1430,
    author: "Thomas Jefferson",
    text:
      "Do you want to know who you are? Don't ask. Act! Action will delineate and define you."
  },
  {
    id: 1431,
    author: "Thomas Jefferson",
    text:
      "I'm a great believer in luck and I find the harder I work, the more I have of it."
  },
  {
    id: 1432,
    author: "Thomas Jefferson",
    text: "Don't talk about what you have done or what you are going to do."
  },
  {
    id: 1433,
    author: "Thomas Jefferson",
    text: "Reason and free inquiry are the only effectual agents against error."
  },
  {
    id: 1434,
    author: "Thomas Kempis",
    text:
      "Be not angry that you cannot make others as you wish them to be, since you cannot make yourself as you wish to be."
  },
  {
    id: 1435,
    author: "Thomas Paine",
    text: "The most formidable weapon against errors of every kind is reason."
  },
  {
    id: 1436,
    author: "Tom Jackson",
    text:
      "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on."
  },
  {
    id: 1437,
    author: "Tom Krause",
    text: "There are no failures. Just experiences and your reactions to them."
  },
  {
    id: 1438,
    author: "Tom Krause",
    text: "There are no failures, just experiences and your reactions to them."
  },
  {
    id: 1439,
    author: "Tom Lehrer",
    text:
      "Life is like a sewer. What you get out of it depends on what you put into it."
  },
  {
    id: 1440,
    author: "Tom Peters",
    text: "Formula for success: under promise and over deliver."
  },
  {
    id: 1441,
    author: "Tomas Eliot",
    text:
      "Do not expect the world to look bright, if you habitually wear gray-brown glasses."
  },
  {
    id: 1442,
    author: "Toni Morrison",
    text: "If you surrender to the wind, you can ride it."
  },
  {
    id: 1443,
    author: "Tony Blair",
    text:
      "Sometimes it is better to lose and do the right thing than to win and do the wrong thing."
  },
  {
    id: 1444,
    author: "Tony Robbins",
    text: "Whatever happens, take responsibility."
  },
  {
    id: 1445,
    author: "Tony Robbins",
    text: "The path to success is to take massive, determined action."
  },
  {
    id: 1446,
    author: "Tony Robbins",
    text:
      "Successful people ask better questions, and as a result, they get better answers."
  },
  {
    id: 1447,
    author: "Tony Robbins",
    text: "It is in your moments of decision that your destiny is shaped."
  },
  {
    id: 1448,
    author: "Tony Robbins",
    text:
      "The way we communicate with others and with ourselves ultimately determines the quality of our lives."
  },
  {
    id: 1449,
    author: "Tony Robbins",
    text: "The only limit to your impact is your imagination and commitment."
  },
  {
    id: 1450,
    author: "Tony Robbins",
    text: "You always succeed in producing a result."
  },
  {
    id: 1451,
    author: "Tony Robbins",
    text:
      "Stay committed to your decisions, but stay flexible in your approach."
  },
  {
    id: 1452,
    author: "Tony Robbins",
    text:
      "People are not lazy. They simply have impotent goals that is, goals that do not inspire them."
  },
  {
    id: 1453,
    author: "Tony Robbins",
    text:
      "Setting goals is the first step in turning the invisible into the visible."
  },
  {
    id: 1454,
    author: "Tony Robbins",
    text:
      "We can change our lives. We can do, have, and be exactly what we wish."
  },
  {
    id: 1455,
    author: "Tony Robbins",
    text: "When people are like each other they tend to like each other."
  },
  {
    id: 1456,
    author: "Tony Robbins",
    text:
      "If you do what you've always done, you'll get what youve always gotten."
  },
  {
    id: 1457,
    author: "Tony Robbins",
    text:
      "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant."
  },
  {
    id: 1458,
    author: "Tony Robbins",
    text:
      "People are not lazy. They simply have impotent goals - that is, goals that do not inspire them."
  },
  {
    id: 1459,
    author: "Tryon Edwards",
    text:
      "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today."
  },
  {
    id: 1460,
    author: "Turkish proverb",
    text: "Kind words will unlock an iron door."
  },
  {
    id: 1461,
    author: "Ursula Leguin",
    text: "The creative adult is the child who survived.",
    source: "https://www.goodreads.com/quotes/1260096",
    tags: "creative, creativity, child"
  },
  {
    id: 1462,
    author: "Usman Asif",
    text: "Fear is a darkroom where negatives develop."
  },
  {
    id: 1463,
    author: "Uta Hagen",
    text:
      "We must overcome the notion that we must be regular. It robs you of the chance to be extraordinary and leads you to the mediocre."
  },
  {
    id: 1464,
    author: "V. Naipaul",
    text: "The world is always in movement."
  },
  {
    id: 1465,
    author: "Vaclav Havel",
    text:
      "Work for something because it is good, not just because it stands a chance to succeed."
  },
  {
    id: 1466,
    author: "Vernon Cooper",
    text:
      "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future."
  },
  {
    id: 1467,
    author: "Victor Frankl",
    text:
      "Everything can be taken from a man but ... the last of the human freedoms to choose ones attitude in any given set of circumstances, to choose ones own way."
  },
  {
    id: 1468,
    author: "Victor Frankl",
    text:
      "Everything can be taken from a man but ... the last of the human freedoms - to choose ones attitude in any given set of circumstances, to choose ones own way."
  },
  {
    id: 1469,
    author: "Victor Hugo",
    text: "Life is the flower for which love is the honey."
  },
  {
    id: 1470,
    author: "Victor Hugo",
    text:
      "An invasion of armies can be resisted, but not an idea whose time has come."
  },
  {
    id: 1471,
    author: "Victoria Holt",
    text:
      "Never regret. If it's good, it's wonderful. If it's bad, it's experience."
  },
  {
    id: 1472,
    author: "Vince Lombardi",
    text:
      "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives."
  },
  {
    id: 1473,
    author: "Vince Lombardi",
    text:
      "Leaders aren't born they are made. And they are made just like anything else, through hard work. And that's the price well have to pay to achieve that goal, or any goal."
  },
  {
    id: 1474,
    author: "Vincent Lombardi",
    text:
      "The spirit, the will to win, and the will to excel, are the things that endure. These qualities are so much more important than the events that occur."
  },
  {
    id: 1475,
    author: "Virgil",
    text: "Fortune favours the brave."
  },
  {
    id: 1476,
    author: "Virgil",
    text: "They can do all because they think they can."
  },
  {
    id: 1477,
    author: "Virgil",
    text: "They can conquer who believe they can."
  },
  {
    id: 1478,
    author: "Vista Kelly",
    text:
      "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together."
  },
  {
    id: 1479,
    author: "Voltaire",
    text: "No snowflake in an avalanche ever feels responsible."
  },
  {
    id: 1480,
    author: "Voltaire",
    text: "To enjoy life, we must touch much of it lightly."
  },
  {
    id: 1481,
    author: "Voltaire",
    text:
      "Think for yourselves and let others enjoy the privilege to do so too."
  },
  {
    id: 1482,
    author: "Voltaire",
    text:
      "The longer we dwell on our misfortunes, the greater is their power to harm us."
  },
  {
    id: 1483,
    author: "Voltaire",
    text: "We never live; we are always in the expectation of living."
  },
  {
    id: 1484,
    author: "Voltaire",
    text:
      "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity."
  },
  {
    id: 1485,
    author: "W. Clement Stone",
    text:
      "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto."
  },
  {
    id: 1486,
    author: "W. Clement Stone",
    text:
      "When you discover your mission, you will feel its demand. It will fill you with enthusiasm and a burning desire to get to work on it."
  },
  {
    id: 1487,
    author: "W. H. Auden",
    text:
      "To choose what is difficult all ones days, as if it were easy, that is faith."
  },
  {
    id: 1488,
    author: "Walt Disney",
    text: "If you can dream it, you can do it."
  },
  {
    id: 1489,
    author: "Walt Disney",
    text: "Weve got to have a dream if we are going to make a dream come true."
  },
  {
    id: 1490,
    author: "Walt Emerson",
    text:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us."
  },
  {
    id: 1491,
    author: "Walter Anderson",
    text: "Nothing diminishes anxiety faster than action."
  },
  {
    id: 1492,
    author: "Walter Benjamin",
    text: "To be happy is to be able to become aware of oneself without fright."
  },
  {
    id: 1493,
    author: "Walter Cronkite",
    text:
      "I can't imagine a person becoming a success who doesn't give this game of life everything hes got."
  },
  {
    id: 1494,
    author: "Walter Linn",
    text:
      "It is surprising what a man can do when he has to, and how little most men will do when they don't have to."
  },
  {
    id: 1495,
    author: "Walter Lippmann",
    text:
      "Ideals are an imaginative understanding of that which is desirable in that which is possible."
  },
  {
    id: 1496,
    author: "Walter Lippmann",
    text: "Where all think alike, no one thinks very much."
  },
  {
    id: 1497,
    author: "Washington Irving",
    text:
      "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart."
  },
  {
    id: 1498,
    author: "Wayne Dyer",
    text: "You'll see it when you believe it."
  },
  {
    id: 1499,
    author: "Wayne Dyer",
    text: "Real magic in relationships means an absence of judgement of others."
  },
  {
    id: 1500,
    author: "Wayne Dyer",
    text: "Our intention creates our reality."
  },
  {
    id: 1501,
    author: "Wayne Dyer",
    text: "I think and that is all that I am."
  },
  {
    id: 1502,
    author: "Wayne Dyer",
    text: "There is no way to prosperity, prosperity is the way."
  },
  {
    id: 1503,
    author: "Wayne Dyer",
    text:
      "Everything is perfect in the universe even your desire to improve it."
  },
  {
    id: 1504,
    author: "Wayne Dyer",
    text:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice."
  },
  {
    id: 1505,
    author: "Wayne Dyer",
    text:
      "If you change the way you look at things, the things you look at change."
  },
  {
    id: 1506,
    author: "Wayne Dyer",
    text:
      "You are important enough to ask and you are blessed enough to receive back."
  },
  {
    id: 1507,
    author: "Wayne Dyer",
    text:
      "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds."
  },
  {
    id: 1508,
    author: "Wayne Dyer",
    text:
      "I cannot always control what goes on outside. But I can always control what goes on inside."
  },
  {
    id: 1509,
    author: "Wayne Dyer",
    text: "Our lives are a sum total of the choices we have made."
  },
  {
    id: 1510,
    author: "Wayne Dyer",
    text:
      "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way."
  },
  {
    id: 1511,
    author: "Wayne Dyer",
    text: "Anything you really want, you can attain, if you really go after it."
  },
  {
    id: 1512,
    author: "Wayne Dyer",
    text:
      "Doing what you love is the cornerstone of having abundance in your life."
  },
  {
    id: 1513,
    author: "Wayne Dyer",
    text:
      "Everything you are against weakens you. Everything you are for empowers you."
  },
  {
    id: 1514,
    author: "Wayne Dyer",
    text: "You can't choose up sides on a round world."
  },
  {
    id: 1515,
    author: "Wayne Dyer",
    text:
      "There is no scarcity of opportunity to make a living at what you love; theres only scarcity of resolve to make it happen."
  },
  {
    id: 1516,
    author: "Wayne Dyer",
    text: "We are Divine enough to ask and we are important enough to receive."
  },
  {
    id: 1517,
    author: "Wayne Dyer",
    text:
      "Maxim for life: You get treated in life the way you teach people to treat you."
  },
  {
    id: 1518,
    author: "Wayne Dyer",
    text: "You cannot be lonely if you like the person you're alone with."
  },
  {
    id: 1519,
    author: "Wayne Dyer",
    text: "Go for it now. The future is promised to no one."
  },
  {
    id: 1520,
    author: "Wayne Dyer",
    text: "Miracles come in moments. Be ready and willing."
  },
  {
    id: 1521,
    author: "Wayne Dyer",
    text: "When you judge another, you do not define them, you define yourself."
  },
  {
    id: 1522,
    author: "Wayne Dyer",
    text:
      "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy."
  },
  {
    id: 1523,
    author: "Wayne Dyer",
    text:
      "Everything is perfect in the universe - even your desire to improve it."
  },
  {
    id: 1524,
    author: "Whoopi Goldberg",
    text:
      "Were here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark."
  },
  {
    id: 1525,
    author: "Will Durant",
    text:
      "The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds."
  },
  {
    id: 1526,
    author: "Will Rogers",
    text:
      "If you find yourself in a hole, the first thing to do is stop digging."
  },
  {
    id: 1527,
    author: "Willa Cather",
    text: "Where there is great love, there are always miracles."
  },
  {
    id: 1528,
    author: "William Arthur Ward",
    text: "Do more than dream: work."
  },
  {
    id: 1529,
    author: "William Arthur Ward",
    text:
      "Four steps to achievement: Plan purposefully. Prepare prayerfully. Proceed positively. Pursue persistently."
  },
  {
    id: 1530,
    author: "William Blake",
    text: "In seed time learn, in harvest teach, in winter enjoy."
  },
  {
    id: 1531,
    author: "William Blake",
    text: "For everything that lives is holy, life delights in life."
  },
  {
    id: 1532,
    author: "William Burroughs",
    text:
      "Your mind will answer most questions if you learn to relax and wait for the answer."
  },
  {
    id: 1533,
    author: "William Channing",
    text:
      "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict."
  },
  {
    id: 1534,
    author: "William Hazlitt",
    text: "Just as much as we see in others we have in ourselves."
  },
  {
    id: 1535,
    author: "William James",
    text:
      "The greatest discovery of our generation is that human beings can alter their lives by altering their attitudes of mind. As you think, so shall you be."
  },
  {
    id: 1536,
    author: "William James",
    text: "Act as if what you do makes a difference. It does."
  },
  {
    id: 1537,
    author: "William James",
    text:
      "To change ones life, start immediately, do it flamboyantly, no exceptions."
  },
  {
    id: 1538,
    author: "William James",
    text: "The deepest craving of human nature is the need to be appreciated."
  },
  {
    id: 1539,
    author: "William Londen",
    text:
      "To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life."
  },
  {
    id: 1540,
    author: "William Lyon Phelps",
    text:
      "This is the final test of a gentleman: his respect for those who can be of no possible value to him."
  },
  {
    id: 1541,
    author: "William Menninger",
    text:
      "Six essential qualities that are the key to success: Sincerity, personal integrity, humility, courtesy, wisdom, charity."
  },
  {
    id: 1542,
    author: "William Penn",
    text:
      "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment."
  },
  {
    id: 1543,
    author: "William R. Inge",
    text: "Nature takes away any faculty that is not used."
  },
  {
    id: 1544,
    author: "William Saroyan",
    text:
      "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know."
  },
  {
    id: 1545,
    author: "William Scolavino",
    text:
      "The height of your accomplishments will equal the depth of your convictions."
  },
  {
    id: 1546,
    author: "William Shakespeare",
    text: "Having nothing, nothing can he lose."
  },
  {
    id: 1547,
    author: "William Shakespeare",
    text: "Love all, trust a few, do wrong to none."
  },
  {
    id: 1548,
    author: "William Shakespeare",
    text: "He that is giddy thinks the world turns round."
  },
  {
    id: 1549,
    author: "William Shakespeare",
    text: "Speak low, if you speak love."
  },
  {
    id: 1550,
    author: "William Shakespeare",
    text: "Be great in act, as you have been in thought."
  },
  {
    id: 1551,
    author: "William Shakespeare",
    text:
      "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them."
  },
  {
    id: 1552,
    author: "William Shakespeare",
    text:
      "How far that little candle throws its beams! So shines a good deed in a naughty world."
  },
  {
    id: 1553,
    author: "William Shakespeare",
    text: "God has given you one face, and you make yourself another."
  },
  {
    id: 1554,
    author: "William Shakespeare",
    text: "Go to your bosom: Knock there, and ask your heart what it doth know."
  },
  {
    id: 1555,
    author: "William Shakespeare",
    text: "We know what we are, but know not what we may be."
  },
  {
    id: 1556,
    author: "William Shakespeare",
    text:
      "All the world is a stage, And all the men and women merely players.They have their exits and entrances; Each man in his time plays many parts."
  },
  {
    id: 1557,
    author: "William Shakespeare",
    text: "To climb steep hills requires a slow pace at first."
  },
  {
    id: 1558,
    author: "William Shakespeare",
    text: "It is not in the stars to hold our destiny but in ourselves."
  },
  {
    id: 1559,
    author: "William Sloane Coffin",
    text:
      "Hope arouses, as nothing else can arouse, a passion for the possible."
  },
  {
    id: 1560,
    author: "William Ward",
    text:
      "When we seek to discover the best in others, we somehow bring out the best in ourselves."
  },
  {
    id: 1561,
    author: "William Ward",
    text: "Adversity causes some men to break, others to break records."
  },
  {
    id: 1562,
    author: "William White",
    text:
      "I am not afraid of tomorrow, for I have seen yesterday and I love today."
  },
  {
    id: 1563,
    author: "William Yeats",
    text: "Think as a wise man but communicate in the language of the people."
  },
  {
    id: 1564,
    author: "Winifred Holtby",
    text:
      "The things that one most wants to do are the things that are probably most worth doing."
  },
  {
    id: 1565,
    author: "Winston Churchill",
    text: "Courage is going from failure to failure without losing enthusiasm."
  },
  {
    id: 1566,
    author: "Winston Churchill",
    text: "Short words are best and the old words when short are best of all."
  },
  {
    id: 1567,
    author: "Winston Churchill",
    text:
      "You have enemies? Good. That means you've stood up for something, sometime in your life."
  },
  {
    id: 1568,
    author: "Winston Churchill",
    text:
      "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen."
  },
  {
    id: 1569,
    author: "Winston Churchill",
    text: "History will be kind to me for I intend to write it."
  },
  {
    id: 1570,
    author: "Winston Churchill",
    text:
      "Before you can inspire with emotion, you must be swamped with it yourself. Before you can move their tears, your own must flow. To convince them, you must yourself believe."
  },
  {
    id: 1571,
    author: "Winston Churchill",
    text: "The price of greatness is responsibility."
  },
  {
    id: 1572,
    author: "Winston Churchill",
    text:
      "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty."
  },
  {
    id: 1573,
    author: "Winston Churchill",
    text: "I never worry about action, but only inaction."
  },
  {
    id: 1574,
    author: "Winston Churchill",
    text: "Never, never, never give up."
  },
  {
    id: 1575,
    author: "Winston Churchill",
    text: "We make a living by what we get, but we make a life by what we give."
  },
  {
    id: 1576,
    author: "Winston Churchill",
    text:
      "Continuous effort, not strength or intelligence is the key to unlocking our potential."
  },
  {
    id: 1577,
    author: "Winston Churchill",
    text:
      "Continuous effort - not strength or intelligence - is the key to unlocking our potential."
  },
  {
    id: 1578,
    author: "Wit",
    text: "We choose our destiny in the way we treat others."
  },
  {
    id: 1579,
    author: "Wolfgang Amadeus Mozart",
    text:
      "Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius."
  },
  {
    id: 1580,
    author: "Woody Guthrie",
    text: "Take it easy, but take it."
  },
  {
    id: 1581,
    author: "Woody Guthrie",
    text: "Take it easy but take it."
  },
  {
    id: 1582,
    author: "Woody Guthrie",
    text: "Take it easy - but take it."
  },
  {
    id: 1583,
    author: "Ymber Delecto",
    text: "The time you think you're missing, misses you too."
  },
  {
    id: 1584,
    author: "Yoda",
    text: "Do, or do not. There is no try."
  },
  {
    id: 1585,
    author: "Yogi Berra",
    text: "You can observe a lot just by watching."
  },
  {
    id: 1586,
    author: "Yogi Berra",
    text: "Life is a learning experience, only if you learn."
  },
  {
    id: 1587,
    author: "Yogi Berra",
    text:
      "You got to be careful if you don't know where you're going, because you might not get there."
  },
  {
    id: 1588,
    author: "Zadok Rabinowitz",
    text: "A man's dreams are an index to his greatness."
  },
  {
    id: 1589,
    author: "Zig Ziglar",
    text:
      "Positive thinking will let you do everything better than negative thinking will."
  },
  {
    id: 1590,
    author: "Zig Ziglar",
    text: "You are the only person on Earth who can use your ability."
  },
  {
    id: 1591,
    author: "Zig Ziglar",
    text: "You are the only person on earth who can use your ability."
  },
  {
    id: 1592,
    author: "Zig Ziglar",
    text: "Your attitude, not your aptitude, will determine your altitude."
  },
  {
    id: 1593,
    author: "Zig Ziglar",
    text: "Remember that failure is an event, not a person."
  },
  {
    id: 1594,
    author: "Ziggy",
    text:
      "You can complain because roses have thorns, or you can rejoice because thorns have roses."
  }
];

export default quotes;
