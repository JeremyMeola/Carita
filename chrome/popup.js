// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
var charity_name;
var char_num = 0;
chrome.history.search({text:""}, function(res) {
    fetch('http://128.237.165.126:8000', {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(res)
    }).then(function (response) {
      return response.json()
    })
    .then(function(blob){
      charity_name = blob;
      console.log(blob);
    document.getElementById("info").textContent = "Learn More About " + charity_name[char_num].name;
    document.getElementById("info").setAttribute('href', charity_name[char_num].link);})
  })
document.addEventListener('DOMContentLoaded',function(){
  console.log(document.getElementById('info'));
  window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.windows.create({url:e.target.href});
  }
})

document.querySelector('.donate').addEventListener('click',function()
{
    var entry = document.getElementById('money').value;
    if(entry !== "")
    {
      if (!isNaN(entry))
      {
        fetch('http://128.237.165.126:8000/donate', {
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({'Name': charity_name[char_num].name,
         'Amount': entry})
    }).then(function (response) {
      return response.json()
    })
        document.getElementById("info").textContent = "Thank you for donating!";
      }
      else
      {
        alert("Amount Invalid")
      }
    }
    else
    {
      alert("Please Enter a Donation Amount")
    }
})
document.querySelector('.nothanks').addEventListener('click',function()
{
    if(char_num < 2)
    {
        char_num = char_num+1;
    }
    console.log(char_num)
    document.getElementById("info").textContent = "Learn More About " + charity_name[char_num].name;
    document.getElementById("info").setAttribute('href', charity_name[char_num].link);
})

})
