import axios from 'axios'

export const getPagesData = () => axios.get('/api/pages')
export const addPageData = (data) => axios.post('/api/pages', data)
export const updatePageData = (id, data) => axios.put(`/api/pages/${id}`, data)
