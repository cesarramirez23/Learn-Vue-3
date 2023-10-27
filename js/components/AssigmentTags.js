
export default {
    template: `
    <div class="flex gap-2">
            <button 
            @click="$emit('update:modelValue', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500': tag== modelValue
            }"
            >{{tag}}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        modelValue: String,
    },
    /*data() {
        return {
            currentTag: 'all'
        }
    },*/
    computed: {
        tags() {
            //return this.assignments.map(x => x.tag);
            return ['all', ...new Set(this.initialTags)];
        }
    }
}