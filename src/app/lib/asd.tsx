export const getAppSettings = (): Promise<{ theme: string; language: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: 'dark', language: 'en' })      
    }, 3000)
  })
}