<template>
    <v-container class="tree-wrap">
        <v-treeview :items="treeItems">
            <template v-slot:append="{ item }">
                <v-dialog v-model="createFolderModal" max-width="300px" :retain-focus="false">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon @click="$store.dispatch('setParentItem', item)" color="primary" v-bind="attrs" v-on="on">mdi-folder-plus</v-icon>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Create item</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-text-field
                                    v-model="itemName"
                                    label="Item name"
                                    required>
                                </v-text-field>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text @click="saveTreeItem">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>
        </v-treeview>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Tree',
    data: () => ({
        createFolderModal: false,
        itemName: null,
    }),
    computed: {
        ...mapGetters([
            'treeItems',
            'selectedParentItem',
            'lastId',
        ])
    },
    methods: {
        saveTreeItem() {
            const selectedParentItemClone = {...this.selectedParentItem};

            selectedParentItemClone.children.push({
                id: this.lastId + 1,
                name: this.itemName,
                children: [],
            });

            this.$store.dispatch('setParentItem', selectedParentItemClone);
            this.$store.dispatch('setLastId', this.lastId + 1);

            this.createFolderModal = false;
            this.itemName = null;
        },
    }
}
</script>

<style lang="scss" scoped>
.tree-wrap {
    max-width: 500px;
    margin: 0 auto;
}
</style>
