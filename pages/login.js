import React from 'react'
import { useState } from 'react'
import Login from '../components/Login'
import { supabase } from '../utils/supabaseClient';

const login = () => {

  return (
    <Login />
  )
}

export default login