var botui = new BotUI('my-bot');

botui.message.bot({
    delay: 500,
    loading: true,
    content: 'Hi There! 🖐'
}).then(function() {
    botui.message.bot({
        delay: 1000,
        loading: true,
        content: "My name is Darpit Chaudhary and I'm from India 🇮🇳"
    }).then(function() {
        botui.message.bot({
            delay: 1000,
            loading: true,
            content: '..and I look weird as this 🤓![my-image](./resources/images/darpit.jpeg)'
        }).then(function() {
            botui.message.bot({
                delay: 1000,
                loading: true,
                content: "I'm a software engineer with 3 years of experience"
            }).then(function () {
                botui.message.human({
                    delay: 1000,
                    loading: true,
                    content: "Woah! 3 Years ...that's awesome 😲"
                }).then(function() {
                    botui.message.bot({
                        delay: 1000,
                        loading: true,
                        content: "Yup! but I wanted to study more 📖 ![study](./resources/images/study.gif)"
                    }).then(function() {
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: "So... I'm a master's student 🎓 at Northeastern University in Boston 🇺🇸"
                        }).then(function (){
                            botui.message.bot({
                                content: "![neu](./resources/images/neu.jpeg)"
                            }).then(function() {
                                botui.message.human({
                                    delay: 1000,
                                    loading: true,
                                    content: "Impressive 👏 What else you like to do ?"
                                }).then(function () {
                                    botui.message.bot({
                                        delay: 1000,
                                        loading: true,
                                        content: "I like to program cool things 👨‍💻like this bot 🤖 and..."
                                    }).then(function() {
                                        botui.message.bot({
                                            delay: 1000,
                                            loading: true,
                                            content: "love to invest in financial markets 🏸 and do swimming 🏊‍"
                                        }).then(function() {
                                            botui.message.human({
                                                delay: 1000,
                                                loading: true,
                                                content: "Great! You seem to be a cool guy 👌 but how can I contact you ?"
                                            }).then(function() {
                                                botui.message.bot({
                                                    delay: 1000,
                                                    loading: true,
                                                    content: "Sure! You can !(phone) on [857.492.6521]"
                                                })
                                                botui.message.bot({
                                                    delay: 1500,
                                                    content: "!(envelope) me at [chaudhary.da@husky.neu.edu](mailto:chaudhary.da@husky.neu.edu)^"
                                                })
                                                botui.message.bot({
                                                    delay: 2000,
                                                    content: "or you can connect with me on !(linkedin-square) 👉 [here](https://linkedin.com/in/darpit-chaudhary)^"
                                                }).then(function() {
                                                    botui.message.human({
                                                        delay: 1000,
                                                        loading: true,
                                                        content: "Perfect! 👍"
                                                    }).then(function() {
                                                        botui.message.bot({
                                                            delay: 1000,
                                                            loading: true,
                                                            content: "Looking forward to hearing from you soon 🙂"
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});