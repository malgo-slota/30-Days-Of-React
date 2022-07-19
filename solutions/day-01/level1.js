//1. Declare an empty array;
const arr = [];
//2. Declare an array with more than 5 number of elements
const coffeeTypes = Array('espresso', 'latte', 'cappuccino', 'cold brew', 'ristretto', 'flat white', 'americano');
//3. Find the length of your array
const coffeeTypesLength = coffeeTypes.length;
//4. Get the first item, the middle item and the last item of the array
const first = coffeeTypes[0];
const middle = coffeeTypes[(coffeeTypesLength-1)/2];
const last = coffeeTypes[coffeeTypesLength-1];
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [23, 'Tom', 4, 'Jerry', ['cat','mouse', 2], {name: 'Gary', age: 34}];
const mixedDataTypesLength = mixedDataTypes.length;
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7. Print the array using console.log()
console.log(itCompanies);
//8. Print the number of companies in the array
console.log(itCompanies.length);
//9. Print the first company, middle and last company
console.log('first: ' + itCompanies[0] + ' middle: ' + itCompanies[(itCompanies.length-1)/2] + ' last: ' + itCompanies[itCompanies.length-1]);
//10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]); 
};
//11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(item => {
    console.log(item.toUpperCase());
});
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const lastItem = itCompanies.pop();
console.log(
    itCompanies.join(', ') + ' and ' + lastItem + ' are big IT companies.'
);
itCompanies.push(lastItem);
//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.indexOf('Apple') !== -1 ? 'Apple' : 'a company is not found';
//14. Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach(company => {
    let count = 0;
    company.toLowerCase().split('').forEach(letter => {
        if (letter === 'o') { 
            count +=1; 
            if(count >= 2) {
                console.log(company);
            } 
        }    
    });
});
// 15. Sort the array using sort() method
itCompanies.slice().sort();
// 16. Reverse the array using reverse() method
itCompanies.slice().reverse();
// 17. Slice out the first 3 companies from the array
itCompanies.slice(0,3);
// 18. Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length-3, itCompanies.length);
// 19. Slice out the middle IT company or companies from the array
itCompanies.slice((itCompanies.length/2), (itCompanies.length/2)+1);
// 20. Remove the first IT company from the array
itCompanies.slice().shift();
// 21. Remove the middle IT company or companies from the array
itCompanies.splice((itCompanies.length/2)-1,1);
// 22. Remove the last IT company from the array
itCompanies.slice().pop();
// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);