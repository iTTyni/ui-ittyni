import * as React from 'react';


export function useDraggable(el:any){
    const [{dx, dy}, setOffset] = React.useState({dx:0, dy:0});
    React.useEffect(() => {
        const handleMouseDown = (event:MouseEvent) => {
          const startX = event.pageX - dx
          const startY = event.pageY - dy
          const handleMouseMove = (event:MouseEvent) => {
            const newDx = event.pageX - startX
            const newDy = event.pageY - startY
            setOffset({ dx: newDx, dy: newDy })
          }
          document.addEventListener('mousemove', handleMouseMove)
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMove)
          }, { once: true })
        }
        el.current.addEventListener('mousedown', handleMouseDown)

        return () => {
          el?.current?.removeEventListener('mousedown', handleMouseDown)
        }
      }, [dx, dy])

    React.useEffect(
        ()=>{
            el.current.parentNode.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
        }, [dx, dy]
    )
}