const my_array = [10, 20, 30];
console.log(my_array);
console.log(my_array[0]);
console.log(my_array[1]);
my_array[0] = 99;
console.log(my_array);

let food = ["burger", "pizza", "wings", "tacos", "nuggets"];
console.log(food);
console.log(food.length);
food.push("nachos");
console.log(food);
food.splice(1, 1);
console.log(food);

let colors = [
    "red", 
    "blue", 
    "green"
];
console.log(colors);

let mixed = ["hello", 42, true, null];
console.log(mixed);

let cities = ["Atlanta", "New York City", "Los Angeles", "Mexico City"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
cities[cities.length - 1] = "Houston";
console.log(cities);

let numbers = [3, 67, 1];
numbers.push(4, 5, 6);
console.log(numbers);
let last_item = numbers[numbers.length - 1];
console.log(last_item);

//list of favourite foods
const foods = ["burger", "pizza", "wings", "tacos", "nuggets"];
const list = document.querySelector("#food_list");

for (let i = 0; i < foods.length; i++) {
    const li = document.createElement("li");
    li.textContent = foods[i];
    list.appendChild(li);
}

//random quote generator
const quotes = [
    "Believe in yourself!",
     "Keep going, you're doing great!", 
     "Never stop learning.",
     "Strive for progress, not perfection.",
     "Every day is a second chance."
];

function show_quote() {
    document.querySelector("#quote_display").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

//search for a value in an array
const names = ["Kayla", "Chris", "Jordan", "Ava", "Miles"];

function search_name() {
    const user_input = document.querySelector("#search_box").value.trim();
    const result = names.includes(user_input);

    document.querySelector("#search_result").textContent = result ? `${user_input} is in the list.` : `${user_input} was not found.`
}

//image gallery with Next/Prev buttons
const images = [
    "https://via.placeholder.com/200x150?text=1",
    "https://via.placeholder.com/200x150?text=2",
    "https://via.placeholder.com/200x150?text=3"
]
let index = 0;

function show_image() {
    document.querySelector("#gallery").src = images[index];
}
function next_image() {
    index = (index + 1) % images.length;
    show_image();
}
function next_image() {
    index = (index - 1 + images.length) % images.length;
    show_image();
}

//change page background color
const colors_list = ["lightblue", "red", "green", "yellow", "chartreuse"];
let color_index = 0;

function change_color() {
    document.body.style.backgroundColor = colors[color_index];
    color_index = (color_index + 1) % colors.length;
}
