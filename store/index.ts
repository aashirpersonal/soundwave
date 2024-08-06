// store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import songReducer from './songSlice'

export const store = configureStore({
  reducer: {
    song: songReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// store/songSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SongState {
  url: string
  metadata: {
    title: string
    artist: string
  } | null
  audioSource: string | null
  isLoading: boolean
  error: string | null
}

const initialState: SongState = {
  url: '',
  metadata: null,
  audioSource: null,
  isLoading: false,
  error: null,
}

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload
    },
    setMetadata: (state, action: PayloadAction<{ title: string; artist: string }>) => {
      state.metadata = action.payload
    },
    setAudioSource: (state, action: PayloadAction<string>) => {
      state.audioSource = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setUrl, setMetadata, setAudioSource, setLoading, setError } = songSlice.actions
export default songSlice.reducer