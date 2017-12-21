var $          = require('jquery')
var searchHelper = require('../helpers/search')

var appendPosts = function(data) {
  data.forEach(function(food){
    $('.food-table').prepend(`<tr data-id="${food.id}">
    <td class="food" name="name"contenteditable="true">${food.name}</td>
    <td class="food" name="calories" contenteditable="true">${food.calories}</td>
    <td class="delete-cell"><i class="delete-button fa fa-minus-circle" aria-hidden="true"></i></td></tr>`)
  })
}

var postToFood = function(data) {
  $('.food-table').prepend(`<tr data-id="${data.id}"><td contenteditable="true">
    ${data.name}</td><td contenteditable="true">${data.calories}</td>
    <td class="delete-cell">
    <i class="delete-button fa fa-minus-circle" aria-hidden="true"></i></td></tr>`)
  $("#new_food").trigger('reset');
  return false;
}

var searchTable = function(value) {
  $(".food-table-body tr").each(function() {
    searchHelper.searchFood(value, $(this));
  })
}

var errorLog = function(data) {
  console.error(data)
}

module.exports = {
  appendPosts,
  errorLog,
  searchTable,
  postToFood
}
