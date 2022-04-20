// Created by: Emma Janani
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

//This function calculates temperature in Farenheit.

function calculateTemperature() {
  // get user input
  let celsius = parseFloat(document.getElementById("celsius").value);
  // calculate the temperature
  let fahrenheit = celsius * 9 / 5 + 32;
  // display the results
  document.getElementById("results").innerHTML = "The temperature will be " + fahrenheit.toFixed(2) + " degrees fahrenheit";
}
