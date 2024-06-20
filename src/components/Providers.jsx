// Context Imports



// import { NextAuthProvider } from '@/contexts/nextAuthProvider'

import { QueryProvider } from '@/contexts/nextAuthProvider'

// import { AuthProvider } from '@/contexts/nextAuthProvider'
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'
import { PermissionsProvider } from '@/contexts/permissionsContext'
import { AbilityContextProvider, AbilityProvider } from '@/contexts/abilityContext'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Styled Component Imports
import AppReactToastify from '@/libs/styles/AppReactToastify'

// Util Imports
import { getDemoName, getMode, getSettingsFromCookie, getSystemMode } from '@core/utils/serverHelpers'



const Providers = props => {
  // Props
  const { children, direction } = props

  // Vars
  const mode = getMode()
  const settingsCookie = getSettingsFromCookie()
  const demoName = getDemoName()
  const systemMode = getSystemMode()

  
  // const queryClientObject = {queryClient}

  return (
   <QueryProvider>
      <VerticalNavProvider>
        <PermissionsProvider>
          <AbilityProvider>
            <SettingsProvider settingsCookie={settingsCookie} mode={mode} demoName={demoName}>
              <ThemeProvider direction={direction} systemMode={systemMode}>
                {children}
                <AppReactToastify position={themeConfig.toastPosition} hideProgressBar />
              </ThemeProvider>
            </SettingsProvider>
            </AbilityProvider>
            </PermissionsProvider>
      </VerticalNavProvider>
      </QueryProvider>
  )
}

export default Providers
