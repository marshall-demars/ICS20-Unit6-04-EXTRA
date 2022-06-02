// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-04-EXTRA/sw.js", {
    scope: "/ICS20-Unit6-04-EXTRA/",
  })
}

"use strict"

window.onload = function() {
  // this calculates area of a rectangle

  const params = new URLSearchParams(document.location.search)
  
  // input
  const length = params.get('a')
  const width = params.get('b')

  // process
  const area = length * width
  const dimensions = "<ul>\n<li>a = " + length + "</li>\n<li>b = " + width

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}