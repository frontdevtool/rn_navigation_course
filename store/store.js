// store/useCounterStore.js
import { create } from 'zustand'

const useCounterStore = create((set) => ({
  count: 0,
  myName: '',
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  // setName: () => set((state) => ({ myName: state.myName = 'kazem' }))
  setName: () => set({myName :'sami'})
}))

export default useCounterStore
