var $ = require('jquery')
var foodHandlers = require('../response-handlers/foods')
var url = 'https://quantified-self-api-aa-ya.herokuapp.com/api/v1/foods'
var mealsUrl = 'https://quantified-self-api-aa-ya.herokuapp.com/api/v1/meals'

var populateFoods = function () {
  $.getJSON(url)
  .then(foodHandlers.appendPosts)
  .catch(foodHandlers.errorLog)
}

var postFood = function (foodPost) {
  $.ajax({
    type: 'POST',
    url: url,
    data: foodPost,
    dataType: 'json'
  })
  .then(foodHandlers.postToFood)
  .catch(function (error) {
    alert('Request could not be processed.')
  })
}

var editFoodRequest = function editFoodRequest(inputData, foodId) {
  $.ajax({
    type: 'PATCH',
    url: `${url}/${foodId}`,
    data: inputData,
  })
  .catch(function (error) {
    alert('Request could not be processed.')
  })
}

var deleteFood = function () {
  var target = $(event.target)
  var foodId = target.closest('tr').data('id')
  var mealIds = []
  $.get(mealsUrl).then(function (data) {
    data.filter(function (meal) {
      meal.foods.forEach(function (food) {
        if (food.id === foodId) {
          mealIds.push(meal.id)
        }
      })
    })
  }).then(function () {
    deleteFoodsCallDelegator(foodId, mealIds, target)
  })
}

function deleteFoodsFromMeals (foodId, mealIds) {
  return mealIds.map(function (id) {
    $.ajax({
      url: `${mealsUrl}/${id}/foods/${foodId}`,
      type: 'DELETE',
      dataType: 'json'
    })
  })
}

function deleteFoodFromDB (foodId) {
  return $.ajax({
    url: `${url}/${foodId}`,
    type: 'DELETE',
    dataType: 'json'
  })
}

function deleteFoodsCallDelegator (foodId, mealIds, target) {
  var mealPromises = deleteFoodsFromMeals(foodId, mealIds);
  Promise.all(mealPromises)
  .then(function () {
    deleteFoodFromDB(foodId)
  })
  .then(function (data) {
    target.closest('tr').remove()
  })
  .catch(function (error) {
    alert('food not deleted')
  })
}


module.exports = {
  populateFoods,
  postFood,
  deleteFood,
  editFoodRequest
}
