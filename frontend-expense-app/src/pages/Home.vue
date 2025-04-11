<template>
  <div>
    <h1>Groups</h1>
    <form @submit.prevent="createNewGroup">
      <input v-model="newGroup.name" placeholder="Group name" />
      <button type="submit">Add Group</button>
    </form>

    <div v-if="groups.length">
      <GroupCard v-for="group in groups" :key="group.id" :group="group" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGroups, createGroup } from '../services/groupService'
import GroupCard from '../components/GroupCard.vue'

const groups = ref([])
const newGroup = ref({ name: '' })

const fetchGroups = async () => {
  const res = await getGroups()
  groups.value = res.data
}

const createNewGroup = async () => {
  await createGroup(newGroup.value)
  newGroup.value.name = ''
  fetchGroups()
}

onMounted(fetchGroups)
</script>
