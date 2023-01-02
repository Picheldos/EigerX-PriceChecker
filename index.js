const priceCheck = (products, productPrices, productSold, soldPrice) => {
    let incorrectCount = 0;
    productSold.forEach((product, index) => {
        let productIndex = products.indexOf(product);
        if (productIndex === -1 || productPrices[productIndex] !== soldPrice[index]) {
            incorrectCount++;
        }
    });
    return incorrectCount;
};

const products = ['eggs', 'milk', 'cheese'];
const productPrices = [2.89, 3.29, 5.79];
const productSold = ['eggs', 'eggs', 'cheese', 'milk'];
const soldPrice = [2.89, 2.99, 5.97, 3.29];

console.log(priceCheck(products, productPrices, productSold, soldPrice));