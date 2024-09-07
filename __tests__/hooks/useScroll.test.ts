import { useScroll } from "@/app/hooks/useScroll";
import { renderHook, act } from "@testing-library/react";

describe('useScroll', () => {
  it('should become true if an scroll event has been performed', () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(false)

    act(() => {
      global.window.scrollY = 100
      global.window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe(true)
  })

  it('should be false if no scroll event has been performed', () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(false)
  })
})
