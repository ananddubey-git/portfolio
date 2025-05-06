'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/src/store'
import { addItem, deleteItem, updateItem, AdminItem } from '@/src/store/slices/adminSlice'
import { v4 as uuidv4 } from 'uuid'

export default function AdminPage() {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.admin.items)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleSubmit = () => {
    if (editingId) {
      dispatch(updateItem({ id: editingId, title, description }))
      setEditingId(null)
    } else {
      dispatch(addItem({ id: uuidv4(), title, description }))
    }

    setTitle('')
    setDescription('')
  }

  const handleEdit = (item: AdminItem) => {
    setEditingId(item.id)
    setTitle(item.title)
    setDescription(item.description)
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">{editingId ? 'Edit Item' : 'Add New Item'}</h2>

      <div className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? 'Update' : 'Add'}
        </button>
      </div>

      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="border p-4 rounded shadow-sm flex justify-between items-start">
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="text-sm text-yellow-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteItem(item.id))}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
