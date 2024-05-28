import { pb } from '@/lib/pocketbase'
import React from 'react'

function Status() {
  return (
    <div>Status: {pb.authStore.isValid}</div>
  )
}

export default Status