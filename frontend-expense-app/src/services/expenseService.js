import api from '../axios'

export const addExpense = (groupId, data) => api.post(`/groups/${groupId}/expenses`, data)
export const deleteExpense = (groupId, expenseId) => api.delete(`/groups/${groupId}/expenses/${expenseId}`)
