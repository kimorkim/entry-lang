<template>
    <div>
        <textarea v-model="message_ko" placeholder="add multiple lines" cols="50" rows="20"></textarea>
        <textarea v-model="message_en" placeholder="add multiple lines" cols="50" rows="20"></textarea>
        <br/>
        <button @click="translate">
            변환
        </button>
        <br/>
        <textarea v-model="result" placeholder="add multiple lines" cols="50" rows="20"></textarea>
    </div>
</template>

<script>
export default {
    name: 'main',
    data () {
        return {
            message_ko: '',
            message_en: '',
            result: '',
        }
    },
    methods: {
        translate: function() {
            let tempkoMsg = this.message_ko.split('\n');
            let tempenMsg = this.message_en.split('\n');
            const resultObj = {};

            tempkoMsg.forEach((msg)=> {
                const msgSplit = msg.match(/"[^"]*"/gi);
                if(msgSplit && msgSplit.length == 2) {
                    const key = msgSplit[0].replace(/"/gi, '');
                    const ko = msgSplit[1].replace(/"/gi, '');
                    const template = {
                        "ko": ko,
                        "en": ko
                    };
                    resultObj[key] = template;
                }
            });

            if(tempenMsg.length > 1) {
                tempenMsg.forEach((msg)=> {
                    const msgSplit = msg.match(/"[^"]*"/gi);
                    if(msgSplit && msgSplit.length == 2) {
                        const key = msgSplit[0].replace(/"/gi, '');
                        const en = msgSplit[1].replace(/"/gi, '');
                        resultObj[key].en = en;
                    }
                });
            }

            this.result = JSON.stringify(resultObj);
        },
    },
}
</script>
