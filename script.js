$('.btn').click(function() {
  $(this).toggleClass('clicked');
});

$('.lvl2').click(function() {
  $(this).toggleClass('lvl2clicked');
})

$(document).ready(function() {
  $("#food").click(function() {
    $("#foodAll").toggle();
  });
  $("#drinks").click(function() {
    $("#drinksAll").toggle();
  });
  $("#bagels").click(function() {
    $("#bagelsAll").toggle();
  });
  $("#eggs").click(function() {
    $("#eggsAll").toggle();
  });
  $("#eggX").click(function() {
    $("#eggXAll").toggle();
  });
  $("#lunch").click(function() {
    $("#lunchAll").toggle();
  });
  $("#sides").click(function() {
    $("#sidesAll").toggle();
  });
  $("#grab").click(function() {
    $("#grabAll").toggle();
  });
  $("#hot").click(function() {
    $("#hotAll").toggle();
  });
  $("#iced").click(function() {
    $("#icedAll").toggle();
  });
  $("#custom").click(function() {
    $("#customAll").toggle();
  });
  $("#blend").click(function() {
    $("#blendAll").toggle();
  });
  $("#grabD").click(function() {
    $("#grabDAll").toggle();
  });
});

// honey whole wheat
$('.honeyWhole').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.honeyWholePrice').val('1.39').toFixed(2);
  } else {
    $('.honeyWholePrice').val('0.00');
  }
});

// cinnamon raisin
$('.cinnamonRaisin').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cinnamonRaisinPrice').val('1.39').toFixed(2);
  } else {
    $('.cinnamonRaisinPrice').val('0.00');
  }
});

// cinnamon sugar
$('.cinnamonSugar').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cinnamonSugarPrice').val('1.39').toFixed(2);
  } else {
    $('.cinnamonSugarPrice').val('0.00');
  }
});

// six cheese
$('.sixCheese').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.sixCheesePrice').val('1.99').toFixed(2);
  } else {
    $('.sixCheesePrice').val('0.00');
  }
});

// cheesy hash brown
$('.cheesyHash').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cheesyHashPrice').val('1.99').toFixed(2);
  } else {
    $('.cheesyHashPrice').val('0.00');
  }
});

// strawberry shmear
$('.strawberry').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.strawberryPrice').val('1.59').toFixed(2);
  } else {
    $('.strawberryPrice').val('0.00');
  }
});

// plain shmear
$('.plain').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.plainPrice').val('1.59').toFixed(2);
  } else {
    $('.plainPrice').val('0.00');
  }
});

// b&c
$('.baconCheddar').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.baconCheddarPrice').val('4.99').toFixed(2);
  } else {
    $('.baconCheddarPrice').val('0.00');
  }
});

// ts&c
$('.turkeySausage').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.turkeySausagePrice').val('4.99').toFixed(2);
  } else {
    $('.turkeySausagePrice').val('0.00');
  }
});

// h&s
$('.hamSwiss').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.hamSwissPrice').val('4.99').toFixed(2);
  } else {
    $('.hamSwissPrice').val('0.00');
  }
});

// h&s2
$('.hamSwiss2').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.hamSwiss2Price').val('5.69').toFixed(2);
  } else {
    $('.hamSwiss2Price').val('0.00');
  }
});

// cc
$('.cheddarCheese').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cheddarCheesePrice').val('3.99').toFixed(2);
  } else {
    $('.cheddarCheesePrice').val('0.00');
  }
});

// cc2
$('.cheddarCheese2').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cheddarCheese2Price').val('5.39').toFixed(2);
  } else {
    $('.cheddarCheese2Price').val('0.00');
  }
});

// bbb
$('.bigBreakfastBurrito').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.bigBreakfastBurritoPrice').val('5.99').toFixed(2);
  } else {
    $('.bigBreakfastBurritoPrice').val('0.00');
  }
});

// ga
$('.gardenAvocado').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.gardenAvocadoPrice').val('4.99').toFixed(2);
  } else {
    $('.gardenAvocadoPrice').val('0.00');
  }
});

// ga2
$('.gardenAvocado2').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.gardenAvocado2Price').val('5.69').toFixed(2);
  } else {
    $('.gardenAvocado2Price').val('0.00');
  }
});

// f
$('.farmhouse').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.farmhousePrice').val('5.69').toFixed(2);
  } else {
    $('.farmhousePrice').val('0.00');
  }
});

// f2
$('.farmhouse2').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.farmhouse2Price').val('6.29').toFixed(2);
  } else {
    $('.farmhouse2Price').val('0.00');
  }
});

// an
$('.allNighter').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.allNighterPrice').val('6.29').toFixed(2);
  } else {
    $('.allNighterPrice').val('0.00');
  }
});

// sf
$('.santaFe').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.santaFePrice').val('4.99').toFixed(2);
  } else {
    $('.santaFePrice').val('0.00');
  }
});

// sf2
$('.santaFe2').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.santaFe2Price').val('5.69').toFixed(2);
  } else {
    $('.santaFe2Price').val('0.00');
  }
});

// ba&t
$('.baconAvocado').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.baconAvocadoPrice').val('4.99').toFixed(2);
  } else {
    $('.baconAvocadoPrice').val('0.00');
  }
});

// ba&t2
$('.baconAvocado2').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.baconAvocado2Price').val('5.69').toFixed(2);
  } else {
    $('.baconAvocado2Price').val('0.00');
  }
});

// miam
$('.makeMeal').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.makeMealPrice').val('3.29').toFixed(2);
  } else {
    $('.makeMealPrice').val('0.00');
  }
});

// gi
$('.gourmetIt').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.gourmetItPrice').val('0.60').toFixed(2);
  } else {
    $('.gourmetItPrice').val('0.00');
  }
});

// lu
$('.lightenUp').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.lightenUpPrice').val('0.60').toFixed(2);
  } else {
    $('.lightenUpPrice').val('0.00');
  }
});

// t
$('.thintastic').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.thintasticPrice').val('0.60').toFixed(2);
  } else {
    $('.thintasticPrice').val('0.00');
  }
});

// at
$('.avocadoToast').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.avocadoToastPrice').val('3.79').toFixed(2);
  } else {
    $('.avocadoToastPrice').val('0.00');
  }
});

// nova lox
$('.novaLox').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.novaLoxPrice').val('6.99').toFixed(2);
  } else {
    $('.novaLoxPrice').val('0.00');
  }
});

// turkey bacon avocado
$('.turkeyBacon').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.turkeyBaconPrice').val('6.99').toFixed(2);
  } else {
    $('.turkeyBaconPrice').val('0.00');
  }
});

// tasty turkey
$('.tastyTurkey').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.tastyTurkeyPrice').val('6.99').toFixed(2);
  } else {
    $('.tastyTurkeyPrice').val('0.00');
  }
});

// avocado veg out
$('.avocadoVeg').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.avocadoVegPrice').val('6.59').toFixed(2);
  } else {
    $('.avocadoVegPrice').val('0.00');
  }
});

// albequerque turkey
$('.albequerque').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.albequerquePrice').val('6.99').toFixed(2);
  } else {
    $('.albequerquePrice').val('0.00');
  }
});

// pepperoni chicken
$('.pepperoniChicken').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.pepperoniChickenPrice').val('6.49').toFixed(2);
  } else {
    $('.pepperoniChickenPrice').val('0.00');
  }
});

// spicy chicken
$('.spicyChicken').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.spicyChickenPrice').val('6.49').toFixed(2);
  } else {
    $('.spicyChickenPrice').val('0.00');
  }
});

// cheesy veggie melt
$('.cheesyVeggie').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cheesyVeggiePrice').val('6.49').toFixed(2);
  } else {
    $('.cheesyVeggiePrice').val('0.00');
  }
});

// ham & swiss (deli ver.)
$('.hamDeli').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.hamDeliPrice').val('6.69').toFixed(2);
  } else {
    $('.hamDeliPrice').val('0.00');
  }
});

// turkey & cheddar
$('.turkeyCheddar').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.turkeyCheddarPrice').val('6.69').toFixed(2);
  } else {
    $('.turkeyCheddarPrice').val('0.00');
  }
});

// chicken salad
$('.chickenSalad').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.chickenSaladPrice').val('6.69').toFixed(2);
  } else {
    $('.chickenSaladPrice').val('0.00');
  }
});

// cpb
$('.cheesePizza').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.cheesePizzaPrice').val('5.79').toFixed(2);
  } else {
    $('.cheesePizzaPrice').val('0.00');
  }
});

// ppb
$('.pepperoniPizza').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.pepperoniPizzaPrice').val('5.99').toFixed(2);
  } else {
    $('.pepperoniPizzaPrice').val('0.00');
  }
});

// pumpkin muffin
$('.pumpkinMuffin').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.pumpkinMuffinPrice').val('2.39').toFixed(2);
  } else {
    $('.pumpkinMuffinPrice').val('0.00');
  }
});

// twice-baked hashbrown
$('.twiceBaked').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.twiceBakedPrice').val('1.39').toFixed(2);
  } else {
    $('.twiceBakedPrice').val('0.00');
  }
});

// blueberry muffin
$('.blueberryMuffin').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.blueberryMuffinPrice').val('2.39').toFixed(2);
  } else {
    $('.blueberryMuffinPrice').val('0.00');
  }
});

// greek yogurt cherry pastry
$('.greekYogurt').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.greekYogurtPrice').val('2.89').toFixed(2);
  } else {
    $('.greekYogurtPrice').val('0.00');
  }
});

// chocolate chip coffee cake
$('.coffeeCake').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.coffeeCakePrice').val('2.59').toFixed(2);
  } else {
    $('.coffeeCakePrice').val('0.00');
  }
});

// tasty turkey premade
$('.tastyGrab').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.tastyGrabPrice').val('6.99').toFixed(2);
  } else {
    $('.tastyGrabPrice').val('0.00');
  }
});

// caesar chopped salad
$('.caesarChopped').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.caesarChoppedPrice').val('6.99').toFixed(2);
  } else {
    $('.caesarChoppedPrice').val('0.00');
  }
});

// chicken caesar salad
$('.chickenCaesar').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.chickenCaesarPrice').val('6.99').toFixed(2);
  } else {
    $('.chickenCaesarPrice').val('0.00');
  }
});

// california turkey club wrap
$('.californiaTurkey').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.californiaTurkeyPrice').val('6.99').toFixed(2);
  } else {
    $('.californiaTurkeyPrice').val('0.00');
  }
});

// chicken bacon caesar wrap
$('.chickenBacon').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.chickenBaconPrice').val('6.99').toFixed(2);
  } else {
    $('.chickenBaconPrice').val('0.00');
  }
});

// fruit salad
$('.fruitSalad').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.fruitSaladPrice').val('2.99').toFixed(2);
  } else {
    $('.fruitSaladPrice').val('0.00');
  }
});

// superfood overnight oats
$('.superfood').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.superfoodPrice').val('3.49').toFixed(2);
  } else {
    $('.superfoodPrice').val('0.00');
  }
});

// berries and cream
$('.berriesCream').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.berriesCreamPrice').val('2.89').toFixed(2);
  } else {
    $('.berriesCreamPrice').val('0.00');
  }
});

// bagel chips
$('.bagelChips').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.bagelChipsPrice').val('1.29').toFixed(2);
  } else {
    $('.bagelChipsPrice').val('0.00');
  }
});

// brewedCoffeeM
$('.brewedCoffeeM').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.brewedCoffeeMPrice').val('2.29').toFixed(2);
 } else {
   $('.brewedCoffeeMPrice').val('0.00');
 }
});

// brewedCoffeeL
$('.brewedCoffeeL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.brewedCoffeeLPrice').val('2.49').toFixed(2);
 } else {
   $('.brewedCoffeeLPrice').val('0.00');
 }
});

// hotChocolateM
$('.hotChocolateM').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.hotChocolateMPrice').val('3.59').toFixed(2);
 } else {
   $('.hotChocolateMPrice').val('0.00');
 }
});

// hotChocolateL
$('.hotChocolateL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.hotChocolateLPrice').val('3.89').toFixed(2);
 } else {
   $('.hotChocolateLPrice').val('0.00');
 }
});

// hotTeaS
$('.hotTeaS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.hotTeaSPrice').val('1.99').toFixed(2);
 } else {
   $('.hotTeaSPrice').val('0.00');
 }
});

// hotTeaL
$('.hotTeaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.hotTeaLPrice').val('2.29').toFixed(2);
 } else {
   $('.hotTeaLPrice').val('0.00');
 }
});

// mochaM
$('.mochaM').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.mochaMPrice').val('4.49').toFixed(2);
 } else {
   $('.mochaMPrice').val('0.00');
 }
});

// mochaL
$('.mochaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.mochaLPrice').val('4.79').toFixed(2);
 } else {
   $('.mochaLPrice').val('0.00');
 }
});

// caramelMacM
$('.caramelMacM').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.caramelMacMPrice').val('4.99').toFixed(2);
 } else {
   $('.caramelMacMPrice').val('0.00');
 }
});

// caramelMacL
$('.caramelMacL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.caramelMacLPrice').val('5.19').toFixed(2);
 } else {
   $('.caramelMacLPrice').val('0.00');
 }
});

// latteM
$('.latteM').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.latteMPrice').val('3.99').toFixed(2);
 } else {
   $('.latteMPrice').val('0.00');
 }
});

// latteL
$('.latteL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.latteLPrice').val('4.19').toFixed(2);
 } else {
   $('.latteLPrice').val('0.00');
 }
});

// chaiTeaM
$('.chaiTeaM').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.chaiTeaMPrice').val('3.99').toFixed(2);
 } else {
   $('.chaiTeaMPrice').val('0.00');
 }
});

// chaiTeaL
$('.chaiTeaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.chaiTeaLPrice').val('4.19').toFixed(2);
 } else {
   $('.chaiTeaLPrice').val('0.00');
 }
});

// icedTeaS
$('.icedTeaS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedTeaSPrice').val('1.99').toFixed(2);
 } else {
   $('.icedTeaSPrice').val('0.00');
 }
});

// icedTeaL
$('.icedTeaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedTeaLPrice').val('2.19').toFixed(2);
 } else {
   $('.icedTeaLPrice').val('0.00');
 }
});

// iced mocha small
$('.icedMochaS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedMochaSPrice').val('4.59').toFixed(2);
 } else {
   $('.icedMochaSPrice').val('0.00');
 }
});

// iced mocha large
$('.icedMochaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedMochaLPrice').val('4.89').toFixed(2);
 } else {
   $('.icedMochaLPrice').val('0.00');
 }
});

// iced caramel macchiato small
$('.icedCaramelMacS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedCaramelMacSPrice').val('4.99').toFixed(2);
 } else {
   $('.icedCaramelMacSPrice').val('0.00');
 }
});

// iced caramel macchiato large
$('.icedCaramelMacL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedCaramelMacLPrice').val('5.19').toFixed(2);
 } else {
   $('.icedCaramelMacLPrice').val('0.00');
 }
});

// iced latte small
$('.icedLatteS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedLatteSPrice').val('3.69').toFixed(2);
 } else {
   $('.icedLatteSPrice').val('0.00');
 }
});

// iced latte large
$('.icedLatteL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedLatteLPrice').val('4.19').toFixed(2);
 } else {
   $('.icedLatteLPrice').val('0.00');
 }
});

// iced chai tea latte small
$('.icedChaiTeaS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedChaiTeaSPrice').val('3.99').toFixed(2);
 } else {
   $('.icedChaiTeaSPrice').val('0.00');
 }
});

// iced chai tea latte large
$('.icedChaiTeaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.icedChaiTeaLPrice').val('4.19').toFixed(2);
 } else {
   $('.icedChaiTeaLPrice').val('0.00');
 }
});

// cold brew small
$('.coldBrewS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.coldBrewSPrice').val('3.19').toFixed(2);
 } else {
   $('.coldBrewSPrice').val('0.00');
 }
});

// cold brew large
$('.coldBrewL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.coldBrewLPrice').val('3.49').toFixed(2);
 } else {
   $('.coldBrewLPrice').val('0.00');
 }
});

// flavor shot
$('.flavorShot').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.flavorShotPrice').val('0.80').toFixed(2);
 } else {
   $('.flavorShotPrice').val('0.00');
 }
});

// espresso shot
$('.espressoShot').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.espressoShotPrice').val('0.80').toFixed(2);
 } else {
   $('.espressoShotPrice').val('0.00');
 }
});

// almond milk
$('.almondMilk').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.almondMilkPrice').val('0.80').toFixed(2);
 } else {
   $('.almondMilkPrice').val('0.00');
 }
});

// strawberry banana smoothie small
$('.strawberryBananaS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.strawberryBananaSPrice').val('4.79').toFixed(2);
 } else {
   $('.strawberryBananaSPrice').val('0.00');
 }
});

// strawberry banana smoothie large
$('.strawberryBananaL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.strawberryBananaLPrice').val('5.09').toFixed(2);
 } else {
   $('.strawberryBananaLPrice').val('0.00');
 }
});

// cold brew shake small
$('.coldShakeS').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.coldShakeSPrice').val('4.59').toFixed(2);
 } else {
   $('.coldShakeSPrice').val('0.00');
 }
});

// cold brew shake large
$('.coldShakeL').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.coldShakeLPrice').val('5.29').toFixed(2);
 } else {
   $('.coldShakeLPrice').val('0.00');
 }
});

// pepsi
$('.pepsi').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.pepsiPrice').val('2.29').toFixed(2);
 } else {
   $('.pepsiPrice').val('0.00');
 }
});

// aquafina
$('.aquafina').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.aquafinaPrice').val('1.89').toFixed(2);
 } else {
   $('.aquafinaPrice').val('0.00');
 }
});

// gatorade
$('.gatorade').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.gatoradePrice').val('2.59').toFixed(2);
 } else {
   $('.gatoradePrice').val('0.00');
 }
});

// pure leaf
$('.pureLeaf').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.pureLeafPrice').val('2.60').toFixed(2);
 } else {
   $('.pureLeafPrice').val('0.00');
 }
});

// blackberry lemonade
$('.blackberry').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.blackberryPrice').val('2.29').toFixed(2);
 } else {
   $('.blackberryPrice').val('0.00');
 }
});

// fresh orange juice
$('.freshOrange').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.freshOrangePrice').val('2.79').toFixed(2);
 } else {
   $('.freshOrangePrice').val('0.00');
 }
});

// milk chug
$('.milkChug').on('click', function() {
 if ($(this).hasClass('clicked')) {
   $('.milkChugPrice').val('1.69').toFixed(2);
 } else {
   $('.milkChugPrice').val('0.00');
 }
});

// CALCULATE

let remainder1 = 6.00;

$('#calculate').on('click', function(myFunction) {
    var sum = 0;
  $(".price").each(function() {
    sum += +$(this).val();
  });
  var total = (sum).toFixed(2);
  $(".total").html('$' + total);
});

$("#reset").click(function() {
  $('.btn').removeClass('clicked');
  $('.total').html('$0.00');
});

// auto-update
$.getJSON("data.json", function(data) {
  console.log(data.item.food[0].bagels[0].classic[0].price);
  console.log(data.item.food[0].bagels[0].classic[0].name);
})
