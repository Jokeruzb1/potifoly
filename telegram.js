function send() {
    sendtelegram('Abujafar');
}

// // sendtelegram
// function sendtelegram(message) {
//     let telegram_bot_id = "66952617598:AAHlBStAqwB1DTXjgXKX1UddDnHyHQb6_1E";
//     // let chat_id = 1926484196;
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://t.me/almadrasataklifbot" + telegram_bot_id + "/sendMessage",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message
//         })
//     };
//     $.ajax(settings).done(function(response) {});
// };

function sendtelegram(message) {
    let telegram_bot_id = "6964554576:AAFR00XNnoRcaYrFCSkXtqKPIe34ojBVuAw";
    let chat_id = 6029611486;
    let settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({ chat_id: chat_id, text: message }),
    };
    $.ajax(settings).done(function (response) { });
  }