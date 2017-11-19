// JavaScript Document
var productDetail = [
	{
		ID : "001",
		Name : "Buckwheat",
		Cate : "Cereal",
		Detail : "High in protein (13-15%), second highest only to oats, and rich in the amino acid lysine. Rich in carbohydrates (mainly starch). Rich in polyunsaturated essential fatty acids, such as linoleic acid.Contains vitamins B1, C and E. Contains higher levels of zinc, copper, and manganese than other cereal grains, and the bioavailability of these minerals is also quite high. High in soluble fibre.",
		Brief : "High in protein (13-15%), second highest only to oats, and rich in the amino acid lysine...",
		Price : "600",
		Off : "0.5",
		Img : "image/Cereal/001_buckwheat_big.jpg",
		smImg : "image/Cereal/001_buckwheat.jpg"
	},
	{
		ID : "002",
		Name : "Chia",
		Cate : "Cereal",
		Detail : "Chia is grown commercially for its seed, a food rich in omega-3 fatty acids since the seeds yield 25–30% extractable oil, including α-linolenic acid. The composition of the fat of the oil may be 55% ω-3, 18% ω-6, 6% ω-9, and 10% saturated fat.",
		Brief : "Chia is grown commercially for its seed, a food rich in omega-3 fatty acids since the seeds yield 25–30% extractable oil, including α-linolenic acid.",
		Price : "700",
		Off : "0.3",
		Img : "image/Cereal/002_chia_big.jpg",
		smImg : "image/Cereal/002_chia.jpg"
	},
	{
		ID : "003",
		Name : "Corn",
		Cate : "Cereal",
		Detail : "Raw, yellow, sweet maize kernels are composed of 76% water, 19% carbohydrates, 3% protein, and 1% fat (table). In a 100-gram serving, maize kernels provide 86 calories and are a good source (10-19% of the Daily Value) of the B vitamins, thiamin, niacin, pantothenic acid (B5) and folate (right table for raw, uncooked kernels, USDA Nutrient Database).",
		Brief : "Raw, yellow, sweet maize kernels are composed of 76% water, 19% carbohydrates, 3% protein, and 1% fat (table).",
		Price : "300",
		Off : "0.43",
		Img : "image/Cereal/003_corn_big.jpg",
		smImg : "image/Cereal/003_corn.jpg"
	},
	{
		ID : "004",
		Name : "Quinoa",
		Cate : "Cereal",
		Detail : "Rich in carbohydrates, with a low glycemic index of 53. High protein content (15%), providing all essential amino acids, including lysine. Has an usually high ratio of protein to carbohydrate, since the germ makes up about 60% of the grain. Relatively low in fat, most of which is omega-6 polyunsaturated fat. In terms of minerals, provides notable quantities manganese, magnesium, iron, copper, phosphorus and potassium.",
		Brief : "Rich in carbohydrates, with a low glycemic index of 53. High protein content (15%), providing all essential amino acids, including lysine.",
		Price : "350",
		Off : "0.7",
		Img : "image/Cereal/004_quinoa_big.jpg",
		smImg : "image/Cereal/004_quinoa.jpg"
	},
	{
		ID : "101",
		Name : "Polished Rice",
		Cate : "Rice",
		Detail : "The term “polished” simply refers to white rice that has had its outer brown layer of bran and germ removed. Rice that has shed its bran layers can also be referred to as \"milled rice\".",
		Brief : "Rice that has shed its bran layers can also be referred to as \"milled rice\".",
		Price : "150",
		Off : "0.3",
		Img : "image/rice/101_polishedRice_big.jpg",
		smImg : "image/rice/101_polishedRice.jpg"
	},
	{
		ID : "102",
		Name : "Brown Rice",
		Cate : "Rice",
		Detail : "This healthful rice sheds its outer husk and retains its bran and germ layers that give it a characteristic tan color. Though brown rice takes a little longer to cook than white rice, the nutrient-dense layers are rich in vitamins and minerals.",
		Brief : "This healthful rice sheds its outer husk and retains its bran and germ layers that give it a characteristic tan color.",
		Price : "100",
		Off : "0.1",
		Img : "image/rice/102_brownRice_big.jpg",
		smImg : "image/rice/102_brownRice.jpg"
	},
	{
		ID : "103",
		Name : "Sticky Rice",
		Cate : "Rice",
		Detail : "Also known as sweet rice, sticky rice is grown mainly in Southeast and East Asia and is used in many traditional Asian dishes, desserts, and sweets. When cooked, sticky rice is especially sticky and is often ground into rice flour.",
		Brief : "When cooked, sticky rice is especially sticky and is often ground into rice flour.",
		Price : "175",
		Off : "0.2",
		Img : "image/rice/103_stickyRice_big.jpg",
		smImg : "image/rice/103_stickyRice.jpg"
	},
	{
		ID : "104",
		Name : "Wild Rice",
		Cate : "Rice",
		Detail : "Wild rice grains are harvested from the genus Zizania of grasses. High in protein, wild rice adds a colorful, exotic flair to any rice dish. Serve it with stir frys, mushroom soups, or casseroles for something new.",
		Brief : "High in protein, wild rice adds a colorful, exotic flair to any rice dish.",
		Price : "250",
		Off : "0.2",
		Img : "image/rice/104_wildRice_big.jpg",
		smImg : "image/rice/104_wildRice.jpg"
	},
	{
		ID : "201",
		Name : "Bean",
		Cate : "Pulse",
		Detail : "Beans are the most well-known pulses, so much so to be elected official representatives of legumes. The bean plant is native to Central America and was imported to Europe after the discovery of America by Christopher Columbus. There are 300 known varieties of beans, sixty or so of which are edible; the best known are the borlotto, the cannellino, the Mexican bean, the Spanish bean and the cowpea.",
		Brief : "Beans are the most well-known pulses, so much so to be elected official representatives of legumes.",
		Price : "190",
		Off : "0.1",
		Img : "image/pulse/201_bean_big.jpg",
		smImg : "image/pulse/201_bean.jpg"
	},
	{
		ID : "202",
		Name : "Lentils",
		Cate : "Pulse",
		Detail : "Lentils were widespread in the Mediterranean as the habitual food of poor Greeks and Romans due to their low cost and high nutritional value. Lentils are rich in protein, calcium and iron. These are the most easily digestible pulses, especially in the red peeled variant. Thanks to the presence of flavonoids, lentils have excellent antioxidant properties.",
		Brief : "Lentils are rich in protein, calcium and iron. These are the most easily digestible pulses, especially in the red peeled variant.",
		Price : "120",
		Off : "0.1",
		Img : "image/pulse/202_lentils_big.jpg",
		smImg : "image/pulse/202_lentils.jpg"
	},
	{
		ID : "203",
		Name : "Lupin",
		Cate : "Pulse",
		Detail : "Already known to the Romans, the lupin has always been a poor food. Thanks to this pulse, a good dose of protein could be obtained, but also of minerals such as iron and potassium as well as vitamins. Lupins can be eaten as delicious aperitif snacks or as ingredients for soups. The flour obtained by grinding the dried seeds can be used to treat certain skin diseases, as a remedy for diabetes and for eliminating worms.",
		Brief : "Lupins can be eaten as delicious aperitif snacks or as ingredients for soups.",
		Price : "110",
		Off : "0.2",
		Img : "image/pulse/203_lupin_big.jpg",
		smImg : "image/pulse/203_lupin.jpg"
	},
	{
		ID : "204",
		Name : "Peas",
		Cate : "Pulse",
		Detail : "Peas can only be found fresh in the spring and compared to other pulses have less calories because they contain few lipids. They also contain a fair amount of carbohydrates, proteins, minerals and fibre, which exert a beneficial effect on the intestine and cardiovascular system.",
		Brief : "They also contain a fair amount of carbohydrates, proteins, minerals and fibre, which exert a beneficial effect on the intestine and cardiovascular system.",
		Price : "135",
		Off : "0.15",
		Img : "image/pulse/204_peas_big.jpg",
		smImg : "image/pulse/204_peas.jpg"
	},
	{
		ID : "301",
		Name : "Black Pepper",
		Cate : "Spice",
		Detail : "The reason that pepper was so cherished is that it served important culinary purposes. Not only could its pungency spice up otherwise bland foods, but it could disguise a food's lack of freshness, the latter being an especially important quality in the times before efficient means of preservation.",
		Brief : "The reason that pepper was so cherished is that it served important culinary purposes.",
		Price : "390",
		Off : "0.24",
		Img : "image/spice/301_blackPepper_big.jpg",
		smImg : "image/spice/301_blackPepper.jpg"
	},
	{
		ID : "302",
		Name : "Cinnamon",
		Cate : "Spice",
		Detail : "The Cinnamon we use is the bark of Cinnamomum tree. This bark has many compounds which give it medicinal properties. When branches of the Cinnamomum tree are cut, the inner bark is extracted after removing the woody parts; this inner bark gives us cinnamon. Upon drying, the strips roll to give the shape we see.",
		Brief : "The Cinnamon we use is the bark of Cinnamomum tree. This bark has many compounds which give it medicinal properties.",
		Price : "190",
		Off : "0.34",
		Img : "image/spice/302_cinnamon_big.jpg",
		smImg : "image/spice/302_cinnamon.jpg"
	},
	{
		ID : "303",
		Name : "Ginger",
		Cate : "Spice",
		Detail : "The dried rhizome of ginger contains approximately 1–4% volatile oils. These are the medically active constituents of ginger and are also responsible for ginger’s characteristic odor and taste. The aromatic constituents include zingiberene and bisabolene, while the pungent constituents are known as gingerols and shogaols. The pungent constituents are credited with the anti-nausea and anti-vomiting effects of ginger.",
		Brief : "The dried rhizome of ginger contains approximately 1–4% volatile oils.",
		Price : "170",
		Off : "0.2",
		Img : "image/spice/303_ginger_big.jpg",
		smImg : "image/spice/303_ginger.jpg"
	},
	{
		ID : "304",
		Name : "Cayenne",
		Cate : "Spice",
		Detail : "Cayenne contains a resinous and pungent substance known as capsaicin. Topical application of capsaicin relieves pain and itching by acting on sensory nerves. Capsaicin temporarily depletes “substance P”, a chemical in nerves that transmits pain sensations. Without substance P, pain signals can no longer be sent. The effect is temporary. Numerous double-blind trials have proven topically applied capsaicin creams are helpful for a range of conditions, including nerve pain in diabetes (diabetic neuropathy), post-surgical pain,psoriasis, muscle pain due to fibromyalgia, nerve pain after shingles (postherpetic neuralgia),osteoarthritis pain, and rheumatoid arthritis pain.",
		Brief : "Topical application of capsaicin relieves pain and itching by acting on sensory nerves.",
		Price : "200",
		Off : "0.11",
		Img : "image/spice/304_cayenne_big.jpg",
		smImg : "image/spice/304_cayenne.jpg"
	}
];