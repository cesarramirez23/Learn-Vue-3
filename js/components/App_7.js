import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {Assignments , Panel },
    template: `
    <div class="grid gap-6">
        <assignments></assignments>
      
    </div>
    `,
}

/*
  
        <panel theme="light">

                default content
        </panel>

        <panel >
            <template v-slot:heading>
                Title
            </template>

                default content version
        </panel>

        <panel theme="light">
            <template v-slot:heading>
                Title
            </template>

                default content version
            <template v-slot:footer>
                footer text
            </template>
        </panel>

*/