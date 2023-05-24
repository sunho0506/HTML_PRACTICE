$(() => {
  $(".click_button").click(() => {
    $(".chat_box").dialog({
      width: 900,
      height: 650,
      title: "InHaChat",
    });
  });
});
