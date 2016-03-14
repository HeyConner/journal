var Entry = require('./../js/journal.js').Text;

  $(document).ready(function(){
    $('#entry')submit(function(event){
      event.preventDefault();
      var title = ('#title').val();
      var body = ('#body').val();
      var newEntry = new Entry(title, body);

      newEntry.getWordCount();

      $('#posts').append(
        '<div class="post">' +
          '<span class="headingPost"></span><br>' +
          '<span class="entryPost"></span><br>' +
          '<span class="count"></span><br>' +
          '<span class="createdAt"></span><br>' +
          '</div>'
        );
    $('.headingPost').last().append(newEntry.title);
    $('.entryPost').last().append(newEntry.body);
    $('.count').last().append(newEntry.wordCount);
    $('.createdAt').last().append(newEntry.createdAt);
  });
});
