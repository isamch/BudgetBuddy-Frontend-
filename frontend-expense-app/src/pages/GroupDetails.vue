<template>
  <div>
    <h1>{{ group?.name }}</h1>

    <form @submit.prevent="addNewExpense">
      <input v-model="newExpense.description" placeholder="Description" />
      <input v-model.number="newExpense.amount" placeholder="Amount" />
      <button>Add Expense</button>
    </form>

    <ul>
      <li v-for="expense in group.expenses" :key="expense.id">
        {{ expense.description }} - {{ expense.amount }} DH
        <button @click="removeExpense(expense.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getGroup } from '../services/groupService'
import { addExpense, deleteExpense } from '../services/expenseService'

const route = useRoute()
const group = ref(null)
const newExpense = ref({ description: '', amount: 0 })

const loadGroup = async () => {
  const res = await getGroup(route.params.id)
  group.value = res.data
}

const addNewExpense = async () => {
  await addExpense(group.value.id, newExpense.value)
  newExpense.value = { description: '', amount: 0 }
  loadGroup()
}

const removeExpense = async (id) => {
  await deleteExpense(group.value.id, id)
  loadGroup()
}

onMounted(loadGroup)
</script>
