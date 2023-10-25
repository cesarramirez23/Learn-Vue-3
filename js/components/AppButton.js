/*
    Episode 5
    One Vue Component Per File
    Episode 6
    Component Props
    Episode 7
    Bring It All together
*/
export default {

    template: `
        <button 
        :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-gray-100 hover:bg-gray-400': type === 'primary',
                'bg-gray-100 hover:bg-purple-400': type === 'secondary',
                'bg-gray-100 hover:bg-yellow-400': type === 'muted',
                'is-loading': processing
        }"

        :disabled="processing"        
        >
            <slot/>
        </button>
        `,

        props: {
            type: {
                type: String,
                default: 'primary'
            },
            processing: {
                type: Boolean,
                default: false,
            }
        

        },

}