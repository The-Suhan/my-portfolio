// composables/usePinModal.ts
export function usePinModal() {
  const isOpen = useState<boolean>('pinModal:open', () => false)
  const pendingUrl = useState<string>('pinModal:url', () => '')

  function open(url: string) {
    pendingUrl.value = url
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
    pendingUrl.value = ''
  }

  return { isOpen, pendingUrl, open, close }
}
