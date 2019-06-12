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
    let newShopItem =`<li>
        <span class="shopping-item">` + $("#shopping-list-entry").val() + `</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
        </li>`;
    $("ul").append(newShopItem);
    let test = $("#shopping-list-entry").val();
    console.log(test);
    $(".shopping-list-entry")[0].reset();
})

//test /toggleClass()

//click check -> strikethrough 'shopping-item' / click check -> un-strikethrough 'shopping-item

$( document ).on( "click", function( event ){
    $( event.target ).parent( "span", "check" ).toggleClass( "shopping-item__checked" );
})

// check delete -> remove li and contents