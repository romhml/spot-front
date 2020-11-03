import { reactive } from 'vue'
import api from '@/api/player'

interface User {
  id: string;
  accessToken: string;
}

interface UserState {
  user?: User;
}

// src/modules/auth.ts
export const state = reactive<UserState>({
  user: undefined
})

export const spotifyRedirect = () => {
  var redirectUrl = new URL('https://accounts.spotify.com/authorize')

  var parameters = {
    response_type: 'code',
    client_id: process.env.VUE_APP_ID,
    redirect_uri: process.env.VUE_APP_REDIRECT_URI,
    scope: encodeURIComponent(process.env.VUE_APP_SCOPES)
  }

  for (const [param, value] of Object.entries(parameters)) {
    redirectUrl.searchParams.append(param, value)
  }

  console.log(redirectUrl.toString())
  window.location.replace(redirectUrl.toString())
}
