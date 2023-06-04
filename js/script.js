$(function() {
  main();
});
window.onpopstate = function() {
  main();
};
function main() {
  setTimeout(function() {
    let listOfElements = $("#root > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div:not(:nth-child(1)) > div > div > div > div:nth-child(2) > div:nth-child(1)");

    $.each(listOfElements, function(index, elem) {
      $(elem).parent().parent().parent().css("background-color", localStorage.getItem("deck" + index));
      $(elem).children("div:nth-child(1)").css("color", localStorage.getItem(("deck-text" + index)));
    });

    $.each(listOfElements, function(index, elem) {
      let input = $("<input value='" + localStorage.getItem('deck' + index) + "' class=\"background-color-picker\" type=\"color\">");
      let textInput = $("<img src='https://www.svgrepo.com/show/512971/text-style-1212.svg'><input value='" + localStorage.getItem('deck-text' + index) + "' class=\"text-color-picker\" type=\"color\">");

      input.on('click', function(event) {
        event.stopPropagation();
      });

      input.on('input', function(event) {
        console.log(event.target.value);
        let value = event.target.value;
        let arr = value.substring(1, value.lenght).match(/.{1,2}/g);
        $(elem).parent().parent().parent().css("background-color", event.target.value);
        localStorage.setItem(("deck" + index), event.target.value);
      });

      textInput.on('input', function(event) {
        $(elem).children("div:nth-child(1)").css("color", event.target.value);
        localStorage.setItem(("deck-text" + index), event.target.value);
      });

      textInput.on('click', function(event) {
        event.stopPropagation();
      });

      $(elem).parent().on("mouseenter", function(event) {
        event.stopPropagation();
        $(elem).after(input);
        $(elem).after(textInput);
      }).on("mouseleave", function(event) {
        input.detach();
        textInput.detach();
      });
    });
  }, 500);
}$(function() {
  main();
});

window.onpopstate = function() {
  main();
};

function main() {
  setTimeout(function() {
    let listOfElements = $("#root > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > div:not(:nth-child(1)) > div > div > div > div:nth-child(2) > div:nth-child(1)");

    $.each(listOfElements, function(index, elem) {
      $(elem).parent().parent().parent().css("background-color", localStorage.getItem("deck" + index));
      $(elem).children("div:nth-child(1)").css("color", localStorage.getItem(("deck-text" + index)));
    });

    $.each(listOfElements, function(index, elem) {
      let input = $("<input value='" + localStorage.getItem('deck' + index) + "' class=\"background-color-picker\" type=\"color\">");
      let textInput = $("<img src='https://www.svgrepo.com/show/512971/text-style-1212.svg'><input value='" + localStorage.getItem('deck-text' + index) + "' class=\"text-color-picker\" type=\"color\">");

      input.on('click', function(event) {
        event.stopPropagation();
      });

      input.on('input', function(event) {
        console.log(event.target.value);
        let value = event.target.value;
        let arr = value.substring(1, value.lenght).match(/.{1,2}/g);
        $(elem).parent().parent().parent().css("background-color", event.target.value);
        localStorage.setItem(("deck" + index), event.target.value);
      });

      textInput.on('input', function(event) {
        $(elem).children("div:nth-child(1)").css("color", event.target.value);
        localStorage.setItem(("deck-text" + index), event.target.value);
      });

      textInput.on('click', function(event) {
        event.stopPropagation();
      });

      $(elem).parent().on("mouseenter", function(event) {
        event.stopPropagation();
        $(elem).after(input);
        $(elem).after(textInput);
      }).on("mouseleave", function(event) {
        input.detach();
        textInput.detach();
      });
    });
  }, 550);
}