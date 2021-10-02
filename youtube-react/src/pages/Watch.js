import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import SideList from '../components/SideList/SideList'
import VideoDetail from '../components/VideoDetail/VideoDetail'
import { Store } from '../store'
import { useLocation } from "react-router-dom"
import { fetchRelatedData, fetchSelectedData } from '../apis'

export const Watch = () => {
  const { setGlobalState } = useContext(Store)
  const location = useLocation()
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get("v")
    if (id) {
      const [selected,result] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)])
      setGlobalState({type: "SET_SELECTED", payload: {selected: selected.data.items.shift()}})
      setGlobalState({type: "SET_RELATED", payload: {related: selected.data.items}})
    }
  }

  useEffect(() => {
    setVideos()
  },[location.search])
  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}


