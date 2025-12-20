'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#0ea5e9',
        primaryTextColor: '#e2e8f0',
        primaryBorderColor: '#0ea5e9',
        lineColor: '#64748b',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0f172a',
        background: '#0f172a',
        mainBkg: '#1e293b',
        textColor: '#e2e8f0',
        fontSize: '24px',
      },
    })

    if (ref.current) {
      ref.current.removeAttribute('data-processed')
      mermaid.contentLoaded()
    }
  }, [chart])

  return (
    <div className="my-8 flex justify-center">
      <div 
        ref={ref} 
        className="mermaid bg-slate-900 p-6 rounded-lg border border-slate-700"
      >
        {chart}
      </div>
    </div>
  )
}