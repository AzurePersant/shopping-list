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
    // variable to add HTML
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
    //adding new list item to UL
    $("ul").append(newShopItem);
    //test to obtain form entry
    let test = $("#shopping-list-entry").val();
    console.log(test);
    //reset form entry
    $("#shopping-list-entry").val("");
})

//test /toggleClass()

//click check -> strikethrough 'shopping-item' / click check -> un-strikethrough 'shopping-item

$(document).click(function(){
    $("#shopping-item").toggleClass("shopping-item__checked");
    let span_Text = document.getElementsByClassName("shopping-item").innerText;
    //figure out how to select text
    console.log(span_Text);
})

// check delete -> remove li and contents