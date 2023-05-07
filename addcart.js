//Declaring variables and constants
//Products
var num_AlmondChoco = 0;
var num_BlackMochi = 0;
var num_EggletteCube = 0;
var num_GarlicSausage = 0;

var num_AlmondDanish = 0;
var num_Chocolava = 0;
var num_FruityDanish = 0;
var num_FrenchCroissant = 0;

var num_AlmondRoll = 0;
var num_GrainBread = 0;
var num_Fromage = 0;
var num_OreoMilkChoco = 0;

var num_CherryEuro = 0;
var num_ChiliChickenEuro = 0;
var num_GrapeEuro = 0;
var num_SichuanEuro = 0;

var num_CranberryStick = 0;
var num_FrenchBaguette = 0;
var num_FrenchBrulee = 0;
var num_FrenchGarlic = 0;

var num_ChocoToast = 0;
var num_GrainToast = 0;
var num_CheeseToast = 0;
var num_RaisinToast = 0;

var num_Item = 0;

const unitPrice_AlmondChoco = 3.00;
const unitPrice_BlackMochi = 4.50;
const unitPrice_EggletteCube = 4.60;
const unitPrice_GarlicSausage = 3.40;

const unitPrice_AlmondDanish = 3.70;
const unitPrice_Chocolava = 6.70;
const unitPrice_FruityDanish = 4.80;
const unitPrice_FrenchCroissant = 3.40;

const unitPrice_AlmondRoll = 5.80;
const unitPrice_GrainBread = 6.00;
const unitPrice_Fromage = 6.10;
const unitPrice_OreoMilkChoco = 4.90;

const unitPrice_CherryEuro = 7.90;
const unitPrice_ChiliChickenEuro = 8.90;
const unitPrice_GrapeEuro = 8.90;
const unitPrice_SichuanEuro = 4.40;

const unitPrice_CranberryStick = 4.10;
const unitPrice_FrenchBaguette = 3.70;
const unitPrice_FrenchBrulee = 3.80;
const unitPrice_FrenchGarlic = 4.90;

const unitPrice_ChocoToast = 5.00;
const unitPrice_GrainToast = 5.00;
const unitPrice_CheeseToast = 5.20;
const unitPrice_RaisinToast = 4.40;


//Storing the products
const itemList = 
    ["Almond Choco", "Black Sugar Pulled Mochi", "Cheesy Egglette Cube", "Garlic Sausage", 
    "Buttery Almond Danish", "Chocolava Croissant", "Fruity Danish", "French Croissant", 
    "Almond Roll Raisin Walnut", "Dark Seed Grain Bread", "Fromage", "Oreo Soft Milk Chocolate", 
    "Cranberry Walnut Stick", "French Baguette", "French Brulee", "French Garlic", 
    "Cherry Fantasy Soft Euro", "Chili Minced Chicken Soft Euro", "Green Grape Soft Euro", "Sichuan Chili Crab Soft Euro", 
    "Chocolate Toast", "Dark Seed Grain Toast", "Golden Cheese Toast", "Raisin Toast"];

const item_UPrice = 
    [unitPrice_AlmondChoco, unitPrice_BlackMochi, unitPrice_EggletteCube, unitPrice_GarlicSausage, 
    unitPrice_AlmondDanish, unitPrice_Chocolava, unitPrice_FruityDanish, unitPrice_FrenchCroissant, 
    unitPrice_AlmondRoll, unitPrice_GrainBread, unitPrice_Fromage, unitPrice_OreoMilkChoco, 
    unitPrice_CherryEuro, unitPrice_ChiliChickenEuro, unitPrice_GrapeEuro, unitPrice_SichuanEuro, 
    unitPrice_CranberryStick, unitPrice_FrenchBaguette, unitPrice_FrenchBrulee, unitPrice_FrenchGarlic, 
    unitPrice_ChocoToast, unitPrice_GrainToast, unitPrice_CheeseToast, unitPrice_RaisinToast];

var item_Added = 
    [num_AlmondChoco, num_BlackMochi, num_EggletteCube,num_GarlicSausage,
    num_AlmondDanish, num_Chocolava, num_FruityDanish, num_FrenchCroissant,
    num_AlmondRoll, num_GrainBread, num_Fromage, num_OreoMilkChoco,
    num_CherryEuro, num_ChiliChickenEuro, num_GrapeEuro, num_SichuanEuro,
    num_CranberryStick, num_FrenchBaguette, num_FrenchBrulee, num_FrenchGarlic,
    num_ChocoToast, num_GrainToast, num_CheeseToast, num_RaisinToast];

var remove_AlmondChoco = document.querySelector("#remove_AlmondChoco");
var remove_BlackMochi = document.querySelector("#remove_BlackMochi");
var remove_EggletteCube = document.querySelector("#remove_EggletteCube");
var remove_GarlicSausage = document.querySelector("#remove_GarlicSausage");

var remove_AlmondDanish = document.querySelector("#remove_AlmondDanish");
var remove_Chocolava = document.querySelector("#remove_Chocolava");
var remove_FruityDanish = document.querySelector("#remove_FruityDanish");
var remove_FrenchCroissant = document.querySelector("#remove_FrenchCroissant");

var remove_AlmondRoll = document.querySelector("#remove_AlmondRoll");
var remove_GrainBread = document.querySelector("#remove_GrainBread");
var remove_Fromage = document.querySelector("#remove_Fromage");
var remove_OreoMilkChoco = document.querySelector("#remove_OreoMilkChoco");

var remove_CherryEuro = document.querySelector("#remove_CherryEuro");
var remove_ChiliChickenEuro = document.querySelector("#remove_ChiliChickenEuro");
var remove_GrapeEuro = document.querySelector("#remove_GrapeEuro");
var remove_SichuanEuro = document.querySelector("#remove_SichuanEuro");

var remove_CranberryStick = document.querySelector("#remove_CranberryStick");
var remove_FrenchBaguette = document.querySelector("#remove_FrenchBaguette");
var remove_FrenchBrulee = document.querySelector("#remove_FrenchBrulee");
var remove_FrenchGarlic = document.querySelector("#remove_FrenchGarlic");

var remove_ChocoToast = document.querySelector("#remove_ChocoToast");
var remove_GrainToast = document.querySelector("#remove_GrainToast");
var remove_CheeseToast = document.querySelector("#remove_CheeseToast");
var remove_RaisinToast = document.querySelector("#remove_RaisinToast");


//Declaring functions
function selectItem(item){
    switch (item){
        case 'almondChoco':
            num_item++;
            item_Added[0]++;
            remove_AlmondChoco.disabled = false;
            break;
        
        case 'blackMochi':
            num_item++;
            item_Added[1]++;
            remove_BlackMochi.disabled = false;
            break;
        
        case 'eggletteCube':
            num_item++;
            item_Added[2]++;
            remove_EggletteCube.disabled = false;
            break;
        
        case 'garlicSausage':
            num_item++;
            item_Added[3]++;
            remove_GarlicSausage.disabled = false;
            break;
        
        case 'almondDanish':
            num_item++;
            item_Added[4]++;
            remove_AlmondDanish.disabled = false;
            break;
        
        case 'chocolava':
            num_item++;
            item_Added[5]++;
            remove_Chocolava.disabled = false;
            break;
        
        case 'fruityDanish':
            num_item++;
            item_Added[6]++;
            remove_FruityDanish.disabled = false;
            break;
        
        case 'frenchCroissant':
            num_item++;
            item_Added[7]++;
            remove_FrenchCroissant.disabled = false;
            break;
        
        case 'almondRoll':
            num_item++;
            item_Added[8]++;
            remove_AlmondRoll.disabled = false;
            break;
        
        case 'grainBread':
            num_item++;
            item_Added[9]++;
            remove_GrainBread.disabled = false;
            break;
        
        case 'fromage':
            num_item++;
            item_Added[10]++;
            remove_Fromage.disabled = false;
            break;
        
        case 'oreomilkChoco':
            num_item++;
            item_Added[11]++;
            remove_OreomilkChoco.disabled = false;
            break;
                                        
        case 'cherryEuro':
            num_item++;
            item_Added[12]++;
            remove_CherryEuro.disabled = false;
            break;

        case 'chiliChickenEuro':
            num_item++;
            item_Added[13]++;
            remove_ChiliChickenEuro.disabled = false;
            break;
    
        case 'grapeEuro':
            num_item++;
            item_Added[14]++;
            remove_GrapeEuro.disabled = false;
            break;
        
        case 'sichuanEuro':
            num_item++;
            item_Added[15]++;
            remove_SichuanEuro.disabled = false;
            break;
            
        case 'cranberryStick':
            num_item++;
            item_Added[16]++;
            remove_CranberryStick.disabled = false;
            break;
                
        case 'frenchBaguette':
            num_item++;
            item_Added[17]++;
            remove_FrenchBaguette.disabled = false;
            break;
        
        case 'frenchBrulee':
            num_item++;
            item_Added[18]++;
            remove_FrenchBrulee.disabled = false;
            break;
                        
        case 'frenchGarlic':
            num_item++;
            item_Added[19]++;
            remove_FrenchGarlic.disabled = false;
            break;
                            
        case 'chocoToast':
            num_item++;
            item_Added[20]++;
            remove_ChocoToast.disabled = false;
            break;
        
        case 'grainToast':
            num_item++;
            item_Added[21]++;
            remove_GrainToast.disabled = false;
            break;
        
        case 'cheeseToast':
            num_item++;
            item_Added[22]++;
            remove_CheeseToast.disabled = false;
            break;
        
        case 'raisinToast':
            num_item++;
            item_Added[23]++;
            remove_RaisinToast.disabled = false;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }

    displayCart()
}

function removeItem(item){
    switch (item){
        case 'almondChoco':
            num_item--;
            item_Added[0]--;
            if (item_Added[0] <= 0){
                remove_AlmondChoco.disabled = true;
            }
            break;
        
        case 'blackMochi':
            num_item--;
            item_Added[1]--;
            if (item_Added[1] <= 0){
                remove_BlackMochi.disabled = true;
            }
            break;
        
        case 'eggletteCube':
            num_item--;
            item_Added[2]--;
            if (item_Added[2] <= 0){
                remove_EggletteCube.disabled = true;
            }
            break;
        
        case 'garlicSausage':
            num_item--;
            item_Added[3]--;
            if (item_Added[3] <= 0){
                remove_GarlicSausage.disabled = true;
            }
            break;
        
        case 'almondDanish':
            num_item--;
            item_Added[4]--;
            if (item_Added[4] <= 0){
                remove_AlmondDanish.disabled = true;
            }
            break;
        
        case 'chocolava':
            num_item--;
            item_Added[5]--;
            if (item_Added[5] <= 0){
                remove_Chocolava.disabled = true;
            }
            break;
        
        case 'fruityDanish':
            num_item--;
            item_Added[6]--;
            if (item_Added[6] <= 0){
                remove_FruityDanish.disabled = true;
            }
            break;
        
        case 'frenchCroissant':
            num_item--;
            item_Added[7]--;
            if (item_Added[7] <= 0){
                remove_FrenchCroissant.disabled = true;
            }
            break;
        
        case 'almondRoll':
            num_item--;
            item_Added[8]--;
            if (item_Added[8] <= 0){
                remove_AlmondRoll.disabled = true;
            }
            break;
        
        case 'grainBread':
            num_item--;
            item_Added[9]--;
            if (item_Added[9] <= 0){
                remove_GrainBread.disabled = true;
            }
            break;
        
        case 'fromage':
            num_item--;
            item_Added[10]--;
            if (item_Added[10] <= 0){
                remove_Fromage.disabled = true;
            }
            break;
        
        case 'oreomilkChoco':
            num_item--;
            item_Added[11]--;
            if (item_Added[11] <= 0){
                remove_OreomilkChoco.disabled = true;
            }
            break;
                                        
        case 'cherryEuro':
            num_item--;
            item_Added[12]--;
            if (item_Added[12] <= 0){
                remove_CherryEuro.disabled = true;
            }
            break;

        case 'chiliChickenEuro':
            num_item--;
            item_Added[13]--;
            if (item_Added[13] <= 0){
                remove_ChiliChickenEuro.disabled = true;
            }
            break;
    
        case 'grapeEuro':
            num_item--;
            item_Added[14]--;
            if (item_Added[14] <= 0){
                remove_GrapeEuro.disabled = true;
            }
            break;
        
        case 'sichuanEuro':
            num_item--;
            item_Added[15]--;
            if (item_Added[15] <= 0){
                remove_SichuanEuro.disabled = true;
            }
            break;
            
        case 'cranberryStick':
            num_item--;
            item_Added[16]--;
            if (item_Added[16] <= 0){
                remove_CranberryStick.disabled = true;
            }
            break;
                
        case 'frenchBaguette':
            num_item--;
            item_Added[17]--;
            if (item_Added[17] <= 0){
                remove_FrenchBaguette.disabled = true;
            }
            break;
        
        case 'frenchBrulee':
            num_item--;
            item_Added[18]--;
            if (item_Added[18] <= 0){
                remove_FrenchBrulee.disabled = true;
            }
            break;
                        
        case 'frenchGarlic':
            num_item--;
            item_Added[19]--;
            if (item_Added[19] <= 0){
                remove_FrenchGarlic.disabled = true;
            }
            break;
                            
        case 'chocoToast':
            num_item--;
            item_Added[20]--;
            if (item_Added[20] <= 0){
                remove_ChocoToast.disabled = true;
            }
            break;
        
        case 'grainToast':
            num_item--;
            item_Added[21]--;
            if (item_Added[21] <= 0){
                remove_GrainToast.disabled = true;
            }
            break;
        
        case 'cheeseToast':
            num_item--;
            item_Added[22]--;
            if (item_Added[22] <= 0){
                remove_CheeseToast.disabled = true;
            }
            break;
        
        case 'raisinToast':
            num_item--;
            item_Added[23]--;
            if (item_Added[23] <= 0){
                remove_RaisinToast.disabled = true;
            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }

    displayCart()
}


function displayCart(){
    const cartList = document.getElementById('purchaseList');
    const totalValue = document.getElementById('totalPrice');
    var total = 0
    var item_Total = 0

    purchaseList.innerHTML = "";
    totalPrice.innerHTML = "";

    for (var i = 0; i < item_Added.length; i++){
        
        if (item_Added[i] != 0){
            item_Total = item_UPrice[i] * item_Added[i];
            total += item_Total;
            
            const rowProduct = document.createElement('tr');
            rowProduct.innerHTML = 
                "<td height=30px> <i>" + itemList[i] + "</i></td>" +
                "<td class='value'>RM" + item_UPrice[i].toFixed(2) + "</td>" +
                "<td class='value'>" + item_Added[i] + "</td>" +
                "<td class='value'>RM" + item_Total.toFixed(2) + "</td>";

            
            cartList.appendChild(rowProduct);
        }
    }

    const rowTotal = document.createElement('tr');
    rowTotal.innerHTML =
        "<td colspan='3'> <i>Total</i> </td>" +
        "<td class='value' style='font-weight:bold'>RM" + total.toFixed(2) + "</td>";
    
    totalValue.appendChild(rowTotal);

}