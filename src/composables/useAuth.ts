import { reactive } from 'vue'
import { AuthApi } from '@/api/auth'
import { LocalStorageService } from '@/services/LocalStorageService'

interface AuthState {
  authenticated: boolean
}

// Fetches AuthInfos from localstorage
export const restoreState = () => {
  const accessToken = LocalStorageService.getAccessToken()
  if (accessToken == null) {
    return reactive<AuthState>({
      authenticated: false
    })
  } else {
    return reactive<AuthState>({
      authenticated: true
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
      scope: process.env.VUE_APP_SCOPES ? encodeURIComponent(process.env.VUE_APP_SCOPES) : undefined
    }

    for (const [param, value] of Object.entries(parameters)) {
      if (value) {
        redirectUrl.searchParams.append(param, value)
      }
    }

    window.location.replace(redirectUrl.toString())
  }

  const authorize = async (c: string) => {
    AuthApi.post(c).then((resp: any) => {
      LocalStorageService.setAuthTokens(resp.data)
      state.authenticated = true
    })
  }

  return {
    state,
    authorize,
    spotifyRedirect
  }
}
