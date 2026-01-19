import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type IconProps = ComponentProps<'svg'>

export function IconRegionalExpertise({ className, ...props }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('stroke-current', className)}
      {...props}
    >
      <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Layered globe rings = deep experience & regional depth */}
        <circle cx="12" cy="12" r="8.5" />
        <ellipse cx="12" cy="12" rx="8.5" ry="4.5" />
        <ellipse cx="12" cy="12" rx="4.5" ry="8.5" />

        {/* Pin = GCC regional presence */}
        <path d="M12 8.2C10.7 8.2 9.7 9.2 9.7 10.5C9.7 11.8 10.7 13.2 12 15C13.3 13.2 14.3 11.8 14.3 10.5C14.3 9.2 13.3 8.2 12 8.2Z" />
        <circle cx="12" cy="10.3" r="1" />
      </g>
    </svg>
  )
}

export function IconProvenTrackRecord({ className, ...props }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('stroke-current', className)}
      {...props}
    >
      <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Timeline (history of projects) */}
        <line x1="4" y1="16" x2="16" y2="16" />

        {/* Milestones on the timeline */}
        <circle cx="6" cy="16" r="1" />
        <circle cx="10" cy="16" r="1" />
        <circle cx="14" cy="16" r="1" />

        {/* Upward trend (measurable improvement) */}
        <path d="M4 12L8 10L11 12L14 9" />

        {/* Proven badge with check (validated track record) */}
        <circle cx="19" cy="9" r="3.5" />
        <path d="M17.8 9.1L18.9 10.2L20.3 7.9" />
      </g>
    </svg>
  )
}

export function IconSustainableImpact({ className, ...props }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('stroke-current', className)}
      {...props}
    >
      <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Baseline */}
        <line x1="4" y1="19" x2="20" y2="19" />

        {/* Bars (measurable outcomes) */}
        <line x1="7" y1="19" x2="7" y2="14" />
        <line x1="11.5" y1="19" x2="11.5" y2="11" />

        {/* Impact bar turning into an arrow (sustained impact) */}
        <line x1="16" y1="19" x2="16" y2="7" />
        <line x1="16" y1="7" x2="14.5" y2="9" />
        <line x1="16" y1="7" x2="17.5" y2="9" />
      </g>
    </svg>
  )
}
