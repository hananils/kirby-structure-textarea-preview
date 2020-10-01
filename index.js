/**
 * hana+nils · Büro für Gestaltung
 * https://hananils.de · buero@hananils.de
 */

panel.plugin('hananils/structure-textarea-preview', {
    components: {
        'k-textarea-field-preview': {
            props: {
                value: String,
                column: Object,
                field: Object
            },
            data: function () {
                return {
                    formatted: ''
                };
            },
            mounted: function () {
                this.format();
            },
            watch: {
                value(value) {
                    this.format();
                }
            },
            methods: {
                format: function () {
                    fetch(panel.api + '/formatted', {
                        method: 'POST',
                        headers: {
                            'X-CSRF': panel.csrf
                        },
                        body: JSON.stringify({
                            content: this.value
                        })
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            this.formatted = data.formatted;
                        })
                        .catch((error) => console.log(error));
                }
            },
            template:
                '<div class="k-structure-table-text" v-html="formatted"></div>'
        }
    }
});
