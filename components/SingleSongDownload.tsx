// components/SingleSongDownload.tsx
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setUrl, setLoading, setError } from '../store/songSlice'

const SingleSongDownload: React.FC = () => {
  const [inputUrl, setInputUrl] = useState('')
  const dispatch = useDispatch()
  const { url, metadata, audioSource, isLoading, error } = useSelector((state: RootState) => state.song)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setUrl(inputUrl))
    dispatch(setLoading(true))
    dispatch(setError(null))
    // TODO: Implement web scraping logic here
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter SoundCloud song URL"
          className="w-full px-3 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Download'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {metadata && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{metadata.title}</h2>
          <p className="text-gray-600">{metadata.artist}</p>
          {audioSource && (
            <a
              href={audioSource}
              download
              className="mt-2 inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            >
              Download Audio
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default SingleSongDownload