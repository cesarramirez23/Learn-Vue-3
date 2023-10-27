import Assignment from "./Assignment.js";
import AssignmentTags from "./AssigmentTags.js";

export default {
    components: { Assignment , AssignmentTags},
    
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
            {{ title }}
            <span>{{assignments.length}}</span>
        </h2>

        <assignment-tags 
            v-model="currentTag"
            :initial-tags="assignments.map(x => x.tag)"
        />

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignment 
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
        </ul>
    </section>
    `,

    props: {
        assignments: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {

        filteredAssignments() {
            if(this.currentTag == 'all')
            {
                return this.assignments;
            }
            return this.assignments.filter(x=> x.tag== this.currentTag);
        },

       
    }
}


