// index.js
// const app = getApp()

Page({
    data: {
        buttons: [{
                text: "取消"
            },
            {
                text: "确认"
            },
        ]
    },

    tapDialogButton: function (events) {
        console.log(events);
    }
});