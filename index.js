// use CDN jQuery
//link js file in html
//js links at bottom of <body>
//do not alter index.html or main.css
//read/use .submit() .preventDefault() .toggleClass() .closest()

//start with .submit()

//submit for -> prevent default -> add 'shopping-list-entry' text as new shopping item li with buttons

$("form").submit(function( event ) {
    // add .preventDefault()
    event.preventDefault();

})

//test /toggleClass()

//click check -> strikethrough 'shopping-item' / click check -> un-strikethrough 'shopping-item

$( document ).on( "click", function( event ){
    $( event.target ).parent( "span", "check" ).toggleClass( "shopping-item__checked" );
})

// check delete -> remove li and contents