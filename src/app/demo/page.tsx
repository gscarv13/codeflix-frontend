import { getAppSettings } from "../lib/asd"
import { ErrorTrigger } from "./ErrorTrigger"


async function Settings() {
  const { theme, language } = await getAppSettings()

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <h1>Language: {language}</h1>

      <ErrorTrigger />
    </div>
  )
}

export default Settings
