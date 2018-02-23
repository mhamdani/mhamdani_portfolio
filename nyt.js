fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' + '2a6ff788cc214c088bc32b87e3894107', {
    method: 'get',
  })
  .then(response => { return response.json(); })
  .then(json => { console.log(json); });

  nytimesBestSellers.results.forEach(function(book) {
  var isbn = book.isbns[1].isbn10;
  var bookInfo = book.book_details[0];
  var lastWeekRank = book.rank_last_week || ‘n/a’;
  var weeksOnList = book.weeks_on_list || ‘New this week’;
  // ...
});
