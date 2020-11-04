import { reactive, computed } from 'vue'
import { AuthApi } from '@/api/auth'

interface AuthInfo {
  accessToken: string;
  refreshToken: string
}

interface AuthState {
  authenticated: boolean
  info?: AuthInfo;
}

// Fetches AuthInfos from localstorage
export const restoreState = () => {
  const accessToken = localStorage.getItem('access_token')
  const refreshToken = localStorage.getItem('refresh_token')

  if (refreshToken == null || accessToken == null) {
    return reactive<AuthState>({
      authenticated: false,
      info: undefined
    })
  } else {
    return reactive<AuthState>({
      authenticated: true,
      info: {
        accessToken,
        refreshToken
      }
    })
  }
}

export default function useAuth () {
  const state = restoreState()

  const spotifyRedirect = () => {
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

  const authorize = (c: string) => {
    AuthApi.post(c).then((resp: any) => {
      localStorage.setItem('access_token', resp.data.access_token)
      localStorage.setItem('refresh_token', resp.data.access_token)

      state.authenticated = true
      state.info = {
        accessToken: resp.data.access_token,
        refreshToken: resp.data.access_token
      }
      console.log(state)
    })
  }

  return {
    state,
    authorize,
    spotifyRedirect
  }
}
