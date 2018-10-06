
$('#clearButton').on('click', function() {
    $('#search-term').val("");
    $('#numResponses').val("3");
    $('#startYear').val("");
    $('#endYear').val("");
    $('.responses').empty();
});

let numResponses = 0;

$('#searchButton').on('click', function(){
    $('.responses').empty();

    let searchTerm = $('#search-term').val();
    numResponses = $('#numResponses').val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key=18f6498c38d446bba98c7f93f7e54659";
    
    $.ajax({
    url: queryURL,
    method: 'GET',
    }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    for(let i = 0; i<parseInt(numResponses);i++){
        let articleDiv = $('<div>');
        articleDiv.addClass('article');
        let link = $('<a>').attr('href', response.response.docs[i].web_url);
        link.attr('target', '_blank');
        link.text(response.response.docs[i].headline.main);
        articleDiv.append(link);
        $('.responses').prepend(articleDiv);
    }
    });
    $('#search-term').val("");
    $('#numResponses').val("3");
    $('#startYear').val("");
    $('#endYear').val("");
    
});

