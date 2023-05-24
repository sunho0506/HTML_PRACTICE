$(() => {
  let check = false;

  $(".click_button").click(() => {
    check = true;
    if (check == true) {
      $(".chat_box").dialog({
        width: 900,
        height: 650,
        title: "InHaChat",
      });
    }
  });
});
